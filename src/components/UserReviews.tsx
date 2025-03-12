
import React from 'react';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Johnson",
    avatar: "SJ",
    rating: 5,
    text: "Sesame AI has completely changed how I interact with technology. The conversations are so natural, I sometimes forget I'm talking to an AI!",
  },
  {
    name: "Michael Chen",
    avatar: "MC",
    rating: 5,
    text: "I've tried many voice assistants, but Sesame AI is in a league of its own. It understands context and remembers previous conversations.",
  },
  {
    name: "Emma Williams",
    avatar: "EW",
    rating: 4,
    text: "Incredibly helpful for daily tasks. The voice recognition is flawless, and it integrates perfectly with my other smart devices.",
  },
  {
    name: "David Rodriguez",
    avatar: "DR",
    rating: 5,
    text: "Sesame AI has become my go-to digital companion. From answering complex questions to simple reminders, it does it all with a natural human touch.",
  }
];

const UserReviews = () => {
  return (
    <section className="bg-sesame-background py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sesame-text mb-4">
            What Our Users Say
          </h2>
          <p className="text-sesame-secondary text-lg max-w-2xl mx-auto">
            Join thousands of satisfied Sesame AI users
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="bg-sesame-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  {review.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-sesame-text">{review.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? "text-sesame-accent fill-sesame-accent" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sesame-secondary italic">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
