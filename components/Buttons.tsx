import Link from "next/link";

export default function Buttons({
  href,
  title,
  className,
}: {
  title?: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className="flex-one flex flex-col gap-24">
      <Link
        href={href || "#"}
        className={`dac-btn outline ${className || ""}`}
        role="button"
        aria-label="Learn more about Sina Consultancy"
      >
        {title || "About us"}
      </Link>
    </div>
  );
}
