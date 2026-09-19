import React from 'react';
import { 
  Heart, 
  Scale, 
  Users, 
  HeartHandshake, 
  Activity, 
  GraduationCap, 
  Briefcase, 
  Home, 
  ArrowRight, 
  Store, 
  FileCheck, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';
import { SectionId } from '../types';
import { INSTITUTIONAL_INFO, PILLARS, AREAS } from '../data/fappcodiData';

interface Props {
  onNavigate: (section: SectionId) => void;
  onOpenDonateModal: () => void;
}

export const HomeSection: React.FC<Props> = ({ onNavigate, onOpenDonateModal }) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner with High Contrast, Human and Institutional Dignity */}
      <section 
        aria-labelledby="hero-title"
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800"
      >
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-900/60 border border-sky-700/60 text-sky-200 text-xs font-semibold mb-5">
            <ShieldCheck className="w-4 h-4 text-sky-400" aria-hidden="true" />
            <span>ONG Sin Fines de Lucro · Matrícula DPJ 21602 · Fundada en el 2000</span>
          </div>

          <h1 
            id="hero-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white"
          >
            Fundación Argentina para las Personas con Discapacidad
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed mb-6 max-w-3xl">
            Aplicamos nuestros esfuerzos a emprendimientos en las personas con discapacidad en general, promoviendo la <strong className="font-semibold text-sky-300">equiparación de oportunidades</strong>, la <strong className="font-semibold text-emerald-300">integración</strong> y la <strong className="font-semibold text-amber-300">normalización</strong>.
          </p>

          {/* Founder Quote Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-800/80 border-l-4 border-amber-400 backdrop-blur-sm mb-8">
            <p className="italic text-base sm:text-lg text-amber-100 font-serif">
              “Me convertí en cosas inesperadas”
            </p>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
              — <span className="text-white font-bold">Silvio Adrián Catania</span>, Fundador y Presidente de FAPPCODI
            </p>
          </div>

          {/* Direct Actions */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button
              id="btn-hero-donate"
              type="button"
              onClick={onOpenDonateModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm sm:text-base shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Heart className="w-5 h-5 fill-white text-emerald-100" />
              <span>Colaborá con Nosotros</span>
            </button>

            <button
              id="btn-hero-inclukiosco"
              type="button"
              onClick={() => onNavigate('programas')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-800/80 hover:bg-sky-700 text-white rounded-xl font-bold text-sm sm:text-base border border-sky-600/50 shadow transition-all cursor-pointer"
            >
              <span>Conocé el Inclukiosco</span>
              <ArrowRight className="w-4 h-4 text-sky-300" />
            </button>

            <button
              id="btn-hero-cud"
              type="button"
              onClick={() => onNavigate('normativas')}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold text-sm border border-slate-700 transition cursor-pointer"
            >
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>Guía y Trámite del CUD</span>
            </button>
          </div>
        </div>
      </section>

      {/* Campaña Solidaria del Mes: "Ayudanos a Ayudar" */}
      <section 
        aria-labelledby="campaign-month-title"
        className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-sky-500/10 border-2 border-emerald-600/30 p-6 sm:p-8 bg-white"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Campaña Solidaria Activa del Mes</span>
            </div>
            <h2 id="campaign-month-title" className="text-2xl sm:text-3xl font-bold text-slate-900">
              Ayudanos a ayudar: COLABORÁ CON NOSOTROS
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              Necesitamos de tu apoyo y tu donación para poder seguir sosteniéndonos económicamente, reparando sillas de ruedas, proveyendo bastones a personas ciegas y sosteniendo los incentivos para pasantes del Inclukiosco.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-700">
              <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-300 shadow-sm">
                <strong>Alias:</strong> {INSTITUTIONAL_INFO.donationAlias}
              </span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-300 shadow-sm">
                <strong>CBU:</strong> {INSTITUTIONAL_INFO.donationCBU}
              </span>
            </div>
          </div>

          <div className="w-full lg:w-auto flex-shrink-0">
            <button
              id="btn-campaign-donate"
              type="button"
              onClick={onOpenDonateModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-base shadow-md transition cursor-pointer"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Sumar mi Donación</span>
            </button>
          </div>
        </div>
      </section>

      {/* Los Tres Pilares de Trabajo */}
      <section aria-labelledby="pillars-title" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 id="pillars-title" className="text-2xl sm:text-3xl font-bold text-slate-900">
            Los Tres Pilares de FAPPCODI
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Principios fundamentales consagrados en tratados y convenciones internacionales que rigen cada uno de nuestros proyectos y decisiones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => {
            const icons = [Scale, Users, HeartHandshake];
            const Icon = icons[idx] || Scale;
            const colors = [
              'border-sky-500 bg-sky-50 text-sky-800',
              'border-emerald-500 bg-emerald-50 text-emerald-800',
              'border-amber-500 bg-amber-50 text-amber-800'
            ];
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors[idx % colors.length]}`}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Principio Rector FAPPCODI</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Las 4 Áreas de Desarrollo Integral */}
      <section aria-labelledby="areas-title" className="bg-slate-100/80 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
            Enfoque Multidisciplinario
          </span>
          <h2 id="areas-title" className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Áreas en las que aplicamos nuestros esfuerzos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            “Las áreas en que se desarrolla abarcan: la salud, la educación, el trabajo y la vivienda. Todo esto fundamental para la evolución y crecimiento de todos los individuos.”
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AREAS.map((area, idx) => {
            const icons = [Activity, GraduationCap, Briefcase, Home];
            const Icon = icons[idx] || Activity;
            return (
              <div 
                key={area.name}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">
                  {area.name}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {area.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Access to Key Initiatives */}
      <section aria-labelledby="initiatives-title" className="space-y-6">
        <h2 id="initiatives-title" className="text-2xl sm:text-3xl font-bold text-slate-900">
          Proyectos Insignia en Marcha
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Inclukiosco Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Pasantías Laborales
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                El Inclukiosco de Lanús
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kiosco atendido por personas con discapacidad en Hipólito Yrigoyen 3863, construido de forma sustentable con ladrillos de polipropileno reciclado y pasantías certificadas por COPRET.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => onNavigate('programas')}
                className="text-sky-700 font-bold text-sm inline-flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <span>Conocer detalles del proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tienda Manos que Inspiran Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Subdominio Exclusivo
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Tienda 'Manos que inspiran'
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Productos artesanales elaborados en talleres de inclusión: bolsas ecológicas estampadas en serigrafía, cuadernos con braille, velas y merchandising con propósito solidario.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => onNavigate('tienda')}
                className="text-emerald-700 font-bold text-sm inline-flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <span>Explorar catálogo de la tienda</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Banco Ortopédico Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                Banco Solidario
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Catálogo Solidario & Alcancía
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Préstamo solidario de sillas de ruedas, bastones blancos y verdes, muletas y andadores. Conocé además la barra de progreso interactiva de nuestra meta mensual.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => onNavigate('catalogo')}
                className="text-sky-700 font-bold text-sm inline-flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <span>Ver elementos y alcancía</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
