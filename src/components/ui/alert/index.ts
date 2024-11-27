import { cva, type VariantProps } from 'class-variance-authority'

export { default as Alert } from './Alert.vue'
export { default as AlertDescription } from './AlertDescription.vue'
export { default as AlertTitle } from './AlertTitle.vue'

export const alertVariants = cva(
  'yesrelative yesw-full yesrounded-lg yesborder yesp-4 [&>svg~*]:yespl-7 [&>svg+div]:yestranslate-y-[-3px] [&>svg]:yesabsolute [&>svg]:yesleft-4 [&>svg]:yestop-4 [&>svg]:yestext-foreground',
  {
    variants: {
      variant: {
        default: 'yesbg-background yestext-foreground',
        destructive:
          'yesborder-destructive/50 yestext-destructive dark:yesborder-destructive [&>svg]:yestext-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type AlertVariants = VariantProps<typeof alertVariants>
