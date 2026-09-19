import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Heart, 
  Phone, 
  ShoppingBag, 
  FileText, 
  Briefcase, 
  BookOpen, 
  Building2, 
  MessageSquare,
  Newspaper,
  Compass
} from 'lucide-react';
import { SectionId } from '../types';
import { INSTITUTIONAL_INFO } from '../data/fappcodiData';

interface Props {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  onOpenDonateModal: () => void;
  cartCount: number;
}

export const Header: React.FC<Props> = ({
  activeSection,
  onSelectSection,
  onOpenDonateModal,
  cartCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: SectionId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'inicio', label: 'Inicio', icon: Compass },
    { id: 'institucional', label: 'Institucional', icon: Building2 },
    { id: 'programas', label: 'Servicios y Programas', icon: Briefcase },
    { id: 'catalogo', label: 'Catálogo & Alcancía', icon: Heart },
    { id: 'tienda', label: 'Tienda Manos que inspiran', icon: ShoppingBag },
    { id: 'laboral', label: 'Inserción Laboral', icon: FileText },
    { id: 'normativas', label: 'Normativa & CUD', icon: BookOpen },
    { id: 'prensa', label: 'Prensa & Blog', icon: Newspaper },
    { id: 'contacto', label: 'Contacto & Chatbot', icon: MessageSquare }
  ];

  const handleNavClick = (section: SectionId) => {
    onSelectSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-[37px] z-40">
      {/* Top institutional strip with direct phone and motto */}
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

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${INSTITUTIONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white font-semibold underline decoration-sky-500"
              title="Llamar a FAPPCODI"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              <span>Atención: {INSTITUTIONAL_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-sky-400">Lanús, Buenos Aires</span>
          </div>
        </div>
      </div>

      {/* Main Brand & Actions Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo and Brand Info */}
        <button
          id="btn-brand-home"
          type="button"
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          aria-label="Ir a la página de inicio de FAPPCODI"
        >
          {/* Emblem Badge */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-700 via-sky-800 to-indigo-900 text-white flex items-center justify-center font-bold text-xl shadow-md border-2 border-sky-600/30 group-hover:scale-105 transition-transform flex-shrink-0">
            <span className="tracking-tighter">F</span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none group-hover:text-sky-700 transition-colors">
                FAPPCODI
              </span>
              <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full">
                Desde 2000
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-tight">
              Fundación Argentina para las Personas con Discapacidad
            </p>
            <p className="text-[11px] text-slate-400 leading-none hidden md:block">
              Equiparación de oportunidades · Integración · Normalización
            </p>
          </div>
        </button>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Donate Button */}
          <button
            id="btn-header-donate"
            type="button"
            onClick={onOpenDonateModal}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:shadow transition transform active:scale-95 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white text-emerald-100" aria-hidden="true" />
            <span className="hidden sm:inline">Colaborá con Nosotros</span>
            <span className="sm:hidden">Donar</span>
          </button>

          {/* Tienda quick badge */}
          <button
            id="btn-header-store"
            type="button"
            onClick={() => handleNavClick('tienda')}
            className="relative p-2 text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-lg transition border border-slate-200 cursor-pointer"
            title="Ver Tienda Solidaria Manos que inspiran"
            aria-label={`Tienda Manos que inspiran, ${cartCount} productos en carrito`}
          >
            <ShoppingBag className="w-5 h-5" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-rose-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
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
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-200' : 'text-slate-500'}`} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-panel"
          className="lg:hidden bg-white border-t border-slate-200 shadow-xl max-h-[80vh] overflow-y-auto"
        >
          <div className="p-4 space-y-1.5">
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition text-left cursor-pointer ${
                    isActive
                      ? 'bg-sky-700 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-200' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-200 mt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonateModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-lg font-bold text-sm shadow-md"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Colaborá con FAPPCODI</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
