import Link from "next/link"
import { MainNav } from "@/components/navigation/main-nav"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-3">
            {/* Geometric logo inspired by parent Intellegix brand */}
            <div className="relative h-10 w-10 flex items-center justify-center">
              {/* Main hexagonal shape with layered design */}
              <div className="absolute inset-0 bg-gradient-to-br from-intellegix-navy to-intellegix-navy/80 rounded-lg transform rotate-12"></div>
              <div className="absolute inset-0.5 bg-gradient-to-tr from-intellegix-cyan to-intellegix-cyan/80 rounded-lg transform -rotate-12"></div>
              <div className="relative h-6 w-6 bg-white rounded flex items-center justify-center z-10">
                <span className="text-intellegix-navy font-bold text-sm">IE</span>
              </div>
              {/* Accent elements */}
              <div className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-intellegix-cyan rounded-full"></div>
              <div className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 bg-intellegix-green rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-intellegix-navy leading-tight">
                Intellegix
              </span>
              <span className="text-sm text-intellegix-cyan font-medium -mt-1">
                Education
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex">
          <MainNav />
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-intellegix-navy hover:text-intellegix-cyan hover:bg-intellegix-cyan/10" asChild>
            <Link href="https://github.com/austinkidwell" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
          <Button variant="ghost" className="text-intellegix-navy hover:text-intellegix-cyan hover:bg-intellegix-cyan/10" asChild>
            <Link href="/about">
              Non-Profit
            </Link>
          </Button>
          <Button className="bg-intellegix-cyan text-white hover:bg-intellegix-cyan/90" asChild>
            <Link href="/get-started">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}