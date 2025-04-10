import {
  IconDiscountCheck,
  IconHeartHandshake,
  IconUsersGroup,
} from '@tabler/icons-react';
import Image from 'next/image';

const deals = [
  {
    id: 1,
    title: 'Get 30% Discounts for Previous Travelers',
    description:
      'Enjoy a 30% discount on exclusive travel packages for our loyal customers who have traveled with us before.',
    image: 'https://picsum.photos/800/600?deal=1',
    icon: IconDiscountCheck,
    imageRight: true,
  },
  {
    id: 2,
    title: 'Get 24% Discounts for Group Traveler',
    description:
      'Take advantage of a fantastic 24% discount when you book as a group, making your adventure more affordable and enjoyable.',
    image: 'https://picsum.photos/800/600?deal=2',
    icon: IconUsersGroup,
    imageRight: false,
  },
  {
    id: 3,
    title: 'Get 25% Exclusive Discounts for Couples',
    description:
      'Enjoy an exclusive 25% discount on specially curated packages for couples looking to create unforgettable memories together.',
    image: 'https://picsum.photos/800/600?deal=3',
    icon: IconHeartHandshake,
    imageRight: true,
  },
];

export default function ExclusiveDeals() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Exclusive Deals & Discounts
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Unlock exclusive deals and discounts on our curated travel packages...
          </p>
        </div>

        {/* Deals */}
        <div className="space-y-12">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className={`flex flex-col ${
                deal.imageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <deal.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{deal.title}</h3>
                <p className="text-gray-500 text-sm max-w-lg">{deal.description}</p>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
