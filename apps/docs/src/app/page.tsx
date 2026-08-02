"use client";

import { Button } from "@shrimps/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@shrimps/ui/card";
import { Input } from "@shrimps/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@shrimps/ui/input-group";
import { Label } from "@shrimps/ui/label";
import { Switch } from "@shrimps/ui/switch";
import { Textarea } from "@shrimps/ui/textarea";
import { Header } from "@shrimps/ui/blocks/header/header";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shrimps/ui/dialog";
import { InfoIcon, SearchIcon } from "lucide-react";
import { AppNavLink } from "@shrimps/ui/blocks/header/app-nav-link";

export default function Home() {
  return (
    <>
      <Header>
        <Header.Brand className="mr-8">
          <span>Acme</span>
        </Header.Brand>

        <Header.Nav>
          <AppNavLink href="/">Product</AppNavLink>
          <AppNavLink href="/pricing">Pricing</AppNavLink>
          <AppNavLink href="/docs">Docs</AppNavLink>
        </Header.Nav>

        <Header.Actions>
          <AppNavLink indicator="none" href="/auth/sing-in">
            Sign in
          </AppNavLink>
          <Button>Get started</Button>
        </Header.Actions>

        <Header.MobileMenu>
          <Header.MobileMenu.Trigger />
          <Header.MobileMenu.Panel>
            <Header.NavLink href="/product">Product</Header.NavLink>
            <Header.NavLink href="/pricing">Pricing</Header.NavLink>
            <Header.NavLink href="/docs">Docs</Header.NavLink>
          </Header.MobileMenu.Panel>
        </Header.MobileMenu>
      </Header>
      <main className="text-foreground mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 bg-background p-8">
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

        <section id="inputs" className="flex gap-4">
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
        <section id="input-groups" className="flex gap-4">
          <div className="flex flex-col gap-3">
            <Label>Label</Label>
            <Input placeholder="basic" />
          </div>
        </section>
        <section id="switches" className="flex gap-4">
          <Switch id="base" />
          <Label htmlFor="base">Switch</Label>
        </section>
        <section id="dialogs" className="flex gap-4">
          <Dialog>
            <DialogTrigger render={<Button> Open Dialog</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Want to close the dialog?</DialogTitle>
                <DialogDescription>
                  You can do it by clicking on Exit button, pressing ESC key or
                  clicking outside of dialog.
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Button variant="secondary">Stay</Button>
                <DialogClose
                  render={<Button variant="destructive">Exit</Button>}
                />
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>
        <section id="dialogs" className="flex gap-4">
          <Dialog>
            <DialogTrigger render={<Button> Open Dialog</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Want to close the dialog?</DialogTitle>
                <DialogDescription>
                  You can do it by clicking on Exit button, pressing ESC key or
                  clicking outside of dialog.
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Button variant="secondary">Stay</Button>
                <DialogClose
                  render={<Button variant="destructive">Exit</Button>}
                />
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>
      </main>
    </>
  );
}
