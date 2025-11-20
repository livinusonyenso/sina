import Image from "next/image";
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
    <article className={`card dac-zoom-in ` + className}>
      <div className="card-content">
        <h3>
          <Link
            href={href || "#"}
            className="text-decoration-none text-white"
            aria-label={heading}
          >
            {heading || "Register Your Association In Sina"}
          </Link>
        </h3>
        <span className="arrow-icon" aria-hidden="true">
          <Link href={href || "#"} aria-label={heading}>
            <Image
              height={100}
              width={100}
              src="/assets/card-arrow.svg"
              role="presentation"
              alt=""
            />
          </Link>
        </span>
      </div>
    </article>
  );
}
