<script setup lang="ts">
import { cn } from '@/lib/utils'
import { NavigationMenuIndicator, type NavigationMenuIndicatorProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<NavigationMenuIndicatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuIndicator
    v-bind="forwardedProps"
    :class="cn('yestop-full yesz-[1] yesflex yesh-1.5 yesitems-end yesjustify-center yesoverflow-hidden data-[state=visible]:yesanimate-in data-[state=hidden]:yesanimate-out data-[state=hidden]:yesfade-out data-[state=visible]:yesfade-in', props.class)"
  >
    <div class="yesrelative yestop-[60%] yesh-2 yesw-2 yesrotate-45 yesrounded-tl-sm yesbg-border yesshadow-md" />
  </NavigationMenuIndicator>
</template>
