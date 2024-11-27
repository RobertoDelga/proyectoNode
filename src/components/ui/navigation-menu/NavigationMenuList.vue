<script setup lang="ts">
import { cn } from '@/lib/utils'
import { NavigationMenuList, type NavigationMenuListProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<NavigationMenuListProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuList
    v-bind="forwardedProps"
    :class="
      cn(
        'yesgroup yesflex yesflex-1 yeslist-none yesitems-center yesjustify-center yesgap-x-1',
        props.class,
      )
    "
  >
    <slot />
  </NavigationMenuList>
</template>
