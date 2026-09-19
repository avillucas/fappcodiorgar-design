import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Sparkles, 
  Heart, 
  Check, 
  Trash2, 
  Plus, 
  Minus, 
  ExternalLink, 
  Send, 
  ArrowLeft,
  ShieldCheck,
  PackageCheck
} from 'lucide-react';
import { ARTISAN_PRODUCTS, INSTITUTIONAL_INFO } from '../data/fappcodiData';
import { ArtisanProduct } from '../types';

interface CartItem {
  product: ArtisanProduct;
  quantity: number;
}

interface Props {
  cart: CartItem[];
  onAddToCart: (product: ArtisanProduct) => void;
  onUpdateQuantity: (productId: string, qty: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
}

export const TiendaSolidariaSection: React.FC<Props> = ({
  cart,
  onAddToCart,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerAddress, setBuyerAddress] = useState('');

  const filteredProducts = selectedCategory === 'Todos'
    ? ARTISAN_PRODUCTS
    : ARTISAN_PRODUCTS.filter(p => p.category === selectedCategory);

  const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSendWhatsAppOrder = () => {
    const lines = cart.map(i => `• ${i.quantity}x ${i.product.title} ($${(i.product.price * i.quantity).toLocaleString('es-AR')})`);
    const text = `¡Hola FAPPCODI! Quisiera comprar en la Tienda Solidaria Manos que Inspiran:\n\n${lines.join('\n')}\n\n*Total:* $${totalAmount.toLocaleString('es-AR')}\n*Comprador:* ${buyerName}\n*Teléfono:* ${buyerPhone}\n*Dirección/Retiro:* ${buyerAddress}`;
    const cleanPhone = "541155624202";
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setOrderConfirmed(true);
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Subdomain Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-emerald-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/70 border border-emerald-600/50 rounded-full text-xs font-mono text-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>subdominio: manosqueinspiran.fappcodi.org.ar</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Manos que Inspiran · Tienda Solidaria
            </h1>
            <p className="text-emerald-200 text-sm sm:text-base max-w-2xl font-light">
              Productos creados con dedicación en los talleres protegidos y de inclusión laboral de FAPPCODI. Cada compra financia directamente la formación y el sustento de personas con discapacidad.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center min-w-[180px]">
            <span className="text-xs text-emerald-200 uppercase tracking-wider block font-bold">
              Tu Carrito Solidario
            </span>
            <span className="text-2xl font-extrabold text-white font-mono block mt-1">
              ${totalAmount.toLocaleString('es-AR')}
            </span>
            <span className="text-[11px] text-emerald-300">
              {cart.length} {cart.length === 1 ? 'artículo' : 'artículos'} seleccionados
            </span>
          </div>
        </div>
      </div>

      {/* Categories & Filter */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex flex-wrap gap-1.5">
          {['Todos', 'Textil & Bolsas', 'Cerámica & Velas', 'Papelería & Encuadernación', 'Merchandising FAPPCODI'].map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {cart.length > 0 && (
          <button
            id="btn-open-cart-checkout"
            type="button"
            onClick={() => setCheckoutModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Finalizar Pedido (${totalAmount.toLocaleString('es-AR')})</span>
          </button>
        )}
      </div>

      {/* Product Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => {
          const inCart = cart.find(i => i.product.id === product.id);
          return (
            <div 
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 bg-emerald-800/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-xs">
                  {product.category}
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-emerald-800 block">
                    {product.artisanGroup}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1 leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-slate-900 font-mono">
                    ${product.price.toLocaleString('es-AR')}
                  </span>

                  {inCart ? (
                    <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 rounded-lg p-1">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(product.id, inCart.quantity - 1)}
                        className="p-1 hover:bg-emerald-200 rounded text-emerald-800"
                        aria-label="Restar una unidad"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold px-1 text-emerald-950 font-mono">
                        {inCart.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(product.id, inCart.quantity + 1)}
                        className="p-1 hover:bg-emerald-200 rounded text-emerald-800"
                        aria-label="Sumar una unidad"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      id={`btn-add-${product.id}`}
                      type="button"
                      onClick={() => onAddToCart(product)}
                      className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Comprar</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Modal / Order Dialog */}
      {checkoutModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-modal-title"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl border border-slate-200 animate-fadeIn relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 id="cart-modal-title" className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-emerald-700" />
                <span>Finalizar Compra Solidaria</span>
              </h2>
              <button
                type="button"
                onClick={() => setCheckoutModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-sm font-semibold"
              >
                Cerrar
              </button>
            </div>

            {orderConfirmed ? (
              <div className="p-5 bg-emerald-50 border border-emerald-300 text-emerald-950 rounded-xl space-y-3">
                <div className="flex items-center gap-2 font-bold text-base">
                  <PackageCheck className="w-6 h-6 text-emerald-700" />
                  <span>¡Pedido enviado correctamente!</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-700">
                  Se abrió WhatsApp con el detalle de tus artículos y el importe para coordinar la entrega o retiro en nuestra sede de Hipólito Yrigoyen 3863 (Lanús).
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClearCart();
                    setOrderConfirmed(false);
                    setCheckoutModalOpen(false);
                  }}
                  className="w-full py-2 bg-emerald-700 text-white font-bold text-xs rounded-lg mt-2"
                >
                  Aceptar y Vaciar Carrito
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* List of items in cart */}
                <div className="max-h-48 overflow-y-auto space-y-2 pr-1 divide-y divide-slate-100">
                  {cart.map(item => (
                    <div key={item.product.id} className="pt-2 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-slate-900">{item.product.title}</p>
                        <span className="text-slate-500 font-mono">${item.product.price.toLocaleString('es-AR')} x {item.quantity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-slate-900">
                          ${(item.product.price * item.quantity).toLocaleString('es-AR')}
                        </span>
                        <button
                          type="button"
                          onClick={() => onRemoveFromCart(item.product.id)}
                          className="text-rose-600 hover:text-rose-800 p-1"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm font-bold">
                  <span>Total Solidario:</span>
                  <span className="text-emerald-700 font-mono text-base font-extrabold">
                    ${totalAmount.toLocaleString('es-AR')}
                  </span>
                </div>

                {/* Buyer details */}
                <div className="space-y-2 pt-2">
                  <label htmlFor="b-name" className="block text-[11px] font-bold text-slate-700">Tu Nombre</label>
                  <input 
                    id="b-name" 
                    type="text" 
                    value={buyerName} 
                    onChange={e => setBuyerName(e.target.value)} 
                    placeholder="Ej. Martín Gómez" 
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300" 
                  />

                  <label htmlFor="b-phone" className="block text-[11px] font-bold text-slate-700">Teléfono / WhatsApp</label>
                  <input 
                    id="b-phone" 
                    type="tel" 
                    value={buyerPhone} 
                    onChange={e => setBuyerPhone(e.target.value)} 
                    placeholder="+54 11 ..." 
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300" 
                  />

                  <label htmlFor="b-addr" className="block text-[11px] font-bold text-slate-700">Dirección para envío o 'Retiro en Lanús'</label>
                  <input 
                    id="b-addr" 
                    type="text" 
                    value={buyerAddress} 
                    onChange={e => setBuyerAddress(e.target.value)} 
                    placeholder="Retiro en Lanús / Domicilio en CABA..." 
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300" 
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="btn-confirm-order-whatsapp"
                    type="button"
                    disabled={!buyerName || !buyerPhone}
                    onClick={handleSendWhatsAppOrder}
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirmar Pedido por WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Te contactaremos de inmediato desde FAPPCODI para confirmar medio de pago y entrega.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
