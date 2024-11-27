import { cva } from 'class-variance-authority'

export { default as NavigationMenu } from './NavigationMenu.vue'
export { default as NavigationMenuContent } from './NavigationMenuContent.vue'
export { default as NavigationMenuItem } from './NavigationMenuItem.vue'
export { default as NavigationMenuLink } from './NavigationMenuLink.vue'
export { default as NavigationMenuList } from './NavigationMenuList.vue'
export { default as NavigationMenuTrigger } from './NavigationMenuTrigger.vue'
export { default as NavigationMenuViewport } from './NavigationMenuViewport.vue'

export const navigationMenuTriggerStyle = cva(
  'yesgroup yesinline-flex yesh-10 yesw-max yesitems-center yesjustify-center yesrounded-md yesbg-background yespx-4 yespy-2 yestext-sm yesfont-medium yestransition-colors hover:yesbg-accent hover:yestext-accent-foreground focus:yesbg-accent focus:yestext-accent-foreground focus:yesoutline-none disabled:yespointer-events-none disabled:yesopacity-50 data-[active]:yesbg-accent/50 data-[state=open]:yesbg-accent/50',
)
