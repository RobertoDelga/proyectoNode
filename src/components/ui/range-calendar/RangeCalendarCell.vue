<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { RangeCalendarCell, type RangeCalendarCellProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<RangeCalendarCellProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCell
    :class="cn('yesrelative yesh-9 yesw-9 yesp-0 yestext-center yestext-sm focus-within:yesrelative focus-within:yesz-20 [&:has([data-selected])]:yesbg-accent first:[&:has([data-selected])]:yesrounded-l-md last:[&:has([data-selected])]:yesrounded-r-md [&:has([data-selected][data-outside-view])]:yesbg-accent/50 [&:has([data-selected][data-selection-end])]:yesrounded-r-md [&:has([data-selected][data-selection-start])]:yesrounded-l-md', props.class)"
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarCell>
</template>
