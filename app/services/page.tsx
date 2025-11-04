"use client";
import SectionTitle from "@/components/SectionTitle";
// import useOwlCarouselHook, {
//   owlConfig_two_and_half_box,
// } from "@/hooks/useOwlCarouselHook";

export default function Services() {
  // const { handleOwlReadyOne } = useOwlCarouselHook(owlConfig_two_and_half_box);

  return (
    <>
      {/* <Script src="/scripts/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      <Script
        src="/scripts/owl.carousel.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          handleOwlReadyOne("#carousel-container");
        }}
      />
      <Script src="/scripts/index.js" strategy="afterInteractive" /> */}

      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading" className="flex-one hero-text-heading">
          Our Services
        </h2>

        <div className="flex-2 flex flex-col gap-24">
          <p className="hero-text-paragraph m-0">
            At Sina Consulting Services, we are passionate about driving
            progress for businesses, organizations, and individuals. Our
            comprehensive suite of services—spanning business strategy
            solutions, management consultancy, and professional education—is
            rooted in a deep understanding of modern challenges and
            opportunities. We believe that sustainable growth comes from
            tailored solutions, rigorous analysis, and a commitment to
            continuous improvement.
          </p>
          <p className="hero-text-paragraph m-0">
            Whether you are seeking to transform your business, optimize your
            technology landscape, enhance your management practices, or elevate
            your teams expertise, our experienced consultants are ready to guide
            you. We combine industry insight with practical experience,
            delivering measurable value at every stage of your journey. Below,
            you will find a detailed overview of the core services that define
            Sina Consulting Services.
          </p>
        </div>
      </section>

      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading" className="flex-one hero-text-heading">
          Business Consulting
        </h2>

        <div className="flex-2 flex flex-col gap-24">
          <p className="hero-text-paragraph m-0">
            Growing businesses often encounter areas where specialized expertise
            is essential, yet building internal teams is not always feasible.
            Our Business services provide flexible, on demand support to help
            you navigate challenges, make data-informed decisions, and drive
            growth with the right guidance at the right time
          </p>
        </div>
      </section>

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
            Our ancillary services provide flexible, on demand support to help
            you navigate challenges, make data-informed decisions, and drive
            growth with the right guidance at the right time
          </p>

          <ul>
            <li className="mb-2">
              <b>- Technology Advisory:</b>
              <p className="hero-text-paragraph">
                Our Technology Advisory service helps businesses make strategic
                decisions about the tools, platforms, and systems that support
                growth and efficiency. We guide you in selecting software that
                fits your operations and future plans, ensure your systems work
                seamlessly together, and provide advice on building technology
                that can scale with your business. We also share insights into
                emerging technologies and innovations that can create
                competitive advantages. Technology Advisory bridges the gap
                between knowing you need technology and having the expertise to
                implement it effectively, giving you guidance without the need
                for full-time internal experts
              </p>
            </li>
          </ul>
          <p className="hero-text-paragraph m-0"></p>
        </div>
      </section>

      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading" className="flex-one hero-text-heading">
          Educational Services
        </h2>

        <div className="flex-2 flex flex-col gap-24">
          <p className="hero-text-paragraph m-0">
            Continuous learning is a strategic advantage in today fast-changing
            world. **Sina Consulting Services** offers a broad range of
            professional education programs designed to nurture talent, close
            skills gaps, and drive organizational excellence.
          </p>

          <p className="hero-text-paragraph m-0">
            We believe that education should be practical, engaging, and
            tailored to real-world challenges. Our team of experienced trainers
            and subject matter experts collaborate with you to assess learning
            needs and craft bespoke programs for your workforce.
          </p>
          <p className="hero-text-paragraph m-0">
            We offer a blend of in-person workshops, virtual classrooms, and
            e-learning modules, ensuring flexible delivery that fits your
            organizations culture and schedule. Our curriculum spans
            foundational skills, advanced technical training, leadership
            development, and industry certifications.
          </p>

          {/* <h4 id="community-heading" className="flex-one hero-text-heading">
            What We Offer
          </h4>
          <ul>
            <li className="mb-2">
              <b>- Corporate Training:</b>
              <p className="hero-text-paragraph">
                Customized programs covering business acumen, communication,
                project management, customer service, and more.
              </p>
            </li>
            <li className="mb-2">
              <b> - Technical & IT Training:</b>
              <p className="hero-text-paragraph">
                Hands-on instruction in software development, cybersecurity,
                data analysis, cloud computing, and emerging technologies.
              </p>
            </li>
            <li className="mb-2">
              <b>- Leadership & Management Development:</b>
              <p className="hero-text-paragraph">
                Courses and workshops designed to build leadership pipelines and
                enhance management effectiveness.
              </p>
            </li>
            <li className="mb-2">
              <b>- Certification Preparation: </b>
              <p className="hero-text-paragraph">
                Assistance in preparing for globally recognized certifications
                (e.g., PMP, ITIL, Agile, Microsoft, AWS).
              </p>
            </li>
            <li className="mb-2">
              <b>- Workshops & Seminars: </b>
              <p className="hero-text-paragraph">
                Short-format learning experiences on trending topics and
                critical skills.
              </p>
            </li>
            <li className="mb-2">
              <b>- Learning Needs Assessment: </b>
              <p className="hero-text-paragraph">
                Diagnostic services to identify skills gaps and align training
                with business objectives.
              </p>
            </li>
          </ul> */}

          {/* <h4 id="community-heading" className="flex-one hero-text-heading">
            Results You Can Expect
          </h4>
          <ul>
            <li className="mb-2">
              <b>- Enhanced workforce capability and confidence </b>
            </li>
            <li className="mb-2">
              <b> - Improved employee retention and satisfaction </b>
            </li>
            <li className="mb-2">
              <b>- Readiness to adopt new technologies and practices</b>
            </li>
            <li className="mb-2">
              <b className="mb-2">
                - Demonstrable impact on organizational performance
              </b>
              <p className="hero-text-paragraph mt-2">
                With a commitment to excellence and innovation, we empower your
                people to learn, adapt, and lead in a competitive environment.
              </p>
            </li>
          </ul> */}
        </div>
      </section>

      {/* <SectionTitle
        heading="Partner with Sina Consulting Services"
        paragraph="Our holistic approach, deep expertise, and unwavering commitment to your success set us apart. "
        secondParagraph="Contact us today to learn more about how our services can transform your business, empower your teams, and position you for a brighter future."
        showCta={true}
        href="/contact"
        ctaText="Get in Touch"
      /> */}
    </>
  );
}
