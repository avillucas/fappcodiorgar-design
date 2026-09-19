import React, { useState } from 'react';
import { 
  Heart, 
  CheckCircle2, 
  HelpCircle, 
  DollarSign, 
  TrendingUp, 
  Sparkles, 
  Package, 
  ArrowRight,
  Send,
  X,
  Copy,
  Check,
  ShieldCheck
} from 'lucide-react';
import { SUPPORT_ITEMS, INSTITUTIONAL_INFO } from '../data/fappcodiData';
import { SupportItem } from '../types';

interface Props {
  onOpenDonateModal: () => void;
}

export const CatalogoSolidarioSection: React.FC<Props> = ({ onOpenDonateModal }) => {
  // Monthly goal state
  const MONTHLY_GOAL = 1500000; // $1.500.000 ARS
  const [currentRaised, setCurrentRaised] = useState(1045000); // starts at ~70%
  const [copiedAlias, setCopiedAlias] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Request item modal state
  const [selectedItemForRequest, setSelectedItemForRequest] = useState<SupportItem | null>(null);
  const [requestSuccess, setRequestSuccess] = useState(false);

  // Donate item in disuse form
  const [donateEquipmentSuccess, setDonateEquipmentSuccess] = useState(false);

  const percentage = Math.min(100, Math.round((currentRaised / MONTHLY_GOAL) * 100));

  const handleSimulateDonation = (amount: number) => {
    setCurrentRaised(prev => prev + amount);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAlias(true);
    setTimeout(() => setCopiedAlias(false), 2500);
  };

  const filteredItems = selectedCategory === 'Todos'
    ? SUPPORT_ITEMS
    : SUPPORT_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-12 pb-16">
      {/* Section Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full mb-3">
          <Heart className="w-3.5 h-3.5" />
          <span>Banco Ortopédico & Financiamiento Colectivo</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Catálogo Solidario y Alcancía Mensual
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-3xl">
          Garantizamos el acceso gratuito y en comodato solidario a elementos de apoyo para la autonomía cotidiana, sostenidos por el aporte transparente de la comunidad.
        </p>
      </div>

      {/* Interactive Alcancía Solidaria with Live Progress Bar */}
      <section 
        aria-labelledby="alcancia-title"
        className="rounded-2xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800 space-y-6"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Alcancía Solidaria Transparente</span>
            </div>
            <h2 id="alcancia-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              Meta Mensual de Sostenimiento FAPPCODI
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              Tu aporte sostiene la compra de repuestos para sillas, bastones blancos para personas ciegas y los viáticos para los jóvenes pasantes del Inclukiosco.
            </p>
          </div>

          <div className="text-right">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
              {percentage}%
            </div>
            <p className="text-xs text-slate-400">alcanzado este mes</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="w-full bg-slate-800 h-6 rounded-full overflow-hidden p-1 border border-slate-700">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500 relative flex items-center justify-end pr-2"
              style={{ width: `${percentage}%` }}
              role="progressbar"
              aria-valuenow={percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <span className="text-[10px] font-extrabold text-slate-950 font-mono">
                {percentage}%
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-slate-300 font-mono">
            <span>Recaudado: <strong className="text-white">${currentRaised.toLocaleString('es-AR')}</strong></span>
            <span>Meta: <strong className="text-white">${MONTHLY_GOAL.toLocaleString('es-AR')}</strong></span>
          </div>
        </div>

        {/* Interactive Quick Add / Simulator */}
        <div className="pt-4 border-t border-slate-800 space-y-3">
          <p className="text-xs font-semibold text-sky-200">
            Simulá o sumá un aporte solidario directo a la alcancía:
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[2000, 5000, 10000, 25000].map(val => (
              <button
                key={val}
                type="button"
                onClick={() => handleSimulateDonation(val)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 hover:border-emerald-400 transition cursor-pointer flex items-center gap-1.5"
              >
                <span>+${val.toLocaleString('es-AR')}</span>
              </button>
            ))}

            <button
              type="button"
              onClick={onOpenDonateModal}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold transition cursor-pointer flex items-center gap-1.5 ml-auto shadow-md"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donar por Transferencia / QR</span>
            </button>
          </div>
        </div>

        {/* Banking Data Box */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <span className="text-slate-400 font-mono">Alias Oficial FAPPCODI:</span>
            <div className="font-mono font-bold text-amber-300 text-sm tracking-wider">
              {INSTITUTIONAL_INFO.donationAlias}
            </div>
          </div>

          <button
            type="button"
            onClick={() => copyToClipboard(INSTITUTIONAL_INFO.donationAlias)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition cursor-pointer"
          >
            {copiedAlias ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedAlias ? '¡Alias Copiado!' : 'Copiar Alias'}</span>
          </button>
        </div>
      </section>

      {/* Catalog of Support Elements (Banco Ortopédico) */}
      <section aria-labelledby="catalog-title" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 id="catalog-title" className="text-2xl sm:text-3xl font-bold text-slate-900">
              Elementos de Apoyo Disponibles para Préstamo
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Catálogo de ayudas técnicas en comodato solidario gratuito para personas sin cobertura inmediata.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-1.5">
            {['Todos', 'Sillas de Ruedas', 'Bastones y Guías', 'Muletas y Andadores', 'Accesorios Posturales'].map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.status}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <span>Estado: <strong className="text-slate-800">{item.condition}</strong></span>
                  <span>Disponibles: <strong className="text-sky-700 font-bold">{item.availableCount} unidades</strong></span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedItemForRequest(item);
                    setRequestSuccess(false);
                  }}
                  className="w-full py-2.5 px-4 bg-sky-700 hover:bg-sky-800 text-white rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Package className="w-4 h-4" />
                  <span>Solicitar Préstamo Solidario</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Donate Equipment in disuse box */}
      <section className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
            Economía Circular Inclusiva
          </span>
          <h3 className="text-2xl font-bold text-slate-900">
            ¿Tenés una silla de ruedas, bastón o andador en desuso?
          </h3>
          <p className="text-slate-700 text-sm">
            En nuestro taller reacondicionamos y ponemos a nuevo elementos ortopédicos para entregarlos a familias que los necesitan con urgencia.
          </p>
        </div>

        {donateEquipmentSuccess ? (
          <div className="p-4 bg-emerald-200 text-emerald-950 rounded-xl text-xs font-semibold">
            ¡Muchas gracias por tu generosidad! Coordinaremos con vos el retiro o recepción del equipamiento.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDonateEquipmentSuccess(true);
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
          >
            <div>
              <label htmlFor="eq-desc" className="block text-[11px] font-bold text-slate-700 mb-1">¿Qué elemento querés donar?</label>
              <input id="eq-desc" required type="text" placeholder="Ej. Silla de ruedas plegable" className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-slate-300" />
            </div>
            <div>
              <label htmlFor="eq-contact" className="block text-[11px] font-bold text-slate-700 mb-1">Tu Teléfono / Localidad</label>
              <input id="eq-contact" required type="text" placeholder="Ej. 11-4455-6677 / Lanús" className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-slate-300" />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold text-xs transition cursor-pointer"
              >
                Ofrecer Donación de Equipo
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Modal to Request Item */}
      {selectedItemForRequest && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="request-modal-title"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200 animate-fadeIn relative">
            <button
              type="button"
              onClick={() => setSelectedItemForRequest(null)}
              className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-700 rounded-full"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[11px] font-bold uppercase text-sky-800 bg-sky-50 px-2 py-0.5 rounded">
                Solicitud en Comodato
              </span>
              <h3 id="request-modal-title" className="text-xl font-bold text-slate-900 mt-1">
                {selectedItemForRequest.name}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Categoría: {selectedItemForRequest.category} · Disponibles: {selectedItemForRequest.availableCount}
              </p>
            </div>

            {requestSuccess ? (
              <div className="p-4 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-xl text-xs font-semibold space-y-2">
                <p>¡Solicitud enviada exitosamente!</p>
                <p className="font-normal text-slate-700">
                  Un coordinador del Banco Ortopédico de FAPPCODI se comunicará para pedirte la prescripción médica y coordinar la entrega o retiro en Lanús.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedItemForRequest(null)}
                  className="mt-2 px-4 py-1.5 bg-emerald-700 text-white rounded-lg font-bold text-xs"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setRequestSuccess(true);
                }}
                className="space-y-3"
              >
                <div>
                  <label htmlFor="req-name" className="block text-xs font-bold text-slate-700 mb-1">Nombre y Apellido del Solicitante</label>
                  <input id="req-name" required type="text" placeholder="Nombre completo" className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="req-dni" className="block text-xs font-bold text-slate-700 mb-1">DNI del Beneficiario</label>
                    <input id="req-dni" required type="text" placeholder="Sin puntos" className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300" />
                  </div>
                  <div>
                    <label htmlFor="req-tel" className="block text-xs font-bold text-slate-700 mb-1">Teléfono / WhatsApp</label>
                    <input id="req-tel" required type="tel" placeholder="+54 11 ..." className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300" />
                  </div>
                </div>
                <div>
                  <label htmlFor="req-doc" className="block text-xs font-bold text-slate-700 mb-1">¿Tiene CUD o prescripción médica?</label>
                  <select id="req-doc" className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300">
                    <option>Sí, cuenta con CUD vigente</option>
                    <option>Sí, tiene orden médica de traumatólogo/fisiatra</option>
                    <option>En trámite / Necesita asesoramiento</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedItemForRequest(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold rounded-lg shadow"
                  >
                    Confirmar Solicitud
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
