<template>
  <component
    :is="elm"
    ref="textRef"
    @mouseover="onMouseOver"
    v-bind="props.props"
    ><slot
  /></component>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Scrambler from "@/Scrambler";

const props = withDefaults(
  defineProps<{
    elm?: keyof HTMLElementTagNameMap;
    once?: boolean;
    delay?: number;
    props?: Record<string, any>;
  }>(),
  {
    //@ts-ignore
    props: {},
    elm: "span",
    once: false,
  }
);

const scrambler = new Scrambler();
const textRef = ref<HTMLElement>();
let isGoingOn = false;
let called = false;

const onMouseOver = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();

  if (called && props.once) return;
  if (isGoingOn) return;

  called = true;
  isGoingOn = true;

  if (props.delay) {
    setTimeout(() => {
      scrambler.scramble(textRef.value!.textContent!, {
        onIteration: (newText) => {
          textRef.value!.textContent! = newText;
        },
        onFinished: () => {
          isGoingOn = false;
        },
      });
    }, props.delay);
  } else {
    scrambler.scramble(textRef.value!.textContent!, {
      onIteration: (newText) => {
        textRef.value!.textContent = newText;
      },
      onFinished: () => {
        isGoingOn = false;
      },
    });
  }
};
</script>
