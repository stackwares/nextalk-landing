
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
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
              <p className="font-semibold">Disclaimer:</p> 
              <p>Sesame AI is a wellness tool designed to provide insights into your heart rate. It is not intended to diagnose, treat, or cure any medical condition. Always seek the advice of a qualified healthcare provider before using this app and before making any medical decisions.</p>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading or using the Sesame AI app, these terms will automatically apply to you. Please read them carefully before using the app. You're not permitted to copy or modify the app, any part of the app, or our trademarks in any way. You're not allowed to attempt to extract the source code of the app, translate the app into other languages, or create derivative versions. The app itself, and all related trademarks, copyright, database rights, and other intellectual property rights, remain the property of Stackwares.
            </p>

            <h2>2. App Updates and Charges</h2>
            <p>
              Stackwares is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you're paying for.
            </p>

            <h2>3. Data Security</h2>
            <p>
              The Sesame AI app stores and processes personal data that you have provided to us to provide our Service. It's your responsibility to keep your device and access to the app secure. We recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions imposed by the official operating system of your device. This could make your device vulnerable to malware/viruses/malicious programs, compromise its security features, and could cause the Sesame AI app to malfunction.
            </p>

            <h2>4. Third-Party Services</h2>
            <p>
              The app uses third-party services that declare their own Terms and Conditions:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Play Services</a></li>
              <li><a href="https://firebase.google.com/terms/analytics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics for Firebase</a></li>
              <li><a href="https://firebase.google.com/terms/crashlytics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Firebase Crashlytics</a></li>
              <li><a href="https://sentry.io/terms/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sentry</a></li>
              <li><a href="https://www.revenuecat.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">RevenueCat</a></li>
            </ul>

            <h2>5. Connectivity Requirements</h2>
            <p>
              Certain functions of the app require an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but Stackwares cannot take responsibility for the app not functioning at full capacity if you don't have access to Wi-Fi or have exhausted your data allowance.
            </p>
            <p>
              If you're using the app outside of a Wi-Fi area, your mobile network provider's terms of agreement will still apply. As a result, you may be charged by your mobile provider for data costs while accessing the app, or for other third-party charges. By using the app, you're accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory without disabling data roaming. If you are not the bill payer for the device on which you're using the app, we assume that you have received permission from the bill payer.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              Stackwares cannot always take responsibility for how you use the app. For example, you need to ensure that your device stays charged – if it runs out of battery and you can't access the Service, Stackwares cannot accept responsibility.
            </p>
            <p>
              While we strive to ensure the app is updated and correct at all times, we rely on third parties to provide information to us. Stackwares accepts no liability for any loss, direct or indirect, that you experience as a result of relying wholly on the functionality of the app.
            </p>

            <h2>7. App Updates and Termination</h2>
            <p>
              We may update the app periodically. The app is currently available on Android & iOS – the requirements for both systems (and for any additional systems we extend availability to) may change, and you'll need to download updates to continue using the app. Stackwares does not guarantee that the app will always be updated to be compatible with the Android & iOS version installed on your device. However, you agree to always accept updates when offered. 
            </p>
            <p>
              We may also discontinue the app and terminate its use at any time without notice. Unless otherwise specified, upon termination: (a) the rights and licenses granted to you will end; (b) you must stop using the app and delete it from your device if necessary.
            </p>

            <h2>8. Changes to Terms and Conditions</h2>
            <p>
              We may update our Terms and Conditions periodically. We recommend that you review this page regularly for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.
            </p>
            <p>
              These terms and conditions are effective as of May 1, 2023.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Terms and Conditions, please contact us at <a href="mailto:dev@stackwares.com" className="text-blue-600 hover:underline">dev@stackwares.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
