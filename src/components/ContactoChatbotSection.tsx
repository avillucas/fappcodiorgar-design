import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Volume2, 
  VolumeX, 
  Bot, 
  User, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  Clock
} from 'lucide-react';
import { INSTITUTIONAL_INFO, VIRTUAL_ASSISTANT_KNOWLEDGE } from '../data/fappcodiData';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const ContactoChatbotSection: React.FC = () => {
  // Contact form states
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Chatbot states
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "¡Hola! Soy el Asistente Accesible de FAPPCODI. Estoy aquí para responder tus dudas sobre el CUD, el Inclukiosco, cómo donar, el banco ortopédico o la bolsa de empleo. Podés escribir tu consulta o elegir una pregunta sugerida.",
      timestamp: 'Ahora'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isBotSpeaking, setIsBotSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-AR';
    utterance.rate = 1.0;
    utterance.onstart = () => setIsBotSpeaking(true);
    utterance.onend = () => setIsBotSpeaking(false);
    utterance.onerror = () => setIsBotSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsBotSpeaking(false);
    }
  };

  const findAnswer = (query: string): string => {
    const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (const item of VIRTUAL_ASSISTANT_KNOWLEDGE) {
      const match = item.keywords.some(k => q.includes(k));
      if (match) {
        return item.answer;
      }
    }
    return "Gracias por tu consulta. Podés comunicarte directamente con Silvio Catania o el equipo de FAPPCODI al teléfono +54 11 5562-4202 o escribir a contacto@fappcodi.org.ar para brindarte atención personalizada.";
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: query,
      timestamp: 'Ahora'
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');

    // Simulate smart bot response
    setTimeout(() => {
      const answer = findAnswer(query);
      const botMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'bot',
        text: answer,
        timestamp: 'Ahora'
      };
      setMessages(prev => [...prev, botMsg]);
    }, 400);
  };

  const quickQuestions = [
    "¿Cómo tramito el CUD?",
    "¿Qué es el Inclukiosco de Lanús?",
    "¿Cómo donar a la fundación?",
    "¿Tienen sillas de ruedas para préstamo?",
    "¿Cómo funciona el cupo laboral del 4%?"
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Atención Directa y Canales Oficiales</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Contacto y Asistente Virtual Accesible
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-3xl">
          Escribinos, llamanos o consultá a nuestro asistente virtual con soporte de síntesis de voz en español para orientación inmediata.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Contact & Form (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Institutional Info Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">
              Canales Directos de Comunicación
            </h2>

            <div className="space-y-3.5 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Línea Directa / WhatsApp:</span>
                  <a href={`tel:${INSTITUTIONAL_INFO.phone.replace(/\s+/g, '')}`} className="font-semibold text-sky-700 hover:underline">
                    {INSTITUTIONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Sede Central y Operativa:</span>
                  <span>{INSTITUTIONAL_INFO.address}</span>
                  <span className="text-[11px] text-slate-500 block">Predio Municipalidad de Lanús</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Correo Electrónico:</span>
                  <a href={`mailto:${INSTITUTIONAL_INFO.email}`} className="font-semibold text-sky-700 hover:underline">
                    {INSTITUTIONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Horario de Atención:</span>
                  <span>Lunes a Viernes de 8:00 a 15:00 hs.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Envianos un Mensaje Institucional
            </h3>

            {contactSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-950 rounded-xl text-xs font-semibold space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <span>¡Mensaje enviado con éxito!</span>
                </div>
                <p className="font-normal text-slate-700">
                  Gracias por comunicarte con FAPPCODI. Te responderemos a la brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => setContactSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-800 underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-3"
              >
                <div>
                  <label htmlFor="c-name" className="block text-xs font-bold text-slate-700 mb-1">Nombre y Apellido</label>
                  <input 
                    id="c-name" 
                    required 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Tu nombre completo" 
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="c-mail" className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                    <input 
                      id="c-mail" 
                      required 
                      type="email" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      placeholder="correo@ejemplo.com" 
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300" 
                    />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-xs font-bold text-slate-700 mb-1">Teléfono</label>
                    <input 
                      id="c-phone" 
                      type="tel" 
                      value={phone} 
                      onChange={e => setPhone(e.target.value)} 
                      placeholder="+54 11 ..." 
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-msg" className="block text-xs font-bold text-slate-700 mb-1">Mensaje</label>
                  <textarea 
                    id="c-msg" 
                    rows={3} 
                    required 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    placeholder="Escribí aquí tu consulta..." 
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300" 
                  />
                </div>

                <button
                  id="btn-submit-contact"
                  type="submit"
                  className="w-full py-2.5 bg-sky-700 hover:bg-sky-800 text-white rounded-lg font-bold text-xs shadow transition cursor-pointer"
                >
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Accessible Virtual Assistant / Chatbot (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[640px]">
            {/* Chatbot Header */}
            <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white p-4 flex items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-700 flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base leading-none">
                    Asistente Virtual Accesible
                  </h3>
                  <p className="text-[11px] text-sky-300 mt-1">
                    Orientación en CUD, Inclukiosco y Servicios FAPPCODI
                  </p>
                </div>
              </div>

              {isBotSpeaking ? (
                <button
                  type="button"
                  onClick={stopSpeaking}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold animate-pulse cursor-pointer"
                >
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Detener voz</span>
                </button>
              ) : (
                <span className="text-[11px] text-sky-400 flex items-center gap-1 font-mono">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Voz activada</span>
                </span>
              )}
            </div>

            {/* Quick Question Buttons */}
            <div className="bg-slate-50 p-2.5 border-b border-slate-200 flex flex-wrap gap-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block w-full">
                Consultas Rápidas Sugeridas:
              </span>
              {quickQuestions.map(q => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleSendMessage(q)}
                  className="text-[11px] px-2.5 py-1 bg-white hover:bg-sky-50 hover:text-sky-800 border border-slate-300 rounded-full font-medium transition cursor-pointer text-slate-700"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
              {messages.map(m => {
                const isBot = m.sender === 'bot';
                return (
                  <div 
                    key={m.id}
                    className={`flex items-start gap-2.5 ${isBot ? '' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                      isBot ? 'bg-sky-700 text-white' : 'bg-slate-800 text-white'
                    }`}>
                      {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>

                    <div className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed space-y-1.5 shadow-sm ${
                      isBot 
                        ? 'bg-white border border-slate-200 text-slate-800' 
                        : 'bg-sky-700 text-white'
                    }`}>
                      <p className="whitespace-pre-line">{m.text}</p>
                      
                      {isBot && (
                        <div className="pt-1 flex items-center justify-between border-t border-slate-100 mt-2 text-[10px] text-slate-400">
                          <span>FAPPCODI</span>
                          <button
                            type="button"
                            onClick={() => speakText(m.text)}
                            className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-900 font-semibold cursor-pointer"
                            title="Escuchar este mensaje en voz alta"
                          >
                            <Volume2 className="w-3 h-3" />
                            <span>Escuchar</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                id="chatbot-input"
                type="text"
                value={inputQuery}
                onChange={e => setInputQuery(e.target.value)}
                placeholder="Escribí tu pregunta sobre el CUD, Inclukiosco, etc..."
                className="flex-1 text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-600"
              />
              <button
                id="btn-chatbot-send"
                type="submit"
                disabled={!inputQuery.trim()}
                className="px-4 py-2.5 bg-sky-700 hover:bg-sky-800 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Enviar</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
