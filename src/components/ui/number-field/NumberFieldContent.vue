<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('yesrelative [&>[data-slot=input]]:has-[[data-slot=increment]]:yespr-5 [&>[data-slot=input]]:has-[[data-slot=decrement]]:yespl-5', props.class)">
    <slot />
  </div>
</template>
