import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Organization Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              {/* Smaller version of the header logo for footer */}
              <div className="relative h-6 w-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-intellegix-navy to-intellegix-navy/80 rounded transform rotate-12"></div>
                <div className="absolute inset-0.5 bg-gradient-to-tr from-intellegix-cyan to-intellegix-cyan/80 rounded transform -rotate-12"></div>
                <div className="relative h-4 w-4 bg-white rounded flex items-center justify-center z-10">
                  <span className="text-intellegix-navy font-bold text-xs">IE</span>
                </div>
              </div>
              <span className="font-semibold text-intellegix-navy">Intellegix Education</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A non-profit organization dedicated to democratizing tech education through open source learning programs.
            </p>
            <p className="text-sm text-muted-foreground">
              Making quality educational technology accessible to all.
            </p>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Programs</h4>
            <div className="space-y-2 text-sm">
              <Link href="/programs/sparkle-shop" className="block text-muted-foreground hover:text-foreground">
                Sparkle Shop
              </Link>
              <Link href="/programs/ticino" className="block text-muted-foreground hover:text-foreground">
                Ticino
              </Link>
              <Link href="/programs/coming-soon" className="block text-muted-foreground hover:text-foreground">
                Coming Soon
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Resources</h4>
            <div className="space-y-2 text-sm">
              <Link href="/educators" className="block text-muted-foreground hover:text-foreground">
                For Educators
              </Link>
              <Link href="/students" className="block text-muted-foreground hover:text-foreground">
                For Students
              </Link>
              <Link href="/resources/documentation" className="block text-muted-foreground hover:text-foreground">
                Documentation
              </Link>
              <Link href="/resources/downloads" className="block text-muted-foreground hover:text-foreground">
                Downloads
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="space-y-2 text-sm">
              <Link href="https://github.com/austinkidwell" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground">
                GitHub
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/about/open-source" className="block text-muted-foreground hover:text-foreground">
                Open Source
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2026 Intellegix Education. A 501(c)(3) non-profit organization.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}