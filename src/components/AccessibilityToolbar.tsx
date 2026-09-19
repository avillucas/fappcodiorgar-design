import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  Type, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  SunMoon, 
  Sparkles, 
  Maximize2,
  Minimize2,
  ChevronDown,
  ChevronUp,
  Sliders,
  FileText
} from 'lucide-react';
import { AccessibilitySettings } from '../types';

interface Props {
  settings: AccessibilitySettings;
  onUpdateSettings: (updater: (prev: AccessibilitySettings) => AccessibilitySettings) => void;
  onReadSection: () => void;
  isSpeaking: boolean;
  onStopSpeaking: () => void;
}

export const AccessibilityToolbar: React.FC<Props> = ({
  settings,
  onUpdateSettings,
  onReadSection,
  isSpeaking,
  onStopSpeaking
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mouseY, setMouseY] = useState(300);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (settings.readingMask) {
        setMouseY(e.clientY);
      }
    };
    if (settings.readingMask) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [settings.readingMask]);

  const toggleFontSize = (direction: 'up' | 'down') => {
    onUpdateSettings(prev => {
      if (direction === 'up') {
        if (prev.fontSize === 'normal') return { ...prev, fontSize: 'large' };
        if (prev.fontSize === 'large') return { ...prev, fontSize: 'xlarge' };
        return prev;
      } else {
        if (prev.fontSize === 'xlarge') return { ...prev, fontSize: 'large' };
        if (prev.fontSize === 'large') return { ...prev, fontSize: 'normal' };
        return prev;
      }
    });
  };

  const cycleContrast = () => {
    onUpdateSettings(prev => {
      const modes: AccessibilitySettings['contrast'][] = [
        'default',
        'high-contrast-dark',
        'high-contrast-light',
        'monochrome'
      ];
      const nextIndex = (modes.indexOf(prev.contrast) + 1) % modes.length;
      return { ...prev, contrast: modes[nextIndex] };
    });
  };

  const resetAll = () => {
    onUpdateSettings(() => ({
      fontSize: 'normal',
      contrast: 'default',
      dyslexiaFont: false,
      textSpacing: false,
      highlightLinks: false,
      readingMask: false,
      speechRate: 1
    }));
    onStopSpeaking();
  };

  const getContrastLabel = () => {
    switch (settings.contrast) {
      case 'high-contrast-dark': return 'Contraste Alto (Oscuro)';
      case 'high-contrast-light': return 'Contraste Alto (Claro)';
      case 'monochrome': return 'Monocromático';
      default: return 'Estándar';
    }
  };

  return (
    <>
      {/* Reading Mask Overlay if active */}
      {settings.readingMask && (
        <div 
          className="reading-mask-overlay"
          style={{ top: `${mouseY}px` }}
          aria-hidden="true"
        />
      )}

      {/* Top Accessibility Bar */}
      <aside 
        aria-label="Barra de herramientas de accesibilidad"
        className="sticky top-0 z-50 bg-slate-900 text-white text-xs border-b border-slate-800 shadow-md transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          {/* Quick status & main audio reader */}
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-semibold text-sky-400">
              <Eye className="w-4 h-4" aria-hidden="true" />
              <span>Accesibilidad Universal (Ley 26.653 / WCAG AAA)</span>
            </span>

            {/* Listen button */}
            <div className="flex items-center gap-1">
              {!isSpeaking ? (
                <button
                  id="btn-listen-content"
                  type="button"
                  onClick={onReadSection}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded font-medium transition shadow-sm cursor-pointer"
                  title="Escuchar en voz alta el contenido visible"
                >
                  <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Escuchar página</span>
                </button>
              ) : (
                <button
                  id="btn-stop-listen"
                  type="button"
                  onClick={onStopSpeaking}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded font-medium transition shadow-sm animate-pulse cursor-pointer"
                  title="Detener lectura de voz"
                >
                  <VolumeX className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Detener voz</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Font size adjustments */}
            <div className="flex items-center bg-slate-800 rounded px-1 py-0.5 border border-slate-700">
              <span className="text-slate-400 mr-1.5 px-1 font-mono">Texto:</span>
              <button
                id="btn-font-decrease"
                type="button"
                onClick={() => toggleFontSize('down')}
                disabled={settings.fontSize === 'normal'}
                className="px-2 py-0.5 hover:bg-slate-700 text-white font-bold rounded disabled:opacity-30 cursor-pointer"
                aria-label="Disminuir tamaño de texto"
                title="Disminuir tamaño de texto"
              >
                A-
              </button>
              <button
                id="btn-font-increase"
                type="button"
                onClick={() => toggleFontSize('up')}
                disabled={settings.fontSize === 'xlarge'}
                className="px-2 py-0.5 hover:bg-slate-700 text-white font-bold rounded disabled:opacity-30 cursor-pointer"
                aria-label="Aumentar tamaño de texto"
                title="Aumentar tamaño de texto"
              >
                A+
              </button>
            </div>

            {/* Contrast quick button */}
            <button
              id="btn-contrast-toggle"
              type="button"
              onClick={cycleContrast}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded text-slate-200 transition cursor-pointer"
              title="Cambiar modo de contraste"
            >
              <SunMoon className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              <span className="hidden sm:inline">Contraste:</span>
              <span className="font-semibold text-white">{getContrastLabel()}</span>
            </button>

            {/* Expand panel button */}
            <button
              id="btn-expand-accessibility"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded text-slate-200 transition cursor-pointer"
              aria-expanded={isOpen}
              aria-controls="accessibility-panel"
            >
              <Sliders className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              <span className="hidden md:inline">Opciones avanzadas</span>
              {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Dropdown panel for additional accessibility tools */}
        {isOpen && (
          <div 
            id="accessibility-panel"
            className="border-t border-slate-800 bg-slate-950 px-4 py-3 animate-fadeIn"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {/* Dyslexia font toggle */}
              <button
                id="btn-dyslexia-font"
                type="button"
                onClick={() => onUpdateSettings(prev => ({ ...prev, dyslexiaFont: !prev.dyslexiaFont }))}
                className={`flex items-center justify-between p-2 rounded border text-left transition cursor-pointer ${
                  settings.dyslexiaFont 
                    ? 'bg-sky-950/80 border-sky-400 text-sky-200 font-semibold' 
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Type className="w-4 h-4 text-sky-400" aria-hidden="true" />
                  <span>Fuente para dislexia</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-800">
                  {settings.dyslexiaFont ? 'Activado' : 'Desactivado'}
                </span>
              </button>

              {/* Text spacing toggle */}
              <button
                id="btn-text-spacing"
                type="button"
                onClick={() => onUpdateSettings(prev => ({ ...prev, textSpacing: !prev.textSpacing }))}
                className={`flex items-center justify-between p-2 rounded border text-left transition cursor-pointer ${
                  settings.textSpacing 
                    ? 'bg-sky-950/80 border-sky-400 text-sky-200 font-semibold' 
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Espaciado amplio</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-800">
                  {settings.textSpacing ? 'Activado' : 'Desactivado'}
                </span>
              </button>

              {/* Highlight links toggle */}
              <button
                id="btn-highlight-links"
                type="button"
                onClick={() => onUpdateSettings(prev => ({ ...prev, highlightLinks: !prev.highlightLinks }))}
                className={`flex items-center justify-between p-2 rounded border text-left transition cursor-pointer ${
                  settings.highlightLinks 
                    ? 'bg-sky-950/80 border-sky-400 text-sky-200 font-semibold' 
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" aria-hidden="true" />
                  <span>Resaltar enlaces</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-800">
                  {settings.highlightLinks ? 'Activado' : 'Desactivado'}
                </span>
              </button>

              {/* Reading mask toggle */}
              <button
                id="btn-reading-mask"
                type="button"
                onClick={() => onUpdateSettings(prev => ({ ...prev, readingMask: !prev.readingMask }))}
                className={`flex items-center justify-between p-2 rounded border text-left transition cursor-pointer ${
                  settings.readingMask 
                    ? 'bg-sky-950/80 border-sky-400 text-sky-200 font-semibold' 
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-purple-400" aria-hidden="true" />
                  <span>Guía de lectura focal</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-800">
                  {settings.readingMask ? 'Activado' : 'Desactivado'}
                </span>
              </button>
            </div>

            <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Ajustes conformes a los estándares W3C WCAG 2.1 AAA y la Ley Nacional 26.653 de Accesibilidad Web.
              </span>
              <button
                id="btn-reset-accessibility"
                type="button"
                onClick={resetAll}
                className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-white underline cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Restablecer preferencias</span>
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
