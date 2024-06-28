<script setup lang="ts">
import md from "./ScrambleInView.md?raw";
import RenderMarkdown from "../RenderMarkdown.vue";
import { ScrambleInView } from "@/vue/vue.ts";
</script>
<template>
  <div class="example">
    <div class="text">
      <ScrambleInView :once="false"
        >WILL SCRAMBLE ANYTIME IN VIEW</ScrambleInView
      >
    </div>
    <RenderMarkdown :md="md" />
  </div>
</template>
