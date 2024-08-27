import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@/components/ui/dialog'
import { LoginForm } from "@/components/auth/login-form"

interface LoginButtonProps {
  children: React.ReactNode
  asChild?: boolean
}

export function LoginButton({
  children,
  asChild,
}: LoginButtonProps) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    )
}