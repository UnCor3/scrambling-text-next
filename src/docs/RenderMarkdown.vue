<script setup lang="ts">
import markdownit from "markdown-it";
import prism from "prismjs";
//@ts-ignore
const hljsmd = markdownit({
  //@ts-ignore
  highlight: function (str) {
    return (
      '<pre><code class="hljs">' +
      prism.highlight(str!, prism.languages.javascript, "javascript") +
      "</code></pre>"
    );
  },
});

function getMdRender(md: string) {
  return hljsmd.render(md);
}

defineProps<{
  md: string;
}>();
</script>
<template>
  <div style="width: 100%">
    <div style="width: 70%; margin: auto">
      <div v-html="getMdRender(md)" />
    </div>
  </div>
</template>
