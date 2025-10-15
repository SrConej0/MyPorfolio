import { Home, Music, Mic2, Disc3, Radio, Search, Bell, Settings, User, Plus, Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, List } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
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
          <div className="absolute top-0 left-0 right-0 z-30 h-16 rounded-t-3xl backdrop-blur-xl bg-white/10 border border-white/20 flex items-center px-6 gap-4 shadow-2xl">
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
                <span className="text-white/60 text-sm">groovesync.com</span>
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

          {/* 2. Left Icon Bar - Floating */}
          <div className="absolute left-0 top-20 bottom-28 z-20 w-16 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 flex flex-col items-center py-6 gap-6 shadow-2xl">
            <Search className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer transition-all" />
            <Bell className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer transition-all" />
            <Settings className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer transition-all" />
            <User className="w-5 h-5 text-white/60 hover:text-white/90 cursor-pointer transition-all mt-auto" />
          </div>

          {/* 3. Main Content Area - Center with Navigation */}
          <div className="absolute left-20 right-0 top-20 bottom-28 z-10 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 flex shadow-2xl overflow-hidden">
            {/* Left Navigation Menu */}
            <div className="w-56 backdrop-blur-xl bg-white/5 border-r border-white/10 py-6 px-4 overflow-y-auto scrollbar-hide">
              <nav className="space-y-2">
                <NavItem icon={<Home className="w-5 h-5" />} label="Home" active />
                <NavItem icon={<Music className="w-5 h-5" />} label="Songs" />
                <NavItem icon={<Mic2 className="w-5 h-5" />} label="Artists" />
                <NavItem icon={<Disc3 className="w-5 h-5" />} label="Albums" />
                <NavItem icon={<Radio className="w-5 h-5" />} label="Podcast" />
              </nav>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white/60 text-xs uppercase font-semibold tracking-wider">Your Collections</h3>
                  <Plus className="w-4 h-4 text-white/60 hover:text-white/90 cursor-pointer" />
                </div>
                <div className="space-y-1">
                  <CollectionItem image="https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?w=100" name="Eve" type="Artist" />
                  <CollectionItem image="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=100" name="Yoasobi" type="Artist" />
                  <CollectionItem image="https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?w=100" name="Study lofi" type="Playlist" />
                  <CollectionItem image="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?w=100" name="Coffee Chill" type="Playlist" />
                  <CollectionItem image="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?w=100" name="Anime lofi" type="Playlist" />
                  <CollectionItem image="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?w=100" name="Ghibli Vibes" type="Playlist" />
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
                {/* Header */}
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-white mb-2">Welcome back, Kenshii!</h1>
                  <p className="text-white/60 text-sm">112 new playlist for you</p>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                  <div className="max-w-xl h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 px-6 flex items-center gap-3">
                    <Search className="w-5 h-5 text-white/60" />
                    <input
                      type="text"
                      placeholder="Search by title, artist, or album..."
                      className="flex-1 bg-transparent text-white placeholder-white/40 outline-none"
                    />
                  </div>
                </div>

                {/* Trending Songs */}
                <section className="mb-10">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-2xl font-bold text-white">Trending songs this week</h2>
                    <button className="text-white/60 hover:text-white text-sm transition-all">See all</button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <SongCard
                      image="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?w=400"
                      title="Pink + White"
                      artist="Frank Ocean"
                      duration="3:04"
                    />
                    <SongCard
                      image="https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?w=400"
                      title="Yoru ni Kakeru"
                      artist="Yoasobi"
                      duration="4:21"
                    />
                    <SongCard
                      image="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?w=400"
                      title="SYRE"
                      artist="Jaden"
                      duration="3:54"
                    />
                  </div>
                </section>

                {/* Popular Artists */}
                <section className="mb-10">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-2xl font-bold text-white">Popular artists</h2>
                    <button className="text-white/60 hover:text-white text-sm transition-all">See all</button>
                  </div>
                  <div className="flex gap-6">
                    <ArtistCircle name="JVKE" image="https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?w=200" />
                    <ArtistCircle name="The Weeknd" image="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?w=200" />
                    <ArtistCircle name="Yeat" image="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?w=200" />
                    <ArtistCircle name="Travis Scott" image="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200" />
                    <ArtistCircle name="Joji" image="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?w=200" />
                  </div>
                </section>

                {/* Recently Played */}
                <section>
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-2xl font-bold text-white">Recently played</h2>
                    <button className="text-white/60 hover:text-white text-sm transition-all">See all</button>
                  </div>
                  <div className="space-y-2">
                    <RecentSong
                      image="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?w=100"
                      title="Trance"
                      artist="Metro Boomin, Travis Scott, Young Thug"
                      duration="3:14"
                    />
                    <RecentSong
                      image="https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?w=100"
                      title="Look at the Sky"
                      artist="Porter Robinson"
                      duration="5:09"
                    />
                  </div>
                </section>
              </div>

            {/* Right Sidebar - Now Playing */}
            <div className="w-80 backdrop-blur-xl bg-white/5 border-l border-white/10 p-6 overflow-y-auto scrollbar-hide">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
                    <h3 className="text-white font-semibold">Now Playing</h3>
                  </div>
                  <div className="rounded-2xl overflow-hidden mb-4">
                    <img
                      src="https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?w=400"
                      alt="Now Playing"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="text-center mb-2">
                    <h3 className="text-white font-semibold text-lg mb-1">Cry</h3>
                    <p className="text-white/60 text-sm">Cigarettes After Sex</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Queue</h3>
                    <List className="w-4 h-4 text-white/60" />
                  </div>
                  <div className="space-y-2">
                    <QueueItem title="Sweet" artist="Cigarettes After Sex" />
                    <QueueItem title="Heavenly" artist="Cigarettes After Sex" />
                    <QueueItem title="Apocalypse" artist="Cigarettes After Sex" />
                  </div>
                </div>
              </div>
          </div>

          {/* 4. Bottom Player Controls - Floating */}
          <div className="absolute bottom-0 left-0 right-0 z-30 h-24 rounded-b-3xl backdrop-blur-xl bg-white/10 border border-white/20 px-6 flex items-center gap-6 shadow-2xl">
            {/* Song Info */}
            <div className="flex items-center gap-4 w-64">
              <img
                src="https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?w=100"
                alt="Now Playing"
                className="w-14 h-14 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-white font-semibold text-sm">Cry</h4>
                <p className="text-white/60 text-xs">Cigarettes After Sex</p>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                <button className="text-white/60 hover:text-white transition-all">
                  <Shuffle className="w-4 h-4" />
                </button>
                <button className="text-white/60 hover:text-white transition-all">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg"
                >
                  {isPlaying ?
                    <Pause className="w-5 h-5 text-gray-900" fill="currentColor" /> :
                    <Play className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" />
                  }
                </button>
                <button className="text-white/60 hover:text-white transition-all">
                  <SkipForward className="w-5 h-5" />
                </button>
                <button className="text-white/60 hover:text-white transition-all">
                  <Repeat className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-md flex items-center gap-3">
                <span className="text-white/60 text-xs">1:12</span>
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white/80 rounded-full" style={{ width: '33%' }}></div>
                </div>
                <span className="text-white/60 text-xs">3:54</span>
              </div>
            </div>

            {/* Volume Controls */}
            <div className="w-64 flex items-center justify-end gap-4">
              <button className="text-white/60 hover:text-white transition-all">
                <Volume2 className="w-5 h-5" />
              </button>
              <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white/80 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
      active ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10 hover:text-white'
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

function QueueItem({ title, artist }: { title: string; artist: string }) {
  return (
    <button className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-all group">
      <img
        src="https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?w=100"
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
