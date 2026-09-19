import React, { useState } from 'react';
import { 
  Newspaper, 
  Quote, 
  Calendar, 
  ExternalLink, 
  Archive, 
  Search, 
  Sparkles, 
  ArrowRight,
  History,
  FileText,
  Clock
} from 'lucide-react';
import { PRESS_ARTICLES } from '../data/fappcodiData';
import { PressItem } from '../types';

export const PrensaBlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<PressItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const filteredArticles = selectedCategory === 'Todos'
    ? PRESS_ARTICLES
    : PRESS_ARTICLES.filter(a => a.category === selectedCategory);

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full mb-3">
          <Newspaper className="w-3.5 h-3.5" />
          <span>Sala de Prensa y Blog de Actualidad</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Prensa, Entrevistas y Memoria Histórica
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-3xl">
          Recopilación de notas periodísticas, entrevistas a Silvio Catania y la guía para consultar el archivo histórico de FAPPCODI en la web.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {['Todos', 'Entrevista', 'Inclukiosco', 'Inclusión Laboral'].map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white shadow-sm'
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
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
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

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
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

      {/* ARCHIVO HISTÓRICO Y CONSULTA WAYBACK MACHINE */}
      <section 
        aria-labelledby="archive-title"
        className="rounded-2xl bg-slate-100/90 border border-slate-300 p-6 sm:p-10 space-y-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <History className="w-4 h-4 text-sky-700" />
              <span>Memoria Digital Institucional</span>
            </div>
            <h2 id="archive-title" className="text-2xl sm:text-3xl font-bold text-slate-900">
              Cómo Consultar el Archivo Histórico de FAPPCODI (2003 - 2026)
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl">
              Si requerís explorar capturas históricas, actas, estatutos o versiones del sitio web original a lo largo de más de 20 años:
            </p>
          </div>

          <a
            href="https://web.archive.org/web/*/https://fappcodi.org.ar/*"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow transition"
          >
            <Archive className="w-4 h-4 text-amber-400" />
            <span>Explorar en Internet Archive</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2 text-xs">
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-mono">1</span>
              <span>Explorador de URLs (Prefijo *)</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Ingresando a <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] font-mono text-sky-900">web.archive.org/web/*/https://fappcodi.org.ar/*</code> se listan todas las subpáginas, imágenes y notas indexadas.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-mono">2</span>
              <span>Línea de Tiempo (2003-2026)</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              La barra superior de Wayback Machine muestra los círculos de capturas (azul y verde) para revivir la apariencia original de cada año institucional.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-mono">3</span>
              <span>Descarga de Documentos</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Filtrando la lista por extensiones <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] font-mono">.pdf</code> o <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] font-mono">.doc</code> podés recuperar formularios históricos y estatutos institucionales.
            </p>
          </div>
        </div>
      </section>

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
              className="absolute top-4 right-4 text-xs font-bold text-slate-500 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg"
            >
              Cerrar (Esc)
            </button>

            <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded">
              {selectedArticle.category} · {selectedArticle.media}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {selectedArticle.title}
            </h3>

            {selectedArticle.highlightQuote && (
              <div className="p-4 bg-amber-50/80 rounded-xl border-l-4 border-amber-500 font-serif italic text-sm text-amber-950">
                {selectedArticle.highlightQuote}
              </div>
            )}

            <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line pt-2">
              {selectedArticle.fullText}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
