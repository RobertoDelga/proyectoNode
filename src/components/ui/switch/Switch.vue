<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SwitchRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="cn(
      'yespeer yesinline-flex yesh-6 yesw-11 yesshrink-0 yescursor-pointer yesitems-center yesrounded-full yesborder-2 yesborder-transparent yestransition-colors focus-visible:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-ring focus-visible:yesring-offset-2 focus-visible:yesring-offset-background disabled:yescursor-not-allowed disabled:yesopacity-50 data-[state=checked]:yesbg-primary data-[state=unchecked]:yesbg-input',
      props.class,
    )"
  >
    <SwitchThumb
      :class="cn('yespointer-events-none yesblock yesh-5 yesw-5 yesrounded-full yesbg-background yesshadow-lg yesring-0 yestransition-transform data-[state=checked]:yestranslate-x-5')"
    >
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
