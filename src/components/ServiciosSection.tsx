import React, { useState } from 'react';
import { 
  Store, 
  Coffee, 
  Users, 
  Award, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  Building, 
  Send, 
  HelpCircle, 
  Heart, 
  Layers, 
  Sparkles,
  BarChart3,
  Mail,
  ExternalLink
} from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/fappcodiData';
import { trackCtaClick } from '../utils/analytics';

export const ServiciosSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inclukiosco' | 'expendedoras' | 'familias'>('inclukiosco');
  
  // Interactive form states
  const [kioscoFormSubmitted, setKioscoFormSubmitted] = useState(false);
  const [expendedoraFormSubmitted, setExpendedoraFormSubmitted] = useState(false);
  const [expEmpresa, setExpEmpresa] = useState('');
  const [expEmail, setExpEmail] = useState('');
  const [lastExpWhatsappUrl, setLastExpWhatsappUrl] = useState('');
  const [familyFormSubmitted, setFamilyFormSubmitted] = useState(false);

  const handleTabChange = (tab: 'inclukiosco' | 'expendedoras' | 'familias', label: string) => {
    trackCtaClick({
      cta_name: `tab_${tab}`,
      cta_category: 'navigation',
      cta_label: `Pestaña Programas: ${label}`,
      cta_location: 'servicios_tabs'
    });
    setActiveTab(tab);
  };

  const handleWhatsAppConsult = (program: string) => {
    trackCtaClick({
      cta_name: 'servicios_whatsapp_consult',
      cta_category: 'contact_direct',
      cta_label: `Consultar ${program} vía WhatsApp`,
      destination_url: INSTITUTIONAL_INFO.whatsappLink,
      cta_location: 'servicios_section'
    });
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full mb-3">
          <Store className="w-3.5 h-3.5" />
          <span>Innovación Social y Empleo</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Servicios y Programas de FAPPCODI
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-3xl">
          Creamos puentes reales entre la formación y el mundo laboral formal, con espacios adaptados, tutorías pedagógicas y acompañamiento permanente a las familias.
        </p>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mt-6">
          <button
            id="tab-inclukiosco"
            type="button"
            onClick={() => handleTabChange('inclukiosco', 'El Inclukiosco')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'inclukiosco'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Store className="w-4 h-4" />
            <span>El Inclukiosco (Lanús)</span>
          </button>

          <button
            id="tab-expendedoras"
            type="button"
            onClick={() => handleTabChange('expendedoras', 'Expendedoras Inclusivas')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'expendedoras'
                ? 'bg-sky-700 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Coffee className="w-4 h-4" />
            <span>Expendedoras Inclusivas</span>
          </button>

          <button
            id="tab-familias"
            type="button"
            onClick={() => handleTabChange('familias', 'Asesoramiento a Familias')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'familias'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Asesoramiento a Familias</span>
          </button>
        </div>
      </div>

      {/* TAB 1: EL INCLUKIOSCO */}
      {activeTab === 'inclukiosco' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Main Info Card */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-amber-800 font-bold text-xs uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Hipólito Yrigoyen 3863, Lanús
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Un kiosco atendido por personas con discapacidad
                </h2>
                <p className="text-sm font-semibold text-slate-500">
                  Proyecto concebido y liderado por Silvio Catania, Presidente de FAPPCODI
                </p>
              </div>

              <a
                href={INSTITUTIONAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppConsult('Inclukiosco')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-sm transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar vía WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  La <strong>Fundación Argentina para Personas con Discapacidad (FAPPCODI)</strong> supo encontrar en la inmensidad del predio de la Municipalidad de Lanús el lugar indicado para comenzar uno de sus más ambiciosos proyectos en favor de la comunidad: el <strong>«Inclukiosco»</strong>, un kiosco atendido por personas con discapacidad, pensado como un espacio profesionalizante para los chicos de escuelas especiales y del <strong>Centro de Formación Integral (CFI)</strong> del partido.
                </p>

                <p>
                  El local, ubicado en Hipólito Yrigoyen al 3863, fue oficialmente inaugurado con la aprobación del Concejo Deliberante. Silvio Catania viene gestando esta idea debido a una preocupación que él padece en carne propia al ser una persona ciega: la dificultosa inserción laboral de las personas con discapacidad.
                </p>

                <blockquote className="p-4 bg-amber-50/80 rounded-xl border-l-4 border-amber-500 text-amber-950 font-serif italic">
                  “Yo tuve la oportunidad y quiero que los demás también la tengan. Creo que desde el lugar que estoy hoy en día trato de hacer lo más que puedo sobre ese tema.”
                  <span className="block not-italic text-xs font-sans font-bold text-slate-600 mt-1">
                    — Silvio Catania
                  </span>
                </blockquote>

                <h3 className="text-xl font-bold text-slate-900 pt-2">
                  Construcción sustentable: "Como jugar a los Rastis de chiquito"
                </h3>
                <p>
                  Silvio se puso al hombro la construcción física del kiosco: no solo logró edificar él mismo las paredes, sino que lo hizo de manera sustentable, con <strong>ladrillos reciclados hechos de polipropileno</strong>. Este sistema encastrable fue el único que le permitió levantar la estructura de forma totalmente autónoma debido a su ceguera:
                </p>
                <p className="italic text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  “Se siente como cuando jugaba con los Rastis de chiquito: divertido, nostálgico y con la certeza de que cada pieza encaja para construir futuro.”
                </p>
              </div>

              {/* Sidebar stats & facts */}
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
                  <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Régimen de Pasantías</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>120 horas totales</strong> de práctica profesionalizante.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Turnos de <strong>3 personas</strong> (8:00 a 12:00 y 13:00 a 15:00).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Supervisión continua por un <strong>Maestro de Inclusión Laboral (MIL)</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Certificación oficial emitida por el <strong>COPRET</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Perciben un <strong>incentivo económico</strong> por sus labores.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 space-y-2">
                  <h4 className="font-bold text-sky-950 text-sm flex items-center gap-2">
                    <Layers className="w-4 h-4 text-sky-700" />
                    <span>Pedagogía Adaptada</span>
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Al haber jóvenes que no leen ni escriben, una de las estrategias pedagógicas centrales es ordenar los productos por <strong>colores y ubicación fija</strong> para que sean rápidamente localizables. Aprenden manejo de máquinas registradoras, calculadoras para el vuelto, uso de cafetera y atención al público.
                  </p>
                </div>
              </div>
            </div>

            {/* Contexto de la Ley 22.431 */}
            <div className="rounded-xl bg-slate-900 text-white p-6 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
                <BarChart3 className="w-4 h-4" />
                <span>La Realidad del Cupo Laboral (Ley 22.431)</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Un informe de Diputados revela: solo el 0,90% frente al 4% que exige la Ley
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Según los últimos datos de la Secretaría de Gestión y Empleo Público citados por la Cámara de Diputados, el <strong>79% de las 191 jurisdicciones ministeriales</strong> no cumple el cupo del 4%. Tienen solo 3.011 personas con discapacidad contratadas (un 0,90%). Por eso Silvio presentará una propuesta a la Dirección de Cultura y Educación de la Provincia de Buenos Aires para que chicos capacitados trabajen en los kioscos de las escuelas con un ciclo continuo de relevo.
              </p>
            </div>
          </section>

          {/* Form to Request an Inclukiosco in another institution */}
          <section className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="max-w-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Expansión Federal del Proyecto
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                ¿Querés un INCLUKIOSCO en tu institución o municipio?
              </h3>
              <p className="text-slate-700 text-sm">
                Tanto el proyecto como el nombre están registrados, pero desde FAPPCODI estamos completamente abiertos a <strong>ceder los derechos para usar el nombre, la tipografía y el manual operativo</strong> en cualquier lugar de la Argentina.
              </p>
            </div>

            {kioscoFormSubmitted ? (
              <div className="p-5 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-xl font-medium text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                <span>¡Muchas gracias! Recibimos tu solicitud. Silvio Catania y el equipo de FAPPCODI se pondrán en contacto a la brevedad.</span>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  trackCtaClick({
                    cta_name: 'form_submit_inclukiosco_request',
                    cta_category: 'form_submit',
                    cta_label: 'Solicitud Expansión Inclukiosco',
                    cta_location: 'servicios_inclukiosco'
                  });
                  setKioscoFormSubmitted(true);
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2"
              >
                <div>
                  <label htmlFor="k-inst" className="block text-xs font-bold text-slate-700 mb-1">Institución / Municipio</label>
                  <input id="k-inst" required type="text" placeholder="Ej. Escuela Técnica Nº 1" className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="k-contact" className="block text-xs font-bold text-slate-700 mb-1">Nombre del Responsable</label>
                  <input id="k-contact" required type="text" placeholder="Ej. Prof. Laura Martínez" className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="k-phone" className="block text-xs font-bold text-slate-700 mb-1">Teléfono de Contacto</label>
                  <input id="k-phone" required type="tel" placeholder="+54 11 ..." className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-amber-500" />
                </div>
                <div className="flex items-end">
                  <button
                    id="btn-submit-kiosco"
                    type="submit"
                    className="w-full py-2 px-4 bg-amber-700 hover:bg-amber-800 text-white rounded-lg font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Solicitud</span>
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      )}

      {/* TAB 2: EXPENDEDORAS INCLUSIVAS */}
      {activeTab === 'expendedoras' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Silvio Catania's letter */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
              <Coffee className="w-3.5 h-3.5" />
              <span>Carta Abierta del Presidente</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Programa de Alquiler de Expendedoras Inclusivas
            </h2>

            <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-4 text-slate-800 leading-relaxed font-sans">
              <p className="font-semibold text-sky-950">¡Hola a todos!</p>
              <p>
                Estoy emocionado de compartir con ustedes un nuevo proyecto que estamos desarrollando. La idea es lanzar un programa de alquiler de máquinas expendedoras que ofrecerán una variedad de golosinas, bebidas y café. Lo más especial de este proyecto es que <strong>estará operado por personas con discapacidad</strong>, brindándoles una oportunidad valiosa para integrarse en el mundo laboral.
              </p>
              <p>
                Este proyecto no solo tiene un impacto positivo en la vida de las personas con discapacidad, sino que también <strong>generará dividendos que ayudarán a financiar nuestras actividades y programas</strong> en la fundación. Creemos firmemente que la inclusión laboral es fundamental para construir una sociedad más justa y equitativa, y este proyecto es un paso importante en esa dirección.
              </p>
              <p>
                Estamos comprometidos a crear un entorno donde cada persona, sin importar sus capacidades, pueda contribuir y sentirse valorada. Agradecemos su apoyo y entusiasmo mientras trabajamos juntos para hacer de este proyecto un éxito. ¡Juntos podemos marcar la diferencia!
              </p>
              <div className="pt-2">
                <p className="font-serif italic text-base text-slate-900">Un abrazo,</p>
                <p className="font-bold text-slate-900">Silvio A. Catania</p>
                <p className="text-xs text-sky-800">Presidente de la Fundación FAPPCODI</p>
              </div>
            </div>

            {/* Form for Companies to host a machine */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-sky-400" />
                <span>¿Tu empresa quiere sumar una Expendedora Inclusiva?</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
                Nos encargamos de la instalación, provisión de equipos de última generación y la capacitación del personal a cargo del abastecimiento. Una acción directa de RSE con impacto humano medible.
              </p>

              {expendedoraFormSubmitted ? (
                <div className="p-4 bg-emerald-950 border border-emerald-500/60 text-emerald-200 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>¡Mensaje corporativo preparado para WhatsApp!</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Preparamos el mensaje para <strong>{expEmpresa}</strong>. Si WhatsApp no se abrió automáticamente, podés iniciarlo con el siguiente enlace:
                  </p>
                  {lastExpWhatsappUrl && (
                    <div className="pt-1">
                      <a
                        href={lastExpWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Abrir Chat de WhatsApp</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const cleanNumber = '5491155624202';
                    const lines = [
                      '🏢 *SOLICITUD EXPENDEDORA INCLUSIVA PARA EMPRESA - FAPPCODI*',
                      '',
                      `🏢 *Empresa:* ${expEmpresa.trim()}`,
                      `📧 *Email Corporativo:* ${expEmail.trim()}`,
                      '',
                      'Hola FAPPCODI, nos comunicamos desde la empresa para solicitar información técnica y coordinar una propuesta para instalar una Expendedora Inclusiva.'
                    ];
                    const msg = lines.join('\n');
                    const url = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(msg)}`;

                    trackCtaClick({
                      cta_name: 'form_submit_expendedoras_empresa',
                      cta_category: 'form_submit',
                      cta_label: `Expendedora Empresa: ${expEmpresa.trim()}`,
                      destination_url: url,
                      cta_location: 'servicios_expendedoras',
                      additional_data: {
                        company_name: expEmpresa.trim(),
                        company_email: expEmail.trim()
                      }
                    });

                    setLastExpWhatsappUrl(url);
                    setExpendedoraFormSubmitted(true);
                    if (typeof window !== 'undefined') {
                      window.open(url, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
                >
                  <div>
                    <label htmlFor="exp-empresa" className="block text-[11px] font-bold text-slate-300 mb-1">Nombre de la Empresa</label>
                    <input 
                      id="exp-empresa" 
                      required 
                      type="text" 
                      value={expEmpresa}
                      onChange={e => setExpEmpresa(e.target.value)}
                      placeholder="Ej. Empresa SA" 
                      className="w-full text-xs px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none" 
                    />
                  </div>
                  <div>
                    <label htmlFor="exp-email" className="block text-[11px] font-bold text-slate-300 mb-1">Email Corporativo</label>
                    <input 
                      id="exp-email" 
                      required 
                      type="email" 
                      value={expEmail}
                      onChange={e => setExpEmail(e.target.value)}
                      placeholder="rrhh@empresa.com" 
                      className="w-full text-xs px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none" 
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      id="btn-submit-expendedora"
                      type="submit"
                      className="w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Solicitar por WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>
        </div>
      )}

      {/* TAB 3: ASESORAMIENTO A FAMILIAS */}
      {activeTab === 'familias' && (
        <div className="space-y-8 animate-fadeIn">
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
              <Heart className="w-3.5 h-3.5" />
              <span>Contención y Orientación Integral</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Asesoramiento a Familias y Personas con Discapacidad
            </h2>

            <p className="text-slate-700 text-base leading-relaxed max-w-3xl">
              Nadie debería transitar solo el laberinto burocrático de las coberturas, las obras sociales o la tramitación del CUD. En FAPPCODI brindamos asesoramiento gratuito y cercano, sostenido por la propia experiencia de vida de sus miembros.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Trámite y Renovación de CUD</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Revisión de certificados médicos, estudios complementarios y orientación para la presentación ante las Juntas Evaluadoras municipales y provinciales.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Cobertura del 100% (Ley 24.901)</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Acompañamiento ante negativas injustificadas de obras sociales o empresas de medicina prepaga en provisión de medicamentos, terapias y prótesis.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Educación y Transición Laboral</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Orientación para la articulación con Centros de Formación Integral (CFI), escuelas especiales y postulación al Inclukiosco y bolsas de empleo.
                </p>
              </div>
            </div>

            {/* Form for family guidance */}
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-700" />
                <span>Solicitá Asesoramiento Personalizado</span>
              </h3>

              {familyFormSubmitted ? (
                <div className="p-4 bg-emerald-200/90 border border-emerald-400 text-emerald-950 rounded-xl text-xs font-semibold">
                  ¡Consulta recibida con éxito! Un orientador social de FAPPCODI te responderá en menos de 48 horas hábiles.
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    trackCtaClick({
                      cta_name: 'form_submit_asesoramiento_familias',
                      cta_category: 'form_submit',
                      cta_label: 'Solicitud Asesoramiento a Familias',
                      cta_location: 'servicios_familias'
                    });
                    setFamilyFormSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label htmlFor="fam-nombre" className="block text-[11px] font-bold text-slate-700 mb-1">Nombre y Apellido</label>
                      <input id="fam-nombre" required type="text" placeholder="Tu nombre" className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-slate-300" />
                    </div>
                    <div>
                      <label htmlFor="fam-tel" className="block text-[11px] font-bold text-slate-700 mb-1">Teléfono / WhatsApp</label>
                      <input id="fam-tel" required type="tel" placeholder="+54 11 ..." className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-slate-300" />
                    </div>
                    <div>
                      <label htmlFor="fam-tema" className="block text-[11px] font-bold text-slate-700 mb-1">Motivo de Consulta</label>
                      <select id="fam-tema" className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-slate-300">
                        <option>Trámite de CUD</option>
                        <option>Problemas con Obra Social / Prepaga</option>
                        <option>Búsqueda de empleo / CFI</option>
                        <option>Equipamiento y accesibilidad</option>
                        <option>Otro tema</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="fam-msg" className="block text-[11px] font-bold text-slate-700 mb-1">Breve descripción de la situación</label>
                    <textarea id="fam-msg" rows={3} required placeholder="Contanos brevemente qué necesitás..." className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-slate-300" />
                  </div>
                  <button
                    id="btn-submit-familias"
                    type="submit"
                    className="py-2.5 px-6 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold text-xs transition cursor-pointer"
                  >
                    Enviar Consulta a Orientación
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
