<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  MenubarRoot,
  type MenubarRootEmits,
  type MenubarRootProps,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<MenubarRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarRoot
    v-bind="forwarded"
    :class="
      cn(
        'yesflex yesh-10 yesitems-center yesgap-x-1 yesrounded-md yesborder yesbg-background yesp-1',
        props.class,
      )
    "
  >
    <slot />
  </MenubarRoot>
</template>
