"use client";
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import ServiceList from "@/components/ServiceList";
import Link from "next/link";
import AboutCard from "@/components/AboutCard";
import { useParallaxEffectHook } from "@/hooks/useParallaxEffectHook";
import Buttons from "@/components/Buttons";
import Image from "next/image";

export default function Home() {
  useParallaxEffectHook(".dac-parralex-effect");

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
            Sina Consultancy, Empowering Your Growth in Business, Technology,
            and Education.
          </h2>

          <p className="hero-text-paragraph m-0 color-white ">
            Sina Consulting Services is your trusted partner in business
            transformation. Through expert guidance in business strategy, IT
            solutions, management consultancy, and professional education, we
            help you navigate challenges and seize new opportunities in an
            ever-changing world.
          </p>

          <Link
            href="/about"
            className="dac-btn outline color-white"
            role="button"
            aria-label="Become a Member at Sina Consultancy"
          >
            Learn More
          </Link>
        </div>
      </div>

      <SectionTitle
        heading="Sina Consultancy"
        paragraph="At Sina Consulting Services, we empower organizations and individuals to achieve their full potential. Specializing in business, information technology, and management consultancy, as well as educational services, we deliver tailored solutions that drive growth, efficiency, and innovation. Partner with us to unlock new opportunities and elevate your success."
        ctaText="Learn More"
        href="/about"
        showCta={true}
        secondParagraph="Our team of seasoned experts collaborates closely with clients to understand their unique challenges and goals. We provide strategic insights, cutting-edge IT solutions, and comprehensive training programs designed to enhance skills and knowledge. Whether you're looking to optimize business processes, implement new technologies, or advance your career through education, Sina Consulting Services is here to guide you every step of the way."
      />

      <section
        className="action-cards mt-80"
        aria-label="Actions to register or scale your association in Sina Consultancy"
      >
        <AboutCard
          heading="Register Your Association In Sina Consultancy"
          href="/contact"
        />
        <AboutCard
          heading="Scale Your Association With Sina Consultancy"
          href="/contact"
          className="card-second-img"
        />
      </section>

      <SectionTitle
        heading="Our Services"
        paragraph="At Sina Consulting Services, we are passionate about driving progress for businesses, organizations, and individuals. Our comprehensive suite of services—spanning business strategy, information technology solutions, management consultancy, and professional education—is rooted in a deep understanding ......."
      />

      <ServiceList />

      <section
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
      </section>

      <section
        className="events mt-120 mobile-flex-wrap"
        aria-label="Upcoming events and conferences"
      >
        <div className="events__left flex-one">
          <h2 className="events__title hero-text-heading text-end">
            Transparency <br />
            Satisfaction <br />
            Strategic <br />
            Growth <br />
          </h2>
        </div>

        <div className="events__center dac-transition-Y">
          <article
            id="card1"
            className="events_card card--stacked active"
            aria-labelledby="event-title-2025"
          >
            <h3
              id="event-title-2025"
              className="card__title text-heading-md m-0"
            >
              Sina Consultancy Teams
            </h3>
            <Image
              height={100}
              width={100}
              src="/assets/img-6.jpg"
              alt="Attendees networking at Sina Consultancy Conference 2025"
              className="card__image"
            />
            <p className="m-0 card__date" aria-label="Event Date: July 2025">
              Senior Consultant Jummyo
            </p>
            <p className="m-0 card__description">
              Know more about our expert teams and how they can help your
              association grow.
            </p>
            <a
              href="#"
              className="card__link"
              aria-label="Learn more about Sina Consultancy Conference 2025"
            >
              <span className="card__icon" aria-hidden="true">
                <Image
                  height={24}
                  width={24}
                  src="/assets/card-arrow.svg"
                  role="presentation"
                  alt=""
                />
              </span>
            </a>
          </article>

          <article
            id="card2"
            className="events_card card--stacked"
            aria-labelledby="event-title-2026"
          >
            <h3
              id="event-title-2026"
              className="card__title text-heading-md m-0"
            >
              Sina Consultancy Teams
            </h3>
            <Image
              height={100}
              width={100}
              src="/assets/dubai-skyline.png"
              alt="Attendees networking at Sina Consultancy Conference 2026"
              className="card__image"
            />
            <p className="m-0 card__date" aria-label="Event Date: July 2026">
              Manager Ajibade Mariam
            </p>
            <p className="m-0 card__description">
              Know more about our expert teams and how they can help your
              association grow.
            </p>
            <a
              href="#"
              className="card__link"
              aria-label="Learn more about Sina Consultancy Conference 2026"
            >
              <span className="card__icon" aria-hidden="true">
                <Image
                  height={24}
                  width={24}
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
            As a DAC member, your association gains exclusive access to
            networking events, workshops, and industry forums. Engage with other
            associations, share knowledge, and explore new collaboration
            opportunities that help drive your mission forward.
          </p>
          <a
            href="#"
            className="dac-btn outline"
            aria-label="View all upcoming events at Sina Consultancy"
          >
            Contact Us
          </a>
        </div>
      </section>
      {/* </AnimatedSection> */}
    </>
  );
}
