import Image from 'next/image';

const metrics = [
  {
    id: 1,
    value: '10k+',
    label: 'Happy Travelers',
  },
  {
    id: 2,
    value: '15+',
    label: 'Years of Expertise',
  },
  {
    id: 3,
    value: '99%',
    label: 'Positive Reviews',
  },
];

export default function TrustMetrics() {
  return (
    <section className="bg-[#f1f4fa] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="https://picsum.photos/800/600?camping=1"
                alt="Group of people camping and sharing drinks"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Your Trusted Travel Partner is Here
            </h2>
            <p className="text-gray-600 max-w-[480px] mb-8">
              We're more than just a travel agency, we're your trusted partner in
              crafting unforgettable journeys...
            </p>

            {/* Metrics */}
            <div className="flex gap-8 flex-wrap">
              {metrics.map((metric) => (
                <div key={metric.id} className="text-center">
                  <div className="text-xl md:text-2xl font-semibold text-blue-500 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-500">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
