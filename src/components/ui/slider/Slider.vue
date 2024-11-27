<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SliderRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SliderRoot
    :class="cn(
      'yesrelative yesflex yesw-full yestouch-none yesselect-none yesitems-center data-[orientation=vertical]:yesflex-col data-[orientation=vertical]:yesw-2 data-[orientation=vertical]:yesh-full',
      props.class,
    )"
    v-bind="forwarded"
  >
    <SliderTrack class="yesrelative yesh-2 yesw-full data-[orientation=vertical]:yesw-2 yesgrow yesoverflow-hidden yesrounded-full yesbg-secondary">
      <SliderRange class="yesabsolute yesh-full data-[orientation=vertical]:yesw-full yesbg-primary" />
    </SliderTrack>
    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      class="yesblock yesh-5 yesw-5 yesrounded-full yesborder-2 yesborder-primary yesbg-background yesring-offset-background yestransition-colors focus-visible:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-ring focus-visible:yesring-offset-2 disabled:yespointer-events-none disabled:yesopacity-50"
    />
  </SliderRoot>
</template>
