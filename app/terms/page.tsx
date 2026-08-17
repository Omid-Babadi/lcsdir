import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation-v2";
import { FooterSection } from "@/components/landing/footer-section-v2";
import { createSeoMetadata } from "@/lib/seo";

const lastUpdated = "31 May 2026";

export const metadata: Metadata = createSeoMetadata({
  title: "Terms and Conditions",
  description:
    "Terms and conditions for London Climate Systems Ltd plumbing, heating, boiler, gas, air conditioning, and building services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-primary" />
              London Climate Systems Ltd
            </span>
            <h1 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-foreground/70">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                1. Understanding These Terms
              </h2>
              <p>
                These Terms and Conditions set out the basis on which London Climate Systems Ltd provides air conditioning, ventilation, heating, refrigeration, plumbing, electrical, maintenance, installation, repair, inspection, and associated building services, together with any equipment, materials, parts, or products required to complete those services.
              </p>
              <p>
                In these Terms, "we", "us", and "our" means London Climate Systems Ltd, company number 17174118. "You" and "your" means the individual, business, landlord, managing agent, or organisation purchasing services from us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                2. Services Covered
              </h2>
              <p>
                Our services may include initial or emergency attendance, scheduled works, inspections, estimates, repairs, installations, servicing, maintenance plans, and follow-up works.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Initial or emergency services:</strong> where immediate attendance is requested or where we attend an issue not previously inspected by us.
                </li>
                <li>
                  <strong>Scheduled services:</strong> where work is booked in advance following an inspection, quotation, or estimate.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                3. Order Process
              </h2>
              <p>
                Orders may be made by telephone, email, website enquiry, booking form, or another communication method accepted by us. These Terms, together with any quotation, estimate, invoice, or written confirmation issued by us, form the contract between you and London Climate Systems Ltd.
              </p>
              <p>
                For initial services, we will provide details of our labour rates and estimated attendance time before arrival where reasonably possible. The contract becomes binding once you request attendance and accept our rates.
              </p>
              <p>
                If additional work is identified during a visit, we may provide a verbal quotation on site or a written quotation afterwards. Quotations and estimates remain valid for 30 days unless otherwise stated.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                4. Cancellation Rights
              </h2>
              <p>
                If you are a consumer purchasing mainly for personal use outside your trade or profession, you may have the right to cancel the contract within 14 days of entering into it, subject to the Consumer Contracts Regulations 2013.
              </p>
              <p>
                You may lose the right to cancel where emergency services have been requested or where services have already been fully completed. If you ask us to start work during the cancellation period, you agree to pay reasonable costs for labour completed, materials supplied, and any non-refundable items ordered.
              </p>
              <p>
                To cancel, you must notify us clearly by telephone or email. Any refund due will be processed within 14 days where applicable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                5. Charges and Payment
              </h2>
              <p>
                Charges may include labour, materials and goods, specialist equipment, congestion or parking costs, waste disposal costs, and VAT at the prevailing rate where applicable.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Initial services are charged using our hourly rates unless otherwise agreed in writing.</li>
                <li>Scheduled services are charged according to the accepted quotation unless additional work becomes necessary or further instructions are provided by you.</li>
                <li>We will seek approval before carrying out additional chargeable work wherever reasonably possible.</li>
                <li>Payments may include deposits, staged payments, interim invoices, or full payment upon completion.</li>
                <li>Accepted payment methods include bank transfer, debit card, credit card, or cash. Cheques are not accepted.</li>
              </ul>
              <p>
                Late payments may incur statutory interest, debt recovery costs, and legal fees where applicable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                6. Your Responsibilities
              </h2>
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide safe and unobstructed access to the property.</li>
                <li>Ensure adequate working space, water, electricity, and other required utilities are available.</li>
                <li>Obtain any permissions, licences, or consents required for the works.</li>
                <li>Disclose known hazards, dangerous substances, or relevant property issues.</li>
                <li>Provide suitable parking arrangements where possible.</li>
                <li>Ensure someone aged 18 or over is present where required.</li>
              </ul>
              <p>
                If access is unavailable or delayed, we may charge for lost time, travel expenses, and rescheduled appointments. Goods delivered to the property become your responsibility upon delivery, and you are responsible for insuring them against theft, loss, or damage until fully paid for.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                7. Our Responsibilities
              </h2>
              <p>
                We will provide services using reasonable care and skill. Goods supplied by us will be of satisfactory quality, fit for purpose, and as described.
              </p>
              <p>
                Installation workmanship may be covered by written terms provided with the accepted quotation or invoice. This cover does not apply where work has been altered by others, misuse or neglect has occurred, payment has not been made in full, or existing systems are in poor condition.
              </p>
              <p>
                Manufacturer warranties remain subject to the manufacturer's own terms. We are not responsible for defects in customer-supplied materials or equipment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                8. Appointments and Timescales
              </h2>
              <p>
                We will make reasonable efforts to attend appointments on time, but exact arrival times cannot be fixed unless confirmed by us in writing. Delays may occur due to traffic, emergencies, supplier delays, weather conditions, or circumstances outside our reasonable control.
              </p>
              <p>
                Any completion dates or timescales provided are estimates only unless confirmed by us in writing as fixed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                9. Termination
              </h2>
              <p>
                We may terminate the contract if payment is not made, unsafe conditions exist, abusive behaviour occurs, required information is withheld, or access is repeatedly unavailable.
              </p>
              <p>
                You remain responsible for payment for all services, goods, materials, and reasonable costs supplied or incurred before termination.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                10. Liability
              </h2>
              <p>
                Nothing in these Terms excludes liability for death or personal injury caused by negligence, fraud, or any liability that cannot legally be excluded.
              </p>
              <p>
                If you are a consumer, we are responsible only for foreseeable losses directly caused by our breach or negligence. We are not liable for indirect losses, loss of profits, business interruption, consequential damages, or delays caused by events outside our reasonable control.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                11. Data Protection
              </h2>
              <p>
                We process personal information in accordance with applicable UK data protection laws. Your information may be used for scheduling services, providing quotations, invoicing, communication, record keeping, and legal compliance.
              </p>
              <p>
                Further information is available in our Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                12. Complaints
              </h2>
              <p>
                If you are dissatisfied with our services, please contact us directly so we can attempt to resolve the matter promptly and fairly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                13. Governing Law
              </h2>
              <p>
                These Terms and any contract between you and us are governed by English law. Any disputes shall be subject to the jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                14. Contact Details
              </h2>
              <div className="bg-foreground/5 border border-border rounded-lg p-6 mt-4">
                <p><strong>London Climate Systems Ltd</strong></p>
                <p>Company Number: 17174118</p>
                <p>71-75 Shelton Street</p>
                <p>Covent Garden, London</p>
                <p>WC2H 9JQ, United Kingdom</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:londonclimatesystems@gmail.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    londonclimatesystems@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:07473423003" className="text-blue-400 hover:text-blue-300">
                    07473 423003
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
