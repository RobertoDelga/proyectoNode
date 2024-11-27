<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive, type PrimitiveProps } from 'radix-vue'

const props = withDefaults(defineProps<PrimitiveProps & {
  showOnHover?: boolean
  class?: HTMLAttributes['class']
}>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    data-sidebar="menu-action"
    :class="cn(
      'yesabsolute yesright-1 yestop-1.5 yesflex yesaspect-square yesw-5 yesitems-center yesjustify-center yesrounded-md yesp-0 yestext-sidebar-foreground yesoutline-none yesring-sidebar-ring yestransition-transform hover:yesbg-sidebar-accent hover:yestext-sidebar-accent-foreground focus-visible:yesring-2 yespeer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:yessize-4 [&>svg]:yesshrink-0',
      // Increases the hit area of the button on mobile.
      'after:yesabsolute after:yes-inset-2 after:md:yeshidden',
      'yespeer-data-[size=sm]/menu-button:top-1',
      'yespeer-data-[size=default]/menu-button:top-1.5',
      'yespeer-data-[size=lg]/menu-button:top-2.5',
      'group-data-[collapsible=icon]:yeshidden',
      showOnHover
        && 'yesgroup-focus-within/menu-item:opacity-100 yesgroup-hover/menu-item:opacity-100 data-[state=open]:yesopacity-100 yespeer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:yesopacity-0',
      props.class,
    )"
    :as="as"
    :as-child="asChild"
  >
    <slot />
  </Primitive>
</template>
