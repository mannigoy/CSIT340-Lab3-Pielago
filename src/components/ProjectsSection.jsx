import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16" >
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="StallHub"
          description="Public Market Stall Management System that manages stall owner records, rental agreements, contracts, and payment tracking for public market administrators."
          tech="React · Tailwind CSS"
          link="https://github.com/mannigoy/StallHub"
        />
        <ProjectCard
          year="2026"
          title="Campus Marketplace"
          description="Full-stack campus marketplace allowing students, faculty, and staff to browse products, check stock, and place orders
— eliminating long queues."
          tech="React · Tailwind CSS · Spring Boot · MySQL"
          link="https://github.com/mannigoy/Campus_Marketplace"
        />
        <ProjectCard
          year="2025"
          title="Wordbai"
          description="A Wordle-inspired daily word game that uses Cebuano words, making the popular format accessible to local language
speakers."
          tech="JavaScript · Tailwind CSS · React"
          link="https://wordbai-ftvb.vercel.app/"
        />
        <ProjectCard
          year="2025"
          title="DocCall"
          description="Full-stack doctor appointment platform built to reduce unnecessary hospital visits by enabling online consultations."
          tech="HTML, TailwindCSS, JavaScript, and PHP"
          link="https://github.com/mannigoy/DOCCALL"
        />
        <ProjectCard
          year="2026"
          title="Dutch Blitz Scoresheet"
          description="A scoresheet for the Dutch Blitz card game, allowing players to track their scores and game progress."
          tech="HTML, TailwindCSS, JavaScript, and PHP"
          link="https://dutch-blitz-scorecard.vercel.app"
        />
         <ProjectCard
          year="2026"
          title="CryptoCalc"
          description="Desktop crypto profit calculator that shows fees, gross/net profit, PHP conversion, and real-time results. Includes a reverse target-price engine to calculate the exact sell price needed for your desired profit."
          tech="Tauri · React · Tailwind CSS"
          link="https://github.com/mannigoy/Crypto_Profit_Calculator"
        />
      </div>
    </section>
  )
}