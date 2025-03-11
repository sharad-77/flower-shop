import React from 'react';
import { twMerge } from 'tailwind-merge';

const TestimonialCard = ({
  username,
  avatarSrc,
  reviewText,
  rating,
  emojiList,
  className
}) => {
  // Convert rating to array for star rendering
  const stars = Array(5).fill(0).map((_, index) => index < rating);
  
  return (
    <div className={twMerge("bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300 max-w-xs mx-auto my-4 sm:max-w-sm md:max-w-md", className)}>
      <div className="flex items-start space-x-3">
        {/* Avatar */}
        <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={avatarSrc}
            alt={`${username}'s avatar`}
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1">
          {/* Username */}
          <h3 className="font-bold text-gray-800 mb-1">{username}</h3>
          
          {/* Review text */}
          <p className="text-gray-600 text-sm leading-relaxed mb-2">
            {reviewText}
            {emojiList && (
              <span className="inline-flex items-center">
                {emojiList.map((emoji, index) => (
                  <span key={index} className="mr-1">{emoji}</span>
                ))}
              </span>
            )}
          </p>
          
          {/* Star rating */}
          <div className="flex items-center mt-2">
            {stars.map((filled, index) => (
              <span key={index} className={`text-xl ${filled ? 'text-orange-400' : 'text-gray-300'}`}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

