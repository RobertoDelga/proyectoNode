<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-vue-next'
import {
  ContextMenuSubTrigger,
  type ContextMenuSubTriggerProps,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ContextMenuSubTriggerProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ContextMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'yesflex yescursor-default yesselect-none yesitems-center yesrounded-sm yespx-2 yespy-1.5 yestext-sm yesoutline-none focus:yesbg-accent focus:yestext-accent-foreground data-[state=open]:yesbg-accent data-[state=open]:yestext-accent-foreground',
      inset && 'yespl-8',
      props.class,
    )"
  >
    <slot />
    <ChevronRight class="yesml-auto yesh-4 yesw-4" />
  </ContextMenuSubTrigger>
</template>
