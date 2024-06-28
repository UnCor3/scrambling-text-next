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
