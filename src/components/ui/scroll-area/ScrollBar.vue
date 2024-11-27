<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ScrollAreaScrollbar, type ScrollAreaScrollbarProps, ScrollAreaThumb } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<ScrollAreaScrollbarProps & { class?: HTMLAttributes['class'] }>(), {
  orientation: 'vertical',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ScrollAreaScrollbar
    v-bind="delegatedProps"
    :class="
      cn('yesflex yestouch-none yesselect-none yestransition-colors',
         orientation === 'vertical'
           && 'yesh-full yesw-2.5 yesborder-l yesborder-l-transparent yesp-px',
         orientation === 'horizontal'
           && 'yesh-2.5 yesflex-col yesborder-t yesborder-t-transparent yesp-px',
         props.class)"
  >
    <ScrollAreaThumb class="yesrelative yesflex-1 yesrounded-full yesbg-border" />
  </ScrollAreaScrollbar>
</template>
