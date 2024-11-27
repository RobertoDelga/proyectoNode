<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="yesrelative yesw-full yesoverflow-auto">
    <table :class="cn('yesw-full yescaption-bottom yestext-sm', props.class)">
      <slot />
    </table>
  </div>
</template>
