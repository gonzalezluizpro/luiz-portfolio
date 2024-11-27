// src/app/privacy-policy/page.tsx
export default function PrivacyPolicy() {
    return (
      <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: November 27, 2024</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p>This Privacy Policy describes how we collect, use, and protect information obtained from users of our lead form at https://luiz-portfolio-seven.vercel.app/.</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p>We collect the following information through our lead form:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Any additional information you voluntarily provide</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p>Your information is used to:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Respond to your inquiries</li>
                <li>Send requested information</li>
                <li>Maintain communication records</li>
                <li>Improve our services</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage and Security</h2>
              <ul className="list-disc pl-5">
                <li>We store your data securely on our Vercel-hosted platform</li>
                <li>We implement appropriate security measures to protect against unauthorized access</li>
                <li>We retain your information only as long as necessary for the purposes outlined in this policy</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p>For privacy-related questions, please use the contact form on our website.</p>
            </section>
          </div>
        </div>
      </main>
    );
  }