<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Label, type LabelProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Label
    v-bind="delegatedProps"
    :class="
      cn(
        'yestext-sm yesfont-medium yesleading-none peer-disabled:yescursor-not-allowed peer-disabled:yesopacity-70',
        props.class,
      )
    "
  >
    <slot />
  </Label>
</template>
