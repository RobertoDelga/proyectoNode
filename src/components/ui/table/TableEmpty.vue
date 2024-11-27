<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed, type HTMLAttributes } from 'vue'
import TableCell from './TableCell.vue'
import TableRow from './TableRow.vue'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  colspan?: number
}>(), {
  colspan: 1,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TableRow>
    <TableCell
      :class="
        cn(
          'yesp-4 yeswhitespace-nowrap yesalign-middle yestext-sm yestext-foreground',
          props.class,
        )
      "
      v-bind="delegatedProps"
    >
      <div class="yesflex yesitems-center yesjustify-center yespy-10">
        <slot />
      </div>
    </TableCell>
  </TableRow>
</template>
