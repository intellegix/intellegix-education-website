import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sparkle Shop | E-commerce Education Platform",
  description: "Learn e-commerce concepts through our interactive Amazon simulation. Open source educational program for business and technology education.",
}

export default function SparkleShopPage() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <div className="flex justify-center mb-4">
          <Badge className="mb-4" variant="secondary">
            E-commerce Education
          </Badge>
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Sparkle Shop
        </h1>
        <p className="mb-8 text-xl leading-8 text-gray-600">
          A live, interactive Amazon simulation platform where you can learn real-world e-commerce
          concepts through hands-on experience. Build practical skills in online retail, marketing,
          and business operations at your own pace.
          <strong> Try the full application at sparkle-shop.onrender.com!</strong>
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="bg-intellegix-cyan text-white hover:bg-intellegix-cyan/90" asChild>
            <Link href="https://sparkle-shop.onrender.com" target="_blank" rel="noopener noreferrer">
              Launch Live Demo
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-intellegix-navy text-intellegix-navy hover:bg-intellegix-navy hover:text-white" asChild>
            <Link href="https://github.com/austinkidwell" target="_blank" rel="noopener noreferrer">
              View Source Code
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Overview */}
      <section className="mb-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Learning Features
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Comprehensive e-commerce education through realistic simulations
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Product Management</CardTitle>
              <CardDescription>
                Learn inventory, catalog management, and product listing optimization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Product creation and editing</li>
                <li>• Inventory tracking</li>
                <li>• Category management</li>
                <li>• SEO optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Experience</CardTitle>
              <CardDescription>
                Understand the customer journey from browsing to purchase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Shopping cart functionality</li>
                <li>• Checkout process</li>
                <li>• User account management</li>
                <li>• Review and rating system</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Analytics</CardTitle>
              <CardDescription>
                Learn data-driven decision making through sales analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sales reporting</li>
                <li>• Customer analytics</li>
                <li>• Revenue tracking</li>
                <li>• Performance metrics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Digital Marketing</CardTitle>
              <CardDescription>
                Explore promotional strategies and customer engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Discount campaigns</li>
                <li>• Featured products</li>
                <li>• Email marketing simulation</li>
                <li>• Customer segmentation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Supply Chain</CardTitle>
              <CardDescription>
                Understand logistics, suppliers, and fulfillment processes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Supplier management</li>
                <li>• Order fulfillment</li>
                <li>• Shipping simulations</li>
                <li>• Return processing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Management</CardTitle>
              <CardDescription>
                Learn pricing strategies, profit margins, and financial planning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Pricing optimization</li>
                <li>• Cost calculation</li>
                <li>• Profit analysis</li>
                <li>• Financial reporting</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educational Benefits */}
      <section className="bg-gray-50 rounded-lg p-12 mb-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Educational Benefits
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Why learners choose Sparkle Shop to build business skills
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                1
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Hands-On Learning</h3>
              <p className="text-gray-600">
                Learn by doing, not just reading. You operate a real e-commerce platform
                and see immediate results from your decisions.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                2
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Real-World Skills</h3>
              <p className="text-gray-600">
                Based on actual Amazon and e-commerce best practices, you gain industry-relevant
                business and economic knowledge you can apply immediately to real-world scenarios.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">
                3
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Economic Understanding</h3>
              <p className="text-gray-600">
                Develop comprehensive understanding of business economics, market dynamics,
                pricing strategies, and financial management through integrated learning experiences.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold">
                4
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Flexible Learning Path</h3>
              <p className="text-gray-600">
                Perfect for quick skill-building sessions, extended business challenges, or
                comprehensive economic simulations. Adapts to your learning pace and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="mb-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Getting Started
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Begin your e-commerce learning journey with Sparkle Shop
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <CardTitle>Download & Setup</CardTitle>
              <CardDescription>
                Clone from GitHub and follow our setup guide
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle>Customize Content</CardTitle>
              <CardDescription>
                Adapt products and scenarios to your learning goals
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <CardTitle>Learn & Apply</CardTitle>
              <CardDescription>
                Launch the platform and access comprehensive learning resources
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-intellegix-navy rounded-lg p-12 text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Master E-commerce & Economic Principles?
          </h2>
          <p className="mb-8 text-xl text-white/80">
            Join learners worldwide who are using Sparkle Shop's live platform to build
            real-world e-commerce expertise and understand economic fundamentals through hands-on practice!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-intellegix-cyan text-intellegix-navy hover:bg-intellegix-cyan/90" asChild>
              <Link href="https://sparkle-shop.onrender.com" target="_blank" rel="noopener noreferrer">
                Launch Live Application
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-intellegix-cyan text-intellegix-cyan hover:bg-intellegix-cyan hover:text-intellegix-navy" asChild>
              <Link href="/get-started">
                Start Learning Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}