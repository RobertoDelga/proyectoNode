<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ol
    :class="cn('yesflex yesflex-wrap yesitems-center yesgap-1.5 yesbreak-words yestext-sm yestext-muted-foreground sm:yesgap-2.5', props.class)"
  >
    <slot />
  </ol>
</template>
