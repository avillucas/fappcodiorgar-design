import React, { useState } from 'react';
import { 
  BookOpen, 
  FileCheck2, 
  MapPin, 
  Search, 
  CheckCircle2, 
  Smartphone, 
  Bus, 
  HeartPulse, 
  Coins, 
  Car, 
  AlertCircle, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building2,
  Phone,
  Mail
} from 'lucide-react';
import { NATIONAL_LAWS, PROVINCES_CUD } from '../data/fappcodiData';
import { ProvinceCUDInfo } from '../types';
import { trackCtaClick } from '../utils/analytics';

export const NormativaCUDSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'guia-cud' | 'mapa-provincias' | 'digesto'>('guia-cud');
  const [searchLaw, setSearchLaw] = useState('');
  const [selectedProvinceId, setSelectedProvinceId] = useState<string>('buenos-aires');

  const handleTabChange = (tab: 'guia-cud' | 'mapa-provincias' | 'digesto', label: string) => {
    trackCtaClick({
      cta_name: `tab_normativa_${tab}`,
      cta_category: 'navigation',
      cta_label: `Pestaña CUD/Normativa: ${label}`,
      cta_location: 'normativa_tabs'
    });
    setActiveTab(tab);
  };

  const handleSelectProvince = (id: string, name: string) => {
    trackCtaClick({
      cta_name: 'select_province_cud',
      cta_category: 'navigation',
      cta_label: `Selección Provincia: ${name}`,
      cta_location: 'normativa_mapa_provincias'
    });
    setSelectedProvinceId(id);
  };

  const filteredLaws = NATIONAL_LAWS.filter(law => 
    law.code.toLowerCase().includes(searchLaw.toLowerCase()) ||
    law.name.toLowerCase().includes(searchLaw.toLowerCase()) ||
    law.summary.toLowerCase().includes(searchLaw.toLowerCase()) ||
    law.category.toLowerCase().includes(searchLaw.toLowerCase())
  );

  const selectedProvince = PROVINCES_CUD.find(p => p.id === selectedProvinceId) || PROVINCES_CUD[0];

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Marco Legal y Derechos Ciudadanos</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Normativa Nacional y Guía Oficial del CUD
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-3xl">
          Conocé tus derechos, el marco normativo vigente en la República Argentina y el paso a paso para gestionar el Certificado Único de Discapacidad en todo el país.
        </p>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mt-6">
          <button
            id="tab-guia-cud"
            type="button"
            onClick={() => handleTabChange('guia-cud', 'Guía Paso a Paso del CUD')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'guia-cud'
                ? 'bg-sky-700 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Guía Paso a Paso del CUD</span>
          </button>

          <button
            id="tab-mapa-provincias"
            type="button"
            onClick={() => handleTabChange('mapa-provincias', 'Mapa Federal de Juntas Evaluadoras')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'mapa-provincias'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Mapa Federal de Juntas Evaluadoras</span>
          </button>

          <button
            id="tab-digesto-leyes"
            type="button"
            onClick={() => handleTabChange('digesto', 'Digesto Nacional de Leyes')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'digesto'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Digesto Nacional de Leyes</span>
          </button>
        </div>
      </div>

      {/* TAB 1: GUÍA PASO A PASO DEL CUD */}
      {activeTab === 'guia-cud' && (
        <div className="space-y-8 animate-fadeIn">
          {/* What is CUD */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                Documento Público Nacional
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                ¿Qué es el Certificado Único de Discapacidad (CUD)?
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                El CUD es un documento público que certifica la discapacidad de la persona y le permite acceder a los derechos y prestaciones que brinda el Estado nacional, en el marco de las leyes <strong>22.431</strong> y <strong>24.901</strong>. La evaluación es realizada por una <strong>Junta Evaluadora interdisciplinaria</strong> que determina si corresponde la emisión. Su tramitación es <strong>completamente voluntaria y gratuita</strong>.
              </p>
            </div>

            {/* Rights granted */}
            <div className="pt-2 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Derechos establecidos en la legislación vigente:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-sky-50/70 border border-sky-200 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-sky-200 text-sky-800 flex items-center justify-center font-bold">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Salud al 100%</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Cobertura del 100% en prestaciones de rehabilitación, medicamentos, equipamiento ortopédico y tratamientos relacionados con la discapacidad certificada (Ley 24.901).
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-200 text-emerald-800 flex items-center justify-center font-bold">
                    <Bus className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Transporte Gratuito</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Traslados 100% gratuitos en el transporte público terrestre (colectivos de corta, media y larga distancia, trenes y subtes) en todo el territorio argentino.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center font-bold">
                    <Coins className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Asignaciones Familiares</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Ayuda escolar anual por hijo con discapacidad, asignación familiar mensual por hijo con discapacidad y asignación por cónyuge a través de ANSES.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center font-bold">
                    <Car className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Símbolo de Acceso</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Libre tránsito y libre estacionamiento en lugares permitidos en cualquier municipio del país, independientemente del vehículo en el que te traslades.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 md:col-span-2 lg:col-span-2">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Exenciones Impositivas y Peajes</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Exención del pago de peajes en autopistas nacionales y provinciales, exención del impuesto automotor (patente municipal/provincial) y exenciones en tasas locales según normativa municipal.
                  </p>
                </div>
              </div>
            </div>

            {/* Step by step process */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                ¿Cómo hago el trámite? Paso a paso
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-sky-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Reuní la documentación médica</h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      Certificados médicos originales con diagnóstico completo, secuelas, fecha de inicio y firma de tus profesionales tratantes (no mayor a 6 meses de antigüedad), más estudios complementarios e informes de rehabilitación.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-sky-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Pedí el turno en la Junta Evaluadora</h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      Con toda la documentación en mano, acercate o ingresá al turnero web de la Junta Evaluadora correspondiente a tu domicilio según el DNI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-sky-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Asistí el día de la evaluación</h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      El equipo interdisciplinario (médico, trabajador social, psicólogo) dialogará con vos y revisará los antecedentes médicos y tu entorno funcional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-sky-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Retiro del CUD en soporte papel y digital</h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      El Certificado Único de Discapacidad o la denegatoria puede ser retirado por cualquier persona mayor de 18 años con tu documento original en la fecha indicada. Costo: <strong>Gratuito</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CUD Digital alert */}
            <div className="rounded-xl bg-sky-950 text-white p-6 border border-sky-800 space-y-3">
              <div className="flex items-center gap-2 text-sky-300 font-bold text-xs uppercase">
                <Smartphone className="w-4 h-4" />
                <span>Aviso Importante: CUD Digital en 'Mi Argentina'</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Coexistencia del CUD Digital y el Soporte Papel
              </h4>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                Si tenés un CUD otorgado, podés encontrar el formato digital en la aplicación <strong>Mi Argentina</strong>. Dicho formato tiene idéntica validez jurídica que el papel entregado por las Juntas Evaluadoras de todo el país. Se genera automáticamente para mayores de 13 años con perfil validado, y los adultos pueden visualizar el de sus hijos menores de edad vinculándolos a su cuenta.
              </p>
            </div>
          </section>
        </div>
      )}

      {/* TAB 2: MAPA INTERACTIVO POR PROVINCIAS */}
      {activeTab === 'mapa-provincias' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Red Territorial Argentina
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                Juntas Evaluadoras y Direcciones de Discapacidad por Provincia
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Seleccioná tu provincia en el panel interactivo para consultar la dirección, teléfonos y requisitos de atención de la sede evaluadora más cercana.
              </p>
            </div>

            {/* Province selector pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {PROVINCES_CUD.map(prov => (
                <button
                  key={prov.id}
                  type="button"
                  onClick={() => handleSelectProvince(prov.id, prov.name)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    selectedProvinceId === prov.id
                      ? 'bg-emerald-700 text-white shadow'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {prov.name}
                </button>
              ))}
            </div>

            {/* Selected Province Detailed Card */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 border border-slate-800 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                    Región {selectedProvince.region}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-0.5">
                    {selectedProvince.name}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-600/50 text-emerald-300 text-xs font-bold">
                  Sede Oficial Habilitada
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <div>
                    <span className="text-slate-400 text-xs font-semibold block">Organismo Responsable:</span>
                    <p className="font-bold text-slate-100 text-sm mt-0.5">{selectedProvince.organism}</p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-slate-400 text-xs font-semibold block">Dirección de la Sede / Juntas:</span>
                      <p className="text-slate-200 text-xs mt-0.5">{selectedProvince.address}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-slate-400 text-xs font-semibold block">Teléfonos de Consulta:</span>
                      <p className="text-slate-200 text-xs mt-0.5 font-mono">{selectedProvince.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-slate-400 text-xs font-semibold block">Correo Electrónico Oficial:</span>
                      <p className="text-slate-200 text-xs mt-0.5 font-mono">{selectedProvince.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-1">Modalidad de Turnos:</strong>
                {selectedProvince.instructions}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DIGESTO NACIONAL DE LEYES */}
      {activeTab === 'digesto' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Digesto Nacional de Leyes sobre Discapacidad
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Marco jurídico fundamental de la República Argentina para la protección y garantía de derechos.
                </p>
              </div>

              {/* Search filter */}
              <div className="relative min-w-[260px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchLaw}
                  onChange={e => setSearchLaw(e.target.value)}
                  placeholder="Buscar ley o temática..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredLaws.map(law => (
                <div 
                  key={law.code}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-sky-300 transition space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-extrabold text-sm text-sky-900 bg-sky-100 px-2.5 py-0.5 rounded">
                      {law.code}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded">
                      {law.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {law.name}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {law.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
