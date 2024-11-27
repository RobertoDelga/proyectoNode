<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive } from 'radix-vue'

const props = defineProps<PrimitiveProps & {
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Primitive
    data-sidebar="group-action"
    :as="as"
    :as-child="asChild"
    :class="cn(
      'yesabsolute yesright-3 yestop-3.5 yesflex yesaspect-square yesw-5 yesitems-center yesjustify-center yesrounded-md yesp-0 yestext-sidebar-foreground yesoutline-none yesring-sidebar-ring yestransition-transform hover:yesbg-sidebar-accent hover:yestext-sidebar-accent-foreground focus-visible:yesring-2 [&>svg]:yessize-4 [&>svg]:yesshrink-0',
      // Increases the hit area of the button on mobile.
      'after:yesabsolute after:yes-inset-2 after:md:yeshidden',
      'group-data-[collapsible=icon]:yeshidden',
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
