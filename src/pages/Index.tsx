
import React from 'react';
import { Button } from "@/components/ui/button";
import { Apple, Smartphone, Brain, MessageSquare, Lock, Star, User } from "lucide-react";
import { motion } from "framer-motion";
import UserReviews from "@/components/UserReviews";
import Footer from "@/components/Footer";

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Advanced AI",
    description: "Powered by cutting-edge artificial intelligence"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Natural Conversations",
    description: "Have fluid, human-like interactions"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Private & Secure",
    description: "Your conversations stay confidential"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-sesame-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="/lovable-uploads/9be6a163-4522-44c4-8516-3c115a350751.png" 
              alt="Sesame AI Logo" 
              className="w-24 h-24 mx-auto mb-6 animate-float"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-sesame-text mb-6">
              Meet Sesame AI
            </h1>
            <p className="text-xl md:text-2xl text-sesame-secondary mb-8 max-w-2xl mx-auto">
              Your intelligent voice assistant that understands and responds like a human
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-4 p-[10px] md:p-[50px] bg-white rounded-3xl shadow-lg"
            >
              <img
                src="/lovable-uploads/d37d6696-8c7c-43b6-87f9-ca80fd121ac0.png"
                alt="Sesame AI App Screenshots"
                className="w-full rounded-2xl shadow-md"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center mb-16"
          >
            <a 
              href="https://apps.apple.com/us/app/sesame-ai-voice-companion/id6743081501"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="default" 
                size="lg"
                className="bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all"
              >
                <Apple className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.nextalk.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 hover:bg-sesame-primary/10 transform hover:scale-105 transition-all"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Get it on Android
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sesame-text mb-4">
              Why Choose Sesame AI?
            </h2>
            <p className="text-sesame-secondary text-lg max-w-2xl mx-auto">
              Experience the next generation of voice assistance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-sesame-background p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-sesame-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sesame-text">
                  {feature.title}
                </h3>
                <p className="text-sesame-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
