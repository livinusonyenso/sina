"use client";
import Layout from "@/components/Layout";
import Image from "next/image";
import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import "/public/styles/owl.carousel.min.css";
import "/public/styles/owl.theme.default.min.css";

export default function About() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait until both scripts are loaded
    if (typeof window !== "undefined" && window.$ && window.$.fn?.owlCarousel) {
      // Only initialize if not already initialized
      if (!window.$("#carousel-container").hasClass("owl-loaded")) {
        window.$("#carousel-container").owlCarousel({
          loop: true,
          margin: 24,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
          responsive: {
            0: {
              items: 1,
              center: true,
              stagePadding: 40,
            },
            576: {
              items: 1,
              center: true,
              stagePadding: 150,
            },
            768: {
              items: 1,
              center: true,
              stagePadding: 150,
            },
            992: {
              items: 1,
              center: true,
              stagePadding: 180,
            },
            1200: {
              items: 1,
              center: true,
              stagePadding: 230,
            },
            1440: {
              items: 1,
              center: false,
              stagePadding: 380,
            },
          },
        });
      }
      setIsReady(true);
    }

    return () => {
      // Cleanup the carousel on unmount
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn?.owlCarousel
      ) {
        window.$("#carousel-container").owlCarousel("destroy");
      }
    };
  }, []);

  const handleOwlReady = useCallback(() => {
    if ((window as any).$ && (window as any).$?.fn?.owlCarousel) {
      if (!(window as any).$("#carousel-container").hasClass("owl-loaded")) {
        (window as any).$("#carousel-container").owlCarousel({
          loop: true,
          margin: 24,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
          responsive: {
            0: { items: 1, center: true, stagePadding: 40 },
            576: { items: 1, center: true, stagePadding: 150 },
            768: { items: 1, center: true, stagePadding: 150 },
            992: { items: 1, center: true, stagePadding: 180 },
            1200: { items: 1, center: true, stagePadding: 230 },
            1440: { items: 1, center: false, stagePadding: 380 },
          },
        });
      }
    }
  }, []);

  return (
    <>
      <Script src="/scripts/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      <Script
        src="/scripts/owl.carousel.min.js"
        strategy="afterInteractive"
        onLoad={handleOwlReady}
      />
      <Script src="/scripts/index.js" strategy="afterInteractive" />

      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading" className="flex-one hero-text-heading">
          Become A Member
        </h2>

        <div className="flex-one gap-24 flex flex-col">
          <p className="hero-text-paragraph m-0 p-0">
            Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada purus
            arcu. Neque mi arcu nunc velit. Ipsum congue cursus egestas
            ullamcorper vestibulum mus. Tristique enim risus leo ac vel auctor
            morbi mauris. Lorem ipsum dolor sit amet consectetur. Sapien arcu
            malesuada purus arcu. Neque mi arcu nunc velit. Ipsum congue cursus
            egestas ullamcorper vestibulum mus. Tristique enim risus leo ac vel
            auctor morbi mauris.
          </p>

          <a
            href="#"
            className="dac-btn outline"
            role="button"
            aria-label="Learn more about Sina Consultancy"
          >
            Contact us
          </a>
        </div>
      </section>

      <section
        className="action-cards mt-80"
        aria-label="Actions to register or scale your association in Sina Consultancy"
      >
        <article
          className="card image-card dac-zoom-in h-360 height-fit-content bg-membership"
          aria-label="Scale your association to Sina Consultancy, card with background image of Sina Consultancy skyline"
        >
          <div className="card-content"></div>
        </article>

        <article className="card color-sky-blue-bg h-360 height-fit-content dac-zoom-in">
          <div className="card-content p-40">
            <h3
              className="m-0 p-0 fs-48 text-primary line-height-48"
              aria-label=" Fostering professional exchange and organisational growth."
            >
              Fostering professional exchange and organisational growth.
            </h3>
          </div>
        </article>
      </section>

      <section
        className="flex gap-24 mt-24 flex-wrap mobile-flex-wrap"
        aria-labelledby="mission-vision-heading"
      >
        <article className="color-sky-blue-bg flex-one flex flex-col gap-24 p-40 about_bg rounded-16 justify-between color-sky-blue p-40 dac-zoom-in">
          <h2 className="color-dark-blue m-0 p-0 fs-32 line-height-40 font-600">
            Incentive
          </h2>
          <p className="m-0 p-0 hero-text-paragraph">
            Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada purus
            arcu. Neque mi arcu nunc velit. Ipsum congue cursus egestas
            ullamcorper vestibulum mus.{" "}
          </p>
        </article>
        <article className="flex-one dac-zoom-in">
          <img
            src="./assets/incentive.png"
            className="w-100 object-cover h-100"
          />
        </article>
        <article className="flex-one items-end bg_primary vision_card rounded-16 flex align-items-end  p-40 fs-32 color-sky-blue font-600 line-height-40 bg-primary dac-zoom-in">
          <p className="m-0 p-0">Lorem ipsum dolor sit amet consectetur</p>
        </article>
      </section>

      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="why-associations-heading"
      >
        <h2
          className="flex-one hero-text-heading"
          id="why-associations-heading"
        >
          Benefits of Membership
        </h2>
        <div className="flex-one flex flex-col gap-24">
          <p
            className="m-0 p-0 hero-text-paragraph"
            aria-label="Sina Consultancy provides a formal framework for professional associations to establish a presence in Sina Consultancy."
          >
            Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada purus
            arcu. Neque mi arcu nunc velit. Ipsum congue cursus egestas
            ullamcorper vestibulum mus. Tristique enim risus leo ac vel auctor
            morbi mauris. Lorem ipsum dolor sit amet consectetur. Sapien arcu
            malesuada purus arcu. Neque mi arcu nunc velit. Ipsum congue cursus
            egestas.
          </p>
        </div>
      </section>

      <section className="mt-80 owl-container" aria-label="Objective 3">
        <div className="owl-carousel owl-theme" id="owl-carousel-one">
          <div className="item border-sky-blue rounded-24 p-40 flex flex-col justify-between  min-height-444 ">
            <img
              className="w-80 h-80"
              alt=""
              role="presentation"
              src="./assets/towal.svg"
            />
            <div className="flex flex-col gap-16">
              <h3 className="m-0 p-0 fs-32 font-600 line-height-40">
                Lorem ipsum dolor sit amet ipsum dolor sit amet
              </h3>
              <p className="m-0 p-0 hero-text-paragraph line-height-24">
                Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada
                purus arcu. Neque mi arcu nunc velit.
              </p>
            </div>
          </div>
          <div className="item border-sky-blue rounded-24 p-40 flex flex-col justify-between  min-height-444 ">
            <img
              className="w-80 h-80"
              alt=""
              role="presentation"
              src="./assets/map.svg"
            />
            <div className="flex flex-col gap-16">
              <h3 className="m-0 p-0 fs-32 font-600 line-height-40">
                Lorem ipsum dolor sit amet ipsum dolor sit amet
              </h3>
              <p className="m-0 p-0 hero-text-paragraph line-height-24">
                Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada
                purus arcu. Neque mi arcu nunc velit.
              </p>
            </div>
          </div>
          <div className="item border-sky-blue rounded-24 p-40 flex flex-col justify-between  min-height-444 ">
            <img
              className="w-80 h-80"
              alt=""
              role="presentation"
              src="./assets/atom.svg"
            />
            <div className="flex flex-col gap-16">
              <h3 className="m-0 p-0 fs-32 font-600 line-height-40">
                Lorem ipsum dolor sit amet ipsum dolor sit amet
              </h3>
              <p className="m-0 p-0 hero-text-paragraph line-height-24">
                Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada
                purus arcu. Neque mi arcu nunc velit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="why-associations-heading"
      >
        <h2
          className="flex-one hero-text-heading"
          id="why-associations-heading"
        >
          Join A Thriving Community Of 75+ Global Associations
        </h2>
        <div className="flex-one flex flex-col gap-24">
          <p
            className="m-0 p-0 hero-text-paragraph"
            aria-label="Sina Consultancy provides a formal framework for professional associations to establish a presence in Sina Consultancy."
          >
            Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada purus
            arcu. Neque mi arcu nunc velit. Ipsum congue cursus egestas
            ullamcorper vestibulum mus. Tristique enim risus leo ac vel auctor
            morbi mauris. Lorem ipsum dolor sit amet consectetur. Sapien arcu
            malesuada purus arcu. Neque mi arcu nunc velit. Ipsum congue cursus
            egestas.
          </p>
          <p
            className="m-0 p-0 hero-text-paragraph"
            aria-label="Sina Consultancy provides a formal framework for professional associations to establish a presence in Sina Consultancy."
          >
            Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada purus
            arcu. Neque mi arcu nunc velit. Ipsum congue cursus egestas
            ullamcorper vestibulum mus. Tristique enim risus leo ac vel auctor
            morbi mauris. Lorem ipsum dolor sit amet consectetur. Sapien arcu
            malesuada purus arcu. Neque mi arcu nunc velit. Ipsum congue cursus
            egestas.
          </p>
        </div>
      </section>

      <section className="mt-80 owl-container" aria-label="Objective 3">
        <div className="owl-carousel owl-theme" id="owl-carousel-two">
          <div className="item border-sky-blue rounded-24 p-40 flex flex-col justify-between  min-height-444 ">
            <div className="h-160 w-180">
              <img
                className="w-100 h-100"
                alt=""
                role="presentation"
                src="./assets/comm_logo.png"
              />
            </div>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-6">
                <h3 className="m-0 p-0 fs-32 font-600 line-height-40 color-Charcoal">
                  Anoka Group of Companies
                </h3>
                <div className="flex gap-4">
                  <div className="">
                    <img alt="" src="./assets/US.svg" />
                  </div>
                  <p className="m-0 p-0 font-500 color-foundation">
                    {" "}
                    United States
                  </p>
                </div>
              </div>
              <p className="m-0 p-0 hero-text-paragraph line-height-24">
                Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada
                purus arcu. Neque mi arcu nunc velit.
              </p>
            </div>
          </div>
          <div className="item border-sky-blue rounded-24 p-40 flex flex-col justify-between  min-height-444 ">
            <div className="h-160 w-180">
              <img
                className="w-100 h-100"
                alt=""
                role="presentation"
                src="./assets/comm_logo.png"
              />
            </div>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-6">
                <h3 className="m-0 p-0 fs-32 font-600 line-height-40 color-Charcoal">
                  Anoka Group of Companies
                </h3>
                <div className="flex gap-4">
                  <div className="">
                    <img alt="" src="./assets/US.svg" />
                  </div>
                  <p className="m-0 p-0 font-500 color-foundation">
                    {" "}
                    United States
                  </p>
                </div>
              </div>
              <p className="m-0 p-0 hero-text-paragraph line-height-24">
                Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada
                purus arcu. Neque mi arcu nunc velit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex gap-64 mt-80 flex-wrap membership-form-wrapper"
        aria-labelledby="why-associations-heading"
      >
        <div className="mw-460 flex flex-col gap-32">
          <h2 className=" hero-text-heading" id="why-associations-heading">
            Begin Your Path to Membership.
          </h2>
          <p className="m-0 p-0 hero-text-paragraph ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiulabore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="flex-one flex flex-col gap-24">
          <div className="form-wrapper">
            <form className="gap-24 flex flex-col ">
              <div className="flex gap-16 flex-wrap">
                <div className="form-group flex-one">
                  <label
                    className="font-600 line-height-24 color-foundation-400"
                    htmlFor="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    placeholder="Blue Acer Group of Companies"
                  />
                </div>

                <div className="form-group flex-one">
                  <label
                    className="font-600 line-height-24 color-foundation-400"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="akona@gmail.com"
                  />
                </div>
              </div>

              <div className="flex gap-16 flex-wrap">
                <div className="form-group flex-one">
                  <label
                    className="font-600 line-height-24 color-foundation-400"
                    htmlFor="contact"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    placeholder="+971 321 4567895"
                  />
                </div>

                <div className="form-group flex-one">
                  <label
                    className="font-600 line-height-24 color-foundation-400"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    placeholder="United States"
                  />
                </div>
              </div>

              <div className="flex gap-16 flex-wrap">
                <div className="form-group flex-one">
                  <label
                    className="font-600 line-height-24 color-foundation-400"
                    htmlFor="association-name"
                  >
                    Association Name
                  </label>
                  <input
                    type="text"
                    id="association-name"
                    placeholder="Blue Aces Association"
                  />
                </div>

                <div className="form-group flex-one">
                  <label
                    className="font-600 line-height-24 color-foundation-400"
                    htmlFor="website"
                  >
                    Association Website
                  </label>
                  <input
                    type="text"
                    id="website"
                    placeholder="blueacer.com.ae"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label
                  className="font-600 line-height-24 color-foundation-400"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Lorem ipsum dolor sit amet consectetur. Sapien arcu malesuada purus arcu. Neque mi arcu nunc velit."
                ></textarea>
              </div>

              <div className="form-group full-width">
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
