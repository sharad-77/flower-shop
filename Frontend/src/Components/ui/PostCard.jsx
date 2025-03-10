import React from "react";
import { twMerge } from "tailwind-merge";

const SocialPost = ({
  username,
  date,
  image,
  title,
  description,
  likes,
  views,
  avatarSrc,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "max-w-md rounded-lg overflow-hidden shadow-md bg-white mx-auto my-4 transition-transform duration-300 hover:shadow-lg hover:scale-[1.01] sm:max-w-sm md:max-w-md lg:max-w-lg",
        className
      )}
    >
      {/* Header with avatar and date */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={avatarSrc}
              alt={username}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-medium text-gray-800">{username}</span>
        </div>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      {/* Main image */}
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover sm:h-56 md:h-64 lg:h-72"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Footer with likes, views and read more */}
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-sm text-gray-500">{likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="text-sm text-gray-500">{views}</span>
          </div>
        </div>
        <button className="text-blue-600 font-medium">Read more</button>
      </div>
    </div>
  );
};

export default SocialPost;
