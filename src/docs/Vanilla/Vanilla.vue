<script setup lang="ts">
import md from "./Vanilla.md?raw";
import RenderMarkdown from "../RenderMarkdown.vue";
import Scramble from "@/Scrambler";
import { onMounted } from "vue";

onMounted(() => {
  const elm = document.querySelector(".vanilla-text") as HTMLElement;

  const update = (str: string) => {
    elm.textContent = str;
  };

  const Scrambler = new Scramble();

  elm.addEventListener("click", () => {
    Scrambler.scramble(elm.textContent!, {
      onIteration: update,
    });
  });
});
</script>
<template>
  <div class="example">
    <div class="text">
      <h2 class="vanilla-text" style="cursor: pointer">Click to Scramble</h2>
    </div>
    <RenderMarkdown :md="md" />
  </div>
</template>
