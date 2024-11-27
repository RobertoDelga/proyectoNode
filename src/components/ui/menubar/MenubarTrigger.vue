<script setup lang="ts">
import { cn } from '@/lib/utils'
import { MenubarTrigger, type MenubarTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'yesflex yescursor-default yesselect-none yesitems-center yesrounded-sm yespx-3 yespy-1.5 yestext-sm yesfont-medium yesoutline-none focus:yesbg-accent focus:yestext-accent-foreground data-[state=open]:yesbg-accent data-[state=open]:yestext-accent-foreground',
        props.class,
      )
    "
  >
    <slot />
  </MenubarTrigger>
</template>
