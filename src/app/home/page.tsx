import BlogHighlights from '@/components/blog-highlights';
import Destinations from '@/components/destinations';
import ExclusiveDeals from '@/components/exclusive-deals';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import JourneyCta from '@/components/journey-cta';
import JourneySolutions from '@/components/journey-solutions';
import Navbar from '@/components/navbar';
import ShareExperiences from '@/components/share-experiences';
import TrustMetrics from '@/components/trust-metrics';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Destinations />
      <JourneySolutions />
      <ExclusiveDeals />
      <ShareExperiences />
      <JourneyCta />
      <TrustMetrics />
      <BlogHighlights />
      <Footer />
    </main>
  );
}
