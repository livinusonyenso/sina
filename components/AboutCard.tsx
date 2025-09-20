import Link from "next/link";

export default function AboutCard({
  heading,
  href,
  className = "card-first-img",
}: {
  heading?: string;
  href?: string;
  className?: string;
}) {
  return (
    <article className={`card dac-zoom-in ` + className} >
      <div className="card-content">
        <h3>
          <Link
            href={href || "#"}
            className="text-decoration-none text-white"
            aria-label={heading}
          >
            {heading || "Register Your Association In Sina Consultancy"}
          </Link>
        </h3>
        <span className="arrow-icon" aria-hidden="true">
          <img src="/assets/card-arrow.svg" role="presentation" alt="" />
        </span>
      </div>
    </article>
  );
}
