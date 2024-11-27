<script lang="ts" setup>
import type { DialogContentEmits, DialogContentProps } from 'radix-vue'
import type { HtmlHTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useForwardPropsEmits } from 'radix-vue'
import { DrawerContent, DrawerPortal } from 'vaul-vue'
import DrawerOverlay from './DrawerOverlay.vue'

const props = defineProps<DialogContentProps & { class?: HtmlHTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent
      v-bind="forwarded" :class="cn(
        'yesfixed yesinset-x-0 yesbottom-0 yesz-50 yesmt-24 yesflex yesh-auto yesflex-col yesrounded-t-[10px] yesborder yesbg-background',
        props.class,
      )"
    >
      <div class="yesmx-auto yesmt-4 yesh-2 yesw-[100px] yesrounded-full yesbg-muted" />
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>
