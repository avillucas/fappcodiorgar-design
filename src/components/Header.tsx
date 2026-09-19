import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Mail, 
  MessageCircle, 
  FileText, 
  Briefcase, 
  BookOpen, 
  Building2, 
  Newspaper,
  Compass
} from 'lucide-react';
import { SectionId } from '../types';
import { INSTITUTIONAL_INFO } from '../data/fappcodiData';
import { FappcodiLogo } from './FappcodiLogo';
import { trackCtaClick } from '../utils/analytics';

interface Props {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
}

export const Header: React.FC<Props> = ({
  activeSection,
  onSelectSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: SectionId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'inicio', label: 'Inicio', icon: Compass },
    { id: 'institucional', label: 'Institucional', icon: Building2 },
    { id: 'programas', label: 'Servicios y Programas', icon: Briefcase },
    { id: 'laboral', label: 'Inserción Laboral', icon: FileText },
    { id: 'normativas', label: 'Normativa & CUD', icon: BookOpen },
    { id: 'prensa', label: 'Prensa', icon: Newspaper },
    { id: 'contacto', label: 'Contacto', icon: MessageCircle }
  ];

  const handleNavClick = (section: SectionId, label?: string) => {
    trackCtaClick({
      cta_name: `nav_${section}`,
      cta_category: 'navigation',
      cta_label: label || `Navegar a ${section}`,
      cta_location: 'header_navbar'
    });
    onSelectSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeaderWhatsApp = () => {
    trackCtaClick({
      cta_name: 'header_whatsapp_direct',
      cta_category: 'contact_direct',
      cta_label: 'WhatsApp Superior Header',
      destination_url: INSTITUTIONAL_INFO.whatsappLink
    });
  };

  const handleHeaderEmail = () => {
    trackCtaClick({
      cta_name: 'header_email_direct',
      cta_category: 'contact_direct',
      cta_label: 'Email Superior Header',
      destination_url: INSTITUTIONAL_INFO.emailLink
    });
  };

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-[37px] z-40">
      {/* Top institutional strip with direct contacts and motto */}
      <div className="bg-sky-950 text-sky-100 py-1.5 px-4 text-xs font-medium border-b border-sky-900">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-sky-800 text-sky-200 px-2 py-0.5 rounded font-mono text-[11px] font-bold">
              Matrícula DPJ 21602
            </span>
            <span className="hidden sm:inline text-sky-300">|</span>
            <span className="italic font-serif text-amber-200">
              {INSTITUTIONAL_INFO.motto} — Silvio Catania
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={INSTITUTIONAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleHeaderWhatsApp}
              className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-100 font-semibold"
              title="Escribir por WhatsApp a FAPPCODI"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>WhatsApp: {INSTITUTIONAL_INFO.whatsapp}</span>
            </a>
            <span className="hidden md:inline text-sky-500">|</span>
            <a 
              href={INSTITUTIONAL_INFO.emailLink}
              onClick={handleHeaderEmail}
              className="hidden md:flex items-center gap-1.5 text-sky-200 hover:text-white font-semibold"
              title="Enviar correo a FAPPCODI"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              <span>{INSTITUTIONAL_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand & Actions Header */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* Adaptable Logo and Brand Link */}
        <button
          id="btn-brand-home"
          type="button"
          onClick={() => handleNavClick('inicio', 'Logo Brand Home')}
          className="flex items-center text-left group focus:outline-none cursor-pointer"
          aria-label="Ir a la página de inicio de FAPPCODI"
        >
          {/* Logo adaptable con icono y texto separados */}
          <div className="hidden sm:block">
            <FappcodiLogo 
              variant="horizontal" 
              size="md" 
              subtitle="Equiparación de oportunidades · Integración · Normalización" 
              id="header-fappcodi-logo-desktop"
            />
          </div>
          <div className="sm:hidden">
            <FappcodiLogo 
              variant="compact" 
              size="sm" 
              id="header-fappcodi-logo-mobile"
            />
          </div>
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct contact link */}
          <button
            id="btn-header-contact"
            type="button"
            onClick={() => handleNavClick('contacto', 'Botón Header Contacto')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition cursor-pointer shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Contacto</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            id="btn-mobile-menu"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Bar */}
      <nav 
        aria-label="Navegación principal del sitio"
        className="hidden lg:block bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 overflow-x-auto py-1">
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-sky-700 text-white shadow-sm'
                    : 'text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu"
          className="lg:hidden bg-white border-t border-slate-200 p-4 shadow-xl animate-fadeIn"
        >
          <div className="space-y-1">
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition cursor-pointer ${
                    isActive 
                      ? 'bg-sky-700 text-white font-bold' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
