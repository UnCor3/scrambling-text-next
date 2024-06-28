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
