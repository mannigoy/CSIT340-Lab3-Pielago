import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";
export default function ExperienceSection() {
    return (
          <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
     
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem 
          period="2022 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web development, databases, and systems analysis."
        />
        <TimelineItem 
          period="2025"
          title="Freelance WordPress Developer"
          place="Direct Client"
          description="Created a WordPress website for a client using Elementor and custom CSS. Optimized the website for speed and SEO."
        />
       
      
      </ol>
    </section>
    )};