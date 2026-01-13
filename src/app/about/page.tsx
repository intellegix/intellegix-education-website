import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Intellegix Education Non-Profit Organization",
  description: "Learn about Intellegix Education's mission to democratize tech education through open source learning programs. Founded by Austin Kidwell.",
}

export default function AboutPage() {
  return (
    <div className="container py-12">
      {/* Hero */}
      <div className="mx-auto max-w-4xl text-center mb-20">
        <Badge className="mb-4" variant="outline">
          501(c)(3) Non-Profit Organization
        </Badge>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          About Intellegix Education
        </h1>
        <p className="text-xl leading-8 text-gray-600">
          We're on a mission to democratize technology education through open source learning programs
          that make quality educational technology accessible to all learners worldwide.
        </p>
      </div>

      {/* Mission & Vision */}
      <section className="grid gap-12 lg:grid-cols-2 mb-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-7">
              To democratize technology education by creating and maintaining open source learning
              platforms that empower anyone to develop practical skills, regardless of age, background,
              economic circumstances, or geographic location.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-7">
              A world where every learner has access to high-quality, engaging technology education
              that builds practical skills for the digital economy, fostering personal growth, innovation,
              and unlimited opportunities for success.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Founder */}
      <section className="mb-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Our Founder
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Meet the visionary behind Intellegix Education
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/austin-kidwell.jpg" alt="Austin Kidwell" />
                  <AvatarFallback className="text-2xl">AK</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Austin Kidwell</h3>
                <div className="mb-4 space-y-1">
                  <Badge variant="secondary">Founder & CEO</Badge>
                  <p className="text-gray-600">San Diego, California</p>
                </div>
                <p className="text-gray-600 leading-7 mb-6">
                  Austin founded Intellegix Education with a vision to democratize technology education
                  through open source solutions. With extensive experience in full-stack development,
                  systems architecture, and educational technology, Austin leads both technical development
                  and strategic initiatives to expand access to quality educational resources.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Technical Expertise</h4>
                    <p className="text-gray-600">Full-stack Development, Python, TypeScript, AI/ML Integration</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Other Ventures</h4>
                    <p className="text-gray-600">Intellegix (Construction BI), ASR Inc (Systems Integration)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Core Values */}
      <section className="mb-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Our Core Values
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Accessibility</h3>
            <p className="text-gray-600">
              Educational technology should be accessible to all, regardless of economic circumstances or location.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">
              We maintain the highest standards in educational content and user experience design.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              Open source development thrives on community collaboration and shared knowledge.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We continuously explore new technologies and methodologies to enhance learning outcomes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Transparency</h3>
            <p className="text-gray-600">
              Open source principles ensure transparency in our development and decision-making processes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Impact</h3>
            <p className="text-gray-600">
              Every decision is measured by its potential to improve educational outcomes for learners.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-gray-50 rounded-lg p-12 mb-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Our Impact
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Measuring our commitment to educational accessibility
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-900 font-semibold mb-1">Open Source</div>
            <div className="text-sm text-gray-600">All programs freely available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
            <div className="text-gray-900 font-semibold mb-1">Licensing Fees</div>
            <div className="text-sm text-gray-600">Completely free for everyone</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-gray-900 font-semibold mb-1">Active Programs</div>
            <div className="text-sm text-gray-600">Sparkle Shop & Ticino</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
            <div className="text-gray-900 font-semibold mb-1">Scalability</div>
            <div className="text-sm text-gray-600">Unlimited users worldwide</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-blue-600 rounded-lg p-12 text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Join Our Mission
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Help us democratize technology education by contributing to our open source projects,
            supporting our mission, or beginning your own learning journey with our programs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Involved
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="https://github.com/austinkidwell" target="_blank" rel="noopener noreferrer">
                Contribute on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}