import Layout from "../../../components/Layout";
import AnimatedSection from "../../../components/AnimatedSection";

export default function ITSolutions() {
  return (
    <Layout>
      {/* <AnimatedSection> */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">IT Solutions</h1>
            <p className="mb-4">
              Our IT experts deliver modern solutions to enhance your organization’s digital capabilities, from custom software development to cloud migration and IT support.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">What’s Included:</h2>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Custom software and web app development</li>
              <li>Cloud infrastructure setup & migration</li>
              <li>Cybersecurity consulting</li>
              <li>Ongoing IT support</li>
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-2">Case Study</h2>
            <p>
              We helped an educational institution modernize their student portal, boosting engagement and streamlining administrative tasks.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">FAQs</h2>
            <div>
              <strong>Q: Do you support remote teams?</strong>
              <p>A: Yes, we have extensive experience enabling secure remote work solutions.</p>
              <strong>Q: Can you integrate with existing systems?</strong>
              <p>A: Absolutely! We specialize in seamless integrations.</p>
            </div>
          </div>
        </section>
      {/* </AnimatedSection> */}
    </Layout>
  );
}