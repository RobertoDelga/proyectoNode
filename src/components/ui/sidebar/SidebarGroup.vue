<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="group"
    :class="cn('yesrelative yesflex yesw-full yesmin-w-0 yesflex-col yesp-2', props.class)"
  >
    <slot />
  </div>
</template>
