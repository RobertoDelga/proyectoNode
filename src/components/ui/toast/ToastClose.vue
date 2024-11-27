<script setup lang="ts">
import { cn } from '@/lib/utils'
import { X } from 'lucide-vue-next'
import { ToastClose, type ToastCloseProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ToastCloseProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastClose v-bind="delegatedProps" :class="cn('yesabsolute yesright-2 yestop-2 yesrounded-md yesp-1 yestext-foreground/50 yesopacity-0 yestransition-opacity hover:yestext-foreground focus:yesopacity-100 focus:yesoutline-none focus:yesring-2 group-hover:yesopacity-100 group-[.destructive]:yestext-red-300 group-[.destructive]:hover:yestext-red-50 group-[.destructive]:focus:yesring-red-400 group-[.destructive]:focus:yesring-offset-red-600', props.class)">
    <X class="yesh-4 yesw-4" />
  </ToastClose>
</template>
