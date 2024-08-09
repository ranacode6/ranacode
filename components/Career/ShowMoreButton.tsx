'use client';

import Image from 'next/image';
import { useState } from 'react';
type Props = {
  review: {
    image: string;
    review: string;
    name: string;
    position: string;
  };
  key: number;
};

export default function ShowMoreButton({ review, key }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(true);
  return (
    <div
      className="flex gap-5 dark:bg-[#1F2836] rounded-lg shadow-md p-3"
      key={key}
    >
      <div className="w-1/5">
        <Image
          src={review.image}
          alt={review.name}
          width={70}
          height={70}
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col w-4/5">
        <p
          className={`text-sm text-gray-500 dark:text-gray-200 font-normal ${
            isOpen ? '' : 'line-clamp-6'
          }`}
        >
          {review.review}
        </p>
        {showMoreButton && (
          <button
            className="text-emerald-500 text-xs font-medium text-left"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'see less' : 'see more'}
          </button>
        )}

        <h5 className="mt-5 text-md font-semibold text-gray-900 dark:text-blue-600">
          {review.name}
        </h5>
        <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
          {review.position}
        </p>
      </div>
    </div>
  );
}
