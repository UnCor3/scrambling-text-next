<script setup lang="ts">
import md from "./ScrambleOnHover.md?raw";
import RenderMarkdown from "../RenderMarkdown.vue";
import { ScrambleOnHover } from "@/vue/vue.ts";
</script>
<template>
  <div class="example">
    <div class="text">
      <ScrambleOnHover>WILL SCRAMBLE ANYTIME HOVERED</ScrambleOnHover>
    </div>
    <RenderMarkdown :md="md" />
  </div>
</template>
