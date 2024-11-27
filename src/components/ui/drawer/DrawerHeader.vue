<script lang="ts" setup>
import type { HtmlHTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('yesgrid yesgap-1.5 yesp-4 yestext-center sm:yestext-left', props.class)">
    <slot />
  </div>
</template>
