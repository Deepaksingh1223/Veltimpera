"use client";

import Header2 from "../Header2";
import Footer from "../Footer";
import { 
  RiShieldCheckLine, 
  RiWalletLine, 
  RiUserLine, 
  RiLockLine, 
  RiCloudLine, 
  RiToolsLine, 
  RiFileListLine, 
  RiMailLine,
  RiLineChartLine,
  RiDatabaseLine,
  RiGlobalLine
} from "react-icons/ri";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: RiWalletLine,
      title: "1. Information We Collect",
      content: [
        "Wallet Address: To facilitate transactions and interact with smart contracts.",
        "Basic Profile Info: Name or email if you create a profile or contact us.",
        "Usage Data: Interaction logs (non-personal), device type, browser info, and similar data to improve our services."
      ]
    },
    {
      icon: RiUserLine,
      title: "2. How We Use Your Information",
      content: [
        "Enable smart contract transactions and platform features.",
        "Provide customer support and respond to inquiries.",
        "Improve security, user experience, and platform performance.",
        "Velvora does not sell or share your personal data with third parties for marketing purposes."
      ]
    },
    {
      icon: RiLineChartLine,
      title: "3. Cookies & Tracking",
      content: [
        "We use basic cookies for site functionality.",
        "Anonymized analytics help us understand platform usage.",
        "You can disable cookies in your browser settings, but some features may be affected."
      ]
    },
    {
      icon: RiLockLine,
      title: "4. Data Security",
      content: [
        "We implement industry-standard security practices to protect your information.",
        "Remember: blockchain transactions are public and irreversible. Always be cautious when sharing wallet addresses or interacting with smart contracts."
      ]
    },
    {
      icon: RiCloudLine,
      title: "5. Decentralized Nature",
      content: [
        "Most data is stored on-chain and not directly controlled by Velvora.",
        "You are responsible for your wallet, private keys, and any public interactions on the blockchain."
      ]
    },
    {
      icon: RiToolsLine,
      title: "6. Third-Party Tools",
      content: [
        "We may integrate third-party services such as payment gateways, analytics providers, or decentralized storage.",
        "These tools have their own privacy policies, and we encourage you to review them."
      ]
    },
    {
      icon: RiFileListLine,
      title: "7. Your Rights",
      content: [
        "You may access, correct, or delete optional profile information you provide to us.",
        "Blockchain transaction data cannot be deleted or altered due to its immutable nature."
      ]
    },
    {
      icon: RiDatabaseLine,
      title: "8. Updates to This Policy",
      content: [
        "We may update this Privacy Policy from time to time.",
        "Significant changes will be notified on our website or via platform announcements."
      ]
    },
    {
      icon: RiMailLine,
      title: "9. Contact Us",
      content: [
        "If you have any questions about this Privacy Policy or your data, please contact us at:",
        <span key="contact-email" className="font-mono text-indigo-600">privacy@velvora.com</span>
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
                <RiShieldCheckLine className="text-sm" />
                Legal & Privacy
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-gray-950 tracking-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                Your trust matters to us. Learn how Velvora protects your data and respects your privacy.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Effective Date: <span className="font-medium">June 17, 2025</span>
              </p>
            </div>

            {/* Privacy content card */}
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
                By using Velvora, you acknowledge that you have read and understood this Privacy Policy.
              </div>
            </div>

            {/* Optional small note about decentralization */}
            <p className="text-center text-xs text-gray-400 mt-8">
              Velvora — Empowering the future of decentralized AI & compute.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}