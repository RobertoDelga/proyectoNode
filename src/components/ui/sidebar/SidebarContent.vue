<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="content"
    :class="cn('yesflex yesmin-h-0 yesflex-1 yesflex-col yesgap-2 yesoverflow-auto group-data-[collapsible=icon]:yesoverflow-hidden', props.class)"
  >
    <slot />
  </div>
</template>
