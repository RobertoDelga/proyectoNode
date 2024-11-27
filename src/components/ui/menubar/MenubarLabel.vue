<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { MenubarLabel, type MenubarLabelProps } from 'radix-vue'

const props = defineProps<MenubarLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()
</script>

<template>
  <MenubarLabel :class="cn('yespx-2 yespy-1.5 yestext-sm yesfont-semibold', inset && 'yespl-8', props.class)">
    <slot />
  </MenubarLabel>
</template>
