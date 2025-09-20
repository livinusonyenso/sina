import Layout from "../../../components/Layout";
import AnimatedSection from "../../../components/AnimatedSection";

export default function ManagementConsultancy() {
  return (
    <Layout>
      {/* <AnimatedSection> */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Management Consultancy</h1>
            <p className="mb-4">
              We optimize your organizations structure and processes to drive efficiency, improve workflows, and develop strong leadership.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Whats Included:</h2>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Organizational restructuring</li>
              <li>Process mapping & optimization</li>
              <li>Change management</li>
              <li>Leadership coaching</li>
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-2">Case Study</h2>
            <p>
              Our team enabled a logistics company to reduce operational costs by 18% through process reengineering and staff training.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">FAQs</h2>
            <div>
              <strong>Q: Are your services suitable for NGOs?</strong>
              <p>A: Yes, we have extensive experience with both corporate and non-profit clients.</p>
              <strong>Q: Whats your approach to change management?</strong>
              <p>A: We use proven frameworks to ensure smooth transitions and staff buy-in.</p>
            </div>
          </div>
        </section>
      {/* </AnimatedSection> */}
    </Layout>
  );
}