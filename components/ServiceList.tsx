"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    title: "Business Consulting",
    description:
      "Strategy Development, Analysis Consulting , Data Management, Organisational Development, Process optimisation, , Change management, Digital transformation, Credit risk advisory & compliance",
    img: "/assets/img-2.jpg",
  },
  {
    title: "Educational Services",
    description:
      "Training & Capacity Building, Educational technology integration",
    img: "/assets/img-1.jpg",
  },
  {
    title: "Ancillary Services ",
    description:
     "Growing businesses often encounter areas where specialized expertise is essential, yet building internal teams is not always feasible. Our ancillary services provide flexible, ondemand support to help you navigate challenges, make data-informed decisions, and drive growth with the right guidance at the right time",
    img: "/assets/img-5.jpg",
  },
  // {
  //   title: "Professional Education",
  //   description:
  //     "Continuous learning is a strategic advantage in today's dynamic business environment. At Sina Consulting Services, we are committed to empowering individuals and organizations.",
  //   img: "/assets/img-4.jpg",
  // },
];

export default function ServiceList() {
  return (
    <section
      className="container mt-80"
      aria-label="Key benefits of establishing in Sina Consultancy"
    >
      {team.map((text, idx) => (
        <motion.a
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
          className="professional-card  gap-16 "
          aria-labelledby="card-title-1"
          href="/services"
        >
          <div className="rounded-16 height-289 overflow-hidden">
            <Image
              height={100}
              width={100}
              className="dac-parralex-effect"
              src={text.img}
              alt="Sina Consultancy skyline representing strategic global access"
            />
          </div>
          <div className="professional-card-content flex flex-col gap-16">
            <h3 id="card-title-1" className="m-0">
              {text.title}
            </h3>
            <p className="m-0 hero-text-paragraph">{text.description}</p>
          </div>
        </motion.a>
      ))}
    </section>
  );
}
