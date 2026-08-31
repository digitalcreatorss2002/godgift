import React, { useState, useEffect } from 'react';
import { ShieldCheck, FileText, Phone, Mail, MapPin, Building, ArrowLeft } from 'lucide-react';
import { LotusJaaliPatternBackground, DecorativeWavyDivider } from '../components/common/BackgroundIllustrations';
import PageLoader from '../components/common/PageLoader';

export default function TermsPage({ onNavigate }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader text="Loading Terms & Conditions..." />;
  }

  const sections = [
    {
      title: "1. Use of the Website",
      content: [
        "The Website is operated by God Gift Arts (“Company”, “we”, “us”, or “our”) for providing information about and facilitating the sale of our products and services. By using this Website, you confirm that:",
        "• You are legally capable of entering into a binding contract under applicable law.",
        "• The information provided by you is accurate and complete.",
        "• You will use the Website only for lawful purposes.",
        "• You will not use the Website in any manner that may damage, disable, overburden, or impair its operation.",
        "• You will not attempt to gain unauthorized access to any part of the Website, its systems, databases, or related services.",
        "We reserve the right to refuse service, cancel accounts, or reject orders where we reasonably believe that these Terms have been violated."
      ]
    },
    {
      title: "2. Products and Product Information",
      content: [
        "God Gift Arts makes reasonable efforts to ensure that product descriptions, photographs, dimensions, colours, prices, and other information displayed on the Website are accurate. However:",
        "• Actual product colours may vary slightly depending on the device or screen used.",
        "• Handmade, customized, or artisanal products may have minor variations in colour, texture, finish, size, or appearance.",
        "• Product images are for representation purposes and may not always exactly match the delivered product.",
        "• We reserve the right to correct errors, inaccuracies, or omissions in product information at any time.",
        "The availability of a product on the Website does not guarantee that it will remain available at the time an order is placed or processed."
      ]
    },
    {
      title: "3. Prices and Taxes",
      content: [
        "All product prices are displayed in Indian Rupees (INR) unless otherwise specified. Applicable GST and other statutory charges, where applicable, will be charged in accordance with prevailing Indian laws. We reserve the right to change product prices at any time without prior notice. However, the price applicable to an accepted order will ordinarily be the price displayed at the time the order is placed, subject to correction of any genuine pricing or technical error."
      ]
    },
    {
      title: "4. Orders and Acceptance",
      content: [
        "By placing an order on the Website, you make an offer to purchase the selected products subject to these Terms. Once an order is placed, you are expected to complete the transaction and provide accurate information necessary for processing and delivery. God Gift Arts reserves the right to accept, decline, cancel, or limit any order at its discretion, including in circumstances such as:",
        "• Product unavailability.",
        "• Incorrect pricing or product information.",
        "• Suspected fraudulent or unauthorized transactions.",
        "• Incomplete or inaccurate customer information.",
        "• Delivery restrictions or technical errors.",
        "If an order is cancelled after payment has been received, any eligible refund will be processed according to our applicable Refund/Cancellation Policy."
      ]
    },
    {
      title: "5. Customized and Personalized Products",
      content: [
        "For customized, personalized, or made-to-order products, customers are responsible for providing accurate names, spellings, dates, photographs, designs, messages, sizes, colours, and other specifications. Once production has commenced, changes or cancellations may not be possible.",
        "God Gift Arts shall not be responsible for errors arising from incorrect information or instructions supplied by the customer. Customized products may not be eligible for return or exchange except where required under applicable law or where the product is defective or incorrectly supplied by us."
      ]
    },
    {
      title: "6. Payment",
      content: [
        "Customers may pay using the payment methods made available on the Website. Where payment is made using a credit/debit card, bank account, UPI, or other payment instrument, the customer represents that they are authorized to use that payment method.",
        "God Gift Arts does not knowingly accept fraudulent transactions and reserves the right to cancel or investigate transactions that appear suspicious or unauthorized. The customer shall be responsible for providing accurate payment information and complying with the terms of their payment provider."
      ]
    },
    {
      title: "7. Delivery",
      content: [
        "We will make reasonable efforts to deliver orders within the estimated delivery period communicated at the time of purchase. However, delivery dates may be affected by circumstances beyond our reasonable control, including courier delays, weather conditions, natural disasters, strikes, government restrictions, or incomplete delivery information.",
        "A delivery estimate is therefore not a guaranteed delivery date unless expressly agreed otherwise in writing. Customers are responsible for providing a complete and accurate delivery address and contact details."
      ]
    },
    {
      title: "8. Delivery to Restricted Locations",
      content: [
        "Certain products may be subject to geographical, legal, logistical, or courier restrictions. God Gift Arts reserves the right to refuse or cancel an order where delivery to the specified location is not reasonably possible or where applicable laws or logistical restrictions prevent us from completing the transaction."
      ]
    },
    {
      title: "9. Returns, Exchanges and Refunds",
      content: [
        "Returns, exchanges, cancellations, and refunds shall be governed by the Return, Refund and Cancellation Policy published on the Website. Products must be returned in accordance with the applicable requirements and within the prescribed period. Customized, personalized, or specially manufactured products may have different return or cancellation conditions."
      ]
    },
    {
      title: "10. Intellectual Property Rights",
      content: [
        "All content appearing on the Website—including company name, logo, product photographs, designs, graphics, artwork, text, videos, descriptions, layout, software, trademarks, and copyrighted material—is owned by or licensed to God Gift Arts.",
        "No part of the Website or its content may be copied, reproduced, modified, distributed, republished, displayed, transmitted, or commercially exploited without prior written permission from God Gift Arts. Unauthorized use of our intellectual property may result in appropriate legal action under applicable law."
      ]
    },
    {
      title: "11. Customer-Provided Content",
      content: [
        "Where customers submit photographs, artwork, text, names, messages, logos, or other materials for customization, the customer represents that they have the necessary rights and permissions. The customer agrees that God Gift Arts may use such material solely to process and fulfill the customer's order. The customer shall ensure submitted material does not infringe third-party intellectual property or privacy rights."
      ]
    },
    {
      title: "12. Prohibited Activities",
      content: [
        "Users shall not use the Website for unlawful purposes, submit false information, attempt to interfere with Website security, introduce malicious code, access restricted systems, copy Website content, place fraudulent orders, or use unauthorized payment instruments.",
        "We reserve the right to suspend or terminate access to the Website where prohibited activities are suspected or established."
      ]
    },
    {
      title: "13. Limitation of Liability",
      content: [
        "To the maximum extent permitted by applicable law, God Gift Arts, its owners, employees, representatives, agents, suppliers, and service providers shall not be liable for indirect, incidental, special, consequential, or punitive losses arising from the use of the Website or services."
      ]
    },
    {
      title: "14. Indemnification",
      content: [
        "You agree to indemnify and hold harmless God Gift Arts against claims, losses, liabilities, damages, costs, and expenses arising from your breach of these Terms, misuse of the Website, violation of law, or infringement of third-party rights."
      ]
    },
    {
      title: "15. Privacy",
      content: [
        "Your use of the Website is also governed by our Privacy Policy, which explains how we collect, use, store, and protect personal information."
      ]
    },
    {
      title: "16. Third-Party Services and Links",
      content: [
        "The Website may contain links to third-party websites, payment gateways, or delivery providers. God Gift Arts is not responsible for the content, security, or privacy practices of third-party services."
      ]
    },
    {
      title: "17. Modification of Terms",
      content: [
        "God Gift Arts reserves the right to modify, update, or revise these Terms from time to time. Updated Terms will be posted on the Website with the revised effective date. Continued use of the Website constitutes acceptance of revised Terms."
      ]
    },
    {
      title: "18. Force Majeure",
      content: [
        "God Gift Arts shall not be responsible for any delay or failure to perform its obligations resulting from natural disasters, government restrictions, strikes, transportation disruptions, epidemics, or other unforeseen events beyond reasonable control."
      ]
    },
    {
      title: "19. Severability",
      content: [
        "If any provision of these Terms is found invalid or unenforceable, that provision shall be interpreted to the extent necessary to make it enforceable, while remaining provisions continue in full force."
      ]
    },
    {
      title: "20. Termination",
      content: [
        "God Gift Arts may suspend or terminate access to the Website where a user violates these Terms, engages in unlawful activity, or misuses the Website."
      ]
    },
    {
      title: "21. Governing Law and Jurisdiction",
      content: [
        "These Terms shall be governed by and interpreted in accordance with the prevailing laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts at New Delhi, India."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg pb-24">
      
      {/* Museum Style Hero Header */}
      <div className="relative bg-[#FAF6F0] py-14 sm:py-20 border-b border-[#EADBCA] overflow-hidden">
        <LotusJaaliPatternBackground className="text-amber-900/12" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:underline mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <DecorativeWavyDivider className="w-48 h-4 text-amber-800/40 mx-auto" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/10 border border-amber-900/20 text-amber-900 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-800" />
            <span>Legal Compliance & Terms</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-stone-900 leading-tight">
            Terms & Conditions
          </h1>

          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto font-serif italic">
            Last Updated: 29th August, 2026 • God Gift Arts Official Terms of Service
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">

        {/* Intro Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-3 text-amber-900 font-serif font-bold text-lg border-b border-stone-100 pb-3">
            <FileText className="w-5 h-5 text-amber-800 shrink-0" />
            <span>Welcome to God Gift Arts</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif">
            By accessing, browsing, registering on, or purchasing products through our website <strong>[www.godgiftarts.com]</strong> (“Website”), you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions (“Terms”). If you do not agree with any part of these Terms, please do not use this Website or place an order through it.
          </p>
        </div>

        {/* 21 Detailed Legal Sections */}
        <div className="space-y-6">
          {sections.map((sec, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-3">
              <h2 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                {sec.title}
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section 22: Contact & Company Info Box */}
        <div id="contact-info" className="bg-stone-950 text-white p-8 sm:p-10 rounded-3xl border border-stone-800 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">Section 22</span>
            <h2 className="text-2xl font-serif font-bold text-white">Contact & Company Information</h2>
            <p className="text-xs text-stone-400 font-serif italic">
              For questions, complaints, order-related concerns, or clarification regarding these Terms:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-800 text-xs sm:text-sm">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">God Gift Arts</span>
                  <span className="text-stone-300">F-111, Bhagwan Nagar, Ashram, New Delhi-110014</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-stone-400 text-[10px] uppercase block">Official Email</span>
                  <a href="mailto:godgiftart09@gmail.com" className="text-amber-300 font-bold hover:underline">
                    godgiftart09@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-stone-400 text-[10px] uppercase block">Helpline Numbers</span>
                  <span className="text-stone-200 font-semibold block">+91 92116 72167</span>
                  <span className="text-stone-200 font-semibold block">+91 96435 93295</span>
                  <span className="text-stone-200 font-semibold block">+91 96950 53606</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-stone-400 text-[10px] uppercase block">GST Registration (GSTIN)</span>
                  <span className="text-amber-400 font-mono font-bold">07AXWPP4421D1ZA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}