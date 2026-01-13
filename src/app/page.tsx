import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-24 sm:py-32">
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="outline">
              501(c)(3) Non-Profit Organization
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Open Source Educational Technology for{" "}
              <span className="text-intellegix-cyan">Lifelong Learners</span>
            </h1>
            <p className="mb-8 text-xl leading-8 text-gray-600">
              Transform your learning journey with intelligent digital experiences that build real-world skills.
              Practical educational software that empowers you to master technology concepts, not just read about them.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-intellegix-cyan text-white hover:bg-intellegix-cyan/90" asChild>
                <Link href="/programs">
                  Explore Programs
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-intellegix-navy text-intellegix-navy hover:bg-intellegix-navy hover:text-white" asChild>
                <Link href="/get-started">
                  Start Learning
                </Link>
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              100% free and open source • No licensing fees • Community supported
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Echoing Intellegix's human-first approach */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why are the brightest students stuck with the dullest tools?
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Educational software should feel like a mentor, not another assignment.
              We build learning platforms that quietly make complex concepts feel intuitive,
              giving students time to think critically instead of struggling with outdated interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Programs
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Interactive educational platforms designed to teach real-world technology skills
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Sparkle Shop */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Sparkle Shop</CardTitle>
                  <Badge variant="secondary">E-commerce Education</Badge>
                </div>
                <CardDescription>
                  Amazon simulation platform for learning e-commerce concepts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  A live, interactive e-commerce platform that teaches students about online retail, inventory management,
                  customer service, and digital marketing through hands-on experience. Currently used by students worldwide!
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild>
                    <Link href="https://sparkle-shop.onrender.com" target="_blank" rel="noopener noreferrer">
                      Try Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/programs/sparkle-shop">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Ticino */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Ticino</CardTitle>
                  <Badge variant="secondary">Language Learning</Badge>
                </div>
                <CardDescription>
                  Interactive language database for multilingual education
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  A live, comprehensive language learning encyclopedia featuring interactive databases,
                  vocabulary management, and cultural context. Students worldwide use this platform to
                  master new languages through structured, engaging exercises.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild>
                    <Link href="https://ticinoencyclopedia.org/" target="_blank" rel="noopener noreferrer">
                      Try Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/programs/ticino">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Audio Lab - Coming Soon */}
            <Card className="overflow-hidden border-2 border-dashed border-intellegix-cyan/30 bg-gradient-to-br from-intellegix-cyan/5 to-intellegix-navy/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">AI Audio Lab</CardTitle>
                  <Badge variant="outline" className="border-intellegix-cyan text-intellegix-cyan">Coming Soon</Badge>
                </div>
                <CardDescription>
                  Revolutionary AI-powered audio production platform for musicians
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  An advanced AI audio laboratory featuring intelligent music composition, voice synthesis,
                  podcast generation, and audio enhancement tools. Empowering musicians and audio creators
                  to explore the cutting-edge of AI-assisted audio production and creative expression.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button disabled className="bg-gray-300 text-gray-500 cursor-not-allowed">
                    Coming Soon
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">
                      Get Notified
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Impact & Reach
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Empowering learners worldwide to develop technology skills through free, open source educational platforms
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-intellegix-cyan mb-2">100%</div>
              <div className="text-gray-900 font-semibold mb-1">Open Source</div>
              <div className="text-gray-600">All programs freely available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-intellegix-green mb-2">$0</div>
              <div className="text-gray-900 font-semibold mb-1">Licensing Fees</div>
              <div className="text-gray-600">Completely free for everyone</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-intellegix-orange mb-2">∞</div>
              <div className="text-gray-900 font-semibold mb-1">Scalability</div>
              <div className="text-gray-600">Unlimited users and deployments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Using Intellegix navy background like parent brand */}
      <section className="bg-intellegix-navy py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="mb-8 text-xl text-white/80">
              Join learners worldwide who are building real-world technology skills through our
              open source educational platforms. Start your journey today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-intellegix-cyan text-intellegix-navy hover:bg-intellegix-cyan/90" asChild>
                <Link href="/get-started">
                  Get Started Today
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-intellegix-cyan text-intellegix-cyan hover:bg-intellegix-cyan hover:text-intellegix-navy" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}