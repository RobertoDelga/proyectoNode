<script lang="ts" setup>
import type { DialogOverlayProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { DrawerOverlay } from 'vaul-vue'
import { computed, type HtmlHTMLAttributes } from 'vue'

const props = defineProps<DialogOverlayProps & { class?: HtmlHTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DrawerOverlay v-bind="delegatedProps" :class="cn('yesfixed yesinset-0 yesz-50 yesbg-black/80', props.class)" />
</template>
