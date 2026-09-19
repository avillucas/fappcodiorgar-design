import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  MessageCircle, 
  Copy, 
  Check, 
  ExternalLink,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Building2,
  Instagram,
  Linkedin,
  Youtube,
  Share2
} from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/fappcodiData';
import { trackCtaClick } from '../utils/analytics';

interface FAQ {
  question: string;
  answer: string;
}

const INSTITUTIONAL_FAQS: FAQ[] = [
  {
    question: "¿Cuáles son los canales oficiales para contactar a FAPPCODI?",
    answer: "Los canales oficiales y directos de comunicación son vía WhatsApp al +54 9 11 5562-4202 y por correo electrónico a contacto@fappcodi.org.ar. Por estos medios podés realizar consultas sobre programas, inserción laboral, asesoramiento o convenios institucionales."
  },
  {
    question: "¿Cómo tramito el Certificado Único de Discapacidad (CUD)?",
    answer: "El CUD es un documento público y gratuito válido en todo el país. Para obtenerlo: 1) Reuní los certificados e informes médicos actualizados de tus profesionales tratantes; 2) Solicitá el turno en la Junta Evaluadora correspondiente a tu domicilio según el DNI; 3) Concurrí a la evaluación interdisciplinaria. Podés consultar las direcciones de las sedes de todo el país en la sección 'Normativa & CUD'."
  },
  {
    question: "¿Qué es el Inclukiosco y cómo funciona?",
    answer: "El Inclukiosco es un proyecto modelo de inserción laboral de FAPPCODI ubicado en el predio de la Municipalidad de Lanús (Hipólito Yrigoyen 3863). Es atendido por jóvenes de escuelas especiales y centros de formación integral (CFI) que realizan pasantías profesionalizantes de 120 horas supervisadas por un Maestro de Inclusión Laboral (MIL) con certificación oficial del COPRET."
  },
  {
    question: "¿Cómo puede mi empresa instalar una Expendedora Inclusiva?",
    answer: "El programa de Expendedoras Inclusivas instala máquinas de bebidas y snacks en empresas y dependencias, operadas y abastecidas por trabajadores con discapacidad. Para coordinar una visita técnica y sumarte a la red, podés escribirnos por WhatsApp al +54 9 11 5562-4202 o por correo a contacto@fappcodi.org.ar."
  },
  {
    question: "¿Cómo funciona la bolsa de empleo y el cupo laboral del 4%?",
    answer: "En la sección de Inserción Laboral podés postularte a las búsquedas vigentes y cargar tu currículum especificando los apoyos o ajustes razonables que requerís en tu puesto de trabajo. También asesoramos a empresas y organismos públicos en los alcances de la Ley 22.431 y sus beneficios fiscales."
  },
  {
    question: "¿Dónde queda la sede física de FAPPCODI?",
    answer: "Nuestra sede institucional funciona en el predio de la Municipalidad de Lanús, en Av. Hipólito Yrigoyen 3863, Lanús, Provincia de Buenos Aires."
  }
];

