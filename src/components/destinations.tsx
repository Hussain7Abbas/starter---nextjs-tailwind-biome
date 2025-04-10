'use client';
import { IconCalendar, IconUsersGroup } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    image: 'https://picsum.photos/600/400?city=1',
    price: 1500,
    duration: '10-15 Days',
    maxPeople: 20,
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    image: 'https://picsum.photos/600/400?city=2',
    price: 2000,
    duration: '9-12 Days',
    maxPeople: 15,
  },
  {
    id: 3,
    name: 'New York, USA',
    image: 'https://picsum.photos/600/400?city=3',
    price: 1800,
    duration: '9-12 Days',
    maxPeople: 20,
  },
  {
    id: 4,
    name: 'London, UK',
    image: 'https://picsum.photos/600/400?city=4',
    price: 1600,
    duration: '4-8 Days',
    maxPeople: 25,
  },
  {
    id: 5,
    name: 'Rome, Italy',
    image: 'https://picsum.photos/600/400?city=5',
    price: 1400,
    duration: '9-12 Days',
    maxPeople: 16,
  },
  {
    id: 6,
    name: 'Dubai, UAE',
    image: 'https://picsum.photos/600/400?city=6',
    price: 2400,
    duration: '9-12 Days',
    maxPeople: 12,
  },
];

const filters = ['All Destinations', 'Beach', 'Mountain', 'City', 'Forest'];

export default function Destinations() {
  const [activeFilter, setActiveFilter] = useState('City');

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Explore Exotic Destinations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Embark on a journey to far-flung corners of the globe...
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Destination Cards Grid */}
      <div className="max-w-[1280px] mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-[#f8f9fb] rounded-xl shadow-md p-4"
            >
              {/* Card Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Capacity Badge */}
                <div className="absolute top-2 left-2 bg-white/90 rounded-full px-3 py-1 flex items-center gap-1">
                  <IconUsersGroup size={16} />
                  <span className="text-xs">Max {destination.maxPeople} People</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-lg font-semibold mt-4">{destination.name}</h3>

              {/* Details Row */}
              <div className="flex justify-between items-center mt-2 text-sm text-gray-700">
                <div className="flex items-center gap-1">
                  <span>${destination.price}</span>
                  <span className="text-gray-500">/ Per person</span>
                </div>
                <div className="flex items-center gap-1">
                  <IconCalendar size={16} />
                  <span>{destination.duration}</span>
                </div>
              </div>

              {/* View Details Button */}
              <Link
                href={`/tours/${destination.id}`}
                className="mt-4 block w-full py-2 px-4 text-center rounded-full bg-white border border-gray-200 text-black font-medium hover:bg-gray-50 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
