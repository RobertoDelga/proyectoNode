<script setup lang="ts">
import {
  Button,
} from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronsLeft } from 'lucide-vue-next'
import { PaginationFirst, type PaginationFirstProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<PaginationFirstProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationFirst v-bind="delegatedProps">
    <Button :class="cn('yesw-10 yesh-10 yesp-0', props.class)" variant="outline">
      <slot>
        <ChevronsLeft class="yesh-4 yesw-4" />
      </slot>
    </Button>
  </PaginationFirst>
</template>
