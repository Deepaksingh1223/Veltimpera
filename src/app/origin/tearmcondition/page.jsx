"use client";

 
import { 
  RiFileTextLine, 
  RiUserStarLine, 
  RiBankLine, 
  RiShieldKeyholeLine, 
  RiAlertLine, 
  RiScalesLine,
  RiMailLine,
  RiLockPasswordLine,
  RiGlobalLine,
  RiHammerLine
} from "react-icons/ri";

export default function TermsCondition() {
  const sections = [
    {
      icon: RiFileTextLine,
      title: "1. Acceptance of Terms",
      content: [
        "By accessing or using Velvora's platform, website, or services, you agree to be bound by these Terms & Conditions.",
        "If you do not agree with any part of these terms, you may not use our services.",
        "These terms apply to all users, visitors, and others who access the platform."
      ]
    },
    {
      icon: RiUserStarLine,
      title: "2. Eligibility",
      content: [
        "You must be at least 18 years old to use Velvora's services.",
        "By using the platform, you represent and warrant that you have the legal capacity to enter into these terms.",
        "You are responsible for complying with all applicable laws and regulations in your jurisdiction regarding blockchain, cryptocurrency, and AI technology usage."
      ]
    },
    {
      icon: RiBankLine,
      title: "3. Platform Services",
      content: [
        "Velvora provides a decentralized AI/ML marketplace where users can deploy, access, and interact with AI models and computing resources.",
        "All transactions are processed through smart contracts on supported blockchain networks.",
        "Velvora acts as a facilitator and is not responsible for the outcome, accuracy, or performance of third-party AI models or services accessed through the platform.",
        "We reserve the right to modify, suspend, or discontinue any part of our services at any time."
      ]
    },
    {
      icon: RiShieldKeyholeLine,
      title: "4. User Responsibilities",
      content: [
        "You are solely responsible for maintaining the security of your wallet, private keys, and account credentials.",
        "You agree not to use the platform for any illegal, fraudulent, or unauthorized purpose.",
        "You will not attempt to interfere with or compromise the platform's security, smart contracts, or infrastructure.",
        "Any violations may result in immediate termination of access and legal action."
      ]
    },
    {
      icon: RiScalesLine,
      title: "5. Intellectual Property",
      content: [
        "The Velvora platform, including its design, logos, branding, and original content, is owned by Velvora and protected by intellectual property laws.",
        "AI models, datasets, and content uploaded by users remain the property of their respective owners.",
        "You grant Velvora a limited license to host, store, and facilitate access to any content you submit to the platform as necessary to provide our services."
      ]
    },
    {
      icon: RiAlertLine,
      title: "6. Risk Disclosure",
      content: [
        "Blockchain transactions are irreversible. You acknowledge and accept the risks associated with cryptocurrency, including market volatility, technical failures, and regulatory changes.",
        "Smart contracts may contain bugs or vulnerabilities despite audits. Velvora is not liable for any losses resulting from smart contract failures.",
        "You understand that AI models may produce inaccurate, biased, or unexpected outputs. Use the platform at your own risk.",
        "Velvora does not provide financial, investment, or legal advice. Any projections or estimates are for informational purposes only."
      ]
    },
    {
      icon: RiLockPasswordLine,
      title: "7. Fees & Payments",
      content: [
        "All fees for platform services are clearly displayed before transaction confirmation.",
        "Blockchain network fees (gas fees) are separate and your responsibility.",
        "Fees are non-refundable except as explicitly stated in specific service agreements.",
        "Velvora reserves the right to adjust fees with reasonable notice provided on the platform."
      ]
    },
    {
      icon: RiHammerLine,
      title: "8. Limitation of Liability",
      content: [
        "To the maximum extent permitted by law, Velvora and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages.",
        "Our total liability for any claim arising from these terms or your use of the platform shall not exceed the amount you paid to Velvora in the preceding 6 months.",
        "Some jurisdictions do not allow limitations of liability, so this provision may not apply to you."
      ]
    },
    {
      icon: RiGlobalLine,
      title: "9. Governing Law & Dispute Resolution",
      content: [
        "These terms shall be governed by the laws of the jurisdiction where Velvora is registered, without regard to conflict of law principles.",
        "Any disputes arising from these terms shall be resolved through binding arbitration, not in court, unless prohibited by applicable law.",
        "You waive the right to participate in class actions or class-wide arbitration."
      ]
    },
    {
      icon: RiFileTextLine,
      title: "10. Modifications to Terms",
      content: [
        "Velvora may update these Terms & Conditions from time to time.",
        "We will notify users of material changes via platform announcements or direct communication.",
        "Continued use of the platform after changes constitutes acceptance of the modified terms."
      ]
    },
    {
      icon: RiMailLine,
      title: "11. Contact Information",
      content: [
        "For questions, concerns, or legal inquiries regarding these Terms & Conditions, please contact us at:",
        <span key="contact-legal" className="font-mono text-indigo-600">legal@velvora.com</span>,
        "For general support:",
        <span key="contact-support" className="font-mono text-indigo-600">support@velvora.com</span>
      ]
    }
  ];

  return (
    <>
      <Header2 />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 md:py-28 px-4 md:px-6">
          {/* subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 via-transparent to-transparent pointer-events-none" />

          <div className="relative max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-5">
                <RiHammerLine className="text-sm" />
                Legal Agreement
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Terms & Conditions
              </h1>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                Please read these terms carefully before using the Velvora platform.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Last Updated: <span className="font-medium">June 17, 2025</span>
              </p>
            </div>

            {/* Terms content card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 space-y-8">
                {sections.map((section, idx) => {
                  const Icon = section.icon;
                  return (
                    <div key={idx} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-1.5 rounded-full bg-indigo-50 text-indigo-600">
                          <Icon className="text-lg" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                      </div>
                      <div className="pl-2 space-y-2 text-gray-600">
                        {section.content.map((item, i) => (
                          <p key={i} className="leading-relaxed">
                            {typeof item === 'string' ? item : item}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer note inside card */}
              <div className="bg-gray-50 border-t border-gray-100 px-6 md:px-8 py-5 text-xs text-gray-500 text-center">
                By accessing or using Velvora, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
              </div>
            </div>

            {/* Final note */}
            <p className="text-center text-xs text-gray-400 mt-8">
              Velvora — Building trust in decentralized AI infrastructure.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}