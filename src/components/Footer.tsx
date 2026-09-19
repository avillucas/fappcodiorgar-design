import React from 'react';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { SectionId } from '../types';
import { INSTITUTIONAL_INFO } from '../data/fappcodiData';
import { FappcodiLogo } from './FappcodiLogo';
import { trackCtaClick } from '../utils/analytics';

interface Props {
  onNavigate: (section: SectionId) => void;
}

export const Footer: React.FC<Props> = ({ onNavigate }) => {
  const handleNav = (section: SectionId, label: string) => {
    trackCtaClick({
      cta_name: `footer_nav_${section}`,
      cta_category: 'navigation',
      cta_label: `Footer: ${label}`,
      cta_location: 'footer_links'
    });
    onNavigate(section);
  };

  const handleSocialClick = (network: string, url: string) => {
    trackCtaClick({
      cta_name: `footer_social_${network.toLowerCase()}`,
      cta_category: 'social',
      cta_label: `Red Social: ${network}`,
      destination_url: url,
      cta_location: 'footer_social_links'
    });
  };

  const handleWhatsApp = () => {
    trackCtaClick({
      cta_name: 'footer_whatsapp_direct',
      cta_category: 'contact_direct',
      cta_label: 'WhatsApp Footer',
      destination_url: INSTITUTIONAL_INFO.whatsappLink,
      cta_location: 'footer_contact'
    });
  };

  const handleEmail = () => {
    trackCtaClick({
      cta_name: 'footer_email_direct',
      cta_category: 'contact_direct',
      cta_label: 'Email Footer',
      destination_url: INSTITUTIONAL_INFO.emailLink,
      cta_location: 'footer_contact'
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      {/* Upper footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand & History */}
        <div className="space-y-3">
          <FappcodiLogo 
            variant="compact" 
            size="md" 
            textColor="white" 
            id="footer-fappcodi-logo" 
          />
          <p className="text-slate-400 text-xs leading-relaxed">
            Fundación Argentina para las Personas con Discapacidad. Organismo No Gubernamental sin fines de lucro fundado en el año 2000 por Silvio Adrián Catania.
          </p>
          <p className="italic text-amber-300 font-serif text-xs">
            {INSTITUTIONAL_INFO.motto}
          </p>

          {/* Redes Sociales Oficiales */}
          <div className="pt-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Redes Sociales Oficiales:
            </span>
            <div className="flex items-center gap-2">
              <a
                id="footer-social-instagram"
                href={INSTITUTIONAL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('Instagram', INSTITUTIONAL_INFO.social.instagram)}
                className="w-8 h-8 rounded-lg bg-pink-900/40 hover:bg-pink-700 text-pink-300 hover:text-white border border-pink-700/50 flex items-center justify-center transition"
                aria-label="Seguir a FAPPCODI en Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-linkedin"
                href={INSTITUTIONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('LinkedIn', INSTITUTIONAL_INFO.social.linkedin)}
                className="w-8 h-8 rounded-lg bg-sky-900/40 hover:bg-sky-700 text-sky-300 hover:text-white border border-sky-700/50 flex items-center justify-center transition"
                aria-label="Perfil institucional de FAPPCODI en LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-social-youtube"
                href={INSTITUTIONAL_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('YouTube', INSTITUTIONAL_INFO.social.youtube)}
                className="w-8 h-8 rounded-lg bg-red-900/40 hover:bg-red-700 text-red-300 hover:text-white border border-red-700/50 flex items-center justify-center transition"
                aria-label="Canal oficial de FAPPCODI en YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="pt-1">
            <button
              id="footer-btn-contacto"
              type="button"
              onClick={() => handleNav('contacto', 'WhatsApp y Correo Oficial')}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-lg transition text-xs shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp y Correo Oficial</span>
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
            <button onClick={() => handleNav('inicio', 'Inicio & Pilares')} className="text-left text-slate-400 hover:text-white transition cursor-pointer">Inicio & Pilares</button>
            <button onClick={() => handleNav('institucional', 'Historia & Silvio Catania')} className="text-left text-slate-400 hover:text-white transition cursor-pointer">Historia & Silvio Catania</button>
            <button onClick={() => handleNav('programas', 'El Inclukiosco & Expendedoras')} className="text-left text-slate-400 hover:text-white transition cursor-pointer">El Inclukiosco & Expendedoras</button>
            <button onClick={() => handleNav('laboral', 'Bolsa de Empleo & Cupo 4%')} className="text-left text-slate-400 hover:text-white transition cursor-pointer">Bolsa de Empleo & Cupo 4%</button>
            <button onClick={() => handleNav('normativas', 'Guía del CUD & Juntas Provinciales')} className="text-left text-slate-400 hover:text-white transition cursor-pointer">Guía del CUD & Juntas Provinciales</button>
            <button onClick={() => handleNav('prensa', 'Sala de Prensa')} className="text-left text-slate-400 hover:text-white transition cursor-pointer">Sala de Prensa</button>
            <button onClick={() => handleNav('contacto', 'Contacto & Consultas')} className="text-left text-slate-400 hover:text-white transition cursor-pointer">Contacto & Consultas</button>
          </div>
        </div>

        {/* Sede y Contacto */}
        <div className="space-y-3">
          <h2 className="font-bold text-white text-sm uppercase tracking-wider">
            Sede Central y Canales
          </h2>
          <div className="space-y-2 text-xs text-slate-400">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
              <span>{INSTITUTIONAL_INFO.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <a 
                href={INSTITUTIONAL_INFO.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={handleWhatsApp}
                className="hover:text-white font-semibold text-emerald-300"
              >
                WhatsApp: {INSTITUTIONAL_INFO.whatsapp}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <a 
                href={INSTITUTIONAL_INFO.emailLink} 
                onClick={handleEmail}
                className="hover:text-white font-semibold text-sky-300"
              >
                {INSTITUTIONAL_INFO.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-900/80 border-t border-slate-800/80 py-4 px-4 text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <p>© 2000 - 2026 FAPPCODI · Fundación Argentina para las Personas con Discapacidad. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Diseño bajo estándares WCAG 2.1 AAA</span>
            <span>·</span>
            <a
              id="footer-gtm-container-download"
              href="/gtm-container-fappcodi.json"
              download="gtm-container-fappcodi.json"
              onClick={() => {
                trackCtaClick({
                  cta_name: 'download_gtm_container_json',
                  cta_category: 'download',
                  cta_label: 'Descargar Contenedor GTM / GA4 JSON',
                  destination_url: '/gtm-container-fappcodi.json',
                  cta_location: 'footer_bottom_bar'
                });
              }}
              className="text-emerald-400 hover:text-emerald-300 underline font-medium transition"
              title="Descargar archivo de contenedor GTM con todos los eventos y etiquetas GA4 preconfigurados"
            >
              Contenedor GTM & GA4 (.json)
            </a>
            <span>·</span>
            <span>Ley Nac. 26.653</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

