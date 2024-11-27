<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tfoot :class="cn('yesborder-t yesbg-muted/50 yesfont-medium [&>tr]:last:yesborder-b-0', props.class)">
    <slot />
  </tfoot>
</template>
