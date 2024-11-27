<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ul
    data-sidebar="menu-badge"
    :class="cn(
      'yesmx-3.5 yesflex yesmin-w-0 yestranslate-x-px yesflex-col yesgap-1 yesborder-l yesborder-sidebar-border yespx-2.5 yespy-0.5',
      'group-data-[collapsible=icon]:yeshidden',
      props.class,
    )"
  >
    <slot />
  </ul>
</template>
