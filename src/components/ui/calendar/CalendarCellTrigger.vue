<script lang="ts" setup>
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CalendarCellTrigger, type CalendarCellTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCellTrigger
    :class="cn(
      buttonVariants({ variant: 'ghost' }),
      'yesh-9 yesw-9 yesp-0 yesfont-normal',
      '[&[data-today]:not([data-selected])]:yesbg-accent [&[data-today]:not([data-selected])]:yestext-accent-foreground',
      // Selected
      'data-[selected]:yesbg-primary data-[selected]:yestext-primary-foreground data-[selected]:yesopacity-100 data-[selected]:hover:yesbg-primary data-[selected]:hover:yestext-primary-foreground data-[selected]:focus:yesbg-primary data-[selected]:focus:yestext-primary-foreground',
      // Disabled
      'data-[disabled]:yestext-muted-foreground data-[disabled]:yesopacity-50',
      // Unavailable
      'data-[unavailable]:yestext-destructive-foreground data-[unavailable]:yesline-through',
      // Outside months
      'data-[outside-view]:yestext-muted-foreground data-[outside-view]:yesopacity-50 [&[data-outside-view][data-selected]]:yesbg-accent/50 [&[data-outside-view][data-selected]]:yestext-muted-foreground [&[data-outside-view][data-selected]]:yesopacity-30',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
