<div align="center">
  <h1>Scrambling Text</h1>

<img
    alt="scrambling text sample"
    src="https://raw.githubusercontent.com/sogoagain/scrambling-text-js/master/sample.gif"
  />

### A super lite (`4.29 kB │ gzip: 1.20kB`) JavaScript library written in vanilla js with ready to use components for React, Vue for scrambling text.

  <br />
  <br />

Check out the [demo](https://uncore.me/scrambling-text-next) 🚀

This library was forked from [sogoagain/scrambling-text-js](https://github.com/sogoagain/scrambling-text-js) and updated to use most modern JavaScript features and to be more lightweight.

  <br />

</div>

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)
  - [Vanilla](#vanilla)
  - [Scramble](#scramble)
  - [ScrambleInView](#scrambleinview)
  - [ScrambleOnHover](#scrambleonhover)
- [Caveats](#caveats)
- [Types](#types)
- [LICENSE](#license)

## Installation

```
npm i scrambling-text-next
```

or

```
yarn add scrambling-text-next
```
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
## Scramble

&nbsp;

- ### Vue

```tsx
<script lang="ts" setup>
import { Scramble } from "scrambling-text-next/vue";
</script>
<template>
  <Scramble :delay="1000">
    WILL SCRAMBLE AFTER A SEC
  </Scramble>
</template>
```

&nbsp;

- ### React

```tsx
import { Scramble } from "scrambling-text-next/react";

export default function Page() {
  return <Scramble delay={1000}> WILL SCRAMBLE AFTER A SEC</Scramble>;
}
```
## ScrambleInView

&nbsp;

- ### Vue

```tsx
<script lang="ts" setup>
import { ScrambleInView } from "scrambling-text-next/vue";
</script>
<template>
  <ScrambleInView :once="false">
    WILL SCRAMBLE ANYTIME IN VIEW
  </ScrambleInView>
</template>
```

&nbsp;

- ### React

```tsx
import { ScrambleInView } from "scrambling-text-next/react";

export default function Page() {
  return (
    <ScrambleInView once={false}> WILL SCRAMBLE ANYTIME IN VIEW</ScrambleInView>
  );
}
```
## ScrambleOnHover

&nbsp;

- ### Vue

```tsx
<script lang="ts" setup>
import { ScrambleOnHover } from "scrambling-text-next/vue";
</script>
<template>
  <ScrambleOnHover>
    WILL SCRAMBLE ANYTIME HOVERED
  </ScrambleOnHover>
</template>
```

&nbsp;

- ### React

```tsx
import { ScrambleOnHover } from "scrambling-text-next/react";

export default function Page() {
  return <ScrambleOnHover> WILL SCRAMBLE ANYTIME HOVERED</ScrambleOnHover>;
}
```
## Caveats

### Scramble a link

- #### Vue

```tsx
<script lang="ts" setup>
import { ScrambleOnHover } from "scrambling-text-next/vue";
</script>
<template>
    <ScrambleOnHover
        elm="a"
        props={{
          href: 'https://github.com/UnCor3/scrambling-text-next'
        }}
      >
        STAR THIS REPO
      </ScrambleOnHover>
</template>
```

- ### React

```tsx
import { ScrambleOnHover } from "scrambling-text-next/react";

export default function Page() {
  return (
    <ScrambleOnHover
      elm="a"
      props={{
        href: "https://github.com/UnCor3/scrambling-text-next",
      }}
    >
      STAR THIS REPO
    </ScrambleOnHover>
  );
}
```
## Types

&nbsp;

- ## Vanilla

&nbsp;

Scrambler class is the default export

```ts

export type OnIteration = (scrambledText: string) => void;

export type OnFinished = (scrambledText: string) => void;

type Options {
    /*On every text change*/
  onIteration: OnIteration;
    /*On text change finished*/
  onFinished?: OnFinished;
    /**
     * Characters to scramble
     *  @default ["@", "#", "$", "%", "£", "&", "*", "§", "+", "_"] and alphabet,
     *
     */
  characters?: string[];
    /**
        Prevent getting called multiple times, if set to false and called more than once you will break the iteration
        @default true
    */
  preventGettingCalledMultipleTimes?: boolean;
}

class Scrambler {
  scramble(text: string, _options: Options): void;
}
```

&nbsp;

- ## React

&nbsp;

- #### Scramble Types

```ts
{
    /**
     * Text to be scrambled
     */
    children: string;
    /**
     * Html element type
     * @default "span"
     */
    elm?: keyof ReactHTML;
    /**
     * Any kind of prop that can be passed to an element
     */
    props: React.HTMLProps<HTMLElement>;
    /**
     * Delay to start in ms
     */
    delay?: number;
}
```

&nbsp;

- #### ScrambleOnHover Types

```ts
{
    /**
     * Pass true to scramble once
     */
    once : boolean;
    /**
     * Text to be scrambled
     */
    children: string;
    /**
     * Html element type
     * @default "span"
     */
    elm?: keyof ReactHTML;
    /**
     * Any kind of prop that can be passed to an element
     */
    props: React.HTMLProps<HTMLElement>;
    /**
     * Delay to start in ms
     */
    delay?: number;
}
```

&nbsp;

- #### ScrambleInView Types

```ts
{
    /**
     * Pass any options that can be passed to IntersectionObserver
     */
    observerOptions?: IntersectionObserverInit;
    /**
     * Pass true to scramble once
     */
    once : boolean;
    /**
     * Text to be scrambled
     */
    children: string;
    /**
     * Html element type
     * @default "span"
     */
    elm?: keyof ReactHTML;
    /**
     * Any kind of prop that can be passed to an element
     */
    props: React.HTMLProps<HTMLElement>;
    /**
     * Delay to start in ms
     */
    delay?: number;


}
```

&nbsp;

- ## Vue

&nbsp;

- #### Scramble Types

```ts
{
    /**
     * Html element type
     * @default "span"
     */
    elm?: keyof HTMLElementTagNameMap;
    /**
     * Any kind of prop that can be passed to an element
     */
    props: Record<string, any>;
    /**
     * Delay to start in ms
     */
    delay?: number;
}
```

&nbsp;

- #### ScrambleOnHover Types

```ts
{
    /**
     * Pass true to scramble once
     */
    once : boolean;
    /**
     * Html element type
     * @default "span"
     */
    elm?: keyof HTMLElementTagNameMap;
    /**
     * Any kind of prop that can be passed to an element
     */
    props: Record<string, any>;
    /**
     * Delay to start in ms
     */
    delay?: number;
}
```

&nbsp;

- #### ScrambleInView Types

```ts
{
    /**
     * Pass any options that can be passed to IntersectionObserver
     */
    observerOptions?: IntersectionObserverInit;
    /**
     * Pass true to scramble once
     */
    once : boolean;
    /**
     * Html element type
     * @default "span"
     */
    elm?: keyof HTMLElementTagNameMap;
    /**
     * Any kind of prop that can be passed to an element
     */
    props: Record<string, any>;
    /**
     * Delay to start in ms
     */
    delay?: number;
}
```
