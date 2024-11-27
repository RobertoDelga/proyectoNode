<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('yesflex yesflex-col yesgap-y-1.5 yesp-6', props.class)">
    <slot />
  </div>
</template>
