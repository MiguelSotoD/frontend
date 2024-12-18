"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



const Menulist=() => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                        MikeDev
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                       Adentrate en el mundo del cafe con nosotros.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <ListItem href="/shop" title="Tienda">
                  Accede a toda tu información de una manera rápida y sencilla.
                </ListItem>
              </li>
              <li>
                <ListItem href="/offers" title="Ofertas">
                  Seccion dedicata a las ofertas de la semana.
                </ListItem>
              </li>
              <li>
                <ListItem href="/items" title="Accesorios">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default Menulist;

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Café Espresso",
        href: "/products/espresso",
        description:
            "Un café fuerte y concentrado, perfecto para un impulso rápido de energía.",
    },
    {
        title: "Café Americano",
        href: "/products/americano",
        description:
            "Un café suave y diluido, ideal para disfrutar durante todo el día.",
    },
    {
        title: "Café Latte",
        href: "/products/latte",
        description:
            "Un café cremoso con leche vaporizada, perfecto para una experiencia suave y rica.",
    },
    {
        title: "Café Cappuccino",
        href: "/products/cappuccino",
        description: "Un café espumoso con una mezcla equilibrada de espresso y leche.",
    },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

