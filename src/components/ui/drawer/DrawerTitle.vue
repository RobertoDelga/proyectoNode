<script lang="ts" setup>
import type { DrawerTitleProps } from 'vaul-vue'
import { cn } from '@/lib/utils'
import { DrawerTitle } from 'vaul-vue'
import { computed, type HtmlHTMLAttributes } from 'vue'

const props = defineProps<DrawerTitleProps & { class?: HtmlHTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DrawerTitle v-bind="delegatedProps" :class="cn('yestext-lg yesfont-semibold yesleading-none yestracking-tight', props.class)">
    <slot />
  </DrawerTitle>
</template>
