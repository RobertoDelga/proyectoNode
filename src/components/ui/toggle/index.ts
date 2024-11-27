import { cva, type VariantProps } from 'class-variance-authority'

export { default as Toggle } from './Toggle.vue'

export const toggleVariants = cva(
  'yesinline-flex yesitems-center yesjustify-center yesrounded-md yestext-sm yesfont-medium yesring-offset-background yestransition-colors hover:yesbg-muted hover:yestext-muted-foreground focus-visible:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-ring focus-visible:yesring-offset-2 disabled:yespointer-events-none disabled:yesopacity-50 data-[state=on]:yesbg-accent data-[state=on]:yestext-accent-foreground',
  {
    variants: {
      variant: {
        default: 'yesbg-transparent',
        outline:
          'yesborder yesborder-input yesbg-transparent hover:yesbg-accent hover:yestext-accent-foreground',
      },
      size: {
        default: 'yesh-10 yespx-3',
        sm: 'yesh-9 yespx-2.5',
        lg: 'yesh-11 yespx-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ToggleVariants = VariantProps<typeof toggleVariants>
