import React from 'react';
import { X, ShieldCheck, FileText, Code2, Heart } from 'lucide-react';

interface TermsPrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsPrivacyModal: React.FC<TermsPrivacyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={20} className="text-emerald-600" />
            <h2 className="text-base font-bold text-slate-900">
              Términos, Privacidad y Licencias
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            title="Cerrar ventana"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-5 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
          {/* Privacidad */}
          <section className="space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-emerald-600" />
              1. Aviso de Privacidad (100% Estática y Privada)
            </h3>
            <p>
              Esta aplicación es <strong>completamente estática</strong> y se ejecuta en su totalidad en el navegador del usuario (cliente). 
              No recopila datos personales, no utiliza cookies de seguimiento, no incluye analítica externa ni se comunica con ningún servidor de almacenamiento remoto.
            </p>
            <p className="bg-emerald-50/70 text-emerald-800 p-3 rounded-2xl border border-emerald-100 text-xs">
              <strong>Almacenamiento Local (localStorage):</strong> La aplicación utiliza únicamente el sistema local del navegador (<code className="font-mono bg-emerald-100/70 px-1 py-0.5 rounded">localStorage</code>) para guardar el contador de veces que has estudiado cada kanji (lo que determina la intensidad del color pastel) y tus kanji favoritos. Esta información permanece exclusivamente en tu dispositivo y nunca sale de él.
            </p>
          </section>

          {/* Términos y condiciones */}
          <section className="space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <FileText size={15} className="text-slate-700" />
              2. Términos y Condiciones de Uso
            </h3>
            <p>
              Esta aplicación ha sido diseñada con fines educativos sin ánimo de lucro para ayudar a estudiantes hispanohablantes a aprender y dominar los 218 kanji requeridos en el nivel inicial N5 del método <em>Minna no Nihongo</em> (editorial 3A Corporation).
            </p>
            <p>
              La herramienta se proporciona de manera gratuita, «tal cual» (as-is), sin garantías de ningún tipo respecto a interrupciones o exactitud absoluta, aunque ha sido minuciosamente contrastada con el temario oficial.
            </p>
          </section>

          {/* Licencias de software y recursos */}
          <section className="space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Code2 size={15} className="text-slate-700" />
              3. Licencia de la Aplicación y Recursos
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70">
                <div className="font-semibold text-slate-800 text-xs mb-1">
                  Licencia de la Aplicación: MIT License
                </div>
                <p className="text-xs text-slate-500 font-mono">
                  Permission is hereby granted, free of charge, to any person obtaining a copy of this software... (MIT).
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70">
                <div className="font-semibold text-slate-800 text-xs mb-1">
                  Trazos y Diagramas de Kanji: KanjiVG
                </div>
                <p className="text-xs text-slate-600">
                  Los trazos vectoriales y el orden de escritura provienen del proyecto{' '}
                  <a
                    href="https://github.com/KanjiVG/kanjivg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-600 underline font-medium"
                  >
                    KanjiVG
                  </a>
                  , creado por <strong>Ulrich Apel</strong> y colaboradores, bajo la licencia{' '}
                  <strong>Creative Commons Attribution-Share Alike 3.0 (CC BY-SA 3.0)</strong>.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70">
                <div className="font-semibold text-slate-800 text-xs mb-1">
                  Vocabulario y referencias pedagógicas
                </div>
                <p className="text-xs text-slate-600">
                  Los ejemplos de vocabulario y las lecciones siguen el plan de estudios del libro <em>Minna no Nihongo Shokyu I</em> (3A Corporation). Agradecimientos a Jisho.org y a la comunidad de estudio de japonés.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-100">
          <div className="text-xs text-slate-500 flex items-center gap-1">
            <span>Hecho con</span>
            <Heart size={12} className="text-rose-500 fill-rose-500" />
            <span>para estudiantes de japonés</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-xl text-xs font-semibold shadow-xs transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
