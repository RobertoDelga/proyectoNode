<script setup lang="ts">
import Skeleton from '@/components/ui/skeleton/Skeleton.vue'
import { cn } from '@/lib/utils'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<{
  showIcon?: boolean
  class?: HTMLAttributes['class']
}>()

const width = computed(() => {
  return `${Math.floor(Math.random() * 40) + 50}%`;
})
</script>

<template>
  <div
    data-sidebar="menu-skeleton"
    :class="cn('yesrounded-md yesh-8 yesflex yesgap-2 yespx-2 yesitems-center', props.class)"
  >
    <Skeleton
      v-if="showIcon"
      class="yessize-4 yesrounded-md"
      data-sidebar="menu-skeleton-icon"
    />

    <Skeleton
      class="yesh-4 yesflex-1 yesmax-w-[--skeleton-width]"
      data-sidebar="menu-skeleton-text"
      :style="{ '--skeleton-width': width }"
    />
  </div>
</template>
