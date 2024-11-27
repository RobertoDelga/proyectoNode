import type { ToastRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export { default as Toast } from './Toast.vue'
export { default as ToastAction } from './ToastAction.vue'
export { default as ToastClose } from './ToastClose.vue'
export { default as ToastDescription } from './ToastDescription.vue'
export { default as Toaster } from './Toaster.vue'
export { default as ToastProvider } from './ToastProvider.vue'
export { default as ToastTitle } from './ToastTitle.vue'
export { default as ToastViewport } from './ToastViewport.vue'
export { toast, useToast } from './use-toast'

import { cva, type VariantProps } from 'class-variance-authority'

export const toastVariants = cva(
  'yesgroup yespointer-events-auto yesrelative yesflex yesw-full yesitems-center yesjustify-between yesspace-x-4 yesoverflow-hidden yesrounded-md yesborder yesp-6 yespr-8 yesshadow-lg yestransition-all data-[swipe=cancel]:yestranslate-x-0 data-[swipe=end]:yestranslate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:yestranslate-x-[--radix-toast-swipe-move-x] data-[swipe=move]:yestransition-none data-[state=open]:yesanimate-in data-[state=closed]:yesanimate-out data-[swipe=end]:yesanimate-out data-[state=closed]:yesfade-out-80 data-[state=closed]:yesslide-out-to-right-full data-[state=open]:yesslide-in-from-top-full data-[state=open]:sm:yesslide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'yesborder yesbg-background yestext-foreground',
        destructive:
                    'yesdestructive yesgroup yesborder-destructive yesbg-destructive yestext-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

type ToastVariants = VariantProps<typeof toastVariants>

export interface ToastProps extends ToastRootProps {
  class?: HTMLAttributes['class']
  variant?: ToastVariants['variant']
  onOpenChange?: ((value: boolean) => void) | undefined
}
