import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Hero background - Nature landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Escape to Paradise</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Ignite your wanderlust and unlock a world of possibilities...
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center">
            <Link
              href="/tours"
              className="px-8 py-3 bg-[#3B82F6] text-white font-semibold rounded-full hover:bg-[#2563EB] transition-colors shadow-lg"
            >
              Book a Tour
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-8 w-full px-8">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            {/* Guide Avatars */}
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    src={'https://picsum.photos/32/32'}
                    alt={`Guide ${i}`}
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white"
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-[#3B82F6] border-2 border-white flex items-center justify-center text-xs font-bold">
                  16+
                </div>
              </div>
              <span className="ml-4 text-sm">Here are 10+ guides to assist you!</span>
            </div>

            {/* Experience Tag */}
            <div className="text-sm font-medium">
              We have 15 years of Adventure experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
