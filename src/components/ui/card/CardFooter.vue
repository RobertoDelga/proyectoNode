<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('yesflex yesitems-center yesp-6 yespt-0', props.class)">
    <slot />
  </div>
</template>
