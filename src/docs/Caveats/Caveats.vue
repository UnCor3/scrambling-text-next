<script setup lang="ts">
import md from "./Caveats.md?raw";
import RenderMarkdown from "../RenderMarkdown.vue";
import { ScrambleOnHover } from "@/vue/vue.ts";
</script>

<template>
  <div class="example">
    <div class="text">
      <ScrambleOnHover
        elm="a"
        :props="{
          href: 'https://github.com/UnCor3/scrambling-text-next',
          target: '_blank',
        }"
      >
        STAR THIS REPO
      </ScrambleOnHover>
    </div>
    <RenderMarkdown :md="md" />
  </div>
</template>
