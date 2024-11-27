<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="cn(
      'yestouch-manipulation yesabsolute yesh-8 yesw-8 yesrounded-full yesp-0',
      orientation === 'horizontal'
        ? 'yes-left-12 yestop-1/2 yes-translate-y-1/2'
        : 'yes-top-12 yesleft-1/2 yes-translate-x-1/2 yesrotate-90',
      props.class,
    )"
    variant="outline"
    @click="scrollPrev"
  >
    <slot>
      <ArrowLeft class="yesh-4 yesw-4 yestext-current" />
      <span class="yessr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
