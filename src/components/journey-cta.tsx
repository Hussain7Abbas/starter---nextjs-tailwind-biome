import Image from 'next/image';
import Link from 'next/link';

export default function JourneyCta() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/1920/1080?nature=1"
          alt="Mountain landscape with hiker"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-2xl drop-shadow-lg">
          Let's start a journey
        </h2>
        <Link
          href="/contact"
          className="px-6 py-2 border border-white text-white text-sm font-medium rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          Let's Go
        </Link>
      </div>
    </section>
  );
}
