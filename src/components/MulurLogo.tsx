import React from 'react';

interface MulurLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

/**
 * Logo resmi MULUR 1 JOMBANG - SUPERMARKET BAHAN BANGUNAN
 * Persis sesuai dengan file resmi "LOGO MULUR WRITE 2026 copy 2.png":
 * - Teks utama: "MULUR 1" (Bold Condensed Uppercase)
 * - Baris tengah: "JOMBANG" diikuti 2 garis horizontal (Kuning di atas, Merah di bawah)
 * - Baris bawah: "SUPERMARKET BAHAN BANGUNAN"
 */
export const MulurLogo: React.FC<MulurLogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#000000';
  const subtextColor = isDark ? '#F1F5F9' : '#000000';

  const scaleClasses = {
    sm: 'scale-75 origin-left',
    md: 'scale-90 sm:scale-100 origin-left',
    lg: 'scale-105 sm:scale-115 origin-left',
    xl: 'scale-125 sm:scale-140 origin-left',
  }[size];

  return (
    <div className={`inline-flex flex-col select-none leading-none ${scaleClasses} ${className}`}>
      {/* 1. Baris Atas: MULUR 1 */}
      <div className="flex items-baseline justify-between w-full">
        <span
          className="font-display font-black tracking-tight text-3xl sm:text-4xl uppercase"
          style={{ color: textColor, letterSpacing: '-0.03em', lineHeight: 0.9 }}
        >
          MULUR 1
        </span>
      </div>

      {/* 2. Baris Tengah: JOMBANG + 2 Garis Horizontal (Kuning & Merah) */}
      <div className="flex items-center gap-2.5 mt-1.5 w-full">
        <span
          className="font-display font-black text-xs sm:text-sm tracking-wider uppercase shrink-0"
          style={{ color: subtextColor, letterSpacing: '0.02em', lineHeight: 1 }}
        >
          JOMBANG
        </span>
        {/* Dua Garis Horizontal: Atas Kuning (#FFC100), Bawah Merah (#C40C0C) */}
        <div className="flex flex-col gap-1 flex-1 min-w-[70px]">
          <div className="h-[4px] w-full" style={{ backgroundColor: '#FFC100' }}></div>
          <div className="h-[4px] w-full" style={{ backgroundColor: '#C40C0C' }}></div>
        </div>
      </div>

      {/* 3. Baris Bawah: SUPERMARKET BAHAN BANGUNAN */}
      {showSubtitle && (
        <div className="w-full mt-1.5">
          <span
            className="block font-sans font-extrabold text-[8px] sm:text-[9px] uppercase whitespace-nowrap"
            style={{
              color: textColor,
              letterSpacing: '0.24em',
              lineHeight: 1,
            }}
          >
            SUPERMARKET BAHAN BANGUNAN
          </span>
        </div>
      )}
    </div>
  );
};
