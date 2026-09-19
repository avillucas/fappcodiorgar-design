import React, { useState, useEffect, useCallback } from 'react';
import { SectionId, AccessibilitySettings } from './types';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { InstitucionalSection } from './components/InstitucionalSection';
import { ServiciosSection } from './components/ServiciosSection';
import { InsercionLaboralSection } from './components/InsercionLaboralSection';
import { NormativaCUDSection } from './components/NormativaCUDSection';
import { PrensaSection } from './components/PrensaSection';
import { ContactoSection } from './components/ContactoSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('inicio');
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Full Accessibility settings state
  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>({
    fontSize: 'normal',
    contrast: 'default',
    dyslexiaFont: false,
    textSpacing: false,
    highlightLinks: false,
    readingMask: false,
    speechRate: 1
  });

  // Apply accessibility classes to document body
  useEffect(() => {
    const classes: string[] = [];
    if (accessibilitySettings.fontSize === 'large') classes.push('text-size-large');
    if (accessibilitySettings.fontSize === 'xlarge') classes.push('text-size-xlarge');

    if (accessibilitySettings.contrast === 'high-contrast-dark') classes.push('contrast-dark');
    if (accessibilitySettings.contrast === 'high-contrast-light') classes.push('contrast-light');
    if (accessibilitySettings.contrast === 'monochrome') classes.push('contrast-mono');

    if (accessibilitySettings.dyslexiaFont) classes.push('font-dyslexic');
    if (accessibilitySettings.textSpacing) classes.push('text-spacing-wide');
    if (accessibilitySettings.highlightLinks) classes.push('highlight-links');

    document.body.className = classes.join(' ');
  }, [accessibilitySettings]);

  // Screen reader / Speech synthesis of active page content
  const handleReadSection = useCallback(() => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const mainEl = document.getElementById('main-content');
    const textToRead = mainEl ? mainEl.innerText.slice(0, 1500) : 'Portal institucional FAPPCODI.';

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'es-AR';
    utterance.rate = accessibilitySettings.speechRate || 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [accessibilitySettings.speechRate]);

  const handleStopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  // Stop speech synthesis if user navigates
  const handleNavigate = (section: SectionId) => {
    handleStopSpeaking();
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans transition-colors duration-200">
      {/* Skip to main content for screen readers and keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-900 focus:text-white focus:rounded-lg focus:shadow-lg focus:font-bold focus:outline-none"
      >
        Saltar al contenido principal (Skip to content)
      </a>

      {/* Persistent Accessibility Control Bar */}
      <AccessibilityToolbar
        settings={accessibilitySettings}
        onUpdateSettings={setAccessibilitySettings}
        onReadSection={handleReadSection}
        isSpeaking={isSpeaking}
        onStopSpeaking={handleStopSpeaking}
      />

      {/* Main Header & Navigation */}
      <Header
        activeSection={activeSection}
        onSelectSection={handleNavigate}
      />

      {/* Main Content Area */}
      <main id="main-content" tabIndex={-1} className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {activeSection === 'inicio' && (
          <HomeSection onNavigate={handleNavigate} />
        )}

        {activeSection === 'institucional' && (
          <InstitucionalSection />
        )}

        {activeSection === 'programas' && (
          <ServiciosSection />
        )}

        {activeSection === 'laboral' && (
          <InsercionLaboralSection />
        )}

        {activeSection === 'normativas' && (
          <NormativaCUDSection />
        )}

        {activeSection === 'prensa' && (
          <PrensaSection />
        )}

        {activeSection === 'contacto' && (
          <ContactoSection />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
