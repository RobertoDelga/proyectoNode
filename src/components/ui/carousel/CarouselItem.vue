<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation } = useCarousel()
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="cn(
      'yesmin-w-0 yesshrink-0 yesgrow-0 yesbasis-full',
      orientation === 'horizontal' ? 'yespl-4' : 'yespt-4',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
