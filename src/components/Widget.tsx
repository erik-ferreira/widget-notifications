import { Notification } from "./Notification"
import { HeaderSection } from "./HeaderSection"

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <div className="flex items-center justify-between bg-zinc-200 dark:bg-zinc-800 py-4 px-6">
        <span className="font-bold">Notificações</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARCAR TODAS COMO VISTAS
        </button>
      </div>

      <div>
        <HeaderSection text="Recentes" />

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification />

          <Notification hasAction />
        </div>
      </div>

      <div>
        <HeaderSection text="Antigas" />

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification />

          <Notification />
        </div>
      </div>
    </div>
  )
}
