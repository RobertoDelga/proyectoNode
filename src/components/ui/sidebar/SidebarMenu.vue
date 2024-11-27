<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ul
    data-sidebar="menu"
    :class="cn('yesflex yesw-full yesmin-w-0 yesflex-col yesgap-1', props.class)"
  >
    <slot />
  </ul>
</template>
