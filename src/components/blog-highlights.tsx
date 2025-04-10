import { IconCalendar } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Packing List for Every Traveler',
    description:
      'Never ever forget a travel essential again with our comprehensive packing guide.',
    date: 'Oct 20, 2024',
    image: 'https://picsum.photos/600/400?blog=1',
  },
  {
    id: 2,
    title: 'Top 7 Budget Destinations are Friendly for 2025',
    description:
      'Discover affordable and amazing destinations for your next adventure.',
    date: 'Nov 15, 2024',
    image: 'https://picsum.photos/600/400?blog=2',
  },
  {
    id: 3,
    title: 'Top 10 Hidden Gems You Can Explore in 2024',
    description: 'Discover breathtaking off-the-beaten-path destinations.',
    date: 'Mar 5, 2024',
    image: 'https://picsum.photos/600/400?blog=3',
  },
];

export default function BlogHighlights() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How to Pack Like a Pro
          </h2>
          <p className="text-gray-600 max-w-[720px] mx-auto">
            Discover expert packing tips to maximize your luggage space and minimize
            stress...
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#f8f9fb] rounded-xl overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-[180px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {/* Date Badge */}
                <div className="absolute bottom-3 left-3 bg-white rounded-full px-3 py-1 flex items-center gap-1 text-xs border border-gray-100">
                  <IconCalendar size={14} />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{post.description}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="block w-full py-2 px-4 text-center rounded-full bg-white border border-gray-200 text-black font-medium hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
