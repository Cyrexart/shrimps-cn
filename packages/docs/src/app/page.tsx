"use client";

import { Button } from "@my-scope/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@my-scope/ui/card";
import { Input } from "@my-scope/ui/input";

export default function Home() {
  return (
    <main className="text-foreground flex min-h-screen flex-col gap-8 bg-background p-8">
      <section id="buttons" className="flex gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </section>

      <section id="inputs" className="flex max-w-4xl gap-4">
        <Input placeholder="default" />
        <Input disabled placeholder="disabled" />
      </section>

      <section id="cards" className="flex gap-4">
        <Card>
          <CardHeader>Header</CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      </section>
    </main>
  );
}
