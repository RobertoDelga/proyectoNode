<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h5 :class="cn('yesmb-1 yesfont-medium yesleading-none yestracking-tight', props.class)">
    <slot />
  </h5>
</template>
