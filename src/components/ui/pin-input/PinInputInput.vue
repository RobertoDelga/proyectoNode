<script setup lang="ts">
import { cn } from '@/lib/utils'
import { PinInputInput, type PinInputInputProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput v-bind="forwardedProps" :class="cn('yesrelative yestext-center focus:yesoutline-none focus:yesring-2 focus:yesring-ring focus:yesrelative focus:yesz-10 yesflex yesh-10 yesw-10 yesitems-center yesjustify-center yesborder-y yesborder-r yesborder-input yestext-sm yestransition-all first:yesrounded-l-md first:yesborder-l last:yesrounded-r-md', props.class)" />
</template>
