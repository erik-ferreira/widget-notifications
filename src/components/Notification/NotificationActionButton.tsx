import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { LucideIcon } from "lucide-react"

interface NotificationActionButtonProps extends ComponentProps<"button"> {
  icon: LucideIcon
}

export function NotificationActionButton({
  icon: Icon,
  className,
  ...rest
}: NotificationActionButtonProps) {
  return (
    <button
      className={twMerge(
        "w-8 h-8 rounded flex items-center justify-center",
        className
      )}
      {...rest}
    >
      <Icon className="w-3 h-3 text-zinc-50" />
    </button>
  )
}
