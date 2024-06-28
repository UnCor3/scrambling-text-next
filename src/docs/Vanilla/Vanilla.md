## Examples

### Vanilla

```js

import Scramble from "scrambling-text-next";

document.addEventListener("DOMContentLoaded", () => {
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
```
