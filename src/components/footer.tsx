import Link from 'next/link';

const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Tours', href: '/tours' },
  { label: 'Blog', href: '/blog' },
];

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'X', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white/80">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Menu Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Menu Bar</h3>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <address className="text-sm text-white/70 not-italic space-y-2">
              <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
              <p>(629) 555-0129</p>
              <p>travely@pixproo.com</p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Social Media</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branding */}
          <div>
            <Link
              href="/"
              className="inline-block text-xl font-semibold font-serif bg-gradient-to-r from-blue-400 to-rose-300 text-transparent bg-clip-text mb-4"
            >
              travely
            </Link>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed">
              Stay connected with us on social media... exciting updates, insightful
              content, and the latest news from our industry.
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white/80">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white/80">
                Terms and Conditions
              </Link>
            </div>
            <p>© Copyright 2024, All Rights Reserved by Pixproo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
