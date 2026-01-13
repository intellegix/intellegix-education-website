import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coming Soon | Future Educational Programs",
  description: "Exciting new educational programs in development at Intellegix Education. Stay tuned for more innovative learning platforms.",
}

export default function ComingSoonPage() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <Badge className="mb-4" variant="outline">
          In Development
        </Badge>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          More Programs Coming Soon
        </h1>
        <p className="mb-8 text-xl leading-8 text-gray-600">
          We're constantly developing new educational programs to meet the evolving needs
          of students and educators. Here's what's on the horizon.
        </p>
      </div>

      {/* Upcoming Programs */}
      <section className="mb-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Programs in Development
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Educational platforms currently in planning and development phases
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary">Q2 2026</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Code Academy Pro</CardTitle>
              <CardDescription>
                Interactive programming education platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                A comprehensive coding education system featuring multiple programming languages,
                interactive coding challenges, and real-world project simulations.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Planned Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Python, JavaScript, Java, and C++ curricula</li>
                  <li>• Live code execution and testing</li>
                  <li>• Collaborative coding projects</li>
                  <li>• Industry mentor network</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary">Q3 2026</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">EcoSim</CardTitle>
              <CardDescription>
                Environmental science simulation platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                An immersive environmental science education platform that simulates ecosystems,
                climate change effects, and sustainable development scenarios.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Planned Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 3D ecosystem modeling</li>
                  <li>• Climate simulation tools</li>
                  <li>• Sustainability project planning</li>
                  <li>• Real environmental data integration</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary">Q4 2026</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">MathViz</CardTitle>
              <CardDescription>
                Visual mathematics learning platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                Interactive mathematics education featuring visual problem-solving,
                3D geometric modeling, and real-time equation graphing capabilities.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Planned Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interactive 3D geometry</li>
                  <li>• Step-by-step problem solving</li>
                  <li>• Algebraic visualization tools</li>
                  <li>• Calculus animation systems</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary">2027</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">HistoryLive</CardTitle>
              <CardDescription>
                Immersive historical education experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                Virtual reality historical simulations that transport students to different
                time periods and allow them to experience history firsthand.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Planned Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• VR historical environments</li>
                  <li>• Interactive historical figures</li>
                  <li>• Timeline exploration tools</li>
                  <li>• Primary source document analysis</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Input */}
      <section className="bg-gray-50 rounded-lg p-12 mb-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Shape Our Development
          </h2>
          <p className="mb-8 text-lg leading-8 text-gray-600">
            As an open source, non-profit organization, we value community input in developing
            new educational programs. Your feedback helps us prioritize features and create
            the most impactful learning experiences.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Suggest a Program
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/austinkidwell" target="_blank" rel="noopener noreferrer">
                Join Development
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="text-center">
        <div className="bg-blue-600 rounded-lg p-12 text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Stay Updated
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Be the first to know when new educational programs launch and
            get early access to beta testing opportunities.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg text-gray-900"
              />
            </div>
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>
          <p className="mt-4 text-sm text-blue-200">
            No spam, just educational innovation updates.
          </p>
        </div>
      </section>
    </div>
  )
}