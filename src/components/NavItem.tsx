// Navegación lateral: item con icono y etiqueta
import type { ReactNode } from 'react';

type Props = { icon: ReactNode; label: string; active?: boolean };

export default function NavItem({ icon, label, active = false }: Props) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
        active ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10 hover:text-white'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}