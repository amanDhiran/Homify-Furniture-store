import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@/components/ui/dialog'
import { LoginForm } from "@/components/auth/login-form"
import { cn } from '@/lib/utils'

interface LoginButtonProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export function LoginButton({
  children,
  asChild,
  className
}: LoginButtonProps) {
    return (
      <Dialog>
        <DialogTrigger className={cn('cursor-pointer', className)} asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    )
}