"use client";
import Image from "next/image";
import Script from "next/script";
import "/public/styles/owl.carousel.min.css";
import "/public/styles/owl.theme.default.min.css";
import SectionTitle from "@/components/SectionTitle";
import useOwlCarouselHook, {
  owlCarouselConfig_one_and_Half_Box,
} from "@/hooks/useOwlCarouselHook";

export default function About() {
  const { handleOwlReadyOne } = useOwlCarouselHook(
    owlCarouselConfig_one_and_Half_Box
  );

  return (
    <>
      <Script src="/scripts/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      <Script
        src="/scripts/owl.carousel.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          handleOwlReadyOne("#carousel-container");
        }}
      />
      <Script src="/scripts/index.js" strategy="afterInteractive" />

      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading" className="flex-one hero-text-heading">
          About Sina Consultancy
        </h2>

        <div className="flex-one flex flex-col gap-24">
          <p className="hero-text-paragraph p-0 m-0">
            Sina Consultancy is a global IT consulting company that specializes
            in delivering innovative technology solutions to businesses
            worldwide. With a team of experienced professionals, we provide
            strategic consulting, system integration, and managed services to
            help our clients achieve their digital transformation goals. Our
            expertise spans across various industries, including finance,
            healthcare, retail, and manufacturing. At Sina Consultancy, we are
            committed to driving business growth through cutting-edge technology
            and exceptional customer service.
          </p>
          <p className="hero-text-paragraph p-0 m-0">
            Our mission is to empower organizations with the right technology
            solutions that enhance efficiency, productivity, and competitiveness
            in the ever-evolving digital landscape. We believe in building
            long-term partnerships with our clients, understanding their unique
            challenges, and delivering tailored solutions that meet their
            specific needs. Our vision is to be a trusted advisor and a leading
            player in the global IT consulting industry, known for our
            innovation, integrity, and excellence.
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
        className="action-cards mt-80 gap-24"
        aria-label="Actions to register or scale your association in Sina Consultancy"
      >
        <article className="card dark-card h-360 height-fit-content dac-zoom-in">
          <div className="card-content p-40">
            <h3
              className="m-0 p-0 fs-48 color-sky-blue line-height-48"
              aria-label=" Fostering professional exchange and organisational growth."
            >
              Fostering professional and organisational growth.
            </h3>
          </div>
        </article>

        <article
          className="card image-card  h-360 height-fit-content dac-zoom-in bg-building "
          aria-label="Scale your association to Sina Consultancy, card with background image of Sina Consultancy skyline"
        ></article>
      </section>

      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading" className="flex-one hero-text-heading">
          Our History
        </h2>

        <div className="flex-one">
          <p className="p-0 m-0 hero-text-paragraph">
            Founded in 2005, Sina Consultancy has grown from a small startup to
            a global IT consulting firm with offices in multiple countries. Over
            the years, we have successfully delivered hundreds of projects for
            clients ranging from small businesses to Fortune 500 companies. Our
            journey has been marked by a commitment to innovation, quality, and
            customer satisfaction. We have built a reputation for excellence in
            the IT consulting industry, earning numerous awards and recognitions
            for our work. As we look to the future, we remain dedicated to
            helping our clients navigate the complexities of the digital world
            and achieve their business objectives.
          </p>
        </div>
      </section>

      <section
        className="flex gap-24 mt-80 flex-wrap mobile-flex-wrap"
        aria-labelledby="mission-vision-heading"
      >
        <article className="color-sky-blue-bg flex-one flex flex-col gap-24 about_bg rounded-16 justify-between color-sky-blue p-40 dac-zoom-in ">
          <h2 className="color-dark-blue m-0 p-0 fs-32 line-height-40 font-600">
            Mission & Vision
          </h2>
          <p className="m-0 p-0 hero-text-paragraph">
            Our mission is to empower organizations with the right technology
            solutions that enhance efficiency, productivity, and competitiveness
            in the ever-evolving digital landscape. We believe in building
            long-term partnerships with our clients, understanding their unique
            challenges, and delivering tailored solutions that meet their
            specific needs. Our vision is to be a trusted advisor and a leading
            player in the global IT consulting industry, known for our
            innovation, integrity, and excellence.
          </p>
        </article>

        <article className="flex-one  dac-zoom-in rounded-2xl overflow-hidden">
          <img src="/assets/img-7.jpg" className="w-100 object-cover h-100" />
        </article>

        <article className="flex-one items-end bg_primary vision_card rounded-16 flex align-items-end  p-40 fs-32 color-sky-blue font-600 line-height-40 bg-primary dac-zoom-in ">
          <p className="m-0 p-0">
            Vision: To be a trusted advisor and a leading player in the global
            IT consulting industry, known for our innovation, integrity, and
            excellence.
          </p>
        </article>
      </section>

      <SectionTitle heading="Strategic Objectives" showCta={false} />

      <section className="mt-80 owl-container" aria-label="Objective 3">
        <div className="owl-carousel owl-theme" id="carousel-container">
          <div className="item flex object-container rounded-16  max-width-741 overflow-hidden mh-450">
            <div className="flex width-370 color-secondary-light flex-col gap-16 justify-end p-40 max-width-370">
              <h2
                className="hero-text-heading m-0 p-0 fs-24 font-700 line-height-24 "
                aria-label="Objective 3"
              >
                Objective 1
              </h2>
              <p
                className="m-0 p-0 hero-text-paragraph"
                aria-label="We work with leading global and regional associations."
              >
                our objective is to deliver tailored solutions that meet their
                specific needs. Our vision is to be a trusted advisor and a
                leading player in the global IT consulting industry, known for
                our innovation, integrity, and excellence.
              </p>
            </div>
            <div className="flex flex-img  width-370 max-h-450  mobile-height-288">
              <Image
                width={100}
                height={100}
                className="w-100 h-100 object-cover "
                src="/assets/img-8.jpg"
                role="presentation"
                alt=""
              />
            </div>
          </div>

          <div className="item flex object-container rounded-16  max-width-741 overflow-hidden mh-450">
            <div className="flex width-370 color-secondary-light flex-col gap-16 justify-end p-40 max-width-370">
              <h2
                className="hero-text-heading m-0 p-0 fs-24 font-700 line-height-24 "
                aria-label="Objective 3"
              >
                Objective 2
              </h2>
              <p
                className="m-0 p-0 hero-text-paragraph"
                aria-label="We work with leading global and regional associations."
              >
                we aim to empower organizations with the right technology
                solutions that enhance efficiency, productivity, and
                competitiveness in the ever-evolving digital landscape.
              </p>
            </div>
            <div className="flex flex-img  width-370 max-h-450  mobile-height-288">
              <Image
                width={100}
                height={100}
                className="w-100 h-100 object-cover "
                src="/assets/img-9.jpg"
                role="presentation"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
