import Layout from "../../../components/Layout";
import AnimatedSection from "../../../components/AnimatedSection";

export default function EducationService() {
  return (
    <Layout>
      {/* <AnimatedSection> */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Educational Services</h1>
            <p className="mb-4">
              We offer professional training, workshops, and e-learning solutions tailored to your team’s needs and business goals.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">What’s Included:</h2>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Workshops and seminars</li>
              <li>Online courses and e-learning</li>
              <li>Team-building programs</li>
              <li>Certification training</li>
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-2">Case Study</h2>
            <p>
              We partnered with a multinational to deliver leadership workshops, resulting in a 25% increase in staff retention.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">FAQs</h2>
            <div>
              <strong>Q: Do you offer remote learning?</strong>
              <p>A: Yes, all our educational services are available both onsite and online.</p>
              <strong>Q: Can you provide custom training?</strong>
              <p>A: Absolutely! We tailor all programs to our clients’ needs.</p>
            </div>
          </div>
        </section>
      {/* </AnimatedSection> */}
    </Layout>
  );
}