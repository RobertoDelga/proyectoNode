<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-vue-next'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span
    role="presentation"
    aria-hidden="true"
    :class="cn('yesflex yesh-9 yesw-9 yesitems-center yesjustify-center', props.class)"
  >
    <slot>
      <MoreHorizontal class="yesh-4 yesw-4" />
    </slot>
    <span class="yessr-only">More</span>
  </span>
</template>
