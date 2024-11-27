<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ContextMenuLabel, type ContextMenuLabelProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ContextMenuLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ContextMenuLabel
    v-bind="delegatedProps"
    :class="
      cn('yespx-2 yespy-1.5 yestext-sm yesfont-semibold yestext-foreground',
         inset && 'yespl-8', props.class,
      )"
  >
    <slot />
  </ContextMenuLabel>
</template>
