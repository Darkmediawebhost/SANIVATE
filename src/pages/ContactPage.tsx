import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Mail, Phone, Clock, Send, CheckCircle2, AlertCircle, 
  Building2, ChevronDown, RefreshCw, ExternalLink 
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SITE_CONFIG } from '../data/site';
import { SERVICES } from '../data/services';
import { smoothEase, AnimatedWords } from '../components/ui/Motion';

interface ContactPageProps {
  initialServiceId?: string;
  initialLocation?: string;
  onNavigate?: (page: string, params?: { service?: string; section?: string }) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialServiceId, initialLocation, onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    serviceRequired: initialServiceId || 'manpower',
    projectLocation: initialLocation || 'Jubail Industrial City',
    timeline: 'Immediate (within 1-2 weeks)',
    message: '',
    consent: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    submittedAt: string;
    summary: typeof formData;
  } | null>(null);

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceRequired: initialServiceId }));
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (initialLocation) {
      setFormData(prev => ({ ...prev, projectLocation: initialLocation }));
    }
  }, [initialLocation]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please provide a valid corporate email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[\d\s+\-()]{8,}$/.test(formData.phone)) {
      errs.phone = 'Please provide a valid phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please briefly specify your project requirements';
    }
    if (!formData.consent) {
      errs.consent = 'Please confirm agreement to contact regarding this RFQ';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      const randomRef = `RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedData({
        referenceId: randomRef,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        summary: { ...formData }
      });
      setIsSubmitting(false);
    }, 700);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      companyName: '',
      workEmail: '',
      phone: '',
      serviceRequired: 'manpower',
      projectLocation: 'Jubail Industrial City',
      timeline: 'Immediate (within 1-2 weeks)',
      message: '',
      consent: true
    });
    setErrors({});
  };

  const faqs = [
    {
      q: "What is the typical mobilization lead time for skilled manpower in Jubail?",
      a: "For standard trade categories (6G welders, pipefitters, millwrights, riggers), we can mobilize teams within 48 to 72 hours of receiving verified job requirements and gate passes. Turnaround crews of 100+ can be scheduled with 1-2 weeks notice."
    },
    {
      q: "Are your heavy equipment fleets certified for Saudi Aramco and SABIC facilities?",
      a: "Yes. All SANIVATE cranes, excavators, loaders and generators carry current third-party inspection certificates and valid Aramco/SABIC inspection stickers with certified operators."
    },
    {
      q: "Can you provide turnkey camp setup in remote desert or pipeline sites?",
      a: "Yes. We engineer complete modular camp complexes including accommodation, commercial kitchens, ablution blocks, perimeter fencing, independent diesel generators, and water/waste treatment."
    },
    {
      q: "How does the Welder Qualification Testing (WQT) process work?",
      a: "We prepare certified pipe/plate test coupons, supervise welding in controlled testing bays to ASME IX or AWS D1.1 codes, coordinate independent NDT/mechanical testing, and provide certified WPQ dossiers."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-white"
    >
      {/* Contact Hero */}
      <section className="relative bg-gradient-to-b from-[#031A30] via-[#062747] to-[#041D35] text-white py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url('/assets/images/hero_industrial_refinery_1792910639649.jpg')` }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: smoothEase }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0798F2]/20 border border-[#0798F2]/30 text-[#0798F2] text-xs font-bold tracking-widest uppercase"
            >
              REQUEST FOR QUOTATION (RFQ)
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              <AnimatedWords
                text="Let's Work Together"
                highlightWord="Together"
              />
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
            >
              Tell us what your project needs. Our industrial support specialists in Jubail are ready to provide technical specifications, commercial rates, and mobilization schedules.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Office Details */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (7 cols): RFQ Form or Success Screen with Motion */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="lg:col-span-7 bg-[#F1F8FD]/50 rounded-3xl p-6 sm:p-10 border border-[#E4EDF5] shadow-sm"
            >
              <AnimatePresence mode="wait">
                {submittedData ? (
                  /* Success Confirmation State */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: smoothEase }}
                    className="space-y-6 py-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100/70 px-2.5 py-1 rounded">
                        Proposal Request Received
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#062747] mt-3">
                        Thank You, {submittedData.summary.fullName}
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        Your Request for Quotation has been logged into our Jubail commercial operations system.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#E4EDF5] space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span className="text-slate-500">RFQ Tracking Reference:</span>
                        <span className="font-mono font-bold text-[#0798F2] text-base">{submittedData.referenceId}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Company:</span>
                        <span className="font-semibold text-slate-800">{submittedData.summary.companyName}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Primary Service:</span>
                        <span className="font-semibold text-[#0798F2]">
                          {SERVICES.find(s => s.id === submittedData.summary.serviceRequired)?.title || submittedData.summary.serviceRequired}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Target Location:</span>
                        <span className="font-medium text-slate-800">{submittedData.summary.projectLocation}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Target Mobilization:</span>
                        <span className="font-medium text-slate-800">{submittedData.summary.timeline}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 text-xs text-sky-800 flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#0798F2] shrink-0 mt-0.5" />
                      <span>
                        Our commercial operations engineer will review your specifications and contact your team at <strong className="text-sky-900">{submittedData.summary.workEmail}</strong> within 4 business hours.
                      </span>
                    </div>

                    <div className="pt-2 flex items-center gap-4">
                      <Button
                        variant="primary"
                        onClick={handleReset}
                        className="gap-2"
                      >
                        <RefreshCw className="w-4 h-4" />
                        Submit Another Inquiry
                      </Button>
                      <a
                        href={`tel:${SITE_CONFIG.contact.phone}`}
                        className="text-xs font-semibold text-[#0798F2] hover:underline"
                      >
                        Need immediate assistance? Call {SITE_CONFIG.contact.phoneFormatted}
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  /* Interactive Form */
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#062747]">
                        Request an Industrial Quotation
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Complete this brief form to receive pricing, manpower lists, or equipment availability.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Tariq Al-Ghamdi"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-800 outline-none transition-colors ${
                            errors.fullName ? 'border-rose-400 focus:border-rose-500' : 'border-[#E4EDF5] focus:border-[#0798F2]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Company / Contractor <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Al-Khobar Contracting Co."
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-800 outline-none transition-colors ${
                            errors.companyName ? 'border-rose-400 focus:border-rose-500' : 'border-[#E4EDF5] focus:border-[#0798F2]'
                          }`}
                        />
                        {errors.companyName && (
                          <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.companyName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Corporate Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Work Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="tariq@contractor.com"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-800 outline-none transition-colors ${
                            errors.workEmail ? 'border-rose-400 focus:border-rose-500' : 'border-[#E4EDF5] focus:border-[#0798F2]'
                          }`}
                        />
                        {errors.workEmail && (
                          <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.workEmail}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+966 5x xxx xxxx"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-800 outline-none transition-colors ${
                            errors.phone ? 'border-rose-400 focus:border-rose-500' : 'border-[#E4EDF5] focus:border-[#0798F2]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service Required */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Primary Service Required
                        </label>
                        <div className="relative">
                          <select
                            value={formData.serviceRequired}
                            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E4EDF5] text-sm text-slate-800 outline-none focus:border-[#0798F2] appearance-none cursor-pointer pr-10"
                          >
                            {SERVICES.map((s) => (
                              <option key={s.id} value={s.id}>
                                {s.title}
                              </option>
                            ))}
                            <option value="bundled">Bundled Multiple Services</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                        </div>
                      </div>

                      {/* Project Location */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Project Site Location
                        </label>
                        <div className="relative">
                          <select
                            value={formData.projectLocation}
                            onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E4EDF5] text-sm text-slate-800 outline-none focus:border-[#0798F2] appearance-none cursor-pointer pr-10"
                          >
                            <option value="Jubail Industrial City">Jubail Industrial City</option>
                            <option value="Yanbu Industrial City">Yanbu Industrial City</option>
                            <option value="Ras Al Khair Industrial Hub">Ras Al Khair Industrial Hub</option>
                            <option value="Dammam / Al-Khobar">Dammam / Al-Khobar</option>
                            <option value="Riyadh Region">Riyadh Region</option>
                            <option value="Neom / Red Sea Global">Neom / Red Sea Global</option>
                            <option value="Other KSA Location">Other KSA Location</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Mobilization Timeline */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Required Mobilization Schedule
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          'Immediate (1-2 wks)',
                          'Next Month',
                          'Q2 / Q3 2026',
                          'Plant Turnaround'
                        ].map((timeOption) => (
                          <button
                            key={timeOption}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: timeOption })}
                            className={`py-2 px-3 rounded-lg text-xs font-semibold text-center transition-colors cursor-pointer border ${
                              formData.timeline === timeOption
                                ? 'bg-[#0798F2] text-white border-[#0798F2]'
                                : 'bg-white text-slate-600 border-[#E4EDF5] hover:bg-slate-50'
                            }`}
                          >
                            {timeOption}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Requirements / Scope Notes */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Project Details / Scope Notes <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Please specify estimated quantity (e.g. 25 pipefitters, 2x 100T cranes, 200-man camp setup, ASTM A106 piping supply)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-800 outline-none transition-colors ${
                          errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-[#E4EDF5] focus:border-[#0798F2]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 text-[#0798F2] rounded border-slate-300 focus:ring-[#0798F2] cursor-pointer"
                      />
                      <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                        I agree to allow SANIVATE commercial representatives to contact me regarding this request. We respect your confidentiality.
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="text-rose-500 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.consent}
                      </p>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto shadow-md shadow-[#0798F2]/30 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            Processing RFQ...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Submit Quotation Request
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right Column (5 cols): Office Information & Interactive Map */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="lg:col-span-5 space-y-8"
            >
              
              {/* Office Details Card */}
              <div className="bg-[#062747] text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0798F2]">
                    HEADQUARTERS
                  </span>
                  <h3 className="text-xl font-extrabold mt-1 text-white">
                    Jubail Operations Hub
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Strategically positioned in Saudi Arabia&apos;s primary industrial corridor.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0798F2] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Main Office</p>
                      <a
                        href={SITE_CONFIG.location.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 text-xs leading-relaxed hover:text-[#0798F2] transition-colors block mt-0.5"
                      >
                        {SITE_CONFIG.location.fullAddress}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#0798F2] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Email Addresses</p>
                      <div className="flex flex-col gap-1 mt-0.5">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-slate-400">Admin:</span>
                          <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#0798F2] hover:underline">
                            {SITE_CONFIG.contact.email}
                          </a>
                        </div>
                        {SITE_CONFIG.contact.secondaryEmail && (
                          <div className="flex items-center gap-2 text-xs">
                            <span className="text-slate-400">MD:</span>
                            <a href={`mailto:${SITE_CONFIG.contact.secondaryEmail}`} className="text-[#0798F2] hover:underline">
                              {SITE_CONFIG.contact.secondaryEmail}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#0798F2] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Direct &amp; Corporate Lines</p>
                      <div className="flex flex-col gap-1 mt-0.5 text-xs text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">Mobile:</span>
                          <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-[#0798F2] hover:underline font-semibold">
                            {SITE_CONFIG.contact.phoneFormatted}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">Landline:</span>
                          <a href={`tel:${SITE_CONFIG.contact.officePhone}`} className="hover:text-white">
                            {SITE_CONFIG.contact.officePhone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#0798F2] shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Operations Hours</p>
                      <p className="text-xs text-slate-300">
                        {SITE_CONFIG.contact.workDays} • {SITE_CONFIG.contact.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-xs text-slate-300">
                  <p className="font-semibold text-white mb-1">Aramco &amp; Vendor Registrations</p>
                  <p className="text-[11px] leading-relaxed">
                    Commercial Registration (CR) &amp; Vendor dossiers available upon request for qualification committees.
                  </p>
                </div>
              </div>

              {/* Interactive Google Map for Jubail Location */}
              <div className="bg-white rounded-3xl p-6 border border-[#E4EDF5] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0798F2]" />
                    <span className="text-sm font-bold text-[#062747]">
                      Jubail Operations Location
                    </span>
                  </div>
                  <a
                    href={SITE_CONFIG.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0798F2] hover:text-[#062747] transition-colors"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Live Google Map Embed */}
                <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 group">
                  <iframe
                    title="SANIVATE Jubail Location"
                    src={SITE_CONFIG.location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />

                  {/* Location badge overlay */}
                  <div className="absolute bottom-3 left-3 pointer-events-none bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-md flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0798F2] animate-pulse" />
                    <span className="text-[11px] font-bold text-[#062747]">
                      SANIVATE • Al Dana, Jubail
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span className="font-mono text-[11px] text-slate-400">
                    27°00&apos;21.8&quot;N 49°39&apos;28.2&quot;E
                  </span>
                  <span className="text-[11px] font-medium text-slate-600">
                    Al Dana Dist., Al-Jubail
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Strategically situated in Jubail with direct access to Jubail Commercial Port, King Fahd Industrial Port, and major industrial complexes (SABIC, SADARA, SASREF).
                </p>
              </div>

              {/* Corporate Presence & Licensing Card */}


            </motion.div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-[#F1F8FD]/60 border-t border-[#E4EDF5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0798F2] mb-1.5">
              QUESTIONS &amp; ANSWERS
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062747]">
              Frequently Asked Project Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: smoothEase }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E4EDF5] shadow-xs"
              >
                <h3 className="text-base font-bold text-[#062747] mb-2 flex items-start gap-2">
                  <span className="text-[#0798F2] font-black">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};
