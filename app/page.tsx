"use client";
import React, { useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";
import ServiceList from "@/components/ServiceList";
import Link from "next/link";
import AboutCard from "@/components/AboutCard";
import { useParallaxEffectHook } from "@/hooks/useParallaxEffectHook";
import Image from "next/image";

function ReadMoreText({ text, url }: { text: string; url: string }) {
  const [expanded, setExpanded] = React.useState(false);
  const preview = text.slice(0, 5000);

  return (
    <p className="m-0 card__description">
      {expanded ? text : `${preview} `}
      <button
        // onClick={(e) => {
        //   setExpanded(!expanded);
        // }}
        onClick={() => {
          // e.stopPropagation();
          // window.open(url);
        }}
        className="text-[#007f3b] font-semibold text-sm hover:underline bg-transparent border-none"
        style={{ cursor: "pointer" }}
      >
        {expanded ? "Read less" : "Connect on LinkedIn"}
      </button>
    </p>
  );
}

export default function Home() {
  useParallaxEffectHook(".dac-parralex-effect");

  let activeIndex = 0;

  // Helper to get cards NodeList
  const getCards = () =>
    Array.from(document.querySelectorAll<HTMLElement>(".events_card"));

  // Move to next card immediately
  const nextCard = (e?: React.MouseEvent | Event) => {
    if (e && typeof (e).preventDefault === "function")
      (e).preventDefault();
    const cards = getCards();
    if (!cards.length) return;

    // remove active from current
    const current = cards[activeIndex];
    current.classList.remove("active");
    current.classList.add("behind");

    // compute next
    activeIndex = (activeIndex + 1) % cards.length;

    // show next
    const next = cards[activeIndex];
    next.classList.add("active");
    next.classList.remove("behind");
  };

  // Move to previous card immediately
  const prevCard = (e?: React.MouseEvent | Event) => {
    if (e && typeof (e).preventDefault === "function")
      (e).preventDefault();
    const cards = getCards();
    if (!cards.length) return;

    // remove active from current
    const current = cards[activeIndex];
    current.classList.remove("active");
    current.classList.add("behind");

    // compute prev safely
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;

    // show prev
    const prev = cards[activeIndex];
    prev.classList.add("active");
    prev.classList.remove("behind");
  };

  // initialize classes once on mount
  useEffect(() => {
    // run only on client
    if (typeof window === "undefined") return;

    const cards = getCards();
    if (!cards.length) return;

    // ensure all cards have appropriate classes
    cards.forEach((c, i) => {
      c.classList.remove("active", "behind");
      if (i === 0) {
        c.classList.add("active");
      } else {
        c.classList.add("behind");
      }
    });

    activeIndex = 0;

    // optional: if you want the .card__link elements to always move to next card when clicked,
    // you can attach listeners here. Not required if you're using onClick={nextCard} inline.
    // const links = document.querySelectorAll<HTMLElement>('.card__link');
    // links.forEach(link => {
    //   link.addEventListener('click', nextCard);
    // });

    // cleanup if you attached handlers above (uncomment if used)
    // return () => links.forEach(link => link.removeEventListener('click', nextCard));
  }, []);

  // Then in your JSX replace usage of handleSwiper with nextCard, e.g.:
  // <a onClick={nextCard} className="card__link" ...>...</a>

  return (
    <>
      {/* <AnimatedSection> */}
      <div
        className="mt-80 flex video-container bg-img-license items-start"
        aria-label="video-section"
      >
        <div
          className="hero-left w-85 flex flex-col gap-24 color-white p-40"
          role="region"
        >
          <h2
            id="hero-heading"
            className="hero-text-heading color-white fs-64 line-height-64"
          >
            Sina: Data-Driven Insights, Real-World Impact
          </h2>

          <p className="hero-text-paragraph m-0 color-white ">
            At Sina Consulting Services, we help organisations unlock their full
            potential. Through expert data-driven guidance in business strategy,
            consulting, and trainings, we deliver tailored solutions that enable
            sustainable growth, efficiency, and innovation. Whether youre a
            startup scaling operations, a mid-size firm undergoing digital
            transformation, or an educational institution seeking modern
            learning solutions, we partner with you to turn challenges into
            opportunities.
          </p>

          <Link
            href="/about"
            className="dac-btn outline color-white"
            role="button"
            aria-label="Become a Member at Sina"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* <SectionTitle
        heading="Sina"
        paragraph="At Sina Consulting Services, we empower organizations and individuals to achieve their full potential. Specializing in business, trainings, and management consultancy, as well as educational services, we deliver tailored solutions that drive growth, efficiency, and innovation. Partner with us to unlock new opportunities and elevate your success."
        ctaText="Learn More"
        href="/about"
        showCta={true}
        secondParagraph="Our team of seasoned experts collaborates closely with clients to understand their unique challenges and goals. We provide strategic insights, cutting-edge IT solutions, and comprehensive training programs designed to enhance skills and knowledge. Whether you're looking to optimize business processes, implement new technologies, or advance your career through education, Sina Consulting Services is here to guide you every step of the way."
      /> */}

      <section
        className="action-cards mt-80"
        aria-label="Actions to register or scale your association in Sina"
      >
        <AboutCard
          heading="Register Your Association In Sina"
          href="/contact"
        />
        {/* <AboutCard
          heading="Scale Your Association With Sina"
          href="/contact"
          className="card-second-img"
        /> */}
      </section>

      <SectionTitle
        heading="Our Services"
        paragraph="At Sina Consulting Services, we are passionate about driving progress for businesses, organizations, and individuals. Our comprehensive suite of services—spanning business strategy solutions, management consultancy, and professional education—is rooted in a deep understanding ......."
      />

      <ServiceList />

      {/* <section
        className="eligibilitySection mt-80"
        aria-label="Membership registration process"
      >
        <div className="flex gap-24 mobile-flex-wrap">
          <ol className="steps m-0" aria-label="Steps to become a member">
            <li className="step ">
              <div className="step_number" aria-hidden="true">
                1
              </div>
              <p className="m-0 step_text">Our Approach</p>
            </li>
            <div className="step-spacer"></div>
            <li className="step ">
              <div className="step_number" aria-hidden="true">
                2
              </div>
              <p className="m-0 step_text">What We Offer</p>
            </li>
            <div className="step-spacer"></div>
            <li className="step ">
              <div className="step_number" aria-hidden="true">
                3
              </div>
              <p className="m-0 step_text">Results You Can Expect </p>
            </li>
          </ol>

          <div className="eligibility_overlay dac-zoom-in ">
            <h2 className="m-0">Our Strategy</h2>
            <Buttons
              href="/services"
              title="Learn More"
              className="color-white"
            />
          </div>
        </div>
      </section> */}

      <section
        className="events mt-120 mobile-flex-wrap"
        aria-label="Upcoming events and conferences"
        id="our-people"
      >
        <div className="events__left flex-one">
          <h2 className="events__title hero-text-heading text-end">
            Our People <br />
          </h2>
        </div>

        <div
          className="events__center dac-transition-Y"
          style={{ opacity: 1, visibility: "visible", transform: "none" }}
        >
          {/* Card 1 */}
          <article
            id="card1"
            className="events_card card--stacked active"
            aria-labelledby="event-title-2025"
            style={{ cursor: "pointer" }}
          >
            <h3
              id="event-title-2025"
              className="card__title text-heading-md m-0"
            >
              Our people
            </h3>
            <p className="m-0 card__date" aria-label="Event Date: July 2025">
              Olufunmilayo Olanrewaju Founder
            </p>

            {/* Description with read more toggle */}
            <ReadMoreText
              text={`Olufunmilayo, the founder of Sina Consulting Services, is a dynamic business
        leader with over 20+ years of versatile experience covering credit analysis,
        financial modeling, business analysis and project management across banking
        and financial services. She has a track record of driving data-driven strategies,
        optimizing risk frameworks, and delivering actionable insights that enhance
        decision-making and business performance.`}
              url="https://www.linkedin.com/in/funmilayo-olanrewaju-x/"
            />

            <a
              style={{ zIndex: 500 }}
              className="card__link"
              aria-label="Learn more about Sina Conference 2025"
              onClick={nextCard}
            >
              <span className="card__icon" aria-hidden="true">
                <Image
                  height={16}
                  width={16}
                  src="/assets/card-arrow.svg"
                  role="presentation"
                  alt=""
                />
              </span>
            </a>
          </article>

          {/* Card 2 */}
          <article
            id="card2"
            className="events_card card--stacked"
            aria-labelledby="event-title-2026"
            // onClick={() =>
            //   window.open("http://linkedin.com/in/mariam-ajibade", "_blank")
            // }
            style={{ cursor: "pointer" }}
          >
            <h3
              id="event-title-2026"
              className="card__title text-heading-md m-0"
            >
              Our people
            </h3>
            {/* <Image
              height={100}
              width={100}
              src="/assets/img-6.jpg"
              alt="Attendees networking at Sina Conference 2026"
              className="card__image"
            /> */}
            <p className="m-0 card__date" aria-label="Event Date: July 2026">
              Mariam Ajibade Cofounder
            </p>

            <ReadMoreText
              text={`Mariam Ajibade is the Cofounder of Sina Consulting Services with a proven record
        of leading projects that deliver measurable business results. She has guided
        initiatives across business development, data analysis, and customer operations,
        combining strategic insight with practical execution. At Sina Consulting Services,
        Mariam applies this diverse project experience to help organisations rethink
        strategy, optimise operations, and adapt to change. Her approach balances
        analytical rigour with a focus on sustainable outcomes, ensuring clients are
        equipped to achieve long-term success.`}
              url="http://linkedin.com/in/mariam-ajibade"
            />

            <a
              onClick={nextCard}
              className="card__link"
              aria-label="Learn more about Sina Conference 2026"
              style={{ zIndex: 500 }}
            >
              <span className="card__icon" aria-hidden="true">
                <Image
                  height={16}
                  width={16}
                  src="/assets/card-arrow.svg"
                  role="presentation"
                  alt=""
                />
              </span>
            </a>
          </article>
        </div>

        <div className="events__right flex-one">
          <p className="m-0 events__description">
            As a Sina member, your business gains exclusive access to networking
            events, workshops, and industry forums. Engage with other
            associations, share knowledge, and explore new collaboration
            opportunities that help drive your mission forward.
          </p>
          <a
            href="/contact"
            className="dac-btn outline"
            aria-label="View all upcoming events at Sina"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* </AnimatedSection> */}
    </>
  );
}
