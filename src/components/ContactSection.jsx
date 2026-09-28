import ContactLink from "./ContactLink";

export default function ContactSection() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Say hi.</p>

      <ul>
        <ContactLink
          label="Email"
          href="mailto:juan.delacruz@cit.edu"
          text="juan.delacruz@cit.edu"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/juandelacruz"
          text="github.com/juandelacruz"
        />
        <ContactLink
          label="LinkedIn"
          href="https://linkedin.com/in/juandelacruz"
          text="linkedin.com/in/juandelacruz"
        />
      </ul>
    </section>
  );
}