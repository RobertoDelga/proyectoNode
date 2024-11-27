<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useSidebar } from './utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <button
    data-sidebar="rail"
    aria-label="Toggle Sidebar"
    :tabindex="-1"
    title="Toggle Sidebar"
    :class="cn(
      'yesabsolute yesinset-y-0 yesz-20 yeshidden yesw-4 yes-translate-x-1/2 yestransition-all yesease-linear after:yesabsolute after:yesinset-y-0 after:yesleft-1/2 after:yesw-[2px] hover:after:yesbg-sidebar-border group-data-[side=left]:yes-right-4 group-data-[side=right]:yesleft-0 sm:yesflex',
      '[[data-side=left]_&]:yescursor-w-resize [[data-side=right]_&]:yescursor-e-resize',
      '[[data-side=left][data-state=collapsed]_&]:yescursor-e-resize [[data-side=right][data-state=collapsed]_&]:yescursor-w-resize',
      'group-data-[collapsible=offcanvas]:yestranslate-x-0 group-data-[collapsible=offcanvas]:after:yesleft-full group-data-[collapsible=offcanvas]:hover:yesbg-sidebar',
      '[[data-side=left][data-collapsible=offcanvas]_&]:yes-right-2',
      '[[data-side=right][data-collapsible=offcanvas]_&]:yes-left-2',
      props.class,
    )"
    @click="toggleSidebar"
  >
    <slot />
  </button>
</template>
