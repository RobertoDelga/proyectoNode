<script setup lang="ts">
import type { NumberFieldIncrementProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-vue-next'
import { NumberFieldIncrement, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<NumberFieldIncrementProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldIncrement data-slot="increment" v-bind="forwarded" :class="cn('yesabsolute yestop-1/2 yes-translate-y-1/2 yesright-0 disabled:yescursor-not-allowed disabled:yesopacity-20 yesp-3', props.class)">
    <slot>
      <Plus class="yesh-4 yesw-4" />
    </slot>
  </NumberFieldIncrement>
</template>
