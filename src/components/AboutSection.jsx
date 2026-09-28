import Fact from './Fact'

export default function AboutSection() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>A little about who I am.</p>

      <p>
        I grew up in Talisay and moved to Cebu City for college. I picked IT
        because I wanted to build things people actually open. So far my
        favorite part is the moment something finally runs.
      </p>

      <dl>
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
}