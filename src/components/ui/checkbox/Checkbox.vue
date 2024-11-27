<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-vue-next'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="
      cn('yespeer yesh-4 yesw-4 yesshrink-0 yesrounded-sm yesborder yesborder-primary yesring-offset-background focus-visible:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-ring focus-visible:yesring-offset-2 disabled:yescursor-not-allowed disabled:yesopacity-50 data-[state=checked]:yesbg-primary data-[state=checked]:yestext-primary-foreground',
         props.class)"
  >
    <CheckboxIndicator class="yesflex yesh-full yesw-full yesitems-center yesjustify-center yestext-current">
      <slot>
        <Check class="yesh-4 yesw-4" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
