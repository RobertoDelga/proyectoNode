<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <td
    :class="
      cn(
        'yesp-4 yesalign-middle [&:has([role=checkbox])]:yespr-0',
        props.class,
      )
    "
  >
    <slot />
  </td>
</template>
