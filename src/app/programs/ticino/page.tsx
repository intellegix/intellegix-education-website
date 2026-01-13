import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ticino | Language Learning Database Platform",
  description: "Interactive language database system for multilingual education. Open source educational program for language teachers and students.",
}

export default function TicinoPage() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <div className="flex justify-center mb-4">
          <Badge className="mb-4" variant="secondary">
            Language Learning
          </Badge>
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Ticino
        </h1>
        <p className="mb-8 text-xl leading-8 text-gray-600">
          A live, comprehensive language learning encyclopedia featuring interactive databases,
          vocabulary management, and cultural context where you can master new languages
          through structured, engaging exercises at your own pace. <strong>Explore the full platform at ticinoencyclopedia.org!</strong>
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="bg-intellegix-cyan text-white hover:bg-intellegix-cyan/90" asChild>
            <Link href="https://ticinoencyclopedia.org/" target="_blank" rel="noopener noreferrer">
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

      {/* Languages Supported */}
      <section className="mb-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Multilingual Database
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Comprehensive language database supporting multiple languages and dialects
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { lang: "Italian", region: "Italy/Switzerland", flag: "🇮🇹" },
            { lang: "English", region: "US/UK/Australia", flag: "🇺🇸" },
            { lang: "Spanish", region: "Spain/Latin America", flag: "🇪🇸" },
            { lang: "French", region: "France/Canada", flag: "🇫🇷" },
            { lang: "German", region: "Germany/Austria", flag: "🇩🇪" },
            { lang: "Portuguese", region: "Brazil/Portugal", flag: "🇧🇷" },
            { lang: "Chinese", region: "Mandarin/Cantonese", flag: "🇨🇳" },
            { lang: "Japanese", region: "Japan", flag: "🇯🇵" },
          ].map((language) => (
            <Card key={language.lang} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-2">{language.flag}</div>
                <h3 className="font-semibold mb-1">{language.lang}</h3>
                <p className="text-sm text-gray-600">{language.region}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Overview */}
      <section className="mb-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Learning Features
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Comprehensive language education through interactive technology
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Vocabulary</CardTitle>
              <CardDescription>
                Dynamic vocabulary management with spaced repetition algorithms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Smart flashcard system</li>
                <li>• Audio pronunciations</li>
                <li>• Visual associations</li>
                <li>• Progress tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Grammar Modules</CardTitle>
              <CardDescription>
                Comprehensive grammar instruction with interactive exercises
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Conjugation practice</li>
                <li>• Sentence structure</li>
                <li>• Grammar rules</li>
                <li>• Error correction</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cultural Context</CardTitle>
              <CardDescription>
                Learn language through cultural immersion and real-world scenarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cultural notes</li>
                <li>• Historical context</li>
                <li>• Regional variations</li>
                <li>• Social customs</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Speaking Practice</CardTitle>
              <CardDescription>
                Voice recognition and pronunciation feedback systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Speech recognition</li>
                <li>• Pronunciation scoring</li>
                <li>• Accent training</li>
                <li>• Conversation simulation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reading Comprehension</CardTitle>
              <CardDescription>
                Progressive reading exercises with comprehension assessment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Graded reading materials</li>
                <li>• Comprehension quizzes</li>
                <li>• Text analysis tools</li>
                <li>• Reading speed tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Writing Assistance</CardTitle>
              <CardDescription>
                Guided writing exercises with automated feedback and correction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Writing prompts</li>
                <li>• Grammar checking</li>
                <li>• Style suggestions</li>
                <li>• Peer review system</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pedagogical Approach */}
      <section className="bg-gray-50 rounded-lg p-12 mb-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Pedagogical Approach
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Based on proven language learning methodologies and research
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                📚
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Communicative Language Teaching</h3>
              <p className="text-gray-600">
                Emphasizes real-world communication skills over rote memorization, preparing
                you for authentic language use in practical situations.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                🧠
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Spaced Repetition</h3>
              <p className="text-gray-600">
                Scientifically-backed memory techniques ensure long-term retention by
                presenting vocabulary and concepts at optimal intervals for memory consolidation.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">
                🌍
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Cultural Immersion</h3>
              <p className="text-gray-600">
                Language learning integrated with cultural understanding, helping you
                appreciate context, nuances, and appropriate usage in different social settings.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold">
                📊
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Data-Driven Learning</h3>
              <p className="text-gray-600">
                Continuous assessment and analytics provide personalized feedback and adaptive
                learning paths tailored to your personal progress and learning style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Database Structure */}
      <section className="mb-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Technical Architecture
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Sophisticated database design optimized for language learning
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Lexical Database</CardTitle>
              <CardDescription>
                Comprehensive vocabulary with etymology and usage patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600 mb-2">50k+</div>
              <div className="text-sm text-gray-600">Words per language</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>Grammar Rules</CardTitle>
              <CardDescription>
                Structured grammar database with examples and exceptions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Grammar rules</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>Audio Files</CardTitle>
              <CardDescription>
                Native speaker recordings for pronunciation reference
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600 mb-2">25k+</div>
              <div className="text-sm text-gray-600">Audio recordings</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>Cultural Notes</CardTitle>
              <CardDescription>
                Contextual information about language use in different cultures
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600 mb-2">5k+</div>
              <div className="text-sm text-gray-600">Cultural entries</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Implementation for Educators */}
      <section className="mb-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Advanced Learning Tools
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Powerful features for mastering new languages and building fluency
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Personal Learning Planner</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Personalized learning paths</li>
                <li>• Progress tracking</li>
                <li>• Self-assessment tools</li>
                <li>• Performance analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Customization</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Add custom vocabulary</li>
                <li>• Create exercises</li>
                <li>• Upload audio files</li>
                <li>• Join learning communities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Your progress reports</li>
                <li>• Performance analytics</li>
                <li>• Usage statistics</li>
                <li>• Learning insights</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-intellegix-green rounded-lg p-12 text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Master Any Language with AI-Powered Tools
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Join learners worldwide who are using Ticino's live encyclopedia to build
            fluency and cultural understanding through interactive, personalized experiences. Start exploring today!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-intellegix-green hover:bg-gray-100" asChild>
              <Link href="https://ticinoencyclopedia.org/" target="_blank" rel="noopener noreferrer">
                Explore Live Encyclopedia
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-intellegix-green" asChild>
              <Link href="/get-started">
                Start Learning
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}