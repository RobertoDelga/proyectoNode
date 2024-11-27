<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ToastViewport, type ToastViewportProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ToastViewportProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastViewport v-bind="delegatedProps" :class="cn('yesfixed yestop-0 yesz-[100] yesflex yesmax-h-screen yesw-full yesflex-col-reverse yesp-4 sm:yesbottom-0 sm:yesright-0 sm:yestop-auto sm:yesflex-col md:yesmax-w-[420px]', props.class)" />
</template>
