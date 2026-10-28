import React from 'react';
import { MapPin, Mail, Phone, Clock, Linkedin, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../../data/site';
import { SERVICES } from '../../data/services';

interface FooterProps {
  onNavigate: (page: string, params?: { service?: string; section?: string }) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F7F7F7] border-t border-[#E4EDF5] text-slate-600 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E4EDF5]">
          
          {/* Col 1: Brand & Bio (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onNavigate('home')}
                  className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0798F2] rounded-md cursor-pointer"
                >
                  <img
                    src={SITE_CONFIG.logoUrl}
                    alt="SANIVATE"
                    className="h-10 w-auto object-contain"
                  />
                </button>
                <div className="h-8 w-px bg-slate-200" />
                <button
                  onClick={() => onNavigate('about', { section: 'vision-2030' })}
                  className="inline-block focus:outline-none hover:opacity-90 transition-opacity cursor-pointer"
                  title="In Full Alignment with Saudi Vision 2030"
                  aria-label="Saudi Vision 2030"
                >
                  <img
                    src="/assets/vision-2030.png"
                    alt="Saudi Vision 2030"
                    className="h-9 w-auto object-contain"
                  />
                </button>
              </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              A technology haven with diversified business and a single vision. Providing end-to-end manufacturing, industrial services, and equipment solutions across KSA, India, China &amp; Bahrain.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[#062747]">
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0798F2] hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0798F2] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              {SITE_CONFIG.socials.instagram && (
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0798F2] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {SITE_CONFIG.socials.twitter && (
                <a
                  href={SITE_CONFIG.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0798F2] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
              {SITE_CONFIG.socials.youtube && (
                <a
                  href={SITE_CONFIG.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0798F2] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-[#062747] uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#0798F2] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#0798F2] transition-colors cursor-pointer"
                >
                  About Us &amp; Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about', { section: 'founders-message' })}
                  className="hover:text-[#0798F2] transition-colors cursor-pointer text-[#0798F2] font-semibold"
                >
                  Founder&apos;s Message
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about', { section: 'our-team' })}
                  className="hover:text-[#0798F2] transition-colors cursor-pointer"
                >
                  Our Team &amp; Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#0798F2] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-[#0798F2] transition-colors cursor-pointer"
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#0798F2] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-[#062747] uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('services', { service: s.id })}
                    className="hover:text-[#0798F2] transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-sm font-bold text-[#062747] uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0798F2] shrink-0 mt-0.5" />
                <a
                  href={SITE_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0798F2] transition-colors"
                >
                  {SITE_CONFIG.location.fullAddress}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#0798F2] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-[#0798F2] transition-colors">
                    {SITE_CONFIG.contact.email}
                  </a>
                  {SITE_CONFIG.contact.secondaryEmail && (
                    <a href={`mailto:${SITE_CONFIG.contact.secondaryEmail}`} className="hover:text-[#0798F2] transition-colors">
                      {SITE_CONFIG.contact.secondaryEmail}
                    </a>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#0798F2] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-[#0798F2] transition-colors font-medium">
                    {SITE_CONFIG.contact.phoneFormatted}
                  </a>
                  <a href={`tel:${SITE_CONFIG.contact.officePhone}`} className="hover:text-[#0798F2] transition-colors text-slate-500">
                    Tel: {SITE_CONFIG.contact.officePhone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-[#0798F2] shrink-0" />
                <span>Sun - Thu 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} SANIVATE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {/* <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#0798F2] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button> */}
            {/* <span aria-hidden="true" className="text-slate-300">|</span> */}
            {/* <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#0798F2] transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
