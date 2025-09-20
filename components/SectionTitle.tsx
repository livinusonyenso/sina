"use client";
import Buttons from "./Buttons";

export default function SectionTitle({
  heading,
  href,
  ctaText,
  paragraph,
  secondParagraph,
  showCta = true,
}: {
  heading?: string;
  href?: string;
  ctaText?: string;
  showCta?: boolean;
  paragraph?: string;
  secondParagraph?: string;
}) {
  return (
    <section
      className="flex gap-24 mt-80 flex-wrap"
      aria-labelledby="community-heading"
    >
      <h2 id="community-heading" className="flex-one hero-text-heading">
        {heading || "Professional Associations"}
      </h2>

      <div className="flex-one flex flex-col gap-24">
        <p className="hero-text-paragraph m-0">{paragraph}</p>
        <p className="hero-text-paragraph m-0">{secondParagraph}</p>

        {showCta && <Buttons href={href} title={ctaText} />}
      </div>
    </section>
  );
}
