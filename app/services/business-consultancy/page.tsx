import Layout from "../../../components/Layout";
import AnimatedSection from "../../../components/AnimatedSection";

export default function BusinessConsultancy() {
  return (
    <Layout>
      {/* <AnimatedSection> */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Business Consultancy</h1>
            <p className="mb-4">
              We provide expert guidance to help organizations refine their business models, enter new markets, and achieve sustainable growth. Our consultants work closely with you to understand your unique challenges and craft actionable strategies.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">What’s Included:</h2>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Strategic business planning</li>
              <li>Market research & analysis</li>
              <li>Process improvement</li>
              <li>Performance management</li>
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-2">Case Study</h2>
            <p>
              We helped a mid-sized retail company increase their market share by 30% through a tailored market entry strategy and operational optimizations.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">FAQs</h2>
            <div>
              <strong>Q: Can you help startups?</strong>
              <p>A: Absolutely! We work with businesses of all sizes, including startups.</p>
              <strong>Q: How do I get started?</strong>
              <p>A: <a href="/contact" className="text-blue-700 underline">Contact us</a> to discuss your needs and goals.</p>
            </div>
          </div>
        </section>
      {/* </AnimatedSection> */}
    </Layout>
  );
}