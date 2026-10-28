import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Layers, Users, Truck, Home, Recycle, CheckCircle2, HardHat } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { INDUSTRIES } from '../../data/industries';
import { PROJECTS_DATA } from '../../data/projects';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, params?: { service?: string }) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredServices = SERVICES.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
    s.scope.some(item => item.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredProjects = PROJECTS_DATA.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.client.toLowerCase().includes(query.toLowerCase()) ||
    p.location.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredIndustries = INDUSTRIES.filter(i =>
    i.title.toLowerCase().includes(query.toLowerCase()) ||
    i.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search manpower, cranes, camp setup, piping, WQT, industries..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-slate-800 placeholder-slate-400 text-sm md:text-base outline-none bg-transparent"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {/* Services Matches */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
              Services ({filteredServices.length})
            </p>
            {filteredServices.length === 0 ? (
              <p className="text-sm text-slate-500 px-2 py-1">No services found matching &quot;{query}&quot;</p>
            ) : (
              <div className="space-y-1">
                {filteredServices.map(service => (
                  <button
                    key={service.id}
                    onClick={() => {
                      onNavigate('services', { service: service.id });
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F1F8FD] transition-colors text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0798F2]/10 text-[#0798F2] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#062747] group-hover:text-[#0798F2] transition-colors">
                          {service.title}
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0798F2] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Projects Matches */}
          {filteredProjects.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                Featured Projects ({filteredProjects.length})
              </p>
              <div className="space-y-1">
                {filteredProjects.map(proj => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      onNavigate('projects');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F1F8FD] transition-colors text-left group cursor-pointer border border-slate-100"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                        <img
                          src={proj.image}
                          alt={proj.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-[#0798F2] font-mono">
                            [{proj.name}]
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {proj.location}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 truncate">
                          {proj.client} · {proj.category}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0798F2] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Industries Matches */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
              Target Industries ({filteredIndustries.length})
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredIndustries.map(ind => (
                <button
                  key={ind.id}
                  onClick={() => {
                    onNavigate('home');
                    onClose();
                  }}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-[#F1F8FD] transition-colors text-left group cursor-pointer border border-slate-100"
                >
                  <div className="w-2 h-2 rounded-full bg-[#0798F2]" />
                  <span className="text-sm font-medium text-slate-700 group-hover:text-[#0798F2] transition-colors">
                    {ind.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[10px] font-mono">ESC</kbd> to exit</span>
          <button
            onClick={() => {
              onNavigate('contact');
              onClose();
            }}
            className="text-[#0798F2] font-semibold hover:underline cursor-pointer"
          >
            Direct RFQ / Contact Form →
          </button>
        </div>
      </div>
    </div>
  );
};
