"use client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  desc?: string;
  imgSrc: string;
  link?: string;
}

export default function ServiceCard({ title, desc, imgSrc, link }: Props) {
  return (
    <div className="item event_card gap-24 overflow-hidden  flex flex-col position-relative ">
      <div className="h-470 event_card_img rounded-16 overflow-hidden position-relative cursor-pointer">
        <Image
          height={100}
          width={100}
          className="h-100 w-100 object-cover"
          src={imgSrc}
          alt="Event Image"
        />
        <div className="tag font-600">
          <span className="font-900"> {title} </span>
        </div>
        <div className="card-overlay position-absolute flex-col justify-center align-items-center flex">
          <button className="btn-outline fs-12 font-700 color-white">
            <Link href="#" className="no-underline color-white">
              Read More
            </Link>
          </button>
          <button className="btn-primary fs-12 font-700">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-8">
          <div className="fs-24 font-600 text-primary">{title}</div>
        </div>
      </div>
    </div>
  );
}
