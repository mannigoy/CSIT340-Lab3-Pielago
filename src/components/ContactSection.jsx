import ContactLink from "./ContactLink";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact"  className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
     

      <ul class="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:emmanroy.pielago@cit.edu"
          text="emmanroy.pielago@cit.edu"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/mannigoy"
          text="github.com/mannigoy"
        />
        <ContactLink
          label="LinkedIn"
          href="https://linkedin.com/in/emmanroypielago"
          text="linkedin.com/in/emmanroypielago"
        />
      </ul>
    </section>
  );
}