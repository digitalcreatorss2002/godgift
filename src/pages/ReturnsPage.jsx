import React, { useState, useEffect } from 'react';
import { RefreshCw, Clock, AlertTriangle, ShieldCheck, Mail, Phone, ArrowLeft, CheckCircle2, PackageCheck } from 'lucide-react';
import { LotusJaaliPatternBackground, DecorativeWavyDivider } from '../components/common/BackgroundIllustrations';
import PageLoader from '../components/common/PageLoader';

export default function ReturnsPage({ onNavigate }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader text="Loading Return & Refund Policy..." />;
  }

  const policies = [
    {
      title: "1. Return Period",
      content: [
        "Our return, refund, and exchange policy is valid for 3 days from the date of delivery of your order. To be eligible for a return or exchange:",
        "• The product must be unused and in the same condition in which it was received.",
        "• The product must be returned with its original packaging, accessories, tags, and other materials, wherever applicable.",
        "• Proof of purchase / order details may be required."
      ]
    },
    {
      title: "2. Eligible Reasons for Return, Refund or Exchange",
      content: [
        "Products purchased through the official God Gift Arts e-commerce website or mobile application may be returned, refunded, or exchanged only under the following circumstances:",
        "1. The product has a manufacturing defect.",
        "2. The product has been received damaged or broken.",
        "3. The package contains a product different from the product ordered.",
        "4. One or more products ordered are missing from the package.",
        "Please note: This Return, Refund & Exchange Policy applies strictly to products purchased through the official God Gift Arts website or mobile application."
      ]
    },
    {
      title: "3. Damaged or Broken Products (24-Hour Notice Required)",
      isAlert: true,
      content: [
        "If you receive a damaged or broken product, you MUST notify God Gift Arts within 24 hours of delivery. For damage claims, customers are required to provide:",
        "• Clear photographs of the outer packaging box.",
        "• Clear photographs of the damaged/broken product.",
        "• An unboxing video of the package/product, wherever possible.",
        "• Order number and relevant order details.",
        "Failure to notify us within the 24-hour delivery period may affect your eligibility for a return, refund, or exchange for damage-related claims."
      ]
    },
    {
      title: "4. Process to Initiate a Return, Refund or Exchange",
      content: [
        "If your order meets any of the eligible categories mentioned above:",
        "1. Contact God Gift Arts within the applicable time period.",
        "2. Provide your order number and details of the issue.",
        "3. Submit the required photographs / unboxing videos and supporting information.",
        "4. Our team will review the request and determine whether the product qualifies for return, refund, or exchange.",
        "5. If approved, we will provide further instructions regarding reverse pickup or return of the product."
      ]
    },
    {
      title: "5. Refunds",
      content: [
        "If your return request is approved, God Gift Arts may arrange reverse pickup collection of the product, where applicable. Once the returned product is received and inspected, we will notify you regarding approval or rejection of your refund.",
        "If approved, the refund will generally be processed within 7 business days to the eligible payment method / bank account details provided by the customer, subject to payment gateway and banking procedures."
      ]
    },
    {
      title: "6. Shipping & Gift-Wrapping Charges",
      content: [
        "Unless otherwise required under applicable law, shipping/delivery charges and gift-wrapping charges paid at the time of placing the order are non-refundable.",
        "Where a product is returned due to a manufacturing defect, transit damage, incorrect item, or missing product, God Gift Arts may determine the treatment of return shipping costs on a case-by-case basis."
      ]
    },
    {
      title: "7. Late or Missing Refunds",
      content: [
        "If you have been informed that your refund has been processed but have not received it yet:",
        "1. Please check your bank account or original payment method.",
        "2. Contact your bank or payment gateway provider, as processing times may vary.",
        "3. If the refund is still not reflected after 7 business days, please contact our support team with your order number and refund reference details."
      ]
    },
    {
      title: "8. Sale / Discounted Products",
      content: [
        "Unless otherwise specified at the time of purchase, sale, clearance, promotional, or discounted products may not be eligible for return, refund, or exchange.",
        "However, products received with a manufacturing defect, damaged condition, or incorrectly supplied item will be considered for replacement/refund subject to verification."
      ]
    },
    {
      title: "9. Exchanges",
      content: [
        "God Gift Arts will generally replace a product only where:",
        "• The product has a manufacturing defect;",
        "• The product was received damaged/broken; or",
        "• The wrong product was supplied.",
        "Where an exchange is approved, replacement will normally be for the same product, subject to stock availability. If unavailable, an alternative resolution (such as a refund or alternative item) will be offered."
      ]
    },
    {
      title: "10. Customized & Personalized Products",
      content: [
        "Customized, personalized, engraved, printed, or made-to-order products may NOT be eligible for cancellation, return, refund, or exchange once production has commenced, except where the product is defective, damaged, or incorrectly supplied.",
        "Customers are responsible for ensuring that names, spellings, messages, phone numbers, email IDs, shipping addresses, and PIN codes submitted on the website are correct."
      ]
    },
    {
      title: "11. Important Notice & Inspection Right",
      content: [
        "God Gift Arts reserves the right to inspect and verify products before approving a return, refund, or exchange.",
        "A return request may be rejected where the product has been used, altered, damaged after delivery, or does not meet the specified conditions. Nothing in this policy limits any non-excludable rights under applicable Indian law."
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
            <RefreshCw className="w-3.5 h-3.5 text-amber-800" />
            <span>Customer Protection & Service Policy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-stone-900 leading-tight">
            Return, Refund & Exchange Policy
          </h1>

          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto font-serif italic">
            Last Updated: 29th August, 2026 • God Gift Arts Official Policy
          </p>

          {/* Quick Highlight Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-bold text-stone-800">
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-stone-300 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-amber-800" />
              <span>3-Day Return Window</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-stone-300 shadow-2xs">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-800" />
              <span>24-Hour Damage Reporting</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-stone-300 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-800" />
              <span>7-Day Fast Refund Credit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">

        {/* Intro Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-3">
          <div className="flex items-center gap-3 text-amber-900 font-serif font-bold text-lg border-b border-stone-100 pb-3">
            <PackageCheck className="w-5 h-5 text-amber-800 shrink-0" />
            <span>Our Commitment to Perfection</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif">
            At <strong>God Gift Arts</strong>, we strive to ensure that every product reaches you in perfect condition. If you receive a product with a manufacturing defect, transit damage, or an issue with your order, we will be happy to assist you in accordance with the policy below.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {policies.map((sec, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border shadow-2xs space-y-3 ${
                sec.isAlert 
                  ? 'bg-amber-50/60 border-amber-300/80 text-stone-900' 
                  : 'bg-white border-stone-200/90'
              }`}
            >
              <div className="flex items-center gap-2">
                {sec.isAlert && <AlertTriangle className="w-5 h-5 text-amber-800 shrink-0" />}
                <h2 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                  {sec.title}
                </h2>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support Box */}
        <div className="bg-stone-950 text-white p-8 sm:p-10 rounded-3xl border border-stone-800 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">Support Desk</span>
            <h2 className="text-2xl font-serif font-bold text-white">Need Assistance with a Return?</h2>
            <p className="text-xs text-stone-400 font-serif italic">
              Please keep your order number and refund reference details ready when contacting us:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-800 text-xs sm:text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-stone-400 text-[10px] uppercase block">Support Email</span>
                  <a href="mailto:godgiftart09@gmail.com" className="text-amber-300 font-bold hover:underline">
                    godgiftart09@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-stone-400 text-[10px] uppercase block">Customer Support Helplines</span>
                  <span className="text-stone-200 font-semibold block">+91 92116 72167</span>
                  <span className="text-stone-200 font-semibold block">+91 96435 93295</span>
                  <span className="text-stone-200 font-semibold block">+91 96950 53606</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}