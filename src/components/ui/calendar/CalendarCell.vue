<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { CalendarCell, type CalendarCellProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CalendarCellProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCell
    :class="cn('yesrelative yesh-9 yesw-9 yesp-0 yestext-center yestext-sm focus-within:yesrelative focus-within:yesz-20 [&:has([data-selected])]:yesrounded-md [&:has([data-selected])]:yesbg-accent [&:has([data-selected][data-outside-view])]:yesbg-accent/50', props.class)"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCell>
</template>
