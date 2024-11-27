<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  ContextMenuSeparator,
  type ContextMenuSeparatorProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ContextMenuSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ContextMenuSeparator v-bind="delegatedProps" :class="cn('yes-mx-1 yesmy-1 yesh-px yesbg-border', props.class)" />
</template>
