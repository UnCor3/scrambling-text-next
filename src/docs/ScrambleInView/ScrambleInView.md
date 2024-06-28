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
