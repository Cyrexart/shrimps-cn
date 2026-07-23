"use client";

import { Button } from "@my-scope/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@my-scope/ui/card";
import { Input } from "@my-scope/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@my-scope/ui/input-group";
import { Textarea } from "@my-scope/ui/textarea";
import { InfoIcon, SearchIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="text-foreground mx-auto flex min-h-screen max-w-4xl flex-col gap-8 bg-background p-8">
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
        <Card className="max-w-sm">
          <CardHeader className="text-2xl font-bold">Card Header</CardHeader>
          <CardContent>
            This the Card Content section, which can be used for displaying
            useful(or not) information.
          </CardContent>
          <CardFooter className="flex justify-start gap-2">
            <Button size="sm">Learn more</Button>
            <Button variant="outline" size="sm">
              Go Back
            </Button>
          </CardFooter>
        </Card>
      </section>
      <section id="textareas" className="flex gap-4">
        <Textarea placeholder="default" />
        <Textarea placeholder="fixed" className="h-24 resize-none" />
      </section>
      <section id="input-groups" className="flex gap-4">
        <InputGroup>
          <InputGroupInput placeholder="search" />
          <InputGroupAddon align="inline-start">
            <SearchIcon className="size-4" />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="info" />
          <InputGroupAddon align="inline-end">
            <InfoIcon className="size-4" />
          </InputGroupAddon>
        </InputGroup>
      </section>
    </main>
  );
}
