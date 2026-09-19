import React from 'react';
import { 
  Building2, 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Archive, 
  ExternalLink,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { SectionId } from '../types';
import { INSTITUTIONAL_INFO } from '../data/fappcodiData';

interface Props {
  onNavigate: (section: SectionId) => void;
  onOpenDonateModal: () => void;
}

export const Footer: React.FC<Props> = ({ onNavigate, onOpenDonateModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      {/* Upper footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand & History */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-sky-700 text-white font-bold flex items-center justify-center text-lg shadow-sm">
              F
            </div>
            <span className="font-extrabold text-white text-lg tracking-tight">FAPPCODI</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Fundación Argentina para las Personas con Discapacidad. Organismo No Gubernamental sin fines de lucro fundado en el año 2000 por Silvio Adrián Catania.
          </p>
          <p className="italic text-amber-300 font-serif text-xs">
            {INSTITUTIONAL_INFO.motto}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenDonateModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition text-xs shadow-sm cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Colaborar con FAPPCODI</span>
            </button>
          </div>
        </div>

        {/* Legal registrations */}
        <div className="space-y-3">
          <h2 className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Marco Legal & Registros</span>
          </h2>
          <ul className="space-y-2 text-[11px] text-slate-400">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong>DPJ Bs. As. Matrícula 21602:</strong> Autorización para filiales en todo el país.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong>CENOC:</strong> Registro Nac. de Organizaciones de la Comunidad (Min. Desarrollo Social).</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong>REGICE:</strong> Registro Nac. de Capacitación y Empleo (Min. Trabajo de la Nación).</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong>Dir. Nac. de Juventud:</strong> Registro ONG Juveniles.</span>
            </li>
            <li className="text-[10px] font-mono text-slate-500 pt-1">
              CUIT: {INSTITUTIONAL_INFO.cuit}
            </li>
          </ul>
        </div>

        {/* Navigation Sections */}
        <div className="space-y-3">
          <h2 className="font-bold text-white text-sm uppercase tracking-wider">
            Mapa del Portal
          </h2>
          <div className="grid grid-cols-1 gap-1.5 text-xs">
            <button onClick={() => onNavigate('inicio')} className="text-left text-slate-400 hover:text-white transition">Inicio & Pilares</button>
            <button onClick={() => onNavigate('institucional')} className="text-left text-slate-400 hover:text-white transition">Historia & Silvio Catania</button>
            <button onClick={() => onNavigate('programas')} className="text-left text-slate-400 hover:text-white transition">El Inclukiosco & Expendedoras</button>
            <button onClick={() => onNavigate('catalogo')} className="text-left text-slate-400 hover:text-white transition">Banco Ortopédico & Alcancía</button>
            <button onClick={() => onNavigate('tienda')} className="text-left text-slate-400 hover:text-white transition">Tienda Manos que inspiran</button>
            <button onClick={() => onNavigate('laboral')} className="text-left text-slate-400 hover:text-white transition">Bolsa de Empleo & Cupo 4%</button>
            <button onClick={() => onNavigate('normativas')} className="text-left text-slate-400 hover:text-white transition">Guía del CUD & Juntas Provinciales</button>
            <button onClick={() => onNavigate('prensa')} className="text-left text-slate-400 hover:text-white transition">Prensa & Archivo Histórico</button>
            <button onClick={() => onNavigate('contacto')} className="text-left text-slate-400 hover:text-white transition">Contacto & Asistente Virtual</button>
          </div>
        </div>

        {/* Contact & Archive */}
        <div className="space-y-3">
          <h2 className="font-bold text-white text-sm uppercase tracking-wider">
            Sede y Contacto
          </h2>
          <div className="space-y-2 text-xs text-slate-400">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
              <span>{INSTITUTIONAL_INFO.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <a href={`tel:${INSTITUTIONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white font-semibold">
                {INSTITUTIONAL_INFO.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <a href={`mailto:${INSTITUTIONAL_INFO.email}`} className="hover:text-white font-semibold">
                {INSTITUTIONAL_INFO.email}
              </a>
            </p>
          </div>

          <div className="pt-3 border-t border-slate-800">
            <a
              href="https://web.archive.org/web/*/https://fappcodi.org.ar/*"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 transition"
            >
              <Archive className="w-3.5 h-3.5 text-amber-400" />
              <span>Archivo Histórico fappcodi.org.ar</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-900/80 border-t border-slate-800/80 py-4 px-4 text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <p>© 2000 - 2026 FAPPCODI · Fundación Argentina para las Personas con Discapacidad. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <span>Diseño bajo estándares WCAG 2.1 AAA</span>
            <span>·</span>
            <span>Ley Nacional 26.653 de Accesibilidad Web</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
