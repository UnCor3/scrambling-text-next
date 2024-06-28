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
          target: '_blank'
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
        target: "_blank",
      }}
    >
      STAR THIS REPO
    </ScrambleOnHover>
  );
}
```
