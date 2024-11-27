<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import Separator from '@/components/ui/separator/Separator.vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Separator
    data-sidebar="separator"
    :class="cn('yesmx-2 yesw-auto yesbg-sidebar-border', props.class)"
  >
    <slot />
  </Separator>
</template>
