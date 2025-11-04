export default function ContactPag() {
  return (
    <>
      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading" className="flex-one hero-text-heading">
          Contact us
        </h2>

        <div className="flex-one gap-24 flex flex-col">
          <p className="hero-text-paragraph m-0 p-0">
            Contact Sina for expert guidance on business
            establishment, growth strategies, and market insights. Our team is
            ready to assist you in navigating the complexities of today{"'"}s
            global business landscape.
          </p>
          <p className="hero-text-paragraph m-0 p-0">
            Reach out to us via phone at +234 814 342 0528 or email us at
            ajibademariam5@gmail.com
          </p>
        </div>
      </section>

      <section
        className="flex gap-64 mt-80 flex-wrap membership-form-wrapper"
        aria-labelledby="why-associations-heading"
      >
        <div className="mw-460 flex flex-col gap-32">
          <h2 className=" hero-text-heading" id="why-associations-heading">
            Join us.
          </h2>
          <p className="m-0 p-0 hero-text-paragraph ">
            Join a vibrant community of professionals and organizations at Sina
            Consultancy. As a member, you{"'"}ll gain exclusive access to a
            wealth of resources, networking opportunities, and industry insights
            designed to support your growth and success. Whether you{"'"}re
            looking to expand your professional network, enhance your skills, or
            stay informed about the latest industry trends, Sina
            offers the perfect platform to achieve your goals. Don{"'"}t miss
            out on the chance to be part of a dynamic association that empowers
            its members to thrive in today{"'"}s competitive landscape.
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
                    placeholder="+234 814 342 0528"
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
