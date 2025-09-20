"use client";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import useOwlCarouselHook, {
  owlConfig_two_and_half_box,
} from "@/hooks/useOwlCarouselHook";
import Script from "next/script";
import { useEffect } from "react";

export default function Services() {
  const { handleOwlReadyOne } = useOwlCarouselHook(owlConfig_two_and_half_box);

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

      <SectionTitle
        heading="Our Services"
        paragraph="At Sina Consulting Services, we are passionate about driving progress for businesses, organizations, and individuals. Our comprehensive suite of services—spanning business strategy, information technology solutions, management consultancy, and professional education—is rooted in a deep understanding of modern challenges and opportunities. We believe that sustainable growth comes from tailored solutions, rigorous analysis, and a commitment to continuous improvement."
        secondParagraph="Whether you are seeking to transform your business, optimize your technology landscape, enhance your management practices, or elevate your team's expertise, our experienced consultants are ready to guide you. We combine industry insight with practical experience, delivering measurable value at every stage of your journey.

Below, you'll find a detailed overview of the core services that define Sina Consulting Services."
        showCta={false}
      />
      {/* 
      <div className="mt-80 owl-container" aria-label="Objective 3">
        <div className="owl-carousel owl-theme" id="carousel-container">
          <ServiceCard
            imgSrc="/assets/event-H.E.MattarAlTayer.png"
            title="Business Strategy"
          />
          <ServiceCard
            imgSrc="/assets/event-H.E.MattarAlTayer.png"
            title="Information Technology Solutions"
          />
          <ServiceCard
            imgSrc="/assets/event-H.E.MattarAlTayer.png"
            title="Management Consultancy"
          />
          <ServiceCard
            imgSrc="/assets/event-H.E.MattarAlTayer.png"
            title="Professional Education"
          />
        </div>
      </div> */}

      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading" className="flex-one hero-text-heading">
          Business Strategy
        </h2>

        <div className="flex-2 flex flex-col gap-24">
          <h3 id="community-heading" className="flex-one hero-text-heading">
            Navigating Change and Seizing Opportunity
          </h3>
          <p className="hero-text-paragraph m-0">
            In today's fast-evolving global marketplace, a clear and robust
            business strategy is the foundation of lasting success. At Sina
            Consulting Services , we partner with organizations to craft
            strategies that are not only visionary but also actionable and
            resilient.
          </p>
          <h4 id="community-heading" className="flex-one hero-text-heading">
            Our Approach
          </h4>
          <p className="hero-text-paragraph m-0">
            Our business strategy consultants work closely with your executive
            team to deeply understand your organization'ss mission, values, and
            objectives. We conduct thorough market and competitive analyses,
            leveraging advanced data analytics and industry research to identify
            trends, opportunities, and threats. Our process includes stakeholder
            interviews, benchmarking, SWOT analysis, and scenario planning to
            ensure a holistic perspective.
          </p>
          <p className="hero-text-paragraph m-0">
            We emphasize strategic alignment across all business functions,
            helping you clarify your market positioning, define unique value
            propositions, and set ambitious yet attainable goals. Our
            recommendations are always tailored, practical, and designed for
            real-world application.
          </p>

          <h4 id="community-heading" className="flex-one hero-text-heading">
            What We Offer
          </h4>
          <ul>
            <li className="mb-2">
              <b>- Strategic Planning:</b>
              <p className="hero-text-paragraph">
                Facilitating executive workshops to define vision, mission, and
                long-term objectives, and building comprehensive action plans.
              </p>
            </li>
            <li className="mb-2">
              <b> - Business Model Innovation:</b>
              <p className="hero-text-paragraph">
                Assessing existing business models and guiding pivots or
                enhancements to maximize profitability and adaptability.
              </p>
            </li>
            <li className="mb-2">
              <b>- Market Entry & Expansion:</b>
              <p className="hero-text-paragraph">
                Identifying new markets, conducting feasibility studies, and
                developing go-to-market strategies for domestic and
                international growth. - Performance Optimization: Establishing
                KPIs, building dashboards, and implementing performance
                management systems to track progress and foster accountability.
              </p>
            </li>
            <li className="mb-2">
              <b>- Risk Management:</b>
              <p className="hero-text-paragraph">
                Identifying potential risks and developing mitigation strategies
                to ensure business continuity and resilience.
              </p>
            </li>
          </ul>

          <h4 id="community-heading" className="flex-one hero-text-heading">
            Results You Can Expect
          </h4>
          <ul>
            <li className="mb-2">
              <b>- Enhanced clarity of purpose and direction</b>
            </li>
            <li className="mb-2">
              <b> - Improved decision-making and agility</b>
            </li>
            <li className="mb-2">
              <b>- Stronger competitive positioning</b>
            </li>
            <li className="mb-2">
              <b className="mb-2">- Sustainable, measurable growth</b>
              <p className="hero-text-paragraph mt-2">
                Our aim is to equip your leadership with the insight and tools
                necessary to navigate uncertainty and capture emerging
                opportunities with confidence.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading" className="flex-one hero-text-heading">
          Information Technology Solutions
        </h2>

        <div className="flex-2 flex flex-col gap-24">
          <h3 id="community-heading" className="flex-one hero-text-heading">
            Empowering Your Digital Transformation
          </h3>
          <p className="hero-text-paragraph m-0">
            In an era where technology is the backbone of every successful
            business, **Sina Consulting Services** offers a full spectrum of IT
            solutions that drive innovation, efficiency, and security. Our
            technology experts blend technical know-how with a strategic
            mindset, ensuring that every IT initiative supports your broader
            organizational goals.
          </p>
          <h4 id="community-heading" className="flex-one hero-text-heading">
            Our Approach
          </h4>
          <p className="hero-text-paragraph m-0">
            We start by understanding your unique business requirements,
            existing technology stack, and pain points. Our team conducts
            thorough IT assessments, audits your current infrastructure, and
            analyzes your digital maturity. We then co-create a technology
            roadmap tailored to your needs—whether that means optimizing legacy
            systems, adopting cloud technologies, or implementing robust
            cybersecurity measures.
          </p>
          <p className="hero-text-paragraph m-0">
            Our solutions are designed to be scalable, future-proof, and aligned
            with best practices in IT governance and compliance. We stay ahead
            of the curve, bringing you insights on emerging technologies such as
            artificial intelligence, IoT, and blockchain.
          </p>

          <h4 id="community-heading" className="flex-one hero-text-heading">
            What We Offer
          </h4>
          <ul>
            <li className="mb-2">
              <b>- IT Strategy & Advisory:</b>
              <p className="hero-text-paragraph">
                Developing comprehensive IT strategies that align technology
                with business objectives, improve ROI, and support innovation.
              </p>
            </li>
            <li className="mb-2">
              <b> - Custom Software Development:</b>
              <p className="hero-text-paragraph">
                Designing and building bespoke applications, web platforms, and
                mobile solutions to solve your unique challenges
              </p>
            </li>
            <li className="mb-2">
              <b>- Cloud Services:</b>
              <p className="hero-text-paragraph">
                Guiding migration to cloud platforms (AWS, Azure, Google Cloud),
                optimizing cloud architecture, and managing hybrid environments
              </p>
            </li>
            <li className="mb-2">
              <b>- Cybersecurity & Data Protection: </b>
              <p className="hero-text-paragraph">
                Assessing vulnerabilities, implementing security frameworks, and
                ensuring regulatory compliance to protect your critical assets
              </p>
            </li>
            <li className="mb-2">
              <b>- Digital Transformation: </b>
              <p className="hero-text-paragraph">
                Driving end-to-end digitalization—from process automation and
                workflow optimization to adoption of next-gen digital tools.
              </p>
            </li>
            <li className="mb-2">
              <b>- IT Project Management: </b>
              <p className="hero-text-paragraph">
                Overseeing complex IT projects, ensuring on-time, on-budget
                delivery with minimal disruption to your operations
              </p>
            </li>
            <li className="mb-2">
              <b>- Technical Support & Managed Services: </b>
              <p className="hero-text-paragraph">
                Providing ongoing support, maintenance, and IT operations
                management to keep your systems running smoothly
              </p>
            </li>
          </ul>

          <h4 id="community-heading" className="flex-one hero-text-heading">
            Results You Can Expect
          </h4>
          <ul>
            <li className="mb-2">
              <b>- Increased operational efficiency and reduced costs</b>
            </li>
            <li className="mb-2">
              <b> - Enhanced data security and business continuity</b>
            </li>
            <li className="mb-2">
              <b>- Greater agility and ability to scale</b>
            </li>
            <li className="mb-2">
              <b className="mb-2">- Empowered workforce through modern tools</b>
              <p className="hero-text-paragraph mt-2">
                Our IT consultants are committed to demystifying technology and
                making it a catalyst for your long-term business success.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading" className="flex-one hero-text-heading">
          Management Consultancy
        </h2>

        <div className="flex-2 flex flex-col gap-24">
          <h3 id="community-heading" className="flex-one hero-text-heading">
            Building High-Performance Organizations
          </h3>
          <p className="hero-text-paragraph m-0">
            Effective management is the cornerstone of organizational
            excellence. At **Sina Consulting Services**, our management
            consultancy solutions focus on unlocking the full potential of your
            people, processes, and structure. We help you create an environment
            where innovation flourishes, and every team member contributes to
            shared success.
          </p>
          <h4 id="community-heading" className="flex-one hero-text-heading">
            Our Approach
          </h4>
          <p className="hero-text-paragraph m-0">
            We begin with a comprehensive assessment of your organization's
            current state—evaluating workflows, leadership styles, communication
            channels, and cultural dynamics. Through interviews, surveys, and
            process mapping, we identify bottlenecks, inefficiencies, and
            opportunities for improvement.
          </p>
          <p className="hero-text-paragraph m-0">
            Our consultants bring a blend of industry knowledge and hands-on
            experience, working alongside your teams to design and implement
            changes that stick. We place particular emphasis on change
            management, ensuring buy-in at all levels and providing the support
            needed for sustainable transformation.
          </p>

          <h4 id="community-heading" className="flex-one hero-text-heading">
            What We Offer
          </h4>
          <ul>
            <li className="mb-2">
              <b>- Organizational Design & Development:</b>
              <p className="hero-text-paragraph">
                Redefining structures, roles, and responsibilities to foster
                agility and collaboration.
              </p>
            </li>
            <li className="mb-2">
              <b> - Process Improvement:</b>
              <p className="hero-text-paragraph">
                Streamlining operations through Lean, Six Sigma, and other
                proven methodologies to reduce waste and enhance productivity.
              </p>
            </li>
            <li className="mb-2">
              <b>- Leadership Development:</b>
              <p className="hero-text-paragraph">
                Coaching executives and managers to build effective leadership
                skills, emotional intelligence, and decision-making capabilities
              </p>
            </li>
            <li className="mb-2">
              <b>- Change Management: </b>
              <p className="hero-text-paragraph">
                Planning and guiding organizational change, from system
                implementations to cultural shifts, with clear communication and
                stakeholder engagement.
              </p>
            </li>
            <li className="mb-2">
              <b>- Talent Management: </b>
              <p className="hero-text-paragraph">
                Supporting recruitment, retention, performance management, and
                succession planning to build high-performing teams.
              </p>
            </li>
            <li className="mb-2">
              <b>- Corporate Governance: </b>
              <p className="hero-text-paragraph">
                Advising on policies, risk management, and compliance to ensure
                accountability and ethical business practices.
              </p>
            </li>
          </ul>

          <h4 id="community-heading" className="flex-one hero-text-heading">
            Results You Can Expect
          </h4>
          <ul>
            <li className="mb-2">
              <b>- Improved efficiency and reduced operational costs</b>
            </li>
            <li className="mb-2">
              <b> - Stronger leadership and empowered teams</b>
            </li>
            <li className="mb-2">
              <b>- Higher employee engagement and satisfaction</b>
            </li>
            <li className="mb-2">
              <b className="mb-2">- Sustainable, scalable processes</b>
              <p className="hero-text-paragraph mt-2">
                We help you move from strategy to execution, building a
                resilient organization ready to thrive in dynamic markets.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="flex gap-24 mt-80 flex-wrap"
        aria-labelledby="community-heading"
      >
        <h2 id="community-heading" className="flex-one hero-text-heading">
          Professional Education
        </h2>

        <div className="flex-2 flex flex-col gap-24">
          <h3 id="community-heading" className="flex-one hero-text-heading">
            Elevating Skills, Inspiring Growth
          </h3>
          <p className="hero-text-paragraph m-0">
            Continuous learning is a strategic advantage in today's
            fast-changing world. **Sina Consulting Services** offers a broad
            range of professional education programs designed to nurture talent,
            close skills gaps, and drive organizational excellence.
          </p>
          <h4 id="community-heading" className="flex-one hero-text-heading">
            Our Approach
          </h4>
          <p className="hero-text-paragraph m-0">
            We believe that education should be practical, engaging, and
            tailored to real-world challenges. Our team of experienced trainers
            and subject matter experts collaborate with you to assess learning
            needs and craft bespoke programs for your workforce.
          </p>
          <p className="hero-text-paragraph m-0">
            We offer a blend of in-person workshops, virtual classrooms, and
            e-learning modules, ensuring flexible delivery that fits your
            organization's culture and schedule. Our curriculum spans
            foundational skills, advanced technical training, leadership
            development, and industry certifications.
          </p>

          <h4 id="community-heading" className="flex-one hero-text-heading">
            What We Offer
          </h4>
          <ul>
            <li className="mb-2">
              <b>- Corporate Training:</b>
              <p className="hero-text-paragraph">
                Customized programs covering business acumen, communication,
                project management, customer service, and more.
              </p>
            </li>
            <li className="mb-2">
              <b> - Technical & IT Training:</b>
              <p className="hero-text-paragraph">
                Hands-on instruction in software development, cybersecurity,
                data analysis, cloud computing, and emerging technologies.
              </p>
            </li>
            <li className="mb-2">
              <b>- Leadership & Management Development:</b>
              <p className="hero-text-paragraph">
                Courses and workshops designed to build leadership pipelines and
                enhance management effectiveness.
              </p>
            </li>
            <li className="mb-2">
              <b>- Certification Preparation: </b>
              <p className="hero-text-paragraph">
                Assistance in preparing for globally recognized certifications
                (e.g., PMP, ITIL, Agile, Microsoft, AWS).
              </p>
            </li>
            <li className="mb-2">
              <b>- Workshops & Seminars: </b>
              <p className="hero-text-paragraph">
                Short-format learning experiences on trending topics and
                critical skills.
              </p>
            </li>
            <li className="mb-2">
              <b>- Learning Needs Assessment: </b>
              <p className="hero-text-paragraph">
                Diagnostic services to identify skills gaps and align training
                with business objectives.
              </p>
            </li>
          </ul>

          <h4 id="community-heading" className="flex-one hero-text-heading">
            Results You Can Expect
          </h4>
          <ul>
            <li className="mb-2">
              <b>- Enhanced workforce capability and confidence </b>
            </li>
            <li className="mb-2">
              <b> - Improved employee retention and satisfaction </b>
            </li>
            <li className="mb-2">
              <b>- Readiness to adopt new technologies and practices</b>
            </li>
            <li className="mb-2">
              <b className="mb-2">
                - Demonstrable impact on organizational performance
              </b>
              <p className="hero-text-paragraph mt-2">
                With a commitment to excellence and innovation, we empower your
                people to learn, adapt, and lead in a competitive environment.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <SectionTitle
        heading="Partner with Sina Consulting Services"
        paragraph="Our holistic approach, deep expertise, and unwavering commitment to your success set us apart. "
        secondParagraph="Contact us today to learn more about how our services can transform your business, empower your teams, and position you for a brighter future."
        showCta={true}
        href="/contact"
        ctaText="Get in Touch"
      />
    </>
  );
}
