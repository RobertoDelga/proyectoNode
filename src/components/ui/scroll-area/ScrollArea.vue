<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  type ScrollAreaRootProps,
  ScrollAreaViewport,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import ScrollBar from './ScrollBar.vue'

const props = defineProps<ScrollAreaRootProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ScrollAreaRoot v-bind="delegatedProps" :class="cn('yesrelative yesoverflow-hidden', props.class)">
    <ScrollAreaViewport class="yesh-full yesw-full yesrounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
