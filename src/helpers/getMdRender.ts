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

export function getMdRender(md: string) {
  return hljsmd.render(md);
}
