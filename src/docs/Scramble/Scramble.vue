<script setup lang="ts">
import md from "./Scramble.md?raw";
import RenderMarkdown from "../RenderMarkdown.vue";
import { Scramble } from "@/vue/vue.ts";
</script>

<template>
  <div class="example">
    <div class="text">
      <Scramble :delay="1000">WILL SCRAMBLE AFTER A SEC</Scramble>
    </div>
    <RenderMarkdown :md="md" />
  </div>
</template>
