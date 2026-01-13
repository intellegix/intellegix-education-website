import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Get in Touch with Intellegix Education",
  description: "Contact Intellegix Education for support, partnerships, or to learn more about our open source educational programs.",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Get in Touch
        </h1>
        <p className="text-xl leading-8 text-gray-600">
          We'd love to hear from you. Whether you're a learner exploring our programs, an educator
          implementing them, a developer wanting to contribute, or an organization looking to partner with us.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                We'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general-learning">General Learning Inquiry</option>
                    <option value="learning-support">Learning Support</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="educator-inquiry">Educator Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="contribution">Contribute to Development</option>
                    <option value="media-inquiry">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your inquiry or how we can help..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Founder & CEO</h4>
                <p className="text-gray-600">Austin Kidwell</p>
                <p className="text-gray-600">San Diego, California</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Organization</h4>
                <p className="text-gray-600">Intellegix Education</p>
                <Badge variant="secondary" className="mt-1">501(c)(3) Non-Profit</Badge>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-blue-600">contact@intellegixeducation.org</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Website</h4>
                <p className="text-blue-600">www.intellegixeducation.org</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Ready to start your learning journey or implement in your organization?
              </p>
              <Button variant="outline" className="w-full">
                Access Learning Resources
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Developers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Want to contribute to our open source educational programs?
              </p>
              <Button variant="outline" className="w-full">
                View GitHub Projects
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">General Inquiries</span>
                  <span className="font-semibold">1-2 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Technical Support</span>
                  <span className="font-semibold">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Partnership Inquiries</span>
                  <span className="font-semibold">3-5 business days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Resources */}
      <section className="mt-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Quick answers to common questions
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do I get started learning?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Visit our programs section to explore Sparkle Shop and Ticino, or access our learning resources
                for getting started guides. Whether you're learning individually or implementing in an organization,
                we provide comprehensive documentation and tutorials.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are your programs really free?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Yes! All our educational programs are completely free and open source. There are
                no licensing fees, user limits, or hidden costs for individual learners, schools, or educators.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How can I contribute to development?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Check out our GitHub repositories for contribution guidelines. We welcome
                developers, educators, and content creators who want to improve our programs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do you offer training or support?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We provide comprehensive documentation, video tutorials, and community support for all learners.
                For individual questions, use our learning support contact option. For institutional partnerships,
                we also offer personalized training sessions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}