<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'yesrounded-lg yesborder yesbg-card yestext-card-foreground yesshadow-sm',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
