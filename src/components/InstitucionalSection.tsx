import React from 'react';
import { 
  Building2, 
  Award, 
  FileCheck2, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Quote, 
  Sparkles,
  Users2,
  FileBadge,
  ExternalLink
} from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/fappcodiData';

export const InstitucionalSection: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      {/* Section Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full mb-3">
          <Building2 className="w-3.5 h-3.5" />
          <span>Institucional & Hoja de Vida</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Nuestra Historia y Registro Institucional
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-3xl">
          Fundada en el año 2000 por Silvio Adrián Catania. Una trayectoria ininterrumpida de compromiso, transparencia legal y trabajo incansable por la inclusión en toda la Argentina.
        </p>
      </div>

      {/* Founder & Life Story: Silvio Catania and Domingo Grimberg */}
      <section 
        aria-labelledby="founder-title" 
        className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6"
      >
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Silvio Catania Portrait & Profile Card */}
          <div className="w-full md:w-60 flex-shrink-0 flex flex-col items-center text-center p-5 bg-gradient-to-b from-sky-50 to-slate-100 rounded-2xl border border-sky-100 shadow-sm">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden mb-3 border-4 border-white shadow-md bg-sky-950">
              <img 
                src="/images/silvio-catania-portrait.jpg" 
                alt="Silvio Adrián Catania, Fundador y Presidente de FAPPCODI" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/silvio-catania.png';
                }}
              />
            </div>
            <h2 className="font-extrabold text-slate-900 text-lg">Silvio Adrián Catania</h2>
            <p className="text-xs font-semibold text-sky-800">Fundador & Presidente</p>
            <span className="mt-2 text-[11px] bg-sky-200/80 text-sky-950 font-bold px-2.5 py-1 rounded-full">
              FAPPCODI (2000 - Presente)
            </span>

            <a 
              href="https://www.linkedin.com/in/silvio-adrian-catania-riobo-119bb5162/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Perfil de Silvio Adrián Catania en LinkedIn (abre en una nueva pestaña)"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-sky-900 hover:text-white bg-white hover:bg-sky-800 px-3 py-2 rounded-xl border border-sky-200 shadow-sm transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Perfil en LinkedIn</span>
            </a>
          </div>

          {/* Biographical Story & Domingo Grimberg Reference */}
          <div className="space-y-4 flex-1">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Quote className="w-3.5 h-3.5" />
              <span>Sobre el Presidente de FAPPCODI y Domingo Grimberg</span>
            </div>

            <h3 id="founder-title" className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              “Primero conocelo y después hablamos”
            </h3>

            <p className="text-slate-700 text-base leading-relaxed">
              Poco después de quedarse ciego a los 21 años debido a una atrofia del nervio óptico, Silvio Catania conoció a <strong>Domingo Grimberg</strong>, un médico pediatra de cincuenta años de trayectoria y entonces secretario de Salud del municipio de Lanús, quien valoró todo su potencial, le abrió las puertas al mundo del trabajo y lo apoyó a pesar de las resistencias iniciales.
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              Lo que Silvio no supo entonces es que su jefe de área había llegado, incluso, hasta instancias superiores para quejarse por tener que sumarlo a su equipo de monitoreo de Defensa Civil por su ceguera. La designación del nuevo empleado había sido impulsada por Domingo Grimberg, quien tras escuchar las quejas del jefe se limitó a responderle: <em>'Primero conocelo y después hablamos'</em>. Con el tiempo, aquel jefe le confesó avergonzado a Silvio lo equivocado que estaba al descubrir que memorizaba cientos de calles y teléfonos con una precisión asombrosa.
            </p>

            {/* Photo: Silvio Catania y Domingo Grimberg sentados */}
            <div className="my-5 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
              <img 
                src="/images/silvio-catania-domingo-grimberg.jpg" 
                alt="Silvio Catania y Domingo Grimberg sentados en el municipio de Lanús" 
                className="w-full h-auto max-h-[380px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3.5 bg-white border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
                <div>
                  <p className="font-semibold text-slate-800">
                    De izq. a der.: Silvio Catania y el Dr. Domingo Grimberg.
                  </p>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    Foto: Alejandro Guyot para LA NACION (Lanús, Provincia de Buenos Aires).
                  </p>
                </div>
                <a 
                  href="https://www.lanacion.com.ar/comunidad/su-jefe-no-lo-queria-en-su-equipo-por-ser-ciego-hasta-que-pudo-demostrar-que-era-un-gran-empleado-nid07082021/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-lg border border-sky-200 transition self-start sm:self-auto"
                >
                  <span>Nota en LA NACION</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <blockquote className="p-4 bg-sky-50/80 rounded-xl border-l-4 border-sky-600 text-slate-800 font-serif italic text-base">
                “Primero viene Mingo y después Dios”
                <span className="block not-italic text-xs font-sans text-sky-900 font-bold mt-1">
                  — Silvio Catania
                </span>
              </blockquote>

              <blockquote className="p-4 bg-amber-50/80 rounded-xl border-l-4 border-amber-600 text-slate-800 font-serif italic text-base">
                “Me convertí en cosas inesperadas”
                <span className="block not-italic text-xs font-sans text-amber-900 font-bold mt-1">
                  — Silvio Catania
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Personería Jurídica y Validez Federal */}
      <section 
        aria-labelledby="legal-title"
        className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-800 space-y-6"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <span className="text-sky-400 font-bold text-xs uppercase tracking-wider">
              Legalidad y Transparencia
            </span>
            <h2 id="legal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              Personería Jurídica Nº 21602
            </h2>
          </div>
          <div className="px-4 py-2 bg-sky-950 border border-sky-700/60 rounded-xl text-xs font-mono text-sky-200">
            CUIT: {INSTITUTIONAL_INFO.cuit}
          </div>
        </div>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          La <strong>Fundación Argentina para las Personas con Discapacidad</strong> se encuentra formalmente registrada en la <strong>Dirección Provincial de Personas Jurídicas de la Provincia de Buenos Aires</strong>, bajo el número de matrícula <strong>21602</strong>, contando con autorización expresa en sus estatutos constitutivos para <strong>abrir filiales de la institución en todo el territorio argentino</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
            <FileBadge className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-white text-base">Ámbito de Actuación Federal</h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Habilitada por personería jurídica para extender proyectos, programas de inclusión laboral y convenios a lo largo y ancho de las 24 jurisdicciones de la República Argentina.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
            <MapPin className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-white text-base">Sede Central y Operativa</h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Predio de la Municipalidad de Lanús, Av. Hipólito Yrigoyen 3863, Lanús, Provincia de Buenos Aires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registros Oficiales en Organismos Públicos */}
      <section aria-labelledby="registries-title" className="space-y-6">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
            Aval Institucional
          </span>
          <h2 id="registries-title" className="text-2xl sm:text-3xl font-bold text-slate-900">
            Registros en Organismos Nacionales y Provinciales
          </h2>
          <p className="text-slate-600 text-sm">
            FAPPCODI cumple rigurosamente con las inscripciones en los registros de organizaciones de la sociedad civil:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {INSTITUTIONAL_INFO.registries.map((reg, idx) => (
            <div 
              key={reg.name}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-sky-300 transition space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-sky-100 text-sky-900 font-extrabold text-xs">
                  {reg.name}
                </span>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Inscripción Oficial Homologada
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {reg.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Convenios y Alianzas */}
      <section 
        aria-labelledby="alliances-title"
        className="bg-gradient-to-r from-sky-50 via-slate-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sky-900 text-xs font-extrabold uppercase">
            <Users2 className="w-4 h-4 text-sky-700" />
            <span>Articulación Público-Privada</span>
          </div>
          <h2 id="alliances-title" className="text-2xl font-bold text-slate-900">
            Convenios Firmados y Red de Colaboración
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            A lo largo de más de dos décadas de vida institucional, FAPPCODI ha suscripto convenios de cooperación con el <strong>Municipio de Lanús</strong>, la <strong>Dirección General de Cultura y Educación de la Provincia de Buenos Aires (DGCyE)</strong>, el <strong>Consejo Provincial de Educación y Trabajo (COPRET)</strong>, escuelas de educación especial de la región, y empresas privadas comprometidas con la responsabilidad social y la inclusión laboral.
          </p>
        </div>
      </section>
    </div>
  );
};
