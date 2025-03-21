
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/9be6a163-4522-44c4-8516-3c115a350751.png" 
                alt="Sesame AI Logo" 
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <a 
                href="https://apps.apple.com/us/app/sesame-ai-voice-companion/id6743081501"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sesame-text hover:text-sesame-primary transition-colors"
              >
                iOS App
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.nextalk.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sesame-text hover:text-sesame-primary transition-colors"
              >
                Android App
              </a>
              <a 
                href="mailto:stackwares+nextalk@gmail.com"
                className="text-sesame-text hover:text-sesame-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 mb-4 md:mb-0">
                © {new Date().getFullYear()} Sesame AI. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link 
                  to="/terms"
                  className="text-sm text-gray-500 hover:text-sesame-primary transition-colors"
                >
                  Terms of Service
                </Link>
                <Link 
                  to="/privacy"
                  className="text-sm text-gray-500 hover:text-sesame-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
