<script setup lang="ts">
import { cn } from '@/lib/utils'
import { X } from 'lucide-vue-next'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { type SheetVariants, sheetVariants } from '.'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: SheetVariants['side']
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="yesfixed yesinset-0 yesz-50 yesbg-black/80 yes data-[state=open]:yesanimate-in data-[state=closed]:yesanimate-out data-[state=closed]:yesfade-out-0 data-[state=open]:yesfade-in-0"
    />
    <DialogContent
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <DialogClose
        class="yesabsolute yesright-4 yestop-4 yesrounded-sm yesopacity-70 yesring-offset-background yestransition-opacity hover:yesopacity-100 focus:yesoutline-none focus:yesring-2 focus:yesring-ring focus:yesring-offset-2 disabled:yespointer-events-none data-[state=open]:yesbg-secondary"
      >
        <X class="yesw-4 yesh-4 yestext-muted-foreground" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
