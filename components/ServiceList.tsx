"use client";
import { motion } from "framer-motion";

const team = [
  {
    title: "Business Strategy",
    description:
      "In today's fast-evolving global marketplace, a clear and robust business strategy is paramount. At Sina Consulting Services, we specialize in crafting tailored strategies that align with your unique goals and market dynamics",
    img: "/assets/img-2.jpg",
  },
  {
    title: "Information Technology Solutions",
    description:
      "In an era where technology is the backbone of every successful business, Sina Consulting Services offers cutting-edge Information Technology solutions designed to propel your organization forward. ",
    img: "/assets/img-1.jpg",
  },
  {
    title: "Management Consultancy",
    description:
      "Effective management is the cornerstone of organizational excellence and sustainable growth. At Sina Consulting Services, our offerings are designed to help you optimize your operations and enhance leadership capabilities",
    img: "/assets/img-5.jpg",
  },
  {
    title: "Professional Education",
    description:
      "Continuous learning is a strategic advantage in today's dynamic business environment. At Sina Consulting Services, we are committed to empowering individuals and organizations.",
    img: "/assets/img-4.jpg",
  },
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
            <img
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
