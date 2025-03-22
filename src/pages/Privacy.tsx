
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
              Stackwares built the Sesame AI app as an Ad Supported app. This SERVICE is provided by Stackwares at no cost and is intended for use as is.
            </p>

            <p>
              This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Service. By using Sesame AI, you agree to the collection and use of information in accordance with this policy.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
              <p className="font-semibold">Important Note:</p> 
              <p>The Personal Information we collect is used solely for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
            </div>

            <h2>Information Collection and Use</h2>
            <p>
              For a better experience while using our Service, we may request that you provide us with certain personally identifiable information, including but not limited to User ID and Email. The information we request will be retained and used as described in this privacy policy.
            </p>
            
            <p>
              The app uses third-party services that may collect information used to identify you:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Play Services</a></li>
              <li><a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics for Firebase</a></li>
              <li><a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Firebase Crashlytics</a></li>
              <li><a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sentry</a></li>
              <li><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">RevenueCat</a></li>
            </ul>

            <h2>Log Data</h2>
            <p>
              We want to inform you that whenever you use our Service, in the case of an error, we collect data and information (through third-party products) on your device called Log Data. This Log Data may include information such as your device's Internet Protocol ("IP") address, device name, operating system version, app configuration when using our Service, the time and date of your use of the Service, and other statistics.
            </p>

            <h2>Cookies</h2>
            <p>
              Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from websites you visit and are stored on your device's internal memory.
            </p>
            <p>
              This Service does not use "cookies" explicitly. However, the app may use third-party code and libraries that use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
            </p>

            <h2>Service Providers</h2>
            <p>
              We may employ third-party companies and individuals for the following reasons:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>To facilitate our Service</li>
              <li>To provide the Service on our behalf</li>
              <li>To perform Service-related services</li>
              <li>To assist us in analyzing how our Service is used</li>
            </ul>
            <p>
              We want to inform users of this Service that these third parties have access to their Personal Information to perform tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
            </p>

            <h2>Security</h2>
            <p>
              We value your trust in providing us your Personal Information, thus we strive to use commercially acceptable means of protecting it. However, please remember that no method of transmission over the internet or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>

            <h2>Links to Other Sites</h2>
            <p>
              This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. If we discover that a child under 13 has provided us with personal information, we immediately delete it from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We recommend that you review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              This policy is effective as of May 1, 2023.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, please contact us at <a href="mailto:dev@stackwares.com" className="text-blue-600 hover:underline">dev@stackwares.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
