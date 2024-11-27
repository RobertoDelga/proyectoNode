<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive } from 'radix-vue'

const props = withDefaults(defineProps<PrimitiveProps & {
  size?: 'sm' | 'md'
  isActive?: boolean
  class?: HTMLAttributes['class']
}>(), {
  as: 'a',
  size: 'md',
})
</script>

<template>
  <Primitive
    data-sidebar="menu-sub-button"
    :as="as"
    :as-child="asChild"
    :data-size="size"
    :data-active="isActive"
    :class="cn(
      'yesflex yesh-7 yesmin-w-0 yes-translate-x-px yesitems-center yesgap-2 yesoverflow-hidden yesrounded-md yespx-2 yestext-sidebar-foreground yesoutline-none yesring-sidebar-ring hover:yesbg-sidebar-accent hover:yestext-sidebar-accent-foreground focus-visible:yesring-2 active:yesbg-sidebar-accent active:yestext-sidebar-accent-foreground disabled:yespointer-events-none disabled:yesopacity-50 aria-disabled:yespointer-events-none aria-disabled:yesopacity-50 [&>span:last-child]:yestruncate [&>svg]:yessize-4 [&>svg]:yesshrink-0 [&>svg]:yestext-sidebar-accent-foreground',
      'data-[active=true]:yesbg-sidebar-accent data-[active=true]:yestext-sidebar-accent-foreground',
      size === 'sm' && 'yestext-xs',
      size === 'md' && 'yestext-sm',
      'group-data-[collapsible=icon]:yeshidden',
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
