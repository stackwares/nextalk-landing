
import React from 'react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Privacy Policy | Sesame AI Voice Companion" 
        description="Privacy Policy for Sesame AI Voice Companion app." 
        canonicalUrl="https://sesame-ai.app/privacy"
      />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="lead">
              At Sesame AI, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share your personal information when you use our app and website.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, and device information when you use our service. We also collect information about your interactions with our AI companion.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use your information to provide and improve our service, personalize your experience, communicate with you, and ensure the security of our service. We also use data to train and improve our AI systems.
            </p>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with service providers who help us deliver our service, or if required by law. We may also share anonymized data for research purposes.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your personal information, such as the right to access, correct, or delete your data. Contact us to exercise these rights.
            </p>

            <h2>6. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with their information, please contact us.
            </p>

            <h2>7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              Our service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties, and we encourage you to read their privacy policies.
            </p>

            <h2>9. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our service and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:stackwares+nextalk@gmail.com">stackwares+nextalk@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
