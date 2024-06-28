<script lang="ts" setup>
import { ref } from "vue";
import Scrambler from "@/Scrambler";
import "prismjs/themes/prism.css";
import "@/styles.css";

const textRef = ref<HTMLElement>();

const TEXTS = [
  "- Friedrich Nietzsche -",
  "The doer alone learneth.",
  "There are no facts, only interpretations.",
];
const scrambler = new Scrambler();

const handleScramble = (text: string) => {
  textRef.value!.textContent! = text;
};
let i = 0;

function printText() {
  const targetText = TEXTS[i % TEXTS.length];
  if (i++ % 3 == 2) {
    scrambler.scramble(targetText, {
      onIteration: handleScramble,
      characters: Scrambler.CHARACTERS.ALPHABET,
    });
  } else {
    scrambler.scramble(targetText, {
      onIteration: handleScramble,
    });
  }

  setTimeout(printText, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  printText();
});
</script>

<template>
  <div class="example">
    <div style="display: flex; align-items: center; justify-content: center">
      <h2 ref="textRef"></h2>
    </div>
  </div>
</template>
