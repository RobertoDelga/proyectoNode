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
    data-sidebar="group-label"
    :as="as"
    :as-child="asChild"
    :class="cn(
      'yesduration-200 yesflex yesh-8 yesshrink-0 yesitems-center yesrounded-md yespx-2 yestext-xs yesfont-medium yestext-sidebar-foreground/70 yesoutline-none yesring-sidebar-ring yestransition-[margin,opa] yesease-linear focus-visible:yesring-2 [&>svg]:yessize-4 [&>svg]:yesshrink-0',
      'group-data-[collapsible=icon]:yes-mt-8 group-data-[collapsible=icon]:yesopacity-0',
      props.class)"
  >
    <slot />
  </Primitive>
</template>
