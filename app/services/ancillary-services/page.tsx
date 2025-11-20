"use client";

export default function Services() {
  return (
    <section
      className="flex gap-24 mt-80 flex-wrap"
      aria-labelledby="community-heading"
    >
      <h2 id="community-heading" className="flex-one hero-text-heading">
        Ancillary Services
      </h2>

      <div className="flex-2 flex flex-col gap-24">
        <p className="hero-text-paragraph m-0">
          Growing businesses often encounter areas where specialized expertise
          is essential, yet building internal teams is not always feasible.
        </p>
        <p className="hero-text-paragraph m-0">
          Our Ancillary Services provide flexible, on-demand support to help you
          navigate challenges, make data-informed decisions, and drive growth
          with the right guidance at the right time.
        </p>

        <ul>
          <b>Our ancillary services include:</b>
          <p style={{ height: "40px" }}></p>
          <li className="mb-2">
            <b>- Project Management Support:</b>
            <p className="hero-text-paragraph m-0">
              We help you plan, execute, and monitor projects efficiently,
              ensuring milestones are met and goals are achieved with precision.
            </p>
          </li>
          <li className="mb-2">
            <b>- Technology Advisory</b>
            <p className="hero-text-paragraph m-0">
              At Sina Consulting Services, we help organisations harness
              technology to drive growth, efficiency, and strategic advantage.
              Through digital transformation, our data-driven guidance ensures
              technology investments deliver measurable, real-world impact.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
