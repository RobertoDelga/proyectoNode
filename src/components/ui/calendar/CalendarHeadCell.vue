<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { CalendarHeadCell, type CalendarHeadCellProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CalendarHeadCellProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeadCell :class="cn('yesw-9 yesrounded-md yestext-[0.8rem] yesfont-normal yestext-muted-foreground', props.class)" v-bind="forwardedProps">
    <slot />
  </CalendarHeadCell>
</template>
