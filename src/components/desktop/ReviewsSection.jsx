// src/components/desktop/ReviewsSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp } from 'lucide-react';

export default function ReviewsSection({ productId }) {
  const [reviews] = useState([
    {
      id: 1,
      author: 'Dr. Rajesh Kumar',
      rating: 5,
      date: '2 weeks ago',
      text: 'Excellent quality product. Highly recommend for immunity building.',
      verified: true,
      helpful: 24,
      images: [],
    },
    {
      id: 2,
      author: 'Priya Sharma',
      rating: 5,
      date: '1 month ago',
      text: 'Very effective and natural. No side effects. Great results!',
      verified: true,
      helpful: 18,
      images: [],
    },
    {
      id: 3,
      author: 'Amit Patel',
      rating: 4,
      date: '2 months ago',
      text: 'Good product but takes time to show results. Worth the wait.',
      verified: true,
      helpful: 12,
      images: [],
    },
  ]);

  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="hidden lg:block">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Customer Reviews</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.round(averageRating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-slate-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-slate-900">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <span className="text-slate-600">Based on {reviews.length} reviews</span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 border border-slate-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-slate-900">{review.author}</h4>
                  {review.verified && (
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-500">{review.date}</span>
                </div>
              </div>
            </div>

            <p className="text-slate-700 mb-4">{review.text}</p>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>Helpful ({review.helpful})</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="mt-6 w-full py-3 border-2 border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
        Load More Reviews
      </button>
    </div>
  );
}

