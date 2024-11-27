<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  NavigationMenuContent,
  type NavigationMenuContentEmits,
  type NavigationMenuContentProps,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<NavigationMenuContentProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<NavigationMenuContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuContent
    v-bind="forwarded"
    :class="cn(
      'yesleft-0 yestop-0 yesw-full data-[motion^=from-]:yesanimate-in data-[motion^=to-]:yesanimate-out data-[motion^=from-]:yesfade-in data-[motion^=to-]:yesfade-out data-[motion=from-end]:yesslide-in-from-right-52 data-[motion=from-start]:yesslide-in-from-left-52 data-[motion=to-end]:yesslide-out-to-right-52 data-[motion=to-start]:yesslide-out-to-left-52 md:yesabsolute md:yesw-auto',
      props.class,
    )"
  >
    <slot />
  </NavigationMenuContent>
</template>
