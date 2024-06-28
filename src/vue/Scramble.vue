<template>
  <component :is="elm" ref="textRef" v-bind="props.props"><slot /></component>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Scrambler from "@/Scrambler";

interface Props {
  elm?: keyof HTMLElementTagNameMap;
  props?: Record<string, any>;
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  elm: "span",
});

const textRef = ref<HTMLElement>();
onMounted(() => {
  if (props.delay) {
    setTimeout(() => {
      new Scrambler().scramble(textRef.value!.textContent!, {
        onIteration: setText,
      });
    }, props.delay);
  } else {
    new Scrambler().scramble(textRef.value!.textContent!, {
      onIteration: setText,
    });
  }
});

function setText(scrambledText: string) {
  textRef.value!.textContent! = scrambledText;
}
</script>
