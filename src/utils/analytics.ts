/**
 * Utilidad de analítica y Google Tag Manager (GTM) para FAPPCODI
 * Permite inicializar GTM mediante VITE_GTM_ID y registrar mediciones
 * en todos los llamados a la acción (Call To Action - CTA).
 */

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

export interface CtaTrackingParams {
  cta_name: string;
  cta_category: 
    | 'contact' 
    | 'contact_direct' 
    | 'contact_interaction' 
    | 'form_submit'
    | 'navigation' 
    | 'social' 
    | 'program' 
    | 'job_application' 
    | 'download' 
    | 'accessibility';
  cta_label?: string;
  cta_location?: string;
  destination_url?: string;
  additional_data?: Record<string, unknown>;
}

/**
 * Inicializa Google Tag Manager si existe el ID en VITE_GTM_ID
 * y garantiza la disponibilidad de dataLayer en cualquier entorno.
 */
export const initGTM = (): void => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  const gtmId = import.meta.env.VITE_GTM_ID ? String(import.meta.env.VITE_GTM_ID).trim() : '';

  if (gtmId && !document.getElementById('gtm-script')) {
    // 1. Inyectar script de GTM en <head>
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
    
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    // 2. Inyectar noscript iframe en <body>
    if (!document.getElementById('gtm-noscript')) {
      const noscript = document.createElement('noscript');
      noscript.id = 'gtm-noscript';
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}`;
      iframe.height = '0';
      iframe.width = '0';
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';
      noscript.appendChild(iframe);
      document.body.appendChild(noscript);
    }

    console.info(`[GTM] Contenedor inicializado exitosamente con ID: ${gtmId}`);
  } else if (!gtmId) {
    // Modo local / fallback: el dataLayer está listo para recibir eventos
    console.debug('[GTM] VITE_GTM_ID no está configurado en .env. dataLayer activo en modo registro.');
  }
};

/**
 * Envía un evento genérico al dataLayer de Google Tag Manager
 */
export const trackEvent = (eventName: string, params: Record<string, unknown> = {}): void => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];

  const payload = {
    event: eventName,
    ...params,
    timestamp: new Date().toISOString()
  };

  window.dataLayer.push(payload);

  if (import.meta.env.DEV) {
    console.log(`%c[GTM Event: ${eventName}]`, 'color: #0284c7; font-weight: bold;', payload);
  }
};

/**
 * Registra una medición de interacción en un Call To Action (CTA)
 * y emite tanto el evento 'cta_click' como eventos semánticos estándar de GA4
 * (submit_application, generate_lead, contact, select_content, social_interaction)
 */
export const trackCtaClick = (params: CtaTrackingParams): void => {
  const { cta_name, cta_category, cta_label, cta_location, destination_url, additional_data } = params;

  const basePayload = {
    cta_name,
    cta_category,
    cta_label: cta_label || cta_name,
    cta_location: cta_location || (typeof window !== 'undefined' ? window.location.pathname : 'unknown'),
    destination_url: destination_url || undefined,
    ...additional_data
  };

  // 1. Evento principal en dataLayer
  trackEvent('cta_click', basePayload);

  // 2. Mapeo automático a eventos recomendados de GA4
  if (cta_category === 'job_application' || cta_name.includes('postulacion')) {
    trackEvent('submit_application', {
      event_category: 'engagement',
      application_type: 'insercion_laboral',
      ...basePayload
    });
  } else if (
    cta_name.includes('empresa') || 
    cta_name.includes('expendedora') || 
    cta_category === 'form_submit'
  ) {
    trackEvent('generate_lead', {
      event_category: 'lead',
      lead_type: cta_name,
      ...basePayload
    });
  } else if (cta_category === 'contact' || cta_category === 'contact_direct') {
    trackEvent('contact', {
      method: destination_url?.includes('whatsapp') ? 'whatsapp' : (destination_url?.includes('mailto') ? 'email' : 'direct'),
      ...basePayload
    });
  } else if (cta_category === 'social') {
    trackEvent('social_interaction', {
      network: cta_label?.toLowerCase() || 'unknown',
      ...basePayload
    });
  } else if (cta_category === 'navigation' || cta_category === 'program') {
    trackEvent('select_content', {
      content_type: cta_category,
      item_id: cta_name,
      ...basePayload
    });
  }
};
