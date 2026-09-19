import React from 'react';

interface IconProps {
  size?: number | string;
  className?: string;
  id?: string;
}

/**
 * Emblema vectorial oficial de FAPPCODI:
 * Cuatro cuadrantes con manos entrelazadas en ciclo de inclusión y solidaridad:
 * - Superior izquierdo: Fondo Amarillo con mano Verde hacia la izquierda
 * - Superior derecho: Fondo Verde con mano Violeta hacia arriba
 * - Inferior izquierdo: Fondo Rojo con mano Amarilla hacia abajo
 * - Inferior derecho: Fondo Violeta con mano Roja hacia la izquierda
 */
export const FappcodiIcon: React.FC<IconProps> = ({ 
  size = 48, 
  className = '',
  id = 'fappcodi-icon-emblem'
}) => {
  const handPath = "M 34,96 C 33,88 29,80 25,74 C 20,67 13,63 6,61 C 2,60 0,55 2,50 C 4,45 10,45 16,49 C 21,53 25,58 27,63 C 27,52 26,30 26,19 C 26,13 30,10 34,12 C 38,14 39,19 39,26 L 39,37 C 40,28 41,15 44,9 C 47,4 53,4 55,9 C 57,14 57,25 57,35 C 58,28 61,18 64,15 C 68,12 73,14 74,19 C 75,24 75,33 74,41 C 76,35 79,28 83,27 C 87,26 91,29 91,35 C 91,43 89,57 87,66 C 83,78 77,88 66,96 Z";

  return (
    <svg 
      id={id}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 440 440" 
      width={size} 
      height={size}
      className={`flex-shrink-0 transition-transform ${className}`}
      aria-label="Emblema oficial de FAPPCODI: cuatro manos en inclusión y diversidad"
      role="img"
    >
      <defs>
        <path id={`fappcodi-hand-${id}`} d={handPath} fill="currentColor" />
      </defs>

      {/* Cuadrante 1 (Superior Izquierdo): Fondo Amarillo, mano Verde */}
      <rect x="0" y="0" width="210" height="210" fill="#FFE800" rx="4" />
      <g transform="translate(105, 105) rotate(-90) scale(1.6) translate(-50, -52)" fill="#009E49">
        <use href={`#fappcodi-hand-${id}`} />
      </g>

      {/* Cuadrante 2 (Superior Derecho): Fondo Verde, mano Violeta institucional */}
      <rect x="230" y="0" width="210" height="210" fill="#009E49" rx="4" />
      <g transform="translate(335, 105) scale(1.6) translate(-50, -52)" fill="#281566">
        <use href={`#fappcodi-hand-${id}`} />
      </g>

      {/* Cuadrante 3 (Inferior Izquierdo): Fondo Rojo, mano Amarilla */}
      <rect x="0" y="230" width="210" height="210" fill="#E52421" rx="4" />
      <g transform="translate(105, 335) rotate(180) scale(1.6) translate(-50, -52)" fill="#FFE800">
        <use href={`#fappcodi-hand-${id}`} />
      </g>

      {/* Cuadrante 4 (Inferior Derecho): Fondo Violeta institucional, mano Roja */}
      <rect x="230" y="230" width="210" height="210" fill="#281566" rx="4" />
      <g transform="translate(335, 335) scale(-1.6, 1.6) rotate(90) translate(-50, -52)" fill="#E52421">
        <use href={`#fappcodi-hand-${id}`} />
      </g>
    </svg>
  );
};

export interface LogoProps {
  variant?: 'full' | 'horizontal' | 'compact' | 'stacked' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  textColor?: 'default' | 'white' | 'dark';
  subtitle?: string;
  className?: string;
  id?: string;
}

/**
 * Logotipo adaptable de FAPPCODI con texto e icono separados y configurables:
 * - 'full': Icono + texto completo oficial en 2 líneas
 * - 'horizontal': Icono + texto oficial adaptativo
 * - 'compact': Icono + sigla "FAPPCODI" + subtítulo
 * - 'stacked': Icono centrado sobre el texto institucional
 * - 'icon-only': Sólo el icono / favicon
 */
export const FappcodiLogo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  textColor = 'default',
  subtitle,
  className = '',
  id = 'fappcodi-logo'
}) => {
  const sizeMap = {
    sm: { icon: 34, title: 'text-sm sm:text-base', line: 'text-xs', acronym: 'text-lg' },
    md: { icon: 46, title: 'text-base sm:text-lg', line: 'text-xs sm:text-sm', acronym: 'text-xl' },
    lg: { icon: 58, title: 'text-lg sm:text-xl md:text-2xl', line: 'text-sm sm:text-base', acronym: 'text-2xl' },
    xl: { icon: 72, title: 'text-xl sm:text-2xl md:text-3xl', line: 'text-base sm:text-lg', acronym: 'text-3xl' }
  };

  const currentSize = sizeMap[size];

  const textColorClass = {
    default: 'text-[#281566]',
    white: 'text-white',
    dark: 'text-slate-900'
  }[textColor];

  if (variant === 'icon-only') {
    return (
      <div id={id} className={`inline-flex items-center ${className}`}>
        <FappcodiIcon size={currentSize.icon} id={`${id}-emblem`} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div id={id} className={`flex flex-col items-center text-center gap-3 ${className}`}>
        <div className="p-1 bg-white rounded-2xl shadow-sm border border-slate-100/80">
          <FappcodiIcon size={currentSize.icon * 1.3} id={`${id}-emblem`} />
        </div>
        <div className={textColorClass}>
          <p className={`font-extrabold tracking-tight leading-tight ${currentSize.title}`}>
            Fundación Argentina para las
          </p>
          <p className={`font-extrabold tracking-tight leading-tight ${currentSize.title}`}>
            Personas con Discapacidad
          </p>
          {subtitle && (
            <p className="text-xs text-slate-500 mt-1 font-medium tracking-normal">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div id={id} className={`flex items-center gap-3 ${className}`}>
        <div className="p-1 bg-white rounded-xl shadow-sm border border-slate-100 flex-shrink-0">
          <FappcodiIcon size={currentSize.icon} id={`${id}-emblem`} />
        </div>
        <div className="leading-tight">
          <div className="flex items-center gap-2">
            <span className={`font-black tracking-tight ${textColorClass} ${currentSize.acronym}`}>
              FAPPCODI
            </span>
          </div>
          <p className="text-[11px] sm:text-xs font-semibold text-slate-600 line-clamp-1">
            {subtitle || 'Fundación Argentina para las Personas con Discapacidad'}
          </p>
        </div>
      </div>
    );
  }

  // Variant: 'full' or 'horizontal'
  return (
    <div id={id} className={`flex items-center gap-3 sm:gap-4 ${className}`}>
      <div className="p-1 bg-white rounded-xl shadow-sm border border-slate-200/80 flex-shrink-0">
        <FappcodiIcon size={currentSize.icon} id={`${id}-emblem`} />
      </div>
      <div className={`${textColorClass} leading-tight`}>
        <span className={`block font-extrabold tracking-tight ${currentSize.line}`}>
          Fundación Argentina para las
        </span>
        <span className={`block font-black tracking-tight ${currentSize.title}`}>
          Personas con Discapacidad
        </span>
        {subtitle && (
          <span className="block text-[11px] text-slate-500 font-medium mt-0.5">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
