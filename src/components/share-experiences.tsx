'use client';

import { IconChevronLeft, IconChevronRight, IconStar } from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    url: 'https://picsum.photos/400/280?gallery=1',
    isLarge: true,
  },
  {
    id: 2,
    url: 'https://picsum.photos/180/120?gallery=2',
    isLarge: false,
  },
  {
    id: 3,
    url: 'https://picsum.photos/180/120?gallery=3',
    isLarge: false,
  },
  {
    id: 4,
    url: 'https://picsum.photos/400/280?gallery=4',
    isLarge: true,
  },
  {
    id: 5,
    url: 'https://picsum.photos/180/120?gallery=5',
    isLarge: false,
  },
  {
    id: 6,
    url: 'https://picsum.photos/180/120?gallery=6',
    isLarge: false,
  },
];

const testimonials = [
  {
    id: 1,
    text: 'Amazing experience! The tour was perfectly organized and our guide was incredibly knowledgeable.',
    name: 'Sarah Johnson',
    role: 'Adventure Enthusiast',
    avatar: 'https://picsum.photos/40/40?face=1',
  },
  {
    id: 2,
    text: 'Unforgettable journey through beautiful landscapes. Every detail was taken care of.',
    name: 'Michael Chen',
    role: 'Photography Lover',
    avatar: 'https://picsum.photos/40/40?face=2',
  },
  {
    id: 3,
    text: 'The best travel experience I have ever had. Will definitely book again!',
    name: 'Emma Davis',
    role: 'Travel Blogger',
    avatar: 'https://picsum.photos/40/40?face=3',
  },
];

export default function ShareExperiences() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevPage = () => {
    setCurrentPage((prev) =>
      prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1,
    );
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative rounded-2xl overflow-hidden ${
                image.isLarge ? 'md:col-span-2' : ''
              }`}
            >
              <Image
                src={image.url}
                alt={`Gallery image ${image.id}`}
                width={image.isLarge ? 400 : 180}
                height={image.isLarge ? 280 : 120}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-blue-500">460+</span> Share Experiences
          </h2>
          <p className="text-gray-600">Join 9600 travelers sharing experiences...</p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-xl shadow-sm border border-gray-200"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <IconStar
                    key={`star-${testimonial.id}-${i}`}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-gray-700 mb-4">{testimonial.text}</p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={prevPage}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
            aria-label="Previous page"
          >
            <IconChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={nextPage}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
            aria-label="Next page"
          >
            <IconChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
