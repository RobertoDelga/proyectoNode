<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('yestext-sm [&_p]:yesleading-relaxed', props.class)">
    <slot />
  </div>
</template>
