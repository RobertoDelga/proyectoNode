<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { CalendarHeader, type CalendarHeaderProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CalendarHeaderProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeader :class="cn('yesrelative yesflex yesw-full yesitems-center yesjustify-between yespt-1', props.class)" v-bind="forwardedProps">
    <slot />
  </CalendarHeader>
</template>
