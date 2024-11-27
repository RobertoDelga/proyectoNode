<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="menu-badge"
    :class="cn(
      'yesabsolute yesright-1 yesflex yesh-5 yesmin-w-5 yesitems-center yesjustify-center yesrounded-md yespx-1 yestext-xs yesfont-medium yestabular-nums yestext-sidebar-foreground yesselect-none yespointer-events-none',
      'yespeer-hover/menu-button:text-sidebar-accent-foreground yespeer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
      'yespeer-data-[size=sm]/menu-button:top-1',
      'yespeer-data-[size=default]/menu-button:top-1.5',
      'yespeer-data-[size=lg]/menu-button:top-2.5',
      'group-data-[collapsible=icon]:yeshidden',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
