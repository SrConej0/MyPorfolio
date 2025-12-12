import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Specializations from './components/Specializations';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-pink-900/50" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Profile />
        <Skills />
        <Specializations />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <div className="backdrop-blur-xl bg-white/5 border-t border-white/10 py-6">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Juan Daniel Cantu Guillen. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
