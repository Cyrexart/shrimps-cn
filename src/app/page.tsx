import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 flex flex-col gap-8">
      <section id="buttons" className="flex gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </section>
      <section id="inputs" className="flex gap-4">
        <Input placeholder="default" className="w-fit" />
        <Input disabled placeholder="disabled" className="w-fit" />
      </section>
    </main>
  )
}
