<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ToastAction, type ToastActionProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ToastActionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastAction v-bind="delegatedProps" :class="cn('yesinline-flex yesh-8 yesshrink-0 yesitems-center yesjustify-center yesrounded-md yesborder yesbg-transparent yespx-3 yestext-sm yesfont-medium yesring-offset-background yestransition-colors hover:yesbg-secondary focus:yesoutline-none focus:yesring-2 focus:yesring-ring focus:yesring-offset-2 disabled:yespointer-events-none disabled:yesopacity-50 group-[.destructive]:yesborder-muted/40 group-[.destructive]:hover:yesborder-destructive/30 group-[.destructive]:hover:yesbg-destructive group-[.destructive]:hover:yestext-destructive-foreground group-[.destructive]:focus:yesring-destructive', props.class)">
    <slot />
  </ToastAction>
</template>
