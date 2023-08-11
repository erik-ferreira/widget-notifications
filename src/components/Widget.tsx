import { Notification } from "./Notification"
import { HeaderSection } from "./HeaderSection"
import { Rocket, X } from "lucide-react"

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
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.ActionButton
                icon={X}
                className="bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              />
              <Notification.ActionButton
                icon={Rocket}
                className="bg-violet-500 hover:bg-violet-600"
              />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>

      <div>
        <HeaderSection text="Antigas" />

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
          </Notification.Root>
        </div>
      </div>
    </div>
  )
}
