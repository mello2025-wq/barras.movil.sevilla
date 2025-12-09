import { Wine, PartyPopper, Building2, MapPin, Phone, Instagram } from 'lucide-react';
import { ServiceItem, GalleryImage } from './types';

export const BUSINESS_INFO = {
  name: "Barras Móvil",
  owner: "Carlos Sevilla",
  phone: "+507 6532-0316",
  phoneClean: "50765320316",
  instagram: "@barras_movil",
  instagramUrl: "https://instagram.com/barras_movil",
  location: "David, Chiriquí - Panamá",
  ctaMessage: "Hola, me gustaría cotizar una barra móvil para mi evento."
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'weddings',
    title: 'Bodas',
    description: 'Elegancia y sabor para el día más especial. Cócteles de autor diseñados para tus invitados.',
    icon: Wine
  },
  {
    id: 'private',
    title: 'Fiestas Privadas',
    description: 'Cumpleaños, aniversarios o reuniones. Llevamos la fiesta y la mejor experiencia de bar a tu casa.',
    icon: PartyPopper
  },
  {
    id: 'corporate',
    title: 'Eventos Corporativos',
    description: 'Impresiona a tus clientes y colaboradores con un servicio de coctelería profesional de alto nivel.',
    icon: Building2
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'img1',
    // Foto real proporcionada por el usuario (FOTO-1)
    url: 'https://i.postimg.cc/N0yctKnG/FOTO-1.png', 
    alt: 'Mixólogo profesional preparando cócteles de autor',
    category: 'corporate'
  },
  {
    id: 'img2',
    // Foto real proporcionada por el usuario (FOTO-2)
    url: 'https://i.postimg.cc/6QDyxJYH/FOTO-2.png', 
    alt: 'Preparación de cócteles frutales en Barra Móvil',
    category: 'party'
  },
  {
    id: 'img3',
    // Foto real proporcionada por el usuario (FOTO-5)
    url: 'https://i.postimg.cc/kMyXfb3Y/FOTO-5.png', 
    alt: 'Montaje profesional de barra móvil con equipamiento completo',
    category: 'wedding'
  },
  {
    id: 'img4',
    // Foto real proporcionada por el usuario (FOTO-6)
    url: 'https://i.postimg.cc/C1sYPWt4/FOTO-6.png', 
    alt: 'Selección exclusiva de vinos tintos y blancos',
    category: 'corporate'
  },
  {
    id: 'img5',
    // Foto real proporcionada por el usuario (FOTO-7)
    url: 'https://i.postimg.cc/L4qh6sry/FOTO-7.png', 
    alt: 'Atención personalizada y servicio de bar en eventos',
    category: 'party'
  }
];

export const CONTACT_ICONS = {
  Location: MapPin,
  Phone: Phone,
  Instagram: Instagram
};