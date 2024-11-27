import { cva, type VariantProps } from 'class-variance-authority'

export { default as Sidebar } from './Sidebar.vue'
export { default as SidebarContent } from './SidebarContent.vue'
export { default as SidebarFooter } from './SidebarFooter.vue'
export { default as SidebarGroup } from './SidebarGroup.vue'
export { default as SidebarGroupAction } from './SidebarGroupAction.vue'
export { default as SidebarGroupContent } from './SidebarGroupContent.vue'
export { default as SidebarGroupLabel } from './SidebarGroupLabel.vue'
export { default as SidebarHeader } from './SidebarHeader.vue'
export { default as SidebarInput } from './SidebarInput.vue'
export { default as SidebarInset } from './SidebarInset.vue'
export { default as SidebarMenu } from './SidebarMenu.vue'
export { default as SidebarMenuAction } from './SidebarMenuAction.vue'
export { default as SidebarMenuBadge } from './SidebarMenuBadge.vue'
export { default as SidebarMenuButton } from './SidebarMenuButton.vue'
export { default as SidebarMenuItem } from './SidebarMenuItem.vue'
export { default as SidebarMenuSkeleton } from './SidebarMenuSkeleton.vue'
export { default as SidebarMenuSub } from './SidebarMenuSub.vue'
export { default as SidebarMenuSubButton } from './SidebarMenuSubButton.vue'
export { default as SidebarMenuSubItem } from './SidebarMenuSubItem.vue'
export { default as SidebarProvider } from './SidebarProvider.vue'
export { default as SidebarRail } from './SidebarRail.vue'
export { default as SidebarSeparator } from './SidebarSeparator.vue'
export { default as SidebarTrigger } from './SidebarTrigger.vue'

export { useSidebar } from './utils'

export const sidebarMenuButtonVariants = cva(
  'yespeer/menu-button yesflex yesw-full yesitems-center yesgap-2 yesoverflow-hidden yesrounded-md yesp-2 yestext-left yestext-sm yesoutline-none yesring-sidebar-ring yestransition-[width,height,padding] hover:yesbg-sidebar-accent hover:yestext-sidebar-accent-foreground focus-visible:yesring-2 active:yesbg-sidebar-accent active:yestext-sidebar-accent-foreground disabled:yespointer-events-none disabled:yesopacity-50 yesgroup-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:yespointer-events-none aria-disabled:yesopacity-50 data-[active=true]:yesbg-sidebar-accent data-[active=true]:yesfont-medium data-[active=true]:yestext-sidebar-accent-foreground data-[state=open]:hover:yesbg-sidebar-accent data-[state=open]:hover:yestext-sidebar-accent-foreground group-data-[collapsible=icon]:yes!size-8 group-data-[collapsible=icon]:yes!p-2 [&>span:last-child]:yestruncate [&>svg]:yessize-4 [&>svg]:yesshrink-0',
  {
    variants: {
      variant: {
        default: 'hover:yesbg-sidebar-accent hover:yestext-sidebar-accent-foreground',
        outline:
          'yesbg-background yesshadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:yesbg-sidebar-accent hover:yestext-sidebar-accent-foreground hover:yesshadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default: 'yesh-8 yestext-sm',
        sm: 'yesh-7 yestext-xs',
        lg: 'yesh-12 yestext-sm group-data-[collapsible=icon]:yes!p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>
