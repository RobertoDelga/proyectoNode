<script setup lang="ts">
import type { NumberFieldDecrementProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Minus } from 'lucide-vue-next'
import { NumberFieldDecrement, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<NumberFieldDecrementProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldDecrement data-slot="decrement" v-bind="forwarded" :class="cn('yesabsolute yestop-1/2 yes-translate-y-1/2 yesleft-0 yesp-3 disabled:yescursor-not-allowed disabled:yesopacity-20', props.class)">
    <slot>
      <Minus class="yesh-4 yesw-4" />
    </slot>
  </NumberFieldDecrement>
</template>
