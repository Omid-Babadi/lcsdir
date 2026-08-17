import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation-v2";
import { FooterSection } from "@/components/landing/footer-section-v2";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for London Climate Systems Ltd, explaining how customer and website information is collected, used, and protected.",
  path: "/privacy",
});

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-foreground/70">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
              <p>
                London Climate Systems LTD ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, address, and other contact information you provide when booking services or contacting us.</li>
                <li><strong>Service Information:</strong> Details about the services you've requested, including location and service type.</li>
                <li><strong>Device Information:</strong> Information about your device, including IP address, browser type, and operating system.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Use of Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process your service requests and bookings</li>
                <li>Send you promotional communications and updates about our services</li>
                <li>Respond to your inquiries and customer service requests</li>
                <li>Generate a personal profile about you to make future visits to the Site easier</li>
                <li>Increase the efficiency and operation of the Site</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Disclosure of Your Information</h2>
              <p>We may share or disclose your information in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>By Law or to Protect Rights:</strong> If required by law or if we have a good faith belief that such action is necessary to comply with legal obligations.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with service providers who perform services on our behalf, including payment processors and booking systems.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or bankruptcy, your information may be transferred as part of that transaction.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot ensure absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of any inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Children's Privacy</h2>
              <p>
                Our website is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by updating the "Last updated" date at the top of this policy. Your continued use of our website following the posting of revised Privacy Policy means you accept and agree to the changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
              <div className="bg-foreground/5 border border-border rounded-lg p-6 mt-4">
                <p><strong>London Climate Systems LTD</strong></p>
                <p>71-75 Shelton Street</p>
                <p>Covent Garden, London</p>
                <p>WC2H 9JQ, United Kingdom</p>
                <p>Email: <a href="mailto:londonclimatesystems@gmail.com" className="text-blue-400 hover:text-blue-300">londonclimatesystems@gmail.com</a></p>
                <p>Phone: <a href="tel:07473423003" className="text-blue-400 hover:text-blue-300">07473 423003</a></p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
