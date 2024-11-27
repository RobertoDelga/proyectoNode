<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <main
    :class="cn(
      'yesrelative yesflex yesmin-h-svh yesflex-1 yesflex-col yesbg-background',
      'peer-data-[variant=inset]:yesmin-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:yesm-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:yesml-2 md:peer-data-[variant=inset]:yesml-0 md:peer-data-[variant=inset]:yesrounded-xl md:peer-data-[variant=inset]:yesshadow',
      props.class,
    )"
  >
    <slot />
  </main>
</template>
