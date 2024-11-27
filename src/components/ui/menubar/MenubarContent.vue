<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  MenubarContent,
  type MenubarContentProps,
  MenubarPortal,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<MenubarContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    align: 'start',
    alignOffset: -4,
    sideOffset: 8,
  },
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarPortal>
    <MenubarContent
      v-bind="forwardedProps"
      :class="
        cn(
          'yesz-50 yesmin-w-48 yesoverflow-hidden yesrounded-md yesborder yesbg-popover yesp-1 yestext-popover-foreground yesshadow-md data-[state=open]:yesanimate-in data-[state=closed]:yesfade-out-0 data-[state=open]:yesfade-in-0 data-[state=closed]:yeszoom-out-95 data-[state=open]:yeszoom-in-95 data-[side=bottom]:yesslide-in-from-top-2 data-[side=left]:yesslide-in-from-right-2 data-[side=right]:yesslide-in-from-left-2 data-[side=top]:yesslide-in-from-bottom-2',
          props.class,
        )
      "
    >
      <slot />
    </MenubarContent>
  </MenubarPortal>
</template>
