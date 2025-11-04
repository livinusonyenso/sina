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
          <p style={{height: "40px"}} ></p>
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
              Our Technology Advisory service helps businesses make strategic
              decisions about the tools, platforms, and systems that support
              growth and efficiency
            </p>
            <p className="hero-text-paragraph m-0">
              We guide you in selecting software that fits your operations and
              future plans, ensure your systems work seamlessly together, and
              provide advice on building technology that can scale with your
              business.
            </p>
            <p className="hero-text-paragraph m-0">
              We also share insights into emerging technologies and innovations
              that can create competitive advantages. Technology Advisory
              bridges the gap between knowing you need technology and having the
              expertise to implement it effectively — giving you expert guidance
              without the need for full-time internal specialists.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
