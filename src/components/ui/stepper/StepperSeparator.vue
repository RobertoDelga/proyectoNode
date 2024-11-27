<script lang="ts" setup>
import type { StepperSeparatorProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { StepperSeparator, useForwardProps } from 'radix-vue'

import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<StepperSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperSeparator
    v-bind="forwarded"
    :class="cn(
      'yesbg-muted',
      // Disabled
      'group-data-[disabled]:yesbg-muted group-data-[disabled]:yesopacity-50',
      // Completed
      'group-data-[state=completed]:yesbg-accent-foreground',
      props.class,
    )"
  />
</template>
