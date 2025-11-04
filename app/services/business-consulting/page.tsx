"use client";

export default function Services() {
  // const { handleOwlReadyOne } = useOwlCarouselHook(owlConfig_two_and_half_box);

  return (
    <>
      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading" className="flex-one hero-text-heading">
          Business Consulting
        </h2>

        <div className="flex-2 flex flex-col gap-24">
          <p className="hero-text-paragraph m-0">
            At the heart of our work is a commitment to helping organizations
            make informed, strategic decisions. Our Business Consulting services
            combine analytical precision with real-world insights to address
            complex challenges and uncover new opportunities for growth.
          </p>
          <p className="hero-text-paragraph m-0">
            We work with leadership teams to build strategies that are not only
            visionary but actionable — guiding clients through each phase of
            development and transformation.
          </p>

          <ul>
            <b>Our key areas of expertise include:</b>
            <p style={{ height: "40px" }}></p>
            <li className="mb-2">
              <b>- Strategy Development</b>
              <p className="hero-text-paragraph m-0">
                Crafting clear, data-backed strategies that align with your
                long-term goals.
              </p>
            </li>
            <li className="mb-2">
              <b>- Analytics Consulting</b>
              <p className="hero-text-paragraph m-0">
                Turning data into actionable insights for smarter business
                decisions.
              </p>
            </li>

            <li className="mb-2">
              <b>- Data Management:</b>
              <p className="hero-text-paragraph m-0">
                Establishing robust systems for collecting, analyzing, and
                governing data.
              </p>
            </li>
            <li className="mb-2">
              <b>- Organizational Development:</b>
              <p className="hero-text-paragraph m-0">
                Designing agile structures that enhance performance and
                collaboration.
              </p>
            </li>
            <li className="mb-2">
              <b>- Process Optimization:</b>
              <p className="hero-text-paragraph m-0">
                Streamlining workflows and operations to improve efficiency and
                reduce cost.
              </p>
            </li>
            <li className="mb-2">
              <b>- Change Management:</b>
              <p className="hero-text-paragraph m-0">
                Supporting teams through transitions to ensure adoption and
                success.
              </p>
            </li>
            <li className="mb-2">
              <b>- Digital Transformation:</b>
              <p className="hero-text-paragraph m-0">
                Helping businesses leverage technology for innovation and
                scalability.
              </p>
            </li>
            <li className="mb-2">
              <b>- Credit Risk Advisory & Compliance:</b>
              <p className="hero-text-paragraph m-0">
                Building frameworks to manage risk and maintain regulatory
                integrity.
              </p>
            </li>
          </ul>

          <p className="hero-text-paragraph m-0">
            Our consulting philosophy emphasizes measurable outcomes,
            transparency, and collaboration — ensuring every recommendation
            delivers real business impact.
          </p>
        </div>
      </section>
    </>
  );
}
