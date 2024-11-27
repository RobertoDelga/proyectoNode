<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { RangeCalendarHeader, type RangeCalendarHeaderProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<RangeCalendarHeaderProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarHeader :class="cn('yesrelative yesflex yesw-full yesitems-center yesjustify-between yespt-1', props.class)" v-bind="forwardedProps">
    <slot />
  </RangeCalendarHeader>
</template>
