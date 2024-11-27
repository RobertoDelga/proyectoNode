<script lang="ts" setup>
import type { StepperIndicatorProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { StepperIndicator, useForwardProps } from 'radix-vue'

import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<StepperIndicatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperIndicator
    v-bind="forwarded"
    :class="cn(
      'yesinline-flex yesitems-center yesjustify-center yesrounded-full yestext-muted-foreground/50 yesw-10 yesh-10',
      // Disabled
      'group-data-[disabled]:yestext-muted-foreground group-data-[disabled]:yesopacity-50',
      // Active
      'group-data-[state=active]:yesbg-primary group-data-[state=active]:yestext-primary-foreground',
      // Completed
      'group-data-[state=completed]:yesbg-accent group-data-[state=completed]:yestext-accent-foreground',
      props.class,
    )"
  >
    <slot />
  </StepperIndicator>
</template>
