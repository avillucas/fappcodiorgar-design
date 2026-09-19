import React, { useState } from 'react';
import { 
  Briefcase, 
  FileText, 
  Building, 
  CheckCircle2, 
  UploadCloud, 
  AlertTriangle, 
  BarChart3, 
  Search, 
  Send, 
  ShieldCheck,
  Check,
  UserCheck
} from 'lucide-react';
import { JOB_POSTINGS } from '../data/fappcodiData';
import { JobPosting } from '../types';

export const InsercionLaboralSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bolsa' | 'postular' | 'empresas'>('bolsa');
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);

  // Form states
  const [cvSubmitted, setCvSubmitted] = useState(false);
  const [companySubmitted, setCompanySubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantRole, setApplicantRole] = useState('');
  const [selectedAdaptations, setSelectedAdaptations] = useState<string[]>([]);

  const handleToggleAdaptation = (ad: string) => {
    setSelectedAdaptations(prev => 
      prev.includes(ad) ? prev.filter(i => i !== ad) : [...prev, ad]
    );
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
            onClick={() => setActiveTab('bolsa')}
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
            onClick={() => setActiveTab('postular')}
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
            onClick={() => setActiveTab('empresas')}
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
                    onClick={() => {
                      setSelectedJob(job);
                      setActiveTab('postular');
                    }}
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

      {/* TAB 2: FORMULARIO PARA CARGAR CV */}
      {activeTab === 'postular' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 animate-fadeIn">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              Base de Talentos FAPPCODI
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Formulario de Postulación y Carga de CV
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              {selectedJob 
                ? `Te estás postulando para: ${selectedJob.title} (${selectedJob.company})`
                : 'Sumate a nuestra base de talentos para ser convocado a pasantías en el Inclukiosco, Expendedoras o empresas de nuestra red.'}
            </p>
          </div>

          {cvSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-300 text-emerald-950 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 font-bold text-lg">
                <CheckCircle2 className="w-6 h-6 text-emerald-700" />
                <span>¡Tu Currículum fue recibido con éxito!</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Gracias <strong>{applicantName || 'postulante'}</strong>. Nuestro equipo de inserción laboral evaluará tu perfil y los ajustes razonables indicados para coordinar una entrevista presencial o remota.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCvSubmitted(false);
                  setSelectedJob(null);
                }}
                className="px-4 py-2 bg-emerald-700 text-white text-xs font-bold rounded-lg"
              >
                Cargar otra postulación
              </button>
            </div>
          ) : (
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setCvSubmitted(true);
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cv-name" className="block text-xs font-bold text-slate-700 mb-1">Nombre Completo</label>
                  <input 
                    id="cv-name" 
                    required 
                    type="text" 
                    value={applicantName}
                    onChange={e => setApplicantName(e.target.value)}
                    placeholder="Tu nombre y apellido" 
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300" 
                  />
                </div>
                <div>
                  <label htmlFor="cv-dni" className="block text-xs font-bold text-slate-700 mb-1">DNI / CUIL</label>
                  <input id="cv-dni" required type="text" placeholder="Sin puntos" className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="cv-phone" className="block text-xs font-bold text-slate-700 mb-1">Teléfono / WhatsApp</label>
                  <input id="cv-phone" required type="tel" placeholder="+54 11 ..." className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300" />
                </div>
                <div>
                  <label htmlFor="cv-mail" className="block text-xs font-bold text-slate-700 mb-1">Correo Electrónico</label>
                  <input id="cv-mail" required type="email" placeholder="tuemail@ejemplo.com" className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300" />
                </div>
                <div>
                  <label htmlFor="cv-cud" className="block text-xs font-bold text-slate-700 mb-1">¿Poseés CUD?</label>
                  <select id="cv-cud" className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300">
                    <option>Sí, vigente</option>
                    <option>En trámite</option>
                    <option>No poseo / Deseo información</option>
                  </select>
                </div>
              </div>

              {/* Specific Adjustments / Adaptations required */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-2">
                  Ajustes Razonables o Apoyos que requerís en tu puesto de trabajo:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {[
                    "Lector de pantalla (NVDA / JAWS / VoiceOver)",
                    "Ampliador de caracteres / Alto contraste",
                    "Rampas y accesibilidad motriz / Chasis amplio",
                    "Intérprete de Lengua de Señas Argentina (LSA)",
                    "Acompañamiento pedagógico (Tutor o MIL)",
                    "Subtitulado o indicaciones escritas",
                    "Jornada reducida o descansos programados",
                    "Puesto de trabajo ergonómico adaptado",
                    "Modalidad de teletrabajo o remota"
                  ].map(item => {
                    const checked = selectedAdaptations.includes(item);
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => handleToggleAdaptation(item)}
                        className={`text-left p-2.5 rounded-xl border text-xs flex items-center gap-2 transition cursor-pointer ${
                          checked 
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                          checked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-400 bg-white'
                        }`}>
                          {checked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="leading-tight">{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Education & Experience summary */}
              <div>
                <label htmlFor="cv-exp" className="block text-xs font-bold text-slate-700 mb-1">
                  Resumen de Formación o Experiencia Laboral
                </label>
                <textarea 
                  id="cv-exp" 
                  rows={3} 
                  placeholder="Escuela o CFI al que asististe, cursos de oficio, tareas realizadas..." 
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>

              {/* File upload prompt */}
              <div className="p-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-center space-y-1">
                <UploadCloud className="w-6 h-6 text-slate-400 mx-auto" />
                <p className="text-xs font-bold text-slate-700">Podés adjuntar tu archivo de CV (PDF o Word)</p>
                <p className="text-[11px] text-slate-400">Si no tenés archivo, no te preocupes: con los datos de este formulario es suficiente.</p>
                <input type="file" className="text-xs text-slate-500 mx-auto mt-2" />
              </div>

              <div className="pt-2">
                <button
                  id="btn-submit-cv"
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs shadow-md transition cursor-pointer"
                >
                  Enviar mi Currículum a FAPPCODI
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* TAB 3: ASESORAMIENTO A EMPRESAS & MARCO LEGAL */}
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

            {/* Company Form */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-sky-400" />
                <span>Contactar a FAPPCODI Empresas</span>
              </h3>

              {companySubmitted ? (
                <div className="p-4 bg-emerald-900/80 border border-emerald-500 text-emerald-200 rounded-xl text-xs font-semibold">
                  ¡Gracias por el interés! Nuestro equipo de vinculación laboral se contactará para coordinar una reunión de trabajo.
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCompanySubmitted(true);
                  }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
                >
                  <div>
                    <label htmlFor="co-name" className="block text-[11px] font-bold text-slate-300 mb-1">Nombre de la Empresa</label>
                    <input id="co-name" required type="text" placeholder="Razón Social" className="w-full text-xs px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white" />
                  </div>
                  <div>
                    <label htmlFor="co-mail" className="block text-[11px] font-bold text-slate-300 mb-1">Email de Contacto</label>
                    <input id="co-mail" required type="email" placeholder="rrhh@empresa.com" className="w-full text-xs px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white" />
                  </div>
                  <div className="flex items-end">
                    <button
                      id="btn-submit-co"
                      type="submit"
                      className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold text-xs transition cursor-pointer"
                    >
                      Solicitar Asesoramiento
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
