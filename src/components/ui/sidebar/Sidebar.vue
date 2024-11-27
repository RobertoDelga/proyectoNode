<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import Sheet from '@/components/ui/sheet/Sheet.vue'
import SheetContent from '@/components/ui/sheet/SheetContent.vue'
import { cn } from '@/lib/utils'
import { SIDEBAR_WIDTH_MOBILE, useSidebar } from './utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
  class?: HTMLAttributes['class']
}>(), {
  side: 'left',
  variant: 'sidebar',
  collapsible: 'offcanvas',
})

const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
</script>

<template>
  <div
    v-if="collapsible === 'none'"
    :class="cn('yesflex yesh-full yesw-[--sidebar-width] yesflex-col yesbg-sidebar yestext-sidebar-foreground', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </div>

  <Sheet v-else-if="isMobile" :open="openMobile" v-bind="$attrs" @update:open="setOpenMobile">
    <SheetContent
      data-sidebar="sidebar"
      data-mobile="true"
      :side="side"
      class="yesw-[--sidebar-width] yesbg-sidebar yesp-0 yestext-sidebar-foreground [&>button]:yeshidden"
      :style="{
        '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
      }"
    >
      <div class="yesflex yesh-full yesw-full yesflex-col">
        <slot />
      </div>
    </SheetContent>
  </Sheet>

  <div
    v-else class="yesgroup yespeer yeshidden md:yesblock"
    :data-state="state"
    :data-collapsible="state === 'collapsed' ? collapsible : ''"
    :data-variant="variant"
    :data-side="side"
  >
    <!-- This is what handles the sidebar gap on desktop  -->
    <div
      :class="cn(
        'yesduration-200 yesrelative yesh-svh yesw-[--sidebar-width] yesbg-transparent yestransition-[width] yesease-linear',
        'group-data-[collapsible=offcanvas]:yesw-0',
        'group-data-[side=right]:yesrotate-180',
        variant === 'floating' || variant === 'inset'
          ? 'group-data-[collapsible=icon]:yesw-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
          : 'group-data-[collapsible=icon]:yesw-[--sidebar-width-icon]',
      )"
    />
    <div
      :class="cn(
        'yesduration-200 yesfixed yesinset-y-0 yesz-10 yeshidden yesh-svh yesw-[--sidebar-width] yestransition-[left,right,width] yesease-linear md:yesflex',
        side === 'left'
          ? 'yesleft-0 group-data-[collapsible=offcanvas]:yesleft-[calc(var(--sidebar-width)*-1)]'
          : 'yesright-0 group-data-[collapsible=offcanvas]:yesright-[calc(var(--sidebar-width)*-1)]',
        // Adjust the padding for floating and inset variants.
        variant === 'floating' || variant === 'inset'
          ? 'yesp-2 group-data-[collapsible=icon]:yesw-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
          : 'group-data-[collapsible=icon]:yesw-[--sidebar-width-icon] group-data-[side=left]:yesborder-r group-data-[side=right]:yesborder-l',
        props.class,
      )"
      v-bind="$attrs"
    >
      <div
        data-sidebar="sidebar"
        class="yesflex yesh-full yesw-full yesflex-col yesbg-sidebar group-data-[variant=floating]:yesrounded-lg group-data-[variant=floating]:yesborder group-data-[variant=floating]:yesborder-sidebar-border group-data-[variant=floating]:yesshadow"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
