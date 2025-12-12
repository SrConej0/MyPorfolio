// Tipos compartidos para mayor claridad y escalabilidad
export type NavItem = {
  label: string;
  iconName: 'Home' | 'Compass' | 'Library' | 'Heart';
  active?: boolean;
};

export type Collection = {
  name: string;
  type: string; // Artist | Playlist
  image: string;
};

export type Song = {
  image: string;
  title: string;
  artist: string;
  duration: string;
};