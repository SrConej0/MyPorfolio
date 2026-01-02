// ============================================
// IMPORTS - Librerías y Componentes Necesarios
// ============================================

// Importamos todos los iconos que usaremos de la librería lucide-react
// Estos iconos se usan en toda la interfaz (navegación, reproductor, botones, etc.)
import { Home, Music, Mic2, Disc3, Radio, Search, Bell, Settings, User, Plus, Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, List, Heart, Clock, ArrowLeft, ChevronLeft, ChevronRight, X, Download } from 'lucide-react';

// Importamos hooks de React:
// - useState: Para manejar estados (variables que cambian y re-renderizan la UI)
// - useRef: Para referencias a elementos del DOM (scroll, audio player)
// - useEffect: Para efectos secundarios (ejecutar código cuando algo cambia)
import { useState, useRef, useEffect } from 'react';

// ============================================
// DATOS DE PROYECTOS
// ============================================
// Array con información de todos los proyectos del portfolio
// Cada proyecto tiene: id, título, tecnología, año, imagen, descripción, características y tecnologías

const projectsData = [
  {
    id: 1,
    title: "App de Tareas",
    tech: "Flutter + Firebase",
    year: "2024",
    image: "https://i.postimg.cc/HLwd62R6/flutter.png",
    description: "Aplicación móvil para gestión de tareas con sincronización en tiempo real",
    features: ["Autenticación de usuarios", "Sincronización en tiempo real", "Notificaciones push", "Modo offline"],
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Firestore"],
    demo: "https://www.youtube.com/watch?v=example"
  },
  {
    id: 2,
    title: "E-commerce Web",
    tech: "React + PHP",
    year: "2024",
    image: "https://logo.svgcdn.com/logos/php.png",
    description: "Plataforma de comercio electrónico con carrito de compras y pasarela de pago",
    features: ["Carrito de compras", "Pasarela de pago", "Panel de administración", "Sistema de inventario"],
    technologies: ["React", "PHP", "MySQL", "Stripe API"],
    demo: "https://www.youtube.com/watch?v=example"
  },
  {
    id: 3,
    title: "Portfolio Interactivo",
    tech: "JavaScript + CSS",
    year: "2025",
    image: "https://logo.svgcdn.com/logos/javascript.png",
    description: "Portafolio personal con animaciones y efectos visuales modernos",
    features: ["Animaciones CSS", "Diseño responsive", "Modo oscuro/claro", "Reproductor de música"],
    technologies: ["JavaScript", "CSS3", "HTML5", "Vite"],
    demo: "https://www.youtube.com/watch?v=example"
  },
  {
    id: 4,
    title: "App Móvil Nativa",
    tech: "Kotlin + Android",
    year: "2024",
    image: "https://i.postimg.cc/VNqmKRpW/Kotlin.png",
    description: "Aplicación Android nativa con Material Design y arquitectura MVVM",
    features: ["Material Design 3", "Arquitectura MVVM", "Room Database", "Retrofit API"],
    technologies: ["Kotlin", "Android SDK", "Jetpack Compose", "Coroutines"],
    demo: "https://www.youtube.com/watch?v=example"
  },
  {
    id: 5,
    title: "Sistema de Chat",
    tech: "Firebase + React",
    year: "2023",
    image: "https://logo.svgcdn.com/logos/firebase.png",
    description: "Chat en tiempo real con soporte para mensajes multimedia",
    features: ["Mensajería en tiempo real", "Envío de imágenes", "Indicadores de escritura", "Historial de mensajes"],
    technologies: ["React", "Firebase Realtime DB", "Cloud Storage", "Authentication"],
    demo: "https://www.youtube.com/watch?v=example"
  },
  {
    id: 6,
    title: "Dashboard Analytics",
    tech: "TypeScript + Next.js",
    year: "2025",
    image: "https://logo.svgcdn.com/logos/typescript.png",
    description: "Dashboard de análisis con gráficos interactivos y reportes en tiempo real",
    features: ["Gráficos interactivos", "Exportación de datos", "Filtros avanzados", "Reportes PDF"],
    technologies: ["TypeScript", "Next.js", "Chart.js", "Tailwind CSS"],
    demo: "https://www.youtube.com/watch?v=example"
  }
];

// ============================================
// DATOS DE ESPECIALIDADES
// ============================================
// Array con información de las especialidades profesionales
// Incluye: Desarrollo Móvil, Web, Flutter & Kotlin, JavaScript & PHP, Certificaciones, ISIL
// Cada especialidad puede tener certificados (solo Certificaciones los tiene)

