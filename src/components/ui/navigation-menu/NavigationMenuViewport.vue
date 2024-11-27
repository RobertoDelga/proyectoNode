<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  NavigationMenuViewport,
  type NavigationMenuViewportProps,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<NavigationMenuViewportProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="yesabsolute yesleft-0 yestop-full yesflex yesjustify-center">
    <NavigationMenuViewport
      v-bind="forwardedProps"
      :class="
        cn(
          'yesorigin-top-center yesrelative yesmt-1.5 yesh-[--radix-navigation-menu-viewport-height] yesw-full yesoverflow-hidden yesrounded-md yesborder yesbg-popover yestext-popover-foreground yesshadow-lg data-[state=open]:yesanimate-in data-[state=closed]:yesanimate-out data-[state=closed]:yeszoom-out-95 data-[state=open]:yeszoom-in-90 md:yesw-[--radix-navigation-menu-viewport-width]',
          props.class,
        )
      "
    />
  </div>
</template>
