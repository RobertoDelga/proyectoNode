<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <caption :class="cn('yesmt-4 yestext-sm yestext-muted-foreground', props.class)">
    <slot />
  </caption>
</template>
