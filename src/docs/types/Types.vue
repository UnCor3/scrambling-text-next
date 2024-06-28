<template>
  <div class="example">
    <RenderMarkdown :md="md" />
  </div>
</template>

<script setup lang="ts">
import md from "./Types.md?raw";
import RenderMarkdown from "../RenderMarkdown.vue";
</script>
