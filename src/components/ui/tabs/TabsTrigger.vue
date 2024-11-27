<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="cn(
      'yesinline-flex yesitems-center yesjustify-center yeswhitespace-nowrap yesrounded-sm yespx-3 yespy-1.5 yestext-sm yesfont-medium yesring-offset-background yestransition-all focus-visible:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-ring focus-visible:yesring-offset-2 disabled:yespointer-events-none disabled:yesopacity-50 data-[state=active]:yesbg-background data-[state=active]:yestext-foreground data-[state=active]:yesshadow-sm',
      props.class,
    )"
  >
    <span class="yestruncate">
      <slot />
    </span>
  </TabsTrigger>
</template>
