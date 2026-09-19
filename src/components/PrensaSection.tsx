import React, { useState, useEffect } from 'react';
import { 
  Newspaper, 
  Quote, 
  Clock, 
  ArrowRight,
  RefreshCw,
  X,
  ExternalLink
} from 'lucide-react';
import fallbackArticles from '../data/prensa.json';
import { PressItem } from '../types';

export const PrensaSection: React.FC = () => {
  const [articles, setArticles] = useState<PressItem[]>(fallbackArticles as PressItem[]);
  const [selectedArticle, setSelectedArticle] = useState<PressItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Function to load/reload press articles from data/prensa.json dynamically
  const loadPressArticles = async () => {
    setIsLoading(true);
    try {
      // Use cache-busting timestamp because file is rewritten periodically
      const res = await fetch(`/data/prensa.json?_t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setArticles(data);
          setLastUpdated(new Date());
        }
      }
    } catch (err) {
      console.warn('Usando notas de prensa locales:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPressArticles();
  }, []);

  const categories = ['Todos', ...Array.from(new Set(articles.map(a => a.category)))];

  const filteredArticles = selectedCategory === 'Todos'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Sala de Prensa y Medios</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Prensa y Coberturas Periodísticas
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-3xl">
              Artículos en medios de comunicación, entrevistas a Silvio Catania y notas sobre los programas de FAPPCODI.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={loadPressArticles}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition cursor-pointer disabled:opacity-50"
              title="Recargar las notas de prensa más recientes de data/prensa.json"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>{isLoading ? 'Actualizando...' : 'Actualizar Prensa'}</span>
            </button>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Quote Card */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white p-6 sm:p-8 border border-slate-800 space-y-3">
        <Quote className="w-8 h-8 text-amber-400 opacity-80" />
        <blockquote className="text-lg sm:text-xl font-serif italic text-amber-100 leading-relaxed">
          “La inclusión laboral no se trata simplemente de 'ayudar' a quienes son víctimas de la exclusión, sino también de pensar en grande con una perspectiva de innovación y productividad en la que se valoren los aportes de todos los individuos y grupos.”
        </blockquote>
        <p className="text-xs sm:text-sm text-slate-300 font-semibold pt-1">
          — Silvio Catania, Presidente y Fundador de FAPPCODI
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map(art => (
          <article 
            key={art.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              {art.imageUrl && (
                <div className="w-full h-44 overflow-hidden bg-slate-100 border-b border-slate-100 relative">
                  <img 
                    src={art.imageUrl} 
                    alt={art.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold bg-slate-900/80 text-white px-2 py-0.5 rounded backdrop-blur-xs">
                    {art.media}
                  </span>
                </div>
              )}

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
                    {art.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{art.date}</span>
                  </span>
                </div>

                <h2 className="text-base font-bold text-slate-900 leading-snug">
                  {art.title}
                </h2>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {art.excerpt}
                </p>

                {art.highlightQuote && (
                  <div className="p-3 bg-slate-50 rounded-lg border-l-2 border-amber-500 text-[11px] italic text-slate-700 font-serif">
                    {art.highlightQuote}
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 pt-0 mt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500">
                {art.media}
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(art)}
                className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Leer nota completa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto animate-fadeIn relative">
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-xs font-bold text-slate-500 hover:text-slate-900 bg-slate-100 p-2 rounded-lg cursor-pointer"
              aria-label="Cerrar nota"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded">
                {selectedArticle.category} · {selectedArticle.media}
              </span>
              {selectedArticle.date && (
                <span className="text-xs text-slate-500 font-mono">
                  {selectedArticle.date}
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {selectedArticle.title}
            </h3>

            {selectedArticle.imageUrl && (
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img 
                  src={selectedArticle.imageUrl} 
                  alt={selectedArticle.title}
                  className="w-full max-h-72 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {selectedArticle.highlightQuote && (
              <div className="p-4 bg-amber-50/80 rounded-xl border-l-4 border-amber-500 font-serif italic text-sm text-amber-950">
                {selectedArticle.highlightQuote}
              </div>
            )}

            <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line pt-2">
              {selectedArticle.fullText}
            </div>

            {selectedArticle.url && (
              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <a 
                  href={selectedArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold rounded-xl shadow-sm transition"
                >
                  <span>{selectedArticle.linkText || 'Ver nota en sitio original'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
