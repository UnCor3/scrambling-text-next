<template>
  <component :is="elm" v-bind="props.props" ref="textRef"><slot /></component>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import Scrambler from "@/Scrambler";

const props = withDefaults(
  defineProps<{
    observerOptions?: IntersectionObserverInit;
    once?: boolean;
    elm?: keyof HTMLElementTagNameMap;
    delay?: number;
    props?: Record<string, any>;
  }>(),
  {
    elm: "span",
    once: true,
  }
);

const textRef = ref<HTMLElement>();
let called = false;

onMounted(() => {
  const scrambler = new Scrambler();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (props.once && called) {
          return observer.disconnect();
        }
        if (props.delay) {
          setTimeout(() => {
            scrambler.scramble(textRef.value!.textContent!, {
              onIteration: setText,
            });
          }, props.delay);
        } else {
          scrambler.scramble(textRef.value!.textContent!, {
            onIteration: setText,
          });
        }
        called = true;
      }
    });
  }, props.observerOptions);
  observer.observe(textRef.value!);

  onUnmounted(() => observer.disconnect());
});

function setText(scrambledText: string) {
  textRef.value!.textContent! = scrambledText;
}
</script>
