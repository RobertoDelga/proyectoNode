<script setup lang="ts">
import { CollapsibleContent, type CollapsibleContentProps } from 'radix-vue'

const props = defineProps<CollapsibleContentProps>()
</script>

<template>
  <CollapsibleContent v-bind="props" class="yesoverflow-hidden yestransition-all data-[state=closed]:yesanimate-collapsible-up data-[state=open]:yesanimate-collapsible-down">
    <slot />
  </CollapsibleContent>
</template>
