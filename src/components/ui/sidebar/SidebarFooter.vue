<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="footer"
    :class="cn('yesflex yesflex-col yesgap-2 yesp-2', props.class)"
  >
    <slot />
  </div>
</template>
