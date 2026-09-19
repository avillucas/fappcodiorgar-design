import React, { useState } from 'react';
import { 
  Briefcase, 
  FileText, 
  Building, 
  CheckCircle2, 
  Search, 
  Send, 
  ShieldCheck,
  MessageCircle,
  ExternalLink,
  X,
  Sparkles,
  ArrowRight,
  BarChart3
} from 'lucide-react';
import { JOB_POSTINGS, INSTITUTIONAL_INFO } from '../data/fappcodiData';
import { JobPosting } from '../types';
import { trackCtaClick } from '../utils/analytics';

export const InsercionLaboralSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bolsa' | 'postular' | 'empresas'>('bolsa');
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);

  // Form states - Postulación Laboral
  const [cvSubmitted, setCvSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantJobInterest, setApplicantJobInterest] = useState('');
  const [applicantCud, setApplicantCud] = useState('Sí, cuento con CUD vigente');
  const [applicantExperience, setApplicantExperience] = useState('');
  const [lastLaboralWhatsappUrl, setLastLaboralWhatsappUrl] = useState('');

  // Form states - Empresas
  const [companySubmitted, setCompanySubmitted] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyInterest, setCompanyInterest] = useState('Asesoramiento Cupo 4% (Ley 22.431)');
  const [companyMessage, setCompanyMessage] = useState('');
  const [lastCompanyWhatsappUrl, setLastCompanyWhatsappUrl] = useState('');

  const handleTabChange = (tab: 'bolsa' | 'postular' | 'empresas', label: string) => {
    trackCtaClick({
      cta_name: `tab_laboral_${tab}`,
      cta_category: 'navigation',
      cta_label: `Pestaña Laboral: ${label}`,
      cta_location: 'laboral_tabs'
    });
    setActiveTab(tab);
  };

  const handleJobSelect = (job: JobPosting) => {
    trackCtaClick({
      cta_name: 'job_select_apply',
      cta_category: 'form_submit',
      cta_label: `${job.title} - ${job.company}`,
      cta_location: 'bolsa_empleo_cards'
    });
    setSelectedJob(job);
    setActiveTab('postular');
  };

  // Envío de postulación laboral vía WhatsApp
  const handleSubmitLaboral = (e: React.FormEvent) => {
    e.preventDefault();

    const targetJobTitle = selectedJob 
      ? `${selectedJob.title} (${selectedJob.company})` 
      : (applicantJobInterest || 'Bolsa de Trabajo General FAPPCODI');

    const cleanNumber = '5491155624202';
    const lines = [
      '🔔 *POSTULACIÓN LABORAL - FAPPCODI*',
      '',
      `👤 *Nombre y Apellido:* ${applicantName.trim()}`,
      `📧 *Email de Contacto:* ${applicantEmail.trim()}`,
      `💼 *Puesto / Búsqueda:* ${targetJobTitle}`,
      `📋 *Situación CUD:* ${applicantCud}`
    ];

    if (applicantExperience.trim()) {
      lines.push(`📝 *Formación / Experiencia:* ${applicantExperience.trim()}`);
    }

    lines.push('', 'Hola FAPPCODI, les envío mi postulación para formar parte de la base de talentos e intermediación laboral.');

    const whatsappMessage = lines.join('\n');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    // Medición en dataLayer
    trackCtaClick({
      cta_name: 'laboral_whatsapp_postulacion',
      cta_category: 'job_application',
      cta_label: `Postulación WhatsApp: ${applicantName.trim()} - ${targetJobTitle}`,
      destination_url: whatsappUrl,
      cta_location: 'laboral_postulacion',
      additional_data: {
        applicant_name: applicantName.trim(),
        applicant_email: applicantEmail.trim(),
        job_target: targetJobTitle,
        cud_status: applicantCud
      }
    });

    setLastLaboralWhatsappUrl(whatsappUrl);
    setCvSubmitted(true);

    // Abrir WhatsApp en pestaña nueva
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Envío de consulta de empresas vía WhatsApp
  const handleSubmitCompany = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanNumber = '5491155624202';
    const lines = [
      '🏢 *CONSULTA CORPORATIVA / RSE - FAPPCODI EMPRESAS*',
      '',
      `🏢 *Empresa / Razón Social:* ${companyName.trim()}`,
      `📧 *Email de Contacto:* ${companyEmail.trim()}`
    ];

    if (companyPhone.trim()) {
      lines.push(`📞 *Teléfono:* ${companyPhone.trim()}`);
    }

    lines.push(`🎯 *Motivo de Consulta:* ${companyInterest}`);

    if (companyMessage.trim()) {
      lines.push(`💬 *Mensaje / Necesidad:* ${companyMessage.trim()}`);
    }

    lines.push('', 'Hola FAPPCODI, nos comunicamos desde la empresa para solicitar asesoramiento institucional sobre inclusión laboral, RSE y programas inclusivos.');

    const whatsappMessage = lines.join('\n');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    // Medición en dataLayer
    trackCtaClick({
      cta_name: 'empresa_whatsapp_send',
      cta_category: 'contact_direct',
      cta_label: `WhatsApp Empresa: ${companyName.trim()} - ${companyInterest}`,
      destination_url: whatsappUrl,
      cta_location: 'laboral_empresas',
      additional_data: {
        company_name: companyName.trim(),
        company_email: companyEmail.trim(),
        company_phone: companyPhone.trim() || undefined,
        company_interest: companyInterest
      }
    });

    setLastCompanyWhatsappUrl(whatsappUrl);
    setCompanySubmitted(true);

    // Abrir WhatsApp en pestaña nueva
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Empleo Digno & Marco Legal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Inserción Laboral e Intermediación
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-3xl">
          El trabajo es la vía insustituible para la autonomía y la dignidad. Conectamos postulantes con búsquedas inclusivas y asesoramos a organismos y empresas en el cumplimiento del cupo legal.
        </p>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mt-6">
          <button
            id="tab-bolsa-empleo"
            type="button"
            onClick={() => handleTabChange('bolsa', 'Bolsa de Empleo Activa')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'bolsa'
                ? 'bg-sky-700 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Bolsa de Empleo Activa</span>
          </button>

          <button
            id="tab-cargar-cv"
            type="button"
            onClick={() => handleTabChange('postular', 'Cargar mi Currículum (CV)')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'postular'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Cargar mi Currículum (CV)</span>
          </button>

          <button
            id="tab-empresas-cupo"
            type="button"
            onClick={() => handleTabChange('empresas', 'Marco Legal & Empresas')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'empresas'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>Marco Legal & Empresas</span>
          </button>
        </div>
      </div>

      {/* STATS & CUPOS BANNER */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <BarChart3 className="w-4 h-4" />
          <span>Datos Oficiales · Ley Nacional 22.431 (Art. 8)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-3xl font-extrabold text-amber-400 font-mono">4%</span>
            <p className="text-xs text-slate-300 mt-1 font-semibold">Cupo mínimo obligatorio por ley en el sector público nacional.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-3xl font-extrabold text-rose-400 font-mono">0,90%</span>
            <p className="text-xs text-slate-300 mt-1 font-semibold">Cumplimiento efectivo actual reportado ante la Cámara de Diputados.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <span className="text-3xl font-extrabold text-emerald-400 font-mono">79%</span>
            <p className="text-xs text-slate-300 mt-1 font-semibold">De las dependencias públicas aún no alcanzan la meta de inclusión.</p>
          </div>
        </div>
        <p className="text-xs text-slate-400 italic">
          Fuente: Informe de la Secretaría de Gestión y Empleo Público citado por la Honorable Cámara de Diputados de la Nación.
        </p>
      </section>

      {/* TAB 1: BOLSA DE EMPLEO */}
      {activeTab === 'bolsa' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Búsquedas Laborales Vigentes
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {JOB_POSTINGS.length} oportunidades activas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOB_POSTINGS.map(job => (
              <div 
                key={job.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
                      {job.workMode}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {job.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {job.title}
                  </h3>

                  <p className="text-xs font-semibold text-sky-900">
                    {job.company}
                  </p>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {job.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-700 block mb-1.5">
                      Ajustes Razonables Provistos:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {job.adaptations.map(ad => (
                        <span key={ad} className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                          ✓ {ad}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleJobSelect(job)}
                    className="w-full py-2 bg-sky-700 hover:bg-sky-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                  >
                    Postularme a esta búsqueda
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: FORMULARIO DE POSTULACIÓN LABORAL (VÍA WHATSAPP) */}
      {activeTab === 'postular' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Base de Talentos FAPPCODI
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                Postulación Laboral Directa
              </h2>
              <p className="text-slate-600 text-sm mt-1 max-w-2xl">
                Completá tus datos básicos para iniciar tu postulación. Al presionar enviar, se abrirá un chat directo de WhatsApp con nuestro equipo de vinculación laboral con tu información preconfigurada.
              </p>
            </div>

            {selectedJob && (
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 flex items-center justify-between gap-3 text-xs text-sky-900 self-start sm:self-auto">
                <div>
                  <span className="text-[10px] uppercase font-bold text-sky-700 block">Postulando a:</span>
                  <strong>{selectedJob.title}</strong> ({selectedJob.company})
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="p-1 text-sky-600 hover:text-sky-900 rounded-full hover:bg-sky-200"
                  title="Postular a búsqueda general"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {cvSubmitted ? (
            <div className="p-6 sm:p-8 bg-emerald-50 border border-emerald-300 text-emerald-950 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 font-bold text-xl text-emerald-800">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 flex-shrink-0" />
                <span>¡Tu mensaje para WhatsApp fue generado con éxito!</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed max-w-2xl">
                Gracias <strong>{applicantName}</strong>. Hemos generado el mensaje formal con tu postulación para <strong>{selectedJob ? selectedJob.title : (applicantJobInterest || 'Bolsa General')}</strong>. Si tu navegador bloqueó la ventana emergente, hacé clic en el botón a continuación para abrir WhatsApp:
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {lastLaboralWhatsappUrl && (
                  <a
                    id="btn-reopen-laboral-whatsapp"
                    href={lastLaboralWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir Chat de WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setCvSubmitted(false);
                    setSelectedJob(null);
                    setApplicantName('');
                    setApplicantEmail('');
                    setApplicantJobInterest('');
                    setApplicantExperience('');
                  }}
                  className="px-4 py-2.5 bg-white border border-emerald-300 text-emerald-800 text-xs font-bold rounded-xl hover:bg-emerald-100 transition"
                >
                  Completar otra postulación
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitLaboral} className="space-y-5">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-600 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>Sin trámites innecesarios:</strong> No requerimos DNI ni adjuntos de archivos en este paso. Se enviará directamente desde tu cuenta de WhatsApp para mayor agilidad.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cv-name" className="block text-xs font-bold text-slate-700 mb-1">
                    Nombre y Apellido <span className="text-rose-600">*</span>
                  </label>
                  <input 
                    id="cv-name" 
                    required 
                    type="text" 
                    value={applicantName}
                    onChange={e => setApplicantName(e.target.value)}
                    placeholder="Ej. Martín Gómez" 
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none" 
                  />
                </div>

                <div>
                  <label htmlFor="cv-mail" className="block text-xs font-bold text-slate-700 mb-1">
                    Correo Electrónico <span className="text-rose-600">*</span>
                  </label>
                  <input 
                    id="cv-mail" 
                    required 
                    type="email" 
                    value={applicantEmail}
                    onChange={e => setApplicantEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com" 
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cv-job-interest" className="block text-xs font-bold text-slate-700 mb-1">
                    Puesto o Área de Interés
                  </label>
                  {selectedJob ? (
                    <input 
                      id="cv-job-interest" 
                      type="text" 
                      disabled
                      value={`${selectedJob.title} (${selectedJob.company})`}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-sky-300 bg-sky-50 text-sky-900 font-semibold" 
                    />
                  ) : (
                    <select
                      id="cv-job-interest"
                      value={applicantJobInterest}
                      onChange={e => setApplicantJobInterest(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none bg-white"
                    >
                      <option value="">Seleccionar área o búsqueda general</option>
                      <option value="Atención al Público / Inclukiosco">Atención al Público / Inclukiosco</option>
                      <option value="Operador de Expendedoras Inclusivas">Operador de Expendedoras Inclusivas</option>
                      <option value="Administración / Auxiliar de Oficina">Administración / Auxiliar de Oficina</option>
                      <option value="Logística, Reposición y Depósito">Logística, Reposición y Depósito</option>
                      <option value="Bolsa de Trabajo General FAPPCODI">Bolsa de Trabajo General FAPPCODI</option>
                    </select>
                  )}
                </div>

                <div>
                  <label htmlFor="cv-cud" className="block text-xs font-bold text-slate-700 mb-1">
                    Situación con Certificado Único de Discapacidad (CUD)
                  </label>
                  <select 
                    id="cv-cud" 
                    value={applicantCud}
                    onChange={e => setApplicantCud(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none bg-white"
                  >
                    <option value="Sí, cuento con CUD vigente">Sí, cuento con CUD vigente</option>
                    <option value="CUD en trámite de evaluación">CUD en trámite de evaluación</option>
                    <option value="No poseo CUD / Deseo asesoramiento">No poseo CUD / Deseo asesoramiento</option>
                  </select>
                </div>
              </div>

              {/* Experience summary */}
              <div>
                <label htmlFor="cv-exp" className="block text-xs font-bold text-slate-700 mb-1">
                  Resumen breve de Formación o Experiencia (Opcional)
                </label>
                <textarea 
                  id="cv-exp" 
                  rows={3} 
                  value={applicantExperience}
                  onChange={e => setApplicantExperience(e.target.value)}
                  placeholder="Escuela o centro de formación al que asististe, cursos realizados, pasantías o trabajos previos..." 
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  id="btn-submit-laboral-whatsapp"
                  type="submit"
                  className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Postulación por WhatsApp</span>
                </button>
                <span className="text-[11px] text-slate-500 text-center sm:text-left">
                  Se abrirá WhatsApp Web o la App en tu dispositivo.
                </span>
              </div>
            </form>
          )}
        </div>
      )}

      {/* TAB 3: ASESORAMIENTO A EMPRESAS & MARCO LEGAL (VÍA WHATSAPP) */}
      {activeTab === 'empresas' && (
        <div className="space-y-8 animate-fadeIn">
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                Alianzas Corporativas e Institucionales
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Beneficios Fiscales e Inclusión para Empresas
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                La contratación de personas con discapacidad no solo responde a un deber ético y de enriquecimiento de los equipos de trabajo, sino que cuenta con <strong>desgravaciones impositivas vigentes bajo la Ley 22.431</strong> (deducción del 70% de las retribuciones abonadas en el Impuesto a las Ganancias) y exenciones en contribuciones patronales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">Auditoría de Accesibilidad</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Evaluamos tus oficinas, plataformas digitales y canales de atención para eliminar barreras físicas y actitudinales.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">Selección & Pasantías</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Preselección de postulantes calificados con acompañamiento y seguimiento pedagógico en el puesto.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">Capacitación de Equipos</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Talleres de sensibilización sobre lenguaje adecuado, buen trato y convivencia laboral inclusiva.
                </p>
              </div>
            </div>

            {/* Company Form sending via WhatsApp */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Building className="w-5 h-5 text-sky-400" />
                  <span>Contactar a FAPPCODI Empresas</span>
                </h3>
                <span className="text-xs text-emerald-400 flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  Respuesta directa por WhatsApp
                </span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
                Completá los datos de tu organización para iniciar el asesoramiento personalizado con la comisión de vinculación institucional.
              </p>

              {companySubmitted ? (
                <div className="p-6 bg-emerald-950 border border-emerald-500/60 text-emerald-200 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>¡Mensaje corporativo preparado para WhatsApp!</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Hemos preparado el mensaje para <strong>{companyName}</strong> ({companyEmail}). Si WhatsApp no se abrió automáticamente, podés iniciarlo con el siguiente botón:
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    {lastCompanyWhatsappUrl && (
                      <a
                        id="btn-reopen-company-whatsapp"
                        href={lastCompanyWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Abrir Chat de WhatsApp</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setCompanySubmitted(false);
                        setCompanyName('');
                        setCompanyEmail('');
                        setCompanyPhone('');
                        setCompanyMessage('');
                      }}
                      className="px-3 py-2 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs rounded-lg transition"
                    >
                      Nueva Consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmitCompany}
                  className="space-y-3 pt-2"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label htmlFor="co-name" className="block text-[11px] font-bold text-slate-300 mb-1">
                        Nombre de la Empresa <span className="text-rose-400">*</span>
                      </label>
                      <input 
                        id="co-name" 
                        required 
                        type="text" 
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                        placeholder="Razón Social o Marca" 
                        className="w-full text-xs px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none" 
                      />
                    </div>
                    <div>
                      <label htmlFor="co-mail" className="block text-[11px] font-bold text-slate-300 mb-1">
                        Email Corporativo <span className="text-rose-400">*</span>
                      </label>
                      <input 
                        id="co-mail" 
                        required 
                        type="email" 
                        value={companyEmail}
                        onChange={e => setCompanyEmail(e.target.value)}
                        placeholder="rrhh@empresa.com" 
                        className="w-full text-xs px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none" 
                      />
                    </div>
                    <div>
                      <label htmlFor="co-phone" className="block text-[11px] font-bold text-slate-300 mb-1">
                        Teléfono / Celular
                      </label>
                      <input 
                        id="co-phone" 
                        type="text" 
                        value={companyPhone}
                        onChange={e => setCompanyPhone(e.target.value)}
                        placeholder="+54 11 ..." 
                        className="w-full text-xs px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="co-interest" className="block text-[11px] font-bold text-slate-300 mb-1">
                        Motivo de Consulta Principal
                      </label>
                      <select
                        id="co-interest"
                        value={companyInterest}
                        onChange={e => setCompanyInterest(e.target.value)}
                        className="w-full text-xs px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      >
                        <option value="Asesoramiento Cupo 4% (Ley 22.431)">Asesoramiento Cupo 4% (Ley 22.431)</option>
                        <option value="Incorporación de Pasantes / Búsquedas Inclusivas">Incorporación de Pasantes / Búsquedas Inclusivas</option>
                        <option value="Instalación de Expendedoras Inclusivas">Instalación de Expendedoras Inclusivas</option>
                        <option value="Capacitación y Sensibilización de Equipos">Capacitación y Sensibilización de Equipos</option>
                        <option value="Alianza de RSE y Donaciones">Alianza de RSE y Donaciones</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="co-msg" className="block text-[11px] font-bold text-slate-300 mb-1">
                        Detalle Adicional o Mensaje (Opcional)
                      </label>
                      <input 
                        id="co-msg" 
                        type="text" 
                        value={companyMessage}
                        onChange={e => setCompanyMessage(e.target.value)}
                        placeholder="Ej. Cantidad de colaboradores, rubro, etc." 
                        className="w-full text-xs px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none" 
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      id="btn-submit-co-whatsapp"
                      type="submit"
                      className="w-full sm:w-auto py-2.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enviar Solicitud por WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
