<script lang="ts" setup>
import type { HtmlHTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('yesmt-auto yesflex yesflex-col yesgap-2 yesp-4', props.class)">
    <slot />
  </div>
</template>
