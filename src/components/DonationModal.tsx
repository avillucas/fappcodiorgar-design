import React, { useState } from 'react';
import { 
  Heart, 
  X, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  QrCode, 
  CreditCard 
} from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/fappcodiData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copiedAlias, setCopiedAlias] = useState(false);
  const [copiedCbu, setCopiedCbu] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationConfirmed, setDonationConfirmed] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, type: 'alias' | 'cbu') => {
    navigator.clipboard.writeText(text);
    if (type === 'alias') {
      setCopiedAlias(true);
      setTimeout(() => setCopiedAlias(false), 2000);
    } else {
      setCopiedCbu(true);
      setTimeout(() => setCopiedCbu(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donation-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 animate-fadeIn relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-full"
          aria-label="Cerrar modal de donación"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
            <Heart className="w-3.5 h-3.5 fill-emerald-700 text-emerald-700" />
            <span>Colaboración Directa y Transparente</span>
          </div>
          <h2 id="donation-modal-title" className="text-2xl font-extrabold text-slate-900">
            Sumá tu Aporte Solidario a FAPPCODI
          </h2>
          <p className="text-xs text-slate-600">
            Los fondos se destinan íntegramente a insumos ortopédicos, reparaciones de sillas de ruedas y becas de pasantía para jóvenes con discapacidad.
          </p>
        </div>

        {donationConfirmed ? (
          <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-xl text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="font-bold text-slate-900 text-lg">¡Muchas gracias por acompañarnos!</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Podés enviarnos el comprobante de transferencia a <strong>contacto@fappcodi.org.ar</strong> o por WhatsApp al <strong>+54 11 5562-4202</strong> para emitir tu recibo institucional.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-emerald-700 text-white rounded-lg text-xs font-bold"
            >
              Finalizar
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Amount picker */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Seleccioná o ingresá un monto sugerido:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[2000, 5000, 10000, 25000].map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(val);
                      setCustomAmount('');
                    }}
                    className={`py-2 px-1 text-xs font-bold rounded-lg border transition cursor-pointer ${
                      selectedAmount === val && !customAmount
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    ${val.toLocaleString('es-AR')}
                  </button>
                ))}
              </div>
              <div className="mt-2">
                <input
                  type="number"
                  placeholder="O ingresá otro monto en Pesos..."
                  value={customAmount}
                  onChange={e => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
            </div>

            {/* Bank details card */}
            <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Cuenta Bancaria Oficial
                </span>
                <span className="text-[10px] text-slate-400 font-mono">CUIT: {INSTITUTIONAL_INFO.cuit}</span>
              </div>

              {/* Alias */}
              <div className="flex items-center justify-between bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <div>
                  <span className="text-[10px] text-slate-400 block font-mono">ALIAS BANCARIO (Mercado Pago / Bancos):</span>
                  <span className="font-mono font-bold text-amber-300 text-sm">{INSTITUTIONAL_INFO.donationAlias}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(INSTITUTIONAL_INFO.donationAlias, 'alias')}
                  className="px-2.5 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-[11px] font-semibold text-white flex items-center gap-1 cursor-pointer"
                >
                  {copiedAlias ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAlias ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              {/* CBU */}
              <div className="flex items-center justify-between bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <div>
                  <span className="text-[10px] text-slate-400 block font-mono">CBU OFICIAL:</span>
                  <span className="font-mono text-slate-200 text-xs">{INSTITUTIONAL_INFO.donationCBU}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(INSTITUTIONAL_INFO.donationCBU, 'cbu')}
                  className="px-2.5 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-[11px] font-semibold text-white flex items-center gap-1 cursor-pointer"
                >
                  {copiedCbu ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCbu ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setDonationConfirmed(true)}
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Registrar Comprobante / Ya realicé la transferencia</span>
              </button>
              <p className="text-[11px] text-slate-400 text-center">
                Emitimos recibos oficiales de donación deducibles de Ganancias (Personería 21602).
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
