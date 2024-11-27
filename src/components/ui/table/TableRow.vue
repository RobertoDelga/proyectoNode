<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tr :class="cn('yesborder-b yestransition-colors hover:yesbg-muted/50 data-[state=selected]:yesbg-muted', props.class)">
    <slot />
  </tr>
</template>