const specialtiesData = [
  {
    id: 1,
    title: "Desarrollo Móvil", // Nombre de la especialidad
    category: "Especialidad", // Categoría para mostrar en la UI
    image: "https://i.postimg.cc/VNqmKRpW/Kotlin.png", // Imagen representativa
    description: "Desarrollo de aplicaciones móviles nativas y multiplataforma con enfoque en experiencia de usuario y rendimiento óptimo.",
    skills: ["Kotlin", "Flutter", "Android SDK", "iOS Development", "React Native", "Mobile UI/UX"], // Habilidades técnicas
    experience: "3+ años", // Años de experiencia
    projects: 8, // Número de proyectos realizados
    technologies: ["Kotlin", "Flutter", "Dart", "Swift", "Java"] // Tecnologías utilizadas
  },
  {
    id: 2,
    title: "Desarrollo Web",
    category: "Especialidad",
    image: "https://logo.svgcdn.com/logos/javascript.png",
    description: "Creación de aplicaciones web modernas, responsivas y escalables utilizando las últimas tecnologías del mercado.",
    skills: ["React", "TypeScript", "Next.js", "Node.js", "REST APIs", "Responsive Design"],
    experience: "4+ años",
    projects: 12,
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },

  {
    id: 5,
    title: "Certificaciones",
    category: "Logros",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    description: "Certificaciones profesionales obtenidas en ISIL que validan mis conocimientos en desarrollo de software, análisis y diseño de sistemas, y despliegue de aplicaciones de calidad.",
    skills: [],
    experience: "",
    projects: 0,
    technologies: [],
    certificates: [
      {
        title: "TECNOLOGÍAS DE DESARROLLO DE SOFTWARE",
        institution: "ISIL",
        date: "2024",
        link: "https://drive.google.com/file/d/1bvM5wPosC4cdcptquIlcDMZtmzfTHPyY/preview"
      },
      {
        title: "ANÁLISIS Y DISEÑO DE SISTEMAS DE INFORMACIÓN",
        institution: "ISIL",
        date: "2024",
        link: "https://drive.google.com/file/d/1YztaxdNWXMbsNBTCWu2BgaT9vTpQYc3M/preview"
      },
      {
        title: "DESPLIEGUE Y CALIDAD DE SISTEMAS DE INFORMACIÓN",
        institution: "ISIL",
        date: "2024",
        link: "https://drive.google.com/file/d/1rRw8yhS550XeGK6sLgx6O2x3Uab6dCik/preview"
      }
    ]
  },
  {
    id: 6,
    title: "ISIL - Software",
    category: "Educación",
    image: "https://i.postimg.cc/6p1YDxJW/channels4-profile.jpg",
    description: "Ingeniería de Software en ISIL con enfoque en desarrollo de aplicaciones y arquitectura de software.",
    skills: ["Ingeniería de Software", "Arquitectura de Software", "Bases de Datos", "Programación Orientada a Objetos"],
    experience: "2022-2025",
    projects: 0,
    technologies: ["Java", "Python", "SQL", "UML", "Design Patterns"]
  }
];

