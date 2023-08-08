interface HeaderSectionProps {
  text: string
}

export function HeaderSection({ text }: HeaderSectionProps) {
  return (
    <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
      {text}
    </div>
  )
}
