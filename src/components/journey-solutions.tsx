import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Medical Seaport',
    description:
      'We manage planning and booking for your adventure. Our services ensure a smooth travel experience.',
    image: 'https://picsum.photos/600/400?service=1',
  },
  {
    id: 2,
    title: 'Cultural Tours',
    description:
      'We handle the planning and booking for your adventure, ensuring every detail is covered.',
    image: 'https://picsum.photos/600/400?service=2',
  },
  {
    id: 3,
    title: 'Honeymoon Planning',
    description:
      'Let us take care of your adventure planning with our expert travel services.',
    image: 'https://picsum.photos/600/400?service=3',
  },
];

export default function JourneySolutions() {
  return (
    <section className="bg-[#f5f7fb] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Journey Solutions
          </h2>
          <p className="text-gray-500 max-w-md">
            We manage planning and booking for your adventure. Our services ensure a
            smooth travel experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex justify-center gap-12 flex-wrap">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-start max-w-[280px]">
              {/* Service Image */}
              <div className="relative w-[280px] h-[220px] rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Service Content */}
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