// Free music tracks from various artists (royalty-free) - 10 songs
const tracks = [
  { id: 1, title: "Sunny", artist: "Bensound", preview: "https://www.bensound.com/bensound-music/bensound-sunny.mp3", duration: 30 },
  { id: 2, title: "Energy", artist: "Bensound", preview: "https://www.bensound.com/bensound-music/bensound-energy.mp3", duration: 30 },
  { id: 3, title: "Jazzy Frenchy", artist: "Bensound", preview: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3", duration: 30 },
  { id: 4, title: "Creative Minds", artist: "Bensound", preview: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3", duration: 30 },
  { id: 5, title: "Acoustic Breeze", artist: "Bensound", preview: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3", duration: 30 },
  { id: 6, title: "Tenderness", artist: "Bensound", preview: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3", duration: 30 },
  { id: 7, title: "Once Again", artist: "Bensound", preview: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3", duration: 30 },
  { id: 8, title: "Sweet", artist: "Bensound", preview: "https://www.bensound.com/bensound-music/bensound-sweet.mp3", duration: 30 },
  { id: 9, title: "Love", artist: "Bensound", preview: "https://www.bensound.com/bensound-music/bensound-love.mp3", duration: 30 },
  { id: 10, title: "Piano Moment", artist: "Bensound", preview: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3", duration: 30 },
];

// ============================================
// COMPONENTE PRINCIPAL APP
// ============================================
// Este es el componente raíz que contiene TODA la aplicación

function App() {
  // ============================================
  // ESTADOS DEL REPRODUCTOR DE MÚSICA
  // ============================================
  // useState crea variables que cuando cambian, React re-renderiza la UI

  const [isPlaying, setIsPlaying] = useState(false); // true = reproduciendo, false = pausado
  const [currentTrack, setCurrentTrack] = useState(0); // Índice de la canción actual (0-9)
  const [progress, setProgress] = useState(0); // Progreso de la canción (0-100%)
  const [volume, setVolume] = useState(0.7); // Volumen del audio (0.0-1.0)

  // ============================================
  // ESTADOS DE IDIOMA Y TEMA
  // ============================================

  const [language, setLanguage] = useState<'es' | 'en'>('es'); // Idioma actual: 'es' o 'en'
  const [theme, setTheme] = useState<'dark' | 'light'>('dark'); // Tema: 'dark' o 'light'

  // ============================================
  // ESTADOS DE VISTAS DE DETALLE
  // ============================================

  const [selectedProject, setSelectedProject] = useState<number | null>(null); // null = no hay proyecto seleccionado, número = índice del proyecto
  const [selectedSpecialty, setSelectedSpecialty] = useState<number | null>(null); // null = no hay especialidad seleccionada, número = índice
  const [isDemoMode, setIsDemoMode] = useState(false); // Modo demo (no se usa actualmente)

  // ============================================
  // REFERENCIAS (useRef)
  // ============================================
  // useRef crea referencias a elementos del DOM que NO causan re-render cuando cambian

  const audioRef = useRef<HTMLAudioElement>(null); // Referencia al elemento <audio> del reproductor

  // Referencias para navegación por scroll (apuntan a secciones del HTML)
  const headerRef = useRef<HTMLDivElement>(null); // Referencia a la sección del header
  const projectsRef = useRef<HTMLDivElement>(null); // Referencia a la sección de proyectos
  const skillsRef = useRef<HTMLDivElement>(null); // Referencia a la sección de habilidades
  const experienceRef = useRef<HTMLDivElement>(null); // Referencia a la sección de experiencia
  const contactRef = useRef<HTMLDivElement>(null); // Referencia a la sección de contacto

  // ============================================
  // EFECTO: DETECTAR TEMA DEL SISTEMA
  // ============================================
  // useEffect se ejecuta cuando el componente se monta (primera vez que se carga)
  // Este efecto detecta si el usuario tiene modo oscuro activado en su sistema

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // Detecta preferencia del sistema
    setTheme(prefersDark ? 'dark' : 'light'); // Establece el tema según la preferencia
  }, []); // [] = solo se ejecuta una vez al montar el componente


  // ============================================
  // FUNCIÓN: SCROLL A SECCIÓN
  // ============================================
  // Esta función hace scroll suave a una sección específica de la página
  // IMPORTANTE: Primero cierra cualquier vista de detalle abierta antes de hacer scroll

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    // Paso 1: Cerrar vistas de detalle (si hay alguna abierta)
    setSelectedSpecialty(null); // Cierra vista de especialidad
    setSelectedProject(null); // Cierra vista de proyecto

    // Paso 2: Esperar 100ms para que las vistas se cierren antes de hacer scroll
    setTimeout(() => {
      // Paso 3: Hacer scroll suave al elemento referenciado
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100); // 100ms de delay
  };

  // ============================================
  // EFECTO: ESTABLECER VOLUMEN INICIAL
  // ============================================
  // Este efecto actualiza el volumen del reproductor cada vez que cambia el estado 'volume'

  useEffect(() => {
    const audio = audioRef.current; // Obtiene el elemento de audio
    if (audio) {
      audio.volume = volume; // Establece el volumen (0.0 a 1.0)
    }
  }, [volume]); // Se ejecuta cada vez que 'volume' cambia

  // ============================================
  // SISTEMA DE COLORES ROTATIVOS
  // ============================================
  // Colores pastel que rotan en el reproductor de música cuando está reproduciendo

  const [colorIndex, setColorIndex] = useState(0); // Índice del color actual (0-6)
  const pastelColors = [
    { ring: 'ring-rose-300/40', shadow: 'rgba(251,207,232,0.4)' },      // Rosa
    { ring: 'ring-purple-300/40', shadow: 'rgba(216,180,254,0.4)' },    // Púrpura
    { ring: 'ring-blue-300/40', shadow: 'rgba(147,197,253,0.4)' },      // Azul
    { ring: 'ring-cyan-300/40', shadow: 'rgba(103,232,249,0.4)' },      // Cyan
    { ring: 'ring-green-300/40', shadow: 'rgba(134,239,172,0.4)' },     // Verde
    { ring: 'ring-yellow-300/40', shadow: 'rgba(253,224,71,0.4)' },     // Amarillo
    { ring: 'ring-orange-300/40', shadow: 'rgba(253,186,116,0.4)' },    // Naranja
  ];

  // ============================================
  // EFECTO: ROTACIÓN DE COLORES
  // ============================================
  // Cambia el color cada 3 segundos cuando la música está reproduciendo

  useEffect(() => {
    if (!isPlaying) return; // Si no está reproduciendo, no hacer nada

    // Crear intervalo que cambia el color cada 3 segundos
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % pastelColors.length); // Incrementa y vuelve a 0 al llegar al final
    }, 3000); // 3000ms = 3 segundos

    // Limpiar intervalo cuando el componente se desmonta o isPlaying cambia
    return () => clearInterval(interval);
  }, [isPlaying, pastelColors.length]); // Se ejecuta cuando isPlaying cambia


  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      // Auto next track
      if (currentTrack < tracks.length - 1) {
        setCurrentTrack(currentTrack + 1);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]);


  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    if (currentTrack < tracks.length - 1) {
      setCurrentTrack(currentTrack + 1);
      setProgress(0);
      // Auto-play next track
      setTimeout(() => {
        const audio = audioRef.current;
        if (audio) {
          audio.play();
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  const prevTrack = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
      setProgress(0);
      // Auto-play previous track
      setTimeout(() => {
        const audio = audioRef.current;
        if (audio) {
          audio.play();
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    setProgress(0);
    // Auto-play when selecting a track
    setTimeout(() => {
      const audio = audioRef.current;
      if (audio) {
        audio.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  // Translations
  const t = {
    es: {
      greeting: "¡Hola! Soy Juan Daniel Cantu Guillen",
      role: "Desarrollador de Software | Móvil & Web",
      search: "Buscar proyectos, habilidades o experiencia...",
      // Navigation
      home: "Inicio",
      projectsNav: "Proyectos",
      skills: "Habilidades",
      education: "Educación",
      contact: "Contacto",
      // Sections
      specialties: "Mis Especialidades",
      projects: "Proyectos Destacados",
      technologies: "Tecnologías Principales",
      experience: "Experiencia",
      profile: "Perfil Profesional",
      // Player
      music: "Música",
      playing: "Reproduciendo ahora",
      // Contact
      email: "Email",
      phone: "Teléfono",
      // Actions
      seeAll: "Ver todos",
      viewAll: "Ver todos"
    },
    en: {
      greeting: "Hello! I'm Juan Daniel Cantu Guillen",
      role: "Software Developer | Mobile & Web",
      search: "Search projects, skills or experience...",
      // Navigation
      home: "Home",
      projectsNav: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      // Sections
      specialties: "My Specialties",
      projects: "Featured Projects",
      technologies: "Main Technologies",
      experience: "Recent Experience",
      profile: "Professional Profile",
      // Player
      music: "Music",
      playing: "Now Playing",
      // Contact
      email: "Email",
      phone: "Phone",
      // Actions
      seeAll: "See all",
      viewAll: "See all"
    }
  };

  const currentLang = t[language];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
      {/* Background Image with Audio Reactive Overlay */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${theme === 'dark' ? 'opacity-20' : 'opacity-100'}`}
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />


      {/* Main Container */}
      <div className="relative min-h-screen p-8 flex items-center justify-center">
        <div className="w-full max-w-[1400px] h-[850px] relative">

          {/* 1. Top Browser Bar - Floating with macOS controls and toggles */}
          <div className={`absolute left-0 right-0 top-0 z-40 h-16 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 px-6 flex items-center justify-between shadow-2xl transition-all duration-700 ${isDemoMode ? '-translate-y-24 opacity-0' : 'translate-y-0 opacity-100'
            } ${isPlaying ? 'ring-1 ring-purple-300/20' : ''}`}>
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-all" title="Close"></button>
              <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-all" title="Minimize"></button>
              <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-all" title="Maximize"></button>
            </div>

            <div className="flex-1 max-w-2xl mx-auto">
              <div className="h-10 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 px-4 flex items-center">
                <span className="text-white/60 text-sm">juandanielcantu.dev</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="px-3 py-1.5 rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all text-white/80 text-sm font-medium"
                title="Change Language"
              >
                {language === 'es' ? '🇪🇸 ES' : '🇺🇸 EN'}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-10 h-10 rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-lg"
                title="Toggle Theme"
              >
                {theme === 'dark' ? '🌙' : '☀️'}
              </button>
            </div>
          </div>

          {/* 2. Left Icon Bar - Floating with pulse - Hidden when project selected */}
          {selectedProject === null && (
            <div className={`absolute left-0 top-20 bottom-28 z-20 w-16 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 flex flex-col items-center py-6 gap-6 shadow-2xl transition-all duration-700 ${isPlaying ? 'ring-1 ring-orange-300/20' : ''
              } ${isDemoMode ? '-translate-x-24 opacity-0' : 'translate-x-0 opacity-100'}`}>
              <Search className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer transition-all" />
              <Bell className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer transition-all" />
              <Settings className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer transition-all" />
              <User className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer transition-all mt-auto" />
            </div>
          )}

          {/* 3. Main Content Area - Center with Navigation with pulse */}
          <div className={`absolute ${selectedProject === null ? 'left-20 right-0' : 'left-0 right-0'} ${isDemoMode ? 'top-0 bottom-0' : 'top-20 bottom-28'
            } z-10 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 flex shadow-2xl overflow-hidden transition-all duration-700 ${isPlaying ? 'ring-1 ring-cyan-300/20' : ''}`}>
            {/* Left Navigation Menu - Hidden when project selected */}
            {selectedProject === null && (
              <div className="w-56 backdrop-blur-xl bg-white/5 border-r border-white/10 py-6 px-4 overflow-y-auto scrollbar-hide">
                <nav className="space-y-2">
                  <NavItem icon={<Home className="w-5 h-5" />} label={currentLang.home} active onClick={() => scrollToSection(headerRef)} />
                  <NavItem icon={<Music className="w-5 h-5" />} label={currentLang.projectsNav} onClick={() => scrollToSection(projectsRef)} />
                  <NavItem icon={<Mic2 className="w-5 h-5" />} label={currentLang.skills} onClick={() => scrollToSection(skillsRef)} />
                  <NavItem icon={<Disc3 className="w-5 h-5" />} label={currentLang.experience} onClick={() => scrollToSection(experienceRef)} />
                  <NavItem icon={<Radio className="w-5 h-5" />} label={currentLang.contact} onClick={() => scrollToSection(contactRef)} />
                </nav>

                <div className="mt-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-xs uppercase font-semibold tracking-wider transition-all duration-300 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-500'
                      }`}>{currentLang.specialties}</h3>
                    <Plus className="w-4 h-4 text-white/60 hover:text-white/90 cursor-pointer" />
                  </div>
                  <div className="space-y-1">
                    {specialtiesData.map((specialty, index) => (
                      <button
                        key={specialty.id}
                        onClick={() => setSelectedSpecialty(index)}
                        className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-all group cursor-pointer"
                      >
                        <img src={specialty.image} alt={specialty.title} className="w-12 h-12 rounded-lg object-cover" />
                        <div className="flex-1 text-left min-w-0">
                          <h4 className="text-white font-medium text-sm truncate">{specialty.title}</h4>
                          <p className="text-white/60 text-xs truncate">{specialty.category}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Center Content */}
            <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
              {selectedSpecialty !== null ? (
                /* Specialty Detail View */
                <div className="h-full flex flex-col">
                  {/* Navigation Header */}
                  <div className="flex items-center justify-between mb-8">
                    <button
                      onClick={() => setSelectedSpecialty(null)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all"
                    >
                      <ArrowLeft className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">Atrás</span>
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedSpecialty(Math.max(0, selectedSpecialty - 1))}
                        disabled={selectedSpecialty === 0}
                        className="p-2 rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all disabled:opacity-30"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={() => setSelectedSpecialty(Math.min(specialtiesData.length - 1, selectedSpecialty + 1))}
                        disabled={selectedSpecialty === specialtiesData.length - 1}
                        className="p-2 rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all disabled:opacity-30"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Specialty Content */}
                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                    <div className="mb-8">
                      <div className="flex items-start gap-6 mb-6">
                        <img
                          src={specialtiesData[selectedSpecialty].image}
                          alt={specialtiesData[selectedSpecialty].title}
                          className="w-32 h-32 rounded-2xl object-cover shadow-2xl"
                        />
                        <div className="flex-1">
                          <h1 className="text-4xl font-bold text-white mb-2">{specialtiesData[selectedSpecialty].title}</h1>
                          <p className="text-xl text-white/60 mb-4">{specialtiesData[selectedSpecialty].category}</p>
                          {(specialtiesData[selectedSpecialty].experience || specialtiesData[selectedSpecialty].projects > 0) && (
                            <div className="flex gap-4">
                              {specialtiesData[selectedSpecialty].experience && (
                                <div className="px-4 py-2 rounded-lg backdrop-blur-xl bg-white/10">
                                  <p className="text-white/60 text-xs">Experiencia</p>
                                  <p className="text-white font-semibold">{specialtiesData[selectedSpecialty].experience}</p>
                                </div>
                              )}
                              {specialtiesData[selectedSpecialty].projects > 0 && (
                                <div className="px-4 py-2 rounded-lg backdrop-blur-xl bg-white/10">
                                  <p className="text-white/60 text-xs">Proyectos</p>
                                  <p className="text-white font-semibold">{specialtiesData[selectedSpecialty].projects}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-4">Descripción</h3>
                        <p className="text-white/80 leading-relaxed">{specialtiesData[selectedSpecialty].description}</p>
                      </div>

                      {/* Certificates Section */}
                      {specialtiesData[selectedSpecialty].certificates && (
                        <div className="mt-8">
                          <h3 className="text-xl font-bold text-white mb-4">Certificados</h3>
                          <div className="space-y-6">
                            {specialtiesData[selectedSpecialty].certificates.map((cert, index) => (
                              <div key={index} className="p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20">
                                <div className="flex items-start justify-between mb-4">
                                  <div className="flex-1">
                                    <h4 className="text-white font-semibold text-lg mb-1">{cert.title}</h4>
                                    <p className="text-white/60 text-sm">{cert.institution} • {cert.date}</p>
                                  </div>
                                  <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-lg backdrop-blur-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-sm font-medium transition-all flex items-center gap-2"
                                  >
                                    <Download className="w-4 h-4" />
                                    Ver PDF
                                  </a>
                                </div>
                                <div className="mt-4 rounded-lg overflow-hidden border border-white/20 bg-white">
                                  <iframe
                                    src={cert.link}
                                    className="w-full h-96"
                                    title={cert.title}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : selectedProject !== null ? (
                /* Project Detail View */
                <div className="h-full flex flex-col">
                  {/* Navigation Header */}
                  <div className="flex items-center justify-between mb-8">
                    {!isDemoMode && (
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all"
                      >
                        <ArrowLeft className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">Atrás</span>
                      </button>
                    )}
                    <div className="flex items-center gap-2">
                      {isDemoMode ? (
                        <button
                          onClick={() => setIsDemoMode(false)}
                          className="px-4 py-2 rounded-lg bg-red-500/80 hover:bg-red-500 text-white font-medium transition-all"
                        >
                          Salir de Demo
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() => setSelectedProject(selectedProject > 0 ? selectedProject - 1 : projectsData.length - 1)}
                            className="p-2 rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all"
                          >
                            <ChevronLeft className="w-6 h-6 text-white" />
                          </button>
                          <span className="text-white/60 text-sm">{selectedProject + 1} / {projectsData.length}</span>
                          <button
                            onClick={() => setSelectedProject(selectedProject < projectsData.length - 1 ? selectedProject + 1 : 0)}
                            className="p-2 rounded-lg backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all"
                          >
                            <ChevronRight className="w-6 h-6 text-white" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                    <div className="max-w-4xl mx-auto">
                      {/* Project Header */}
                      <div className="flex gap-8 mb-8">
                        <img
                          src={projectsData[selectedProject].image}
                          alt={projectsData[selectedProject].title}
                          className="w-48 h-48 rounded-2xl object-cover"
                        />
                        <div className="flex-1">
                          <h1 className="text-4xl font-bold text-white mb-2">{projectsData[selectedProject].title}</h1>
                          <p className="text-xl text-purple-400 mb-4">{projectsData[selectedProject].tech}</p>
                          <div className="flex items-center gap-4">
                            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm">{projectsData[selectedProject].year}</span>
                            <button
                              onClick={() => setIsDemoMode(true)}
                              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold transition-all shadow-lg hover:shadow-xl"
                            >
                              Ver Demo
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Descripción</h2>
                        <p className="text-white/80 text-lg leading-relaxed">{projectsData[selectedProject].description}</p>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-pink-400 mb-4">Características</h2>
                        <div className="grid grid-cols-2 gap-4">
                          {projectsData[selectedProject].features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-lg backdrop-blur-xl bg-white/5">
                              <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                              <span className="text-white/80">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Demo */}
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-pink-400 mb-4">Demo</h2>
                        <a
                          href={projectsData[selectedProject].demo}
                          target="_blank"
                          className="flex items-center gap-3 p-4 rounded-lg backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all"
                        >
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-white/80">Ver Demo en YouTube</span>
                        </a>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-orange-400 mb-4">Tecnologías</h2>
                        <div className="flex flex-wrap gap-3">
                          {projectsData[selectedProject].technologies.map((tech, idx) => (
                            <span key={idx} className="px-4 py-2 rounded-lg backdrop-blur-xl bg-white/10 text-white font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Normal Content */
                <>
                  {/* Header */}
                  <div ref={headerRef} className="mb-8">
                    <h1 className={`text-4xl font-bold mb-2 text-transparent bg-clip-text transition-all duration-300 ${theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400'
                      : 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500'
                      }`}>
                      {currentLang.greeting}
                    </h1>
                    <p className={`text-sm transition-all duration-300 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-500'
                      }`}>
                      {currentLang.role}
                    </p>
                  </div>

                  {/* Search Bar */}
                  <div className="mb-8">
                    <div className="max-w-xl h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 px-6 flex items-center gap-3">
                      <Search className="w-5 h-5 text-white/60" />
                      <input
                        type="text"
                        placeholder={currentLang.search}
                        className={`flex-1 bg-transparent outline-none transition-all duration-300 ${theme === 'dark' ? 'text-pink-400 placeholder-pink-400/50' : 'text-pink-500 placeholder-pink-500/50'
                          }`}
                      />
                    </div>
                  </div>

                  {/* Technologies Section - Now First */}
                  <section className="mb-10">
                    <div className="flex items-center justify-between mb-5">
                      <h2 className="text-2xl font-bold text-white">{currentLang.technologies}</h2>
                      <button className="text-white/60 hover:text-white text-sm transition-all">{currentLang.seeAll}</button>
                    </div>
                    <div className="flex gap-6">
                      <ArtistCircle name="Kotlin" image="https://i.postimg.cc/VNqmKRpW/Kotlin.png" />
                      <ArtistCircle name="Flutter" image="https://i.postimg.cc/HLwd62R6/flutter.png" />
                      <ArtistCircle name="JavaScript" image="https://logo.svgcdn.com/logos/javascript.png" />
                      <ArtistCircle name="React" image="https://logo.svgcdn.com/logos/react.png" />
                      <ArtistCircle name="Firebase" image="https://cdn.iconscout.com/icon/free/png-256/firebase-3628772-3030134.png" />
                      <ArtistCircle name="PostgreSQL" image="https://logo.svgcdn.com/logos/postgresql.png" />
                      <ArtistCircle name="Docker" image="https://logo.svgcdn.com/logos/docker-icon.png" />
                    </div>
                  </section>

                  {/* Skills Section - Soft Skills */}
                  <section ref={skillsRef} className="mb-10">
                    <div className="flex items-center justify-between mb-5">
                      <h2 className="text-2xl font-bold text-white">Habilidades</h2>
                    </div>

                    <div>
                      <h3 className={`text-lg font-semibold mb-3 transition-all duration-300 ${theme === 'dark' ? 'text-pink-400' : 'text-pink-500'}`}>
                        Habilidades Blandas
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-white/80 text-sm">Trabajo en Equipo</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-white/80 text-sm">Resolución de Problemas</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-white/80 text-sm">Comunicación Efectiva</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-white/80 text-sm">Adaptabilidad</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-white/80 text-sm">Aprendizaje Continuo</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10">
                          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                          <span className="text-white/80 text-sm">Gestión del Tiempo</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Projects Section - Now Second */}
                  <section ref={projectsRef} className="mb-10">
                    <div className="flex items-center justify-between mb-5">
                      <h2 className="text-2xl font-bold text-white">{currentLang.projects}</h2>
                      <button className="text-white/40 hover:text-white/80 text-sm transition-all">{currentLang.seeAll}</button>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {projectsData.map((project, index) => (
                        <button
                          key={project.id}
                          onClick={() => setSelectedProject(index)}
                          className="group relative rounded-xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
                        >
                          <div className="aspect-square overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <div className="p-4">
                            <h3 className="text-white font-semibold text-sm mb-1 truncate">{project.title}</h3>
                            <p className="text-white/60 text-xs mb-2 truncate">{project.tech}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-white/40 text-xs">{project.year}</span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </section>

                  {/* Recently Played */}
                  <section ref={experienceRef}>
                    <div className="flex items-center justify-between mb-5">
                      <h2 className="text-2xl font-bold text-white">{currentLang.experience}</h2>
                      <button className="text-white/60 hover:text-white text-sm transition-all">{currentLang.seeAll}</button>
                    </div>
                    <div className="space-y-2">
                      <RecentSong
                        image="https://logo.svgcdn.com/devicon/androidstudio-original.png"
                        title="Certificación en Desarrollo de Software"
                        artist="Tecnologías de Desarrollo"
                        duration="2024"
                      />
                      <RecentSong
                        image="https://i.postimg.cc/6p1YDxJW/channels4-profile.jpg"
                        title="Ingeniería de Software - ISIL"
                        artist="84 créditos acumulados"
                        duration="2022-2025"
                      />
                    </div>
                  </section>
                </>
              )}
            </div>

            {/* Right Sidebar - Now Playing - Hidden when project selected */}
            {selectedProject === null && (
              <div className="w-80 backdrop-blur-xl bg-white/5 border-l border-white/10 p-6 overflow-y-auto scrollbar-hide">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
                    <h3 className={`font-semibold transition-all duration-300 ${theme === 'dark' ? 'text-pink-400' : 'text-pink-500'
                      }`}>{currentLang.profile}</h3>
                  </div>
                  <div className="rounded-2xl overflow-hidden mb-4">
                    <img
                      src="https://i.postimg.cc/zfVTWyQw/perfil.jpg"
                      alt="Perfil Profesional"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="text-center mb-2">
                    <h3 className="text-white font-semibold text-lg mb-1">Juan Daniel Cantu Guillen</h3>
                    <p className="text-white/60 text-sm">Desarrollador de Software</p>
                  </div>
                </div>

                <div ref={contactRef}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`font-semibold transition-all duration-300 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'
                      }`}>{currentLang.contact}</h3>
                    <List className="w-4 h-4 text-white/60" />
                  </div>
                  <div className="space-y-2">
                    <QueueItem
                      title="danielcantu258@gmail.com"
                      artist={currentLang.email}
                      image="https://logo.svgcdn.com/logos/google-gmail.png"
                      url="mailto:danielcantu258@gmail.com"
                    />
                    <QueueItem
                      title="+51 929077605"
                      artist={currentLang.phone}
                      image="https://logo.svgcdn.com/logos/whatsapp-icon.png"
                      url="https://wa.me/51929077605"
                    />
                    <QueueItem
                      title="linkedin.com/in/danielcantu56"
                      artist="LinkedIn"
                      image="https://logo.svgcdn.com/devicon/linkedin-original.png"
                      url="https://www.linkedin.com/in/danielcantu56"
                    />
                    <QueueItem
                      title="github.com/SrConej0"
                      artist="GitHub"
                      image="https://logo.svgcdn.com/simple-icons/github-dark.png"
                      url="https://github.com/SrConej0"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Bottom Player Controls - Floating with dynamic pastel colors */}
          <div
            className={`absolute bottom-0 left-0 right-0 z-30 h-24 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 px-6 flex items-center gap-6 shadow-2xl transition-all duration-700 ${isPlaying ? `ring-2 ${pastelColors[colorIndex].ring}` : ''
              } ${isDemoMode ? 'translate-y-32 opacity-0' : 'translate-y-0 opacity-100'}`}
            style={{
              boxShadow: isPlaying ? `0 0 30px ${pastelColors[colorIndex].shadow}` : 'none',
            }}
          >
            {/* Song Info */}
            <div className="flex items-center gap-4 w-64">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/200px-Apple_Music_icon.svg.png"
                alt="Apple Music"
                className="w-14 h-14 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-white font-semibold text-sm">Música</h4>
                <p className="text-white/60 text-xs">Reproduciendo ahora</p>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                <button className="text-white/60 hover:text-white transition-all">
                  <Shuffle className="w-4 h-4" />
                </button>
                <button onClick={prevTrack} className="text-white/60 hover:text-white transition-all disabled:opacity-30" disabled={currentTrack === 0}>
                  <SkipBack className="w-5 h-5" />
                </button>
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg"
                >
                  {isPlaying ?
                    <Pause className="w-5 h-5 text-gray-900" fill="currentColor" /> :
                    <Play className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" />
                  }
                </button>
                <button onClick={nextTrack} className="text-white/60 hover:text-white transition-all disabled:opacity-30" disabled={currentTrack === tracks.length - 1}>
                  <SkipForward className="w-5 h-5" />
                </button>
                <button className="text-white/60 hover:text-white transition-all">
                  <Repeat className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-md flex items-center gap-3">
                <span className="text-white/60 text-xs">{Math.floor((progress / 100) * 30)}s</span>
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white/80 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
                </div>
                <span className="text-white/60 text-xs">30s</span>
              </div>
            </div>

            {/* Custom Music Player & Volume */}
            <div className="w-96 flex items-center gap-3">
              {/* Track List */}
              <div className="flex-1 backdrop-blur-xl bg-black/20 rounded-lg p-2 border border-white/10 max-h-20 overflow-y-auto scrollbar-hide">
                <div className="space-y-1">
                  {tracks.map((track, index) => (
                    <button
                      key={track.id}
                      onClick={() => selectTrack(index)}
                      className={`w-full flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 transition-all ${currentTrack === index ? 'bg-white/10' : ''
                        }`}
                    >
                      <div className="w-1 h-1 rounded-full bg-green-400"></div>
                      <div className="flex-1 text-left min-w-0">
                        <p className="text-white text-xs truncate">{track.title}</p>
                        <p className="text-white/40 text-[10px] truncate">{track.artist}</p>
                      </div>
                      {currentTrack === index && isPlaying && (
                        <div className="w-3 h-3 flex items-center justify-center">
                          <div className="w-1 h-2 bg-green-400 animate-pulse"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-2">
                <button className="text-white/60 hover:text-white transition-all">
                  <Volume2 className="w-4 h-4" />
                </button>
                <div
                  className="w-16 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const newVolume = Math.max(0, Math.min(1, x / rect.width));
                    setVolume(newVolume);
                  }}
                >
                  <div className="h-full bg-white/80 rounded-full transition-all" style={{ width: `${volume * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Hidden Audio Element */}
          <audio ref={audioRef} src={tracks[currentTrack].preview} />

        </div>
      </div>
    </div >
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${active ? 'bg-white/20' : 'hover:bg-white/10'
        }`}>
      <span className={active ? 'text-cyan-400' : 'text-white/60 hover:text-cyan-300'}>{icon}</span>
      <span className={`text-sm font-medium transition-all ${active
        ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'
        : 'text-white/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-300 hover:to-purple-300'
        }`}>
        {label}
      </span>
    </button>
  );
}

function CollectionItem({ image, name, type }: { image: string; name: string; type: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition-all group">
      <img src={image} alt={name} className="w-10 h-10 rounded-lg object-cover" />
      <div className="text-left flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate group-hover:text-white transition-all">{name}</p>
        <p className="text-white/50 text-xs">{type}</p>
      </div>
    </button>
  );
}

function SongCard({ image, title, artist, duration }: { image: string; title: string; artist: string; duration: string }) {
  return (
    <button className="group relative rounded-xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all">
      <div className="aspect-square overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold mb-1 truncate">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-white/60 text-sm truncate">{artist}</p>
          <span className="text-white/60 text-xs">{duration}</span>
        </div>
      </div>
    </button>
  );
}

function ArtistCircle({ name, image }: { name: string; image: string }) {
  return (
    <button className="group flex flex-col items-center gap-3 hover:transform hover:scale-105 transition-all">
      <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-white/40 transition-all">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <span className="text-white text-sm font-medium">{name}</span>
    </button>
  );
}

function RecentSong({ image, title, artist, duration }: { image: string; title: string; artist: string; duration: string }) {
  return (
    <button className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-all group">
      <img src={image} alt={title} className="w-12 h-12 rounded-lg object-cover" />
      <div className="flex-1 text-left min-w-0">
        <h4 className="text-white font-medium text-sm truncate">{title}</h4>
        <p className="text-white/60 text-xs truncate">{artist}</p>
      </div>
      <span className="text-white/60 text-sm">{duration}</span>
      <Play className="w-5 h-5 text-white/0 group-hover:text-white/80 transition-all" />
    </button>
  );
}

function QueueItem({ title, artist, image, url }: { title: string; artist: string; image: string; url?: string }) {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-all group ${url ? 'cursor-pointer' : ''}`}
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded-lg object-cover"
      />
      <div className="flex-1 text-left min-w-0">
        <h4 className="text-white font-medium text-sm truncate">{title}</h4>
        <p className="text-white/60 text-xs truncate">{artist}</p>
      </div>
      <Play className="w-4 h-4 text-white/0 group-hover:text-white/80 transition-all" />
    </button>
  );
}

export default App;
