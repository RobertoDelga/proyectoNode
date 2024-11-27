<script lang="ts" setup>
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { RangeCalendarCellTrigger, type RangeCalendarCellTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<RangeCalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCellTrigger
    :class="cn(
      buttonVariants({ variant: 'ghost' }),
      'yesh-9 yesw-9 yesp-0 yesfont-normal data-[selected]:yesopacity-100',
      '[&[data-today]:not([data-selected])]:yesbg-accent [&[data-today]:not([data-selected])]:yestext-accent-foreground',
      // Selection Start
      'data-[selection-start]:yesbg-primary data-[selection-start]:yestext-primary-foreground data-[selection-start]:hover:yesbg-primary data-[selection-start]:hover:yestext-primary-foreground data-[selection-start]:focus:yesbg-primary data-[selection-start]:focus:yestext-primary-foreground',
      // Selection End
      'data-[selection-end]:yesbg-primary data-[selection-end]:yestext-primary-foreground data-[selection-end]:hover:yesbg-primary data-[selection-end]:hover:yestext-primary-foreground data-[selection-end]:focus:yesbg-primary data-[selection-end]:focus:yestext-primary-foreground',
      // Outside months
      'data-[outside-view]:yestext-muted-foreground data-[outside-view]:yesopacity-50 [&[data-outside-view][data-selected]]:yesbg-accent/50 [&[data-outside-view][data-selected]]:yestext-muted-foreground [&[data-outside-view][data-selected]]:yesopacity-30',
      // Disabled
      'data-[disabled]:yestext-muted-foreground data-[disabled]:yesopacity-50',
      // Unavailable
      'data-[unavailable]:yestext-destructive-foreground data-[unavailable]:yesline-through',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarCellTrigger>
</template>
