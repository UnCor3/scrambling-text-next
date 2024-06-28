<script setup lang="ts">
import ScrambleOnHover from "@/docs/ScrambleOnHover/ScrambleOnHover.vue";
import ScrambleInView from "@/docs/ScrambleInView/ScrambleInView.vue";
import Scramble from "@/docs/Scramble/Scramble.vue";
import Vanilla from "@/docs/Vanilla/Vanilla.vue";
import Caveats from "@/docs/Caveats/Caveats.vue";
import Teaser from "@/docs/Teaser/Teaser.vue";
import "prismjs/themes/prism-tomorrow.css";
import Types from "@/docs/types/Types.vue";
import "@/styles.css";
</script>

<template>
  <div>
    <Teaser />
    <Vanilla />
    <Scramble />
    <ScrambleOnHover />
    <ScrambleInView />
    <Caveats />
    <Types />
  </div>
</template>
