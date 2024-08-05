import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
        Where Language Practice Meets Peace of Mind
        </p>
        <p className="mt-4">
        Embark on your language learning journey with LinguaClarity, your AI-powered conversation partner designed to help you speak a new language with confidence and ease. Our intelligent bot guides you through engaging, in-depth conversations across a wide range of topics, allowing you to practice without the pressure of real-world interactions. With LinguaClarity, you can hone your skills at your own pace, in your own space.
        </p>
        <p className="mt-4">
        Discover the freedom of stress-free conversation:
        </p>

        <ul role="list" className="mt-8 space-y-3">
          {[
            'Text-Based Interaction: Engage with our AI in a text-based chat that understands and responds to a multitude of conversational prompts, providing you with a realistic interaction experience.',
            'Prolonged Sessions: Enjoy extensive conversation sessions lasting over 20 minutes, ideal for deepening your comprehension and fluency.',
            'Diverse Topics: Choose from a vast selection of topics to practice the language in contexts that interest you or prepare you for real-life situations.',
            'Personalized Experience: As LinguaClarity evolves, look forward to chatting with a range of personas that can mimic real-life characters and scenarios, enhancing your cultural and linguistic understanding.',
            'Future Forward: Get excited about upcoming features like pronunciation assessments and the option to interact with a 3D realistic metahuman or animated character for an immersive language practice experience.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
        LinguaClarity isn’t just about learning a new language; it’s about building the confidence to use it. Whether you’re a beginner or looking to brush up on your proficiency, we provide a supportive space to practice, improve, and ultimately, excel.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get an introductory lesson straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
