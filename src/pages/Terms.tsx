
import React from 'react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Terms of Service | Sesame AI Voice Companion" 
        description="Terms of Service for Sesame AI Voice Companion app." 
        canonicalUrl="https://sesame-ai.app/terms"
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
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Sesame AI Voice Companion app or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Sesame AI is an artificial intelligence voice companion designed to engage in natural conversations with users. Our service provides AI-powered conversational experiences through mobile applications and web interfaces.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              You may be required to create an account to use certain features of our service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h2>4. User Conduct</h2>
            <p>
              You agree not to use our service for any unlawful purpose or in any way that could damage, disable, or impair the service. You further agree not to attempt to gain unauthorized access to any part of the service or systems.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our service, including but not limited to text, graphics, logos, and software, are owned by Sesame AI and are protected by intellectual property laws.
            </p>

            <h2>6. Disclaimers</h2>
            <p>
              Our service is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our service will be uninterrupted, secure, or error-free.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Sesame AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of our service after such changes constitutes your acceptance of the new terms.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Sesame AI operates, without regard to its conflict of law provisions.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:stackwares+nextalk@gmail.com">stackwares+nextalk@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
