<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import Input from '@/components/ui/input/Input.vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Input
    data-sidebar="input"
    :class="cn(
      'yesh-8 yesw-full yesbg-background yesshadow-none focus-visible:yesring-2 focus-visible:yesring-sidebar-ring',
      props.class,
    )"
  >
    <slot />
  </Input>
</template>