export const ContactoSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsapp, setCopiedWhatsapp] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCopyEmail = () => {
    trackCtaClick({
      cta_name: 'copy_email_clipboard',
      cta_category: 'contact_interaction',
      cta_label: 'Copiar Email al Portapapeles',
      cta_location: 'contacto_page'
    });
    navigator.clipboard.writeText(INSTITUTIONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyWhatsapp = () => {
    trackCtaClick({
      cta_name: 'copy_whatsapp_clipboard',
      cta_category: 'contact_interaction',
      cta_label: 'Copiar WhatsApp al Portapapeles',
      cta_location: 'contacto_page'
    });
    navigator.clipboard.writeText(INSTITUTIONAL_INFO.whatsapp);
    setCopiedWhatsapp(true);
    setTimeout(() => setCopiedWhatsapp(false), 2500);
  };

  const handleOpenWhatsApp = () => {
    trackCtaClick({
      cta_name: 'btn_open_whatsapp',
      cta_category: 'contact_direct',
      cta_label: 'Abrir Chat WhatsApp Oficial',
      destination_url: INSTITUTIONAL_INFO.whatsappLink,
      cta_location: 'contacto_page_card'
    });
  };

  const handleSendEmail = () => {
    trackCtaClick({
      cta_name: 'btn_send_email',
      cta_category: 'contact_direct',
      cta_label: 'Enviar Correo Electrónico',
      destination_url: INSTITUTIONAL_INFO.emailLink,
      cta_location: 'contacto_page_card'
    });
  };

  const handleSocialClick = (network: string, url: string) => {
    trackCtaClick({
      cta_name: `social_${network.toLowerCase()}_click`,
      cta_category: 'social',
      cta_label: `Red Social Contacto: ${network}`,
      destination_url: url,
      cta_location: 'contacto_social_card'
    });
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Section Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-full mb-3">
          <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
          <span>Canales Oficiales Exclusivos</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Contacto Institucional
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-3xl">
          Para consultas, orientación a familias, convenios o programas institucionales, podés comunicarte directamente con FAPPCODI a través de nuestros canales oficiales de <strong>WhatsApp</strong> y <strong>correo electrónico</strong>.
        </p>
      </div>

      {/* Main Direct Channels: WhatsApp & Email Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* WhatsApp Card */}
        <div 
          id="card-contact-whatsapp"
          className="bg-white rounded-2xl border-2 border-emerald-500/40 p-6 sm:p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                <MessageCircle className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                Atención Directa
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                WhatsApp Oficial
              </h2>
              <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                Mensajería directa para consultas generales, asesoramiento a familias, información sobre el Inclukiosco y coordinación institucional.
              </p>
            </div>

            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200/80">
              <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block mb-1">
                Línea de WhatsApp
              </span>
              <p className="text-lg sm:text-xl font-mono font-extrabold text-slate-900 tracking-tight">
                {INSTITUTIONAL_INFO.whatsapp}
              </p>
            </div>
          </div>

          <div className="space-y-2.5 pt-2">
            <a
              id="btn-open-whatsapp"
              href={INSTITUTIONAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOpenWhatsApp}
              className="w-full py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow transition cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Abrir chat de WhatsApp</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <button
              id="btn-copy-whatsapp"
              type="button"
              onClick={handleCopyWhatsapp}
              className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              {copiedWhatsapp ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">¡Número copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copiar número de WhatsApp</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Email Card */}
        <div 
          id="card-contact-email"
          className="bg-white rounded-2xl border-2 border-sky-500/40 p-6 sm:p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-sky-700 text-white flex items-center justify-center shadow-md">
                <Mail className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
                Canal Formal
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Correo Electrónico
              </h2>
              <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                Recepción de documentación, solicitudes de convenios con municipios y empresas, propuestas laborales y comunicaciones formales.
              </p>
            </div>

            <div className="p-4 bg-sky-50/70 rounded-xl border border-sky-200/80">
              <span className="text-[11px] font-bold text-sky-900 uppercase tracking-wider block mb-1">
                Dirección Oficial de Correo
              </span>
              <p className="text-base sm:text-lg font-mono font-extrabold text-slate-900 break-all">
                {INSTITUTIONAL_INFO.email}
              </p>
            </div>
          </div>

          <div className="space-y-2.5 pt-2">
            <a
              id="btn-open-email"
              href={INSTITUTIONAL_INFO.emailLink}
              onClick={handleSendEmail}
              className="w-full py-3.5 px-5 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow transition cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span>Enviar correo electrónico</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <button
              id="btn-copy-email"
              type="button"
              onClick={handleCopyEmail}
              className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-sky-600" />
                  <span className="text-sky-700 font-bold">¡Correo copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copiar dirección de correo</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sede Institucional, Redes & FAQ Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sede física info y redes */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-sky-400">
              <Building2 className="w-5 h-5" />
              <h3 className="font-bold text-base text-white">Sede Institucional</h3>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{INSTITUTIONAL_INFO.address}</span>
              </p>
              <p className="text-[11px] text-slate-400 pt-1">
                Predio de la Municipalidad de Lanús, Provincia de Buenos Aires.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">Personería Jurídica Nº 21602</p>
              <p>CUIT: {INSTITUTIONAL_INFO.cuit}</p>
            </div>
          </div>

          {/* Tarjeta de Redes Sociales Oficiales */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-800">
              <Share2 className="w-5 h-5 text-sky-700" />
              <h3 className="font-bold text-base text-slate-900">Redes Sociales Oficiales</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seguí nuestras novedades, coberturas de prensa e iniciativas de inclusión en nuestras plataformas oficiales:
            </p>

            <div className="space-y-2 pt-1">
              <a
                id="contact-social-instagram"
                href={INSTITUTIONAL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('Instagram', INSTITUTIONAL_INFO.social.instagram)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl border border-pink-200 bg-pink-50/50 hover:bg-pink-100/70 text-slate-800 text-xs font-semibold transition cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-600 text-white flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span>Instagram Oficial</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-pink-700" />
              </a>

              <a
                id="contact-social-linkedin"
                href={INSTITUTIONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('LinkedIn', INSTITUTIONAL_INFO.social.linkedin)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl border border-sky-200 bg-sky-50/50 hover:bg-sky-100/70 text-slate-800 text-xs font-semibold transition cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-700 text-white flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span>LinkedIn Institucional</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-sky-700" />
              </a>

              <a
                id="contact-social-youtube"
                href={INSTITUTIONAL_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('YouTube', INSTITUTIONAL_INFO.social.youtube)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl border border-red-200 bg-red-50/50 hover:bg-red-100/70 text-slate-800 text-xs font-semibold transition cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <span>Canal de YouTube</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-red-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Institutional FAQs */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-sky-700" />
              <h2 className="text-xl font-bold text-slate-900">
                Preguntas Frecuentes Institucionales
              </h2>
            </div>
            <p className="text-xs text-slate-600">
              Respuestas oficiales a las consultas más habituales sobre trámites, programas y servicios de FAPPCODI.
            </p>

            <div className="space-y-3 pt-2">
              {INSTITUTIONAL_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden transition"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        const willOpen = !isOpen;
                        setOpenFaqIndex(willOpen ? idx : null);
                        if (willOpen) {
                          trackCtaClick({
                            cta_name: 'faq_expand',
                            cta_category: 'contact_interaction',
                            cta_label: faq.question,
                            cta_location: 'contacto_faq_accordion'
                          });
                        }
                      }}
                      className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 text-xs font-bold text-slate-900 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-sky-700 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white text-xs text-slate-700 leading-relaxed border-t border-slate-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
