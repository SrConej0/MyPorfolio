import { Home, Music, Mic2, Disc3, Radio, Search, Bell, Settings, User, Plus, Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, List } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

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

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Set initial volume
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  // Color rotation for bottom player
  const [colorIndex, setColorIndex] = useState(0);
  const pastelColors = [
    { ring: 'ring-rose-300/40', shadow: 'rgba(251,207,232,0.4)' },      // Rosa
    { ring: 'ring-purple-300/40', shadow: 'rgba(216,180,254,0.4)' },    // Púrpura
    { ring: 'ring-blue-300/40', shadow: 'rgba(147,197,253,0.4)' },      // Azul
    { ring: 'ring-cyan-300/40', shadow: 'rgba(103,232,249,0.4)' },      // Cyan
    { ring: 'ring-green-300/40', shadow: 'rgba(134,239,172,0.4)' },     // Verde
    { ring: 'ring-yellow-300/40', shadow: 'rgba(253,224,71,0.4)' },     // Amarillo
    { ring: 'ring-orange-300/40', shadow: 'rgba(253,186,116,0.4)' },    // Naranja
  ];

  // Change color every 3 seconds when playing
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % pastelColors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, pastelColors.length]);

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Audio Reactive Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />


      {/* Main Container */}
      <div className="relative min-h-screen p-8 flex items-center justify-center">
        <div className="w-full max-w-[1400px] h-[850px] relative">

          {/* 1. Top Browser Bar - Floating */}
          <div className={`absolute top-0 left-0 right-0 z-30 h-16 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 flex items-center px-6 gap-4 shadow-2xl transition-all ${isPlaying ? 'ring-1 ring-purple-300/20' : ''}`}>
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-lg backdrop-blur-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <span className="text-white/70 text-sm">←</span>
              </button>
              <button className="w-8 h-8 rounded-lg backdrop-blur-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <span className="text-white/70 text-sm">→</span>
              </button>
            </div>

            <div className="flex-1 max-w-2xl mx-auto">
              <div className="h-10 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 px-4 flex items-center">
                <span className="text-white/60 text-sm">juandanielcantu.dev</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-lg backdrop-blur-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <User className="w-4 h-4 text-white/70" />
              </button>
              <button className="w-8 h-8 rounded-lg backdrop-blur-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <Plus className="w-4 h-4 text-white/70" />
              </button>
            </div>
          </div>

          {/* 2. Left Icon Bar - Floating with pulse */}
          <div className={`absolute left-0 top-20 bottom-28 z-20 w-16 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 flex flex-col items-center py-6 gap-6 shadow-2xl transition-all ${isPlaying ? 'ring-1 ring-orange-300/20' : ''}`}>
            <Search className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer transition-all" />
            <Bell className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer transition-all" />
            <Settings className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer transition-all" />
            <User className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer transition-all mt-auto" />
          </div>

          {/* 3. Main Content Area - Center with Navigation with pulse */}
          <div className={`absolute left-20 right-0 top-20 bottom-28 z-10 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 flex shadow-2xl overflow-hidden transition-all ${isPlaying ? 'ring-1 ring-cyan-300/20' : ''}`}>
            {/* Left Navigation Menu */}
            <div className="w-56 backdrop-blur-xl bg-white/5 border-r border-white/10 py-6 px-4 overflow-y-auto scrollbar-hide">
              <nav className="space-y-2">
                <NavItem icon={<Home className="w-5 h-5" />} label="Inicio" active />
                <NavItem icon={<Music className="w-5 h-5" />} label="Proyectos" />
                <NavItem icon={<Mic2 className="w-5 h-5" />} label="Habilidades" />
                <NavItem icon={<Disc3 className="w-5 h-5" />} label="Educación" />
                <NavItem icon={<Radio className="w-5 h-5" />} label="Contacto" />
              </nav>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white/60 text-xs uppercase font-semibold tracking-wider">Mis Especialidades</h3>
                  <Plus className="w-4 h-4 text-white/60 hover:text-white/90 cursor-pointer" />
                </div>
                <div className="space-y-1">
                  <CollectionItem image="https://i.postimg.cc/VNqmKRpW/Kotlin.png" name="Desarrollo Móvil" type="Especialidad" />
                  <CollectionItem image="https://logo.svgcdn.com/logos/javascript.png" name="Desarrollo Web" type="Especialidad" />
                  <CollectionItem image="https://i.postimg.cc/HLwd62R6/flutter.png" name="Flutter & Kotlin" type="Stack" />
                  <CollectionItem image="https://logo.svgcdn.com/logos/php.png" name="JavaScript & PHP" type="Stack" />
                  <CollectionItem image="https://logo.svgcdn.com/simple-icons/bookstack-dark.png" name="Certificaciones" type="Logros" />
                  <CollectionItem image="https://i.postimg.cc/6p1YDxJW/channels4-profile.jpg" name="ISIL - Software" type="Educación" />
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">¡Hola! Soy Juan Daniel Cantu Guillen</h1>
                <p className="text-white/60 text-sm">Desarrollador de Software | Móvil & Web</p>
              </div>

              {/* Search Bar */}
              <div className="mb-8">
                <div className="max-w-xl h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 px-6 flex items-center gap-3">
                  <Search className="w-5 h-5 text-white/60" />
                  <input
                    type="text"
                    placeholder="Buscar proyectos, habilidades o experiencia..."
                    className="flex-1 bg-transparent text-white placeholder-white/40 outline-none"
                  />
                </div>
              </div>

              {/* Trending Songs */}
              <section className="mb-10">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-2xl font-bold text-white">Proyectos Destacados</h2>
                  <button className="text-white/60 hover:text-white text-sm transition-all">Ver todos</button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <SongCard
                    image="https://i.postimg.cc/HLwd62R6/flutter.png"
                    title="App de Tareas"
                    artist="Flutter + Firebase"
                    duration="2024"
                  />
                  <SongCard
                    image="https://logo.svgcdn.com/logos/php.png"
                    title="E-commerce Web"
                    artist="React + PHP"
                    duration="2024"
                  />
                  <SongCard
                    image="https://logo.svgcdn.com/logos/javascript.png"
                    title="Portfolio Interactivo"
                    artist="JavaScript + CSS"
                    duration="2025"
                  />
                </div>
              </section>

              {/* Popular Artists */}
              <section className="mb-10">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-2xl font-bold text-white">Tecnologías Principales</h2>
                  <button className="text-white/60 hover:text-white text-sm transition-all">See all</button>
                </div>
                <div className="flex gap-6">
                  <ArtistCircle name="Kotlin" image="https://i.postimg.cc/VNqmKRpW/Kotlin.png" />
                  <ArtistCircle name="Flutter" image="https://i.postimg.cc/HLwd62R6/flutter.png" />
                  <ArtistCircle name="JavaScript" image="https://logo.svgcdn.com/logos/javascript.png" />
                  <ArtistCircle name="PHP" image="https://logo.svgcdn.com/logos/php.png" />
                  <ArtistCircle name="Firebase" image="https://i.postimg.cc/zfC8xj60/firebase.png" />
                </div>
              </section>

              {/* Recently Played */}
              <section>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-2xl font-bold text-white">Experiencia Reciente</h2>
                  <button className="text-white/60 hover:text-white text-sm transition-all">See all</button>
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
            </div>

            {/* Right Sidebar - Now Playing */}
            <div className="w-80 backdrop-blur-xl bg-white/5 border-l border-white/10 p-6 overflow-y-auto scrollbar-hide">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
                  <h3 className="text-white font-semibold">Perfil Profesional</h3>
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

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Contacto</h3>
                  <List className="w-4 h-4 text-white/60" />
                </div>
                <div className="space-y-2">
                  <QueueItem
                    title="danielcantu258@gmail.com"
                    artist="Email"
                    image="https://logo.svgcdn.com/logos/google-gmail.png"
                    url="mailto:danielcantu258@gmail.com"
                  />
                  <QueueItem
                    title="+51 929077605"
                    artist="Teléfono"
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
          </div>

          {/* 4. Bottom Player Controls - Floating with dynamic pastel colors */}
          <div
            className={`absolute bottom-0 left-0 right-0 z-30 h-24 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 px-6 flex items-center gap-6 shadow-2xl transition-all duration-1000 ${isPlaying ? `ring-2 ${pastelColors[colorIndex].ring}` : ''}`}
            style={{
              boxShadow: isPlaying ? `0 0 30px ${pastelColors[colorIndex].shadow}` : 'none',
            }}
          >
            {/* Song Info */}
            <div className="flex items-center gap-4 w-64">
              <img
                src="https://logo.svgcdn.com/cib/apple-music-dark.png"
                alt="Apple Music"
                className="w-14 h-14 rounded-lg object-cover p-2 bg-white/10"
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
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${active ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10 hover:text-white'
      }`}>
      {icon}
      <span className="font-medium">{label}</span>
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
