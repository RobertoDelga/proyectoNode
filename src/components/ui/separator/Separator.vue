<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Separator, type SeparatorProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<
  SeparatorProps & { class?: HTMLAttributes['class'], label?: string }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="
      cn(
        'yesshrink-0 yesbg-border yesrelative',
        props.orientation === 'vertical' ? 'yesw-px yesh-full' : 'yesh-px yesw-full',
        props.class,
      )
    "
  >
    <span
      v-if="props.label"
      :class="cn('yestext-xs yestext-muted-foreground yesbg-background yesabsolute yestop-1/2 yesleft-1/2 yes-translate-x-1/2 yes-translate-y-1/2 yesflex yesjustify-center yesitems-center',
                 props.orientation === 'vertical' ? 'yesw-[1px] yespx-1 yespy-2' : 'yesh-[1px] yespy-1 yespx-2',
      )"
    >{{ props.label }}</span>
  </Separator>
</template>
