<script setup lang="ts">
import { cn } from '@/lib/utils'
import { GripVertical } from 'lucide-vue-next'
import { SplitterResizeHandle, type SplitterResizeHandleEmits, type SplitterResizeHandleProps, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SplitterResizeHandleProps & { class?: HTMLAttributes['class'], withHandle?: boolean }>()
const emits = defineEmits<SplitterResizeHandleEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SplitterResizeHandle v-bind="forwarded" :class="cn('yesrelative yesflex yesw-px yesitems-center yesjustify-center yesbg-border after:yesabsolute after:yesinset-y-0 after:yesleft-1/2 after:yesw-1 after:yes-translate-x-1/2 focus-visible:yesoutline-none focus-visible:yesring-1 focus-visible:yesring-ring focus-visible:yesring-offset-1 [&[data-orientation=vertical]]:yesh-px [&[data-orientation=vertical]]:yesw-full [&[data-orientation=vertical]]:after:yesleft-0 [&[data-orientation=vertical]]:after:yesh-1 [&[data-orientation=vertical]]:after:yesw-full [&[data-orientation=vertical]]:after:yes-translate-y-1/2 [&[data-orientation=vertical]]:after:yestranslate-x-0 [&[data-orientation=vertical]>div]:yesrotate-90', props.class)">
    <template v-if="props.withHandle">
      <div class="yesz-10 yesflex yesh-4 yesw-3 yesitems-center yesjustify-center yesrounded-sm yesborder yesbg-border">
        <GripVertical class="yesh-2.5 yesw-2.5" />
      </div>
    </template>
  </SplitterResizeHandle>
</template>
