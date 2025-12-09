import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MapPin, Phone, ExternalLink, ChevronDown, CheckCircle2, Wine, GlassWater, Quote } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, GALLERY_IMAGES } from './constants';
import { AiBartender } from './components/AiBartender';

// Helper component for Section Headers
const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 px-4">
    <h2 className={`text-4xl md:text-5xl font-serif mb-4 ${light ? 'text-brand-dark' : 'text-white'}`}>
      {title}
    </h2>
    <div className="flex justify-center items-center gap-2 mb-6">
      <div className="h-[1px] w-12 bg-brand-gold"></div>
      <Wine className="text-brand-gold w-6 h-6" />
      <div className="h-[1px] w-12 bg-brand-gold"></div>
    </div>
    {subtitle && (
      <p className={`max-w-2xl mx-auto text-lg font-light ${light ? 'text-gray-600' : 'text-gray-400'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${BUSINESS_INFO.phoneClean}?text=${encodeURIComponent(BUSINESS_INFO.ctaMessage)}`;

  // FIX: Custom scroll handler to prevent browser navigation errors (Connection Refused)
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Stop the browser from trying to navigate to a new URL
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-brand-dark text-gray-200 overflow-x-hidden selection:bg-brand-gold selection:text-black">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-lg border-b border-brand-gold/20' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3 z-50">
            {/* Logo Recreation based on Photo */}
            <div className="flex flex-col">
               <div className="flex items-baseline">
                 <span className="font-script text-4xl text-white mr-2 logo-shadow">Barras</span>
                 <span className="font-sans font-light text-2xl text-white tracking-widest uppercase logo-shadow">Móvil</span>
               </div>
               {/* Cocktail icons colored like the logo */}
               <div className="flex gap-1 justify-center mt-1">
                 <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                 <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                 <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
               </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-brand-gold transition-colors text-xs uppercase tracking-[0.2em] font-medium cursor-pointer">Servicios</a>
            <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="hover:text-brand-gold transition-colors text-xs uppercase tracking-[0.2em] font-medium cursor-pointer">Galería</a>
            <a href="#ai-mixologist" onClick={(e) => scrollToSection(e, 'ai-mixologist')} className="hover:text-brand-gold transition-colors text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-1 cursor-pointer">
              IA Bar
            </a>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-gold hover:bg-white hover:text-black text-black px-6 py-2 rounded-sm font-bold uppercase tracking-widest text-xs transition-all duration-300"
            >
              Cotizar
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 text-white hover:text-brand-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-brand-dark z-40 flex flex-col items-center justify-center gap-8 md:hidden">
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-xl font-serif text-white hover:text-brand-gold cursor-pointer">Servicios</a>
            <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="text-xl font-serif text-white hover:text-brand-gold cursor-pointer">Galería</a>
            <a href="#ai-mixologist" onClick={(e) => scrollToSection(e, 'ai-mixologist')} className="text-xl font-serif text-white hover:text-brand-gold cursor-pointer">IA Bartender</a>
            <a onClick={() => setMobileMenuOpen(false)} href={whatsappLink} className="text-brand-gold text-xl font-bold uppercase tracking-widest border-b border-brand-gold pb-2 cursor-pointer">Cotizar Ahora</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Elegant Dark Mood */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574096079513-d82599602950?q=80&w=1920&auto=format&fit=crop" 
            alt="Bar Atmosphere" 
            className="w-full h-full object-cover"
          />
          {/* Heavy gradient overlay to match the black glossy bar look */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-brand-dark"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center relative mt-12">
          <span className="block text-brand-gold tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-semibold animate-fade-in-up">
            Fiestas &bull; Eventos &bull; Bodas
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Barras <br/>
            <span className="font-script text-brand-gold text-6xl md:text-8xl lg:text-9xl relative -top-2 md:-top-4">Movil</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-gray-300 mb-12 text-lg md:text-xl font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Servicio de coctelería móvil de alta gama en {BUSINESS_INFO.location}. 
            Donde la elegancia se encuentra con el buen gusto.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-gold to-[#a67c00] text-black text-sm font-bold py-4 px-10 rounded-sm uppercase tracking-widest hover:brightness-110 transition-all w-full sm:w-auto shadow-lg shadow-brand-gold/20"
            >
              Cotizar Evento
            </a>
            <a 
              href="#gallery"
              onClick={(e) => scrollToSection(e, 'gallery')}
              className="border border-white/20 hover:border-white hover:bg-white/5 text-white text-sm font-bold py-4 px-10 rounded-sm uppercase tracking-widest transition-all w-full sm:w-auto backdrop-blur-sm cursor-pointer"
            >
              Ver Galería
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-charcoal relative">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Nuestros Servicios" 
            subtitle="Nos adaptamos a la estética y necesidades de tu evento con profesionalismo y estilo."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="group relative p-10 bg-brand-dark border border-white/5 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-red to-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="w-14 h-14 bg-brand-charcoal rounded-full flex items-center justify-center mb-8 text-brand-gold group-hover:text-white group-hover:bg-brand-gold transition-colors duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy / Leather & Wood Vibe */}
      <section className="py-24 bg-brand-dark border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
                {/* Image frame styling to match the classiness */}
                <div className="absolute inset-0 border-2 border-brand-gold/30 transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1920&auto=format&fit=crop" 
                  alt="Preparation of cocktails" 
                  className="relative shadow-2xl z-10 w-full filter sepia-[.2] contrast-110"
                />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-brand-leather"></div>
                <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs">Experiencia Premium</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
                El Arte de la <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-orange">Mixología</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 font-light">
                Inspirados en los bares clásicos pero con un toque moderno. En <strong>Barras Móvil</strong>, no solo servimos bebidas; curamos una experiencia visual y gustativa que complementa la elegancia de tu evento.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Bartenders Uniformados (Estilo Clásico)",
                  "Insumos de Alta Calidad",
                  "Barra Iluminada (Elegante)",
                  "Cristalería de Vidrio",
                  "Menús Personalizados"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="text-brand-gold w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </div>

              <div className="mt-10">
                 <p className="font-script text-3xl text-gray-500">Carlos Sevilla</p>
                 <p className="text-xs uppercase tracking-widest text-brand-leather mt-1">Mixólogo & Propietario</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Updated grid for aesthetic */}
      <section id="gallery" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Galería de Eventos" 
            subtitle="Un vistazo a nuestros montajes recientes."
          />
          
          {/* Masonry Layout Simulation */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mx-auto max-w-7xl">
            {GALLERY_IMAGES.map((item) => (
              <div key={item.id} className="break-inside-avoid relative group overflow-hidden bg-brand-charcoal">
                {/* Subtle border instead of shadow */}
                <div className="relative">
                  <img 
                    src={item.url} 
                    alt={item.alt} 
                    className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  {/* Overlay matching the brand colors */}
                  <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center border-[10px] border-brand-dark/0 group-hover:border-brand-dark/20">
                    <span className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-3 border-b border-brand-gold pb-1">{item.category}</span>
                    <p className="text-white font-serif text-xl italic">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-dark relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Experiencias Reales" 
            subtitle="Historias de celebraciones inolvidables en Chiriquí." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-brand-charcoal/50 p-10 border border-white/5 relative group hover:border-brand-gold/30 transition-all duration-300">
              <Quote className="text-brand-gold w-12 h-12 mb-6 opacity-20 absolute top-8 right-8" />
              <div className="flex text-brand-gold mb-6 text-sm">★★★★★</div>
              <p className="text-gray-300 font-serif italic text-lg leading-relaxed mb-8">
                "El servicio fue impecable. Los cócteles no solo estaban deliciosos, sino que la presentación fue espectacular. Definitivamente el toque de clase que mi boda necesitaba."
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white font-bold uppercase text-xs tracking-[0.15em]">Ana & Roberto</p>
                <p className="text-gray-500 text-xs mt-2 uppercase tracking-wide">Boda en Boquete</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-brand-charcoal/50 p-10 border border-white/5 relative group hover:border-brand-gold/30 transition-all duration-300">
              <Quote className="text-brand-gold w-12 h-12 mb-6 opacity-20 absolute top-8 right-8" />
              <div className="flex text-brand-gold mb-6 text-sm">★★★★★</div>
              <p className="text-gray-300 font-serif italic text-lg leading-relaxed mb-8">
                "Contratamos a Barras Móvil para nuestro evento corporativo. Carlos y su equipo son verdaderos profesionales. La barra de gin tonics fue un éxito total entre los socios."
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white font-bold uppercase text-xs tracking-[0.15em]">Grupo Sinergia</p>
                <p className="text-gray-500 text-xs mt-2 uppercase tracking-wide">Evento Corporativo</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-brand-charcoal/50 p-10 border border-white/5 relative group hover:border-brand-gold/30 transition-all duration-300">
              <Quote className="text-brand-gold w-12 h-12 mb-6 opacity-20 absolute top-8 right-8" />
              <div className="flex text-brand-gold mb-6 text-sm">★★★★★</div>
              <p className="text-gray-300 font-serif italic text-lg leading-relaxed mb-8">
                "Excelente atención al detalle. Desde la cristalería hasta la decoración de la barra. Mis invitados no paraban de elogiar los mojitos de maracuyá y la buena vibra."
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white font-bold uppercase text-xs tracking-[0.15em]">Sofía Martínez</p>
                <p className="text-gray-500 text-xs mt-2 uppercase tracking-wide">Fiesta Privada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Bartender Section - Redesigned to be classy */}
      <section id="ai-mixologist" className="py-24 bg-brand-charcoal relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader 
            title="Tu Sommelier Virtual" 
            subtitle="¿Buscas inspiración? Describe el ambiente de tu evento y te sugeriremos el cóctel de autor ideal."
          />
          <AiBartender />
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-black pt-20 pb-10 border-t border-brand-gold/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Brand Info */}
            <div className="text-center md:text-left">
               <div className="flex items-baseline justify-center md:justify-start mb-4">
                 <span className="font-script text-3xl text-white mr-2">Barras</span>
                 <span className="font-sans font-light text-xl text-white tracking-widest uppercase">Móvil</span>
               </div>
               <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                 Servicio exclusivo en David, Chiriquí. <br/>
                 Hacemos de tu brindis un momento memorable.
               </p>
               <div className="flex justify-center md:justify-start gap-4">
                 <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-charcoal text-gray-400 p-3 rounded-sm hover:bg-brand-gold hover:text-black transition-colors">
                   <Instagram size={18} />
                 </a>
               </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">Navegación</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Servicios</a></li>
                <li><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Galería</a></li>
                <li><a href="#ai-mixologist" onClick={(e) => scrollToSection(e, 'ai-mixologist')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Sommelier Virtual</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">Contacto</h4>
              <div className="flex flex-col gap-4 items-center md:items-end text-sm">
                <a href={whatsappLink} className="flex items-center gap-3 text-gray-400 hover:text-white group">
                  <span className="group-hover:text-brand-gold transition-colors">{BUSINESS_INFO.phone}</span>
                  <Phone size={16} />
                </a>
                <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white group">
                  <span className="group-hover:text-brand-gold transition-colors">{BUSINESS_INFO.instagram}</span>
                  <ExternalLink size={16} />
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <span>{BUSINESS_INFO.location}</span>
                  <MapPin size={16} />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-700 text-xs tracking-wider uppercase">
            <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button - Elegant Version */}
      <a 
        href={whatsappLink}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-105 hover:bg-[#1ebc57] flex items-center gap-3 group"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium text-sm">
          Contáctanos
        </span>
      </a>
    </div>
  );
};

export default App;