import {
    Dialog,
    DialogTrigger,
    DialogContent,
  } from '@/components/ui/dialog'
  import { cn } from '@/lib/utils'
import { RegisterForm } from './register-form'
  
  interface RegisterButtonProps {
    children: React.ReactNode
    asChild?: boolean
    className?: string
  }
  
  export function RegisterButton({
    children,
    asChild,
    className
  }: RegisterButtonProps) {
      return (
        <Dialog>
          <DialogTrigger className={cn('cursor-pointer', className)} asChild>
            {children}
          </DialogTrigger>
          <DialogContent className="p-0 w-auto bg-transparent border-none">
            <RegisterForm />
          </DialogContent>
        </Dialog>
      )
  }