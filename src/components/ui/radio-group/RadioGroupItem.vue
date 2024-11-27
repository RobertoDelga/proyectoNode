<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Circle } from 'lucide-vue-next'
import {
  RadioGroupIndicator,
  RadioGroupItem,
  type RadioGroupItemProps,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="
      cn(
        'yesaspect-square yesh-4 yesw-4 yesrounded-full yesborder yesborder-primary yestext-primary yesring-offset-background focus:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-ring focus-visible:yesring-offset-2 disabled:yescursor-not-allowed disabled:yesopacity-50',
        props.class,
      )
    "
  >
    <RadioGroupIndicator
      class="yesflex yesitems-center yesjustify-center"
    >
      <Circle class="yesh-2.5 yesw-2.5 yesfill-current yestext-current" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
