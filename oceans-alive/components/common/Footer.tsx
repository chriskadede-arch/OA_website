'use client';

import Link from 'next/link';
import { SOCIAL_LINKS, CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME } from '@/lib/constants';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-midnight text-white">
      {/* Newsletter Section */}
      <div className="bg-ocean-turquoise py-16">
        <div className="container-fluid">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-white">
              Stay Updated
            </h3>
            <p className="text-white mb-8">
              Subscribe to our newsletter for updates on marine conservation and educational content.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-ocean-turquoise py-16">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-ocean-turquoise rounded-full flex items-center justify-center">
                  <span className="text-ocean-midnight font-poppins font-bold">OA</span>
                </div>
                <span className="font-poppins font-bold text-lg">{SITE_NAME}</span>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Community-empowered marine conservation in coastal Kenya. Building sustainable
                fisheries and coral restoration through education and community action.
              </p>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-ocean-turquoise text-ocean-midnight flex items-center justify-center hover:bg-ocean-sunshine transition-colors"
                    aria-label={link.name}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* Icon would go here - using placeholder */}
                      <circle cx="12" cy="12" r="1" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-poppins font-bold mb-4 text-ocean-sunshine">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-ocean-turquoise transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-ocean-turquoise transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-ocean-turquoise transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-ocean-turquoise transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-ocean-turquoise transition-colors">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-poppins font-bold mb-4 text-ocean-sunshine">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/resources" className="hover:text-ocean-turquoise transition-colors">
                    Toolkits
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-ocean-turquoise transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-ocean-turquoise transition-colors">
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-ocean-turquoise transition-colors">
                    Get Involved
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-poppins font-bold mb-4 text-ocean-sunshine">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="hover:text-ocean-turquoise transition-colors break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                    className="hover:text-ocean-turquoise transition-colors"
                  >
                    {CONTACT_PHONE}
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-ocean-turquoise transition-colors">
                    Contact Form
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-ocean-turquoise pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-300 mb-4 md:mb-0">
                &copy; {currentYear} {SITE_NAME}. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="hover:text-ocean-turquoise transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-ocean-turquoise transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-ocean-turquoise transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
