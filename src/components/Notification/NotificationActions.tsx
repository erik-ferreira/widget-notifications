import { ReactNode } from "react"
import { Check, X } from "lucide-react"

interface NotificationActionsProps {
  children: ReactNode
}

export function NotificationActions({ children }: NotificationActionsProps) {
  return <div className="flex gap-2 self-center">{children}</div>
}
