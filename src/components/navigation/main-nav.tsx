"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const programs = [
  {
    title: "Sparkle Shop",
    href: "/programs/sparkle-shop",
    description: "E-commerce education through Amazon simulation",
  },
  {
    title: "Ticino",
    href: "/programs/ticino",
    description: "Interactive language learning database system",
  },
  {
    title: "Coming Soon",
    href: "/programs/coming-soon",
    description: "More educational programs in development",
  },
]

const educators = [
  {
    title: "Curriculum Guides",
    href: "/educators/curriculum-guides",
    description: "Complete lesson plans and teaching materials",
  },
  {
    title: "Implementation",
    href: "/educators/implementation",
    description: "Setup guides and technical support",
  },
  {
    title: "Support",
    href: "/educators/support",
    description: "Community forums and direct assistance",
  },
]

const students = [
  {
    title: "Get Started",
    href: "/students/get-started",
    description: "Begin your learning journey",
  },
  {
    title: "Tutorials",
    href: "/students/tutorials",
    description: "Step-by-step learning guides",
  },
  {
    title: "Community",
    href: "/students/community",
    description: "Connect with other learners",
  },
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {programs.map((program) => (
                <ListItem
                  key={program.title}
                  title={program.title}
                  href={program.href}
                >
                  {program.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Educators</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {educators.map((educator) => (
                <ListItem
                  key={educator.title}
                  title={educator.title}
                  href={educator.href}
                >
                  {educator.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Students</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {students.map((student) => (
                <ListItem
                  key={student.title}
                  title={student.title}
                  href={student.href}
                >
                  {student.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/resources" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Resources
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

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