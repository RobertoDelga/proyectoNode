<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <th :class="cn('yesh-12 yespx-4 yestext-left yesalign-middle yesfont-medium yestext-muted-foreground [&:has([role=checkbox])]:yespr-0', props.class)">
    <slot />
  </th>
</template>
