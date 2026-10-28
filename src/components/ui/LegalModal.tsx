import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../../data/site';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            {isPrivacy ? (
              <ShieldCheck className="w-5 h-5 text-[#0798F2]" />
            ) : (
              <FileText className="w-5 h-5 text-[#0798F2]" />
            )}
            <h3 className="text-lg font-bold text-[#062747]">
              {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <p className="font-medium text-slate-800">
                Last Updated: January 2026 — SANIVATE Industrial Services, Kingdom of Saudi Arabia.
              </p>
              <h4 className="font-bold text-[#062747] pt-2">1. Information We Collect</h4>
              <p>
                SANIVATE collects corporate information voluntarily provided when you submit a Request for Quotation (RFQ) or inquiry, including business email addresses, contact names, corporate affiliations, phone numbers, and project specifications.
              </p>
              <h4 className="font-bold text-[#062747] pt-2">2. Use of Information</h4>
              <p>
                Information gathered is utilized solely to prepare commercial proposals, evaluate equipment/manpower availability, coordinate site logistics, and communicate official project updates. We do not sell or rent corporate data to third parties.
              </p>
              <h4 className="font-bold text-[#062747] pt-2">3. Data Security & Saudi Compliance</h4>
              <p>
                We adhere to standard industrial confidentiality practices and the applicable data protection regulations within the Kingdom of Saudi Arabia. Project blueprints and qualification files are handled under strict NDA standards where required.
              </p>
              <h4 className="font-bold text-[#062747] pt-2">4. Contact Inquiries</h4>
              <p>
                For data privacy requests or vendor documentation queries, please reach our compliance team at <span className="text-[#0798F2] font-semibold">{SITE_CONFIG.contact.email}</span>.
              </p>
            </>
          ) : (
            <>
              <p className="font-medium text-slate-800">
                Commercial Operational Terms — SANIVATE Industrial Services (Jubail, KSA).
              </p>
              <h4 className="font-bold text-[#062747] pt-2">1. Scope of Quotations & Mobilization</h4>
              <p>
                All manpower and equipment quotations provided through this website are preliminary estimates subject to physical site inspection, safety induction alignment, and final Purchase Order (PO) execution.
              </p>
              <h4 className="font-bold text-[#062747] pt-2">2. Safety & Site Compliance (HSE)</h4>
              <p>
                All personnel and machinery supplied by SANIVATE strictly observe Saudi Aramco, SABIC, and client site safety rules. Proper PPE, valid certifications, and operator credentials are maintained for all active mobilizations.
              </p>
              <h4 className="font-bold text-[#062747] pt-2">3. Equipment Operation & Maintenance</h4>
              <p>
                Heavy equipment rentals are governed by standard Saudi industrial lease agreements specifying scheduled servicing intervals, certified operator assignments, and fuel supply scopes.
              </p>
              <h4 className="font-bold text-[#062747] pt-2">4. Applicable Jurisdiction</h4>
              <p>
                These terms are governed by and construed in accordance with the laws and commercial regulations of the Kingdom of Saudi Arabia, with jurisdiction in the Eastern Province.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-white bg-[#0798F2] rounded-lg hover:bg-[#0584d4] transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
