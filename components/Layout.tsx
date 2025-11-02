import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link
        href="#dac-main-content"
        className="skip-link visually-hidden-focusable"
        style={{ position: "absolute", top: -100, left: -110, zIndex: 0 }}
      >
        Skip to main content
      </Link>

      <header
        className="dac-sticky-header flex justify-between items-center py-16 bg-white"
        role="banner"
        aria-label="Main site header"
      >
        <div
          className="logo-container flex items-center gap-12"
          aria-label="Sina Consultancy logo"
        >
          <Link href="/" className="no-underline">
            <Image
              width={100}
              height={100}
              src="/assets/logo-bg.png"
              alt="Sina Consultancy logo"
              className="logo"
            />
          </Link>
        </div>

        <nav
          className="main-nav flex gap-32 items-center fs-14 uppercase ls-005 display-none-on-mobile"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="no-underline text-primary font-barlow fs-14 font-500 ls-08 uppercase"
            aria-label="About DAC"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="no-underline text-primary font-barlow fs-14 font-500 ls-08 uppercase"
            aria-label="About DAC"
          >
            About
          </Link>

          <Link
            href="/services"
            className="no-underline text-primary font-barlow fs-14 font-500 ls-08 uppercase"
            aria-label="License Renewal"
          >
            Services
          </Link>

          {/* <div
            className="header-buttons flex gap-16 items-center"
            aria-label="Header action buttons"
          >
            <Link
              href="/contact"
              className="btn primary flex px-16 py-8 rounded-32 font-barlow fs-14 font-700 uppercase gap-10 text-center white-space-nowrap no-underline"
              aria-label="Get in Touch"
            >
              Careers
            </Link>
          </div> */}
          <Link
            href="/contact"
            className="no-underline text-primary font-barlow fs-14 font-500 ls-08 uppercase"
            aria-label="License Renewal"
          >
            Career
          </Link>
          <Link
            href="#"
            className="no-underline text-primary font-barlow fs-14 font-500 ls-08 uppercase"
            aria-label="License Renewal"
          >
            Our People
          </Link>
        </nav>

        <div
          className="mobile-hambuger display-none-on-desktop"
          aria-label="Open mobile menu"
          role="button"
          tabIndex={0}
          aria-expanded="false"
          aria-controls="mobileMenu"
          id="hamburgerBtn"
        >
          <Image
            width={24}
            height={24}
            src="/assets/hamburger-icon.svg"
            alt="Hamburger menu icon"
            className="hamburger-icon"
          />
        </div>

        <nav
          className="mobile-menu"
          id="mobileMenu"
          aria-label="Mobile navigation"
          role="navigation"
          aria-hidden="true"
        >
          <div className="menu-header">
            <div
              className="menu-close"
              aria-label="Close menu"
              role="button"
              tabIndex={0}
            >
              ✕
            </div>
          </div>
          <ul className="menu-list">
            <li>
              <Link
                className="hero-text-paragraph text-decoration-none color-white "
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                className="hero-text-paragraph text-decoration-none color-white "
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hero-text-paragraph text-decoration-none color-white "
                href="/services"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="hero-text-paragraph text-decoration-none color-white "
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="min-h-[82vh]" role="main" id="dac-main-content">
        {children}
      </main>

      <footer
        className="flex flex-col mt-80 bg-[#0d2743] "
        role="contentinfo"
        aria-label="Sina Consultancy footer"
      >
        <div className="flex dac-footer">
          <Image
            width={100}
            height={100}
            src="/assets/logo-bg.png"
            alt="Sina Consultancy Logo"
          />

          <div
            className="dac-footer__logo-info"
            aria-label="Footer logo and contact information"
          >
            <div className="dac-footer__info">
              <p className="cursor-pointer m-0 fs-14 color-white">
                Sina Consultancy
              </p>
              <p className="cursor-pointer m-0 fs-14 color-white">
                Sheikh Zayed Road, Sina Consultancy
              </p>
              <p className="cursor-pointer m-0 fs-14 color-white">
                ajibademariam5@gmail.com <br />
                jummyo@yahoo.com
              </p>
              <p className="cursor-pointer m-0 fs-14 color-white">
                +234 814 342 0528
              </p>
            </div>
          </div>

          <nav className="dac-footer__links" aria-label="Footer navigation">
            <ul className="m-0 p-0 flex flex-col gap-4">
              <li className="list-style-none cursor-pointer m-0 fs-14">
                <Link
                  className="text-decoration-none color-white "
                  href="/about"
                >
                  About DAC
                </Link>
              </li>
              <li className="list-style-none cursor-pointer m-0 fs-14">
                <Link className="text-decoration-none color-white " href="/">
                  Services
                </Link>
              </li>

              <li className="list-style-none cursor-pointer m-0 fs-14">
                <Link
                  className="text-decoration-none color-white "
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="dac-footer__links" aria-label="Legal links">
            <ul className="p-0 flex flex-col gap-4">
              <li className="list-style-none cursor-pointer m-0 fs-14">
                <Link className="text-decoration-none color-white " href="#">
                  Terms & Conditions
                </Link>
              </li>
              <li className="list-style-none cursor-pointer m-0 fs-14">
                <Link className="text-decoration-none color-white " href="#">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <div
            className="dac-footer__social"
            aria-label="Follow us on social media"
          >
            <Link href="#" aria-label="LinkedIn">
              <Image
                width={24}
                height={24}
                src="/assets/linkedin.svg"
                role="presentation"
                alt="LinkedIn icon"
              />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Image
                width={24}
                height={24}
                src="/assets/facebook.svg"
                role="presentation"
                alt="Facebook icon"
              />
            </Link>
            {/* <Link href="#" aria-label="Twitter/X">
              <Image
                width={24}
                height={24}
                src="/assets/twitter.svg"
                role="presentation"
                alt="Twitter icon"
              />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Image
                width={24}
                height={24}
                src="/assets/youtube.svg"
                role="presentation"
                alt="YouTube icon"
              />
            </Link> */}
          </div>
        </div>

        <div className="mx-auto px-4 text-right py-8 color-white fs-12">
          &copy; {new Date().getFullYear()} Sina Consulting Services &mdash;
          <a href="https://www.techpem.com"> Powered by Techpem </a>
        </div>
      </footer>
    </>
  );
}
