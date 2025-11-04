"use client";
import SectionTitle from "@/components/SectionTitle";
// import useOwlCarouselHook, {
//   owlConfig_two_and_half_box,
// } from "@/hooks/useOwlCarouselHook";

export default function Services() {
  // const { handleOwlReadyOne } = useOwlCarouselHook(owlConfig_two_and_half_box);

  return (
    <section
      className="flex gap-24 mt-80 flex-wrap"
      aria-labelledby="community-heading"
    >
      <h2 id="community-heading" className="flex-one hero-text-heading">
        Educational Services
      </h2>

      <div className="flex-2 flex flex-col gap-24">
        <p className="hero-text-paragraph m-0">
          Knowledge empowers progress. Through our Educational Services, we help
          organizations and institutions build capacity, strengthen leadership,
          and embrace continuous learning.
        </p>
        <p className="hero-text-paragraph m-0">
          Our programs are designed to bridge skill gaps, integrate technology
          into learning environments, and foster a culture of growth and
          innovation.
        </p>

        <ul>
          <b>Our educational solutions include:</b>
          <p style={{height: "40px"}} ></p>
          <li className="mb-2">
            <b>- Training & Capacity Building</b>
            <p className="hero-text-paragraph m-0">
              Tailored programs that enhance organizational skills and
              leadership capabilities.
            </p>
          </li>
          <li className="mb-2">
            <b>- Educational Technology Integration</b>
            <p className="hero-text-paragraph m-0">
              Helping institutions adopt digital tools that transform the
              learning experience and streamline academic operations.to
              actionable insights for smarter business decisions.
            </p>
          </li>
        </ul>

        <p className="hero-text-paragraph m-0">
          Whether for corporate teams or academic institutions, we design
          learning initiatives that are relevant, practical, and aligned with
          your strategic objectives.
        </p>
      </div>
    </section>
  );
}
