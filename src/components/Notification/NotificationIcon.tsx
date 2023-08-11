import { LucideIcon } from "lucide-react"

interface NotificationIconProps {
  icon: LucideIcon
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
  return <Icon className="w-6 h-6 text-violet-500 mt-3" />
}
