import { ThemeDetail } from './types';
// Card Components
import DarkDeveloperUI from './components/themes/DarkDeveloperUI';
import NeomorphismUI from './components/themes/NeomorphismUI';
import GlassmorphismUI from './components/themes/GlassmorphismUI';
import MinimalistUI from './components/themes/MinimalistUI';
import BrutalistUI from './components/themes/BrutalistUI';
import MaterialUI from './components/themes/MaterialUI';
import IOSLightUI from './components/themes/IOSLightUI';
import CyberpunkUI from './components/themes/CyberpunkUI';
import DashboardUI from './components/themes/DashboardUI';
import PortfolioUI from './components/themes/PortfolioUI';
import EcommerceUI from './components/themes/EcommerceUI';
import BlogUI from './components/themes/BlogUI';
import AuroraUI from './components/themes/AuroraUI';
import BentoGridUI from './components/themes/BentoGridUI';
import ClaymorphismUI from './components/themes/ClaymorphismUI';
import SkeuomorphismUI from './components/themes/SkeuomorphismUI';
import MemphisUI from './components/themes/MemphisUI';
import MonochromeUI from './components/themes/MonochromeUI';
import AIChatUI from './components/themes/AIChatUI';
import HolographicUI from './components/themes/HolographicUI';
import KineticTypographyUI from './components/themes/KineticTypographyUI';
import PaperCollageUI from './components/themes/PaperCollageUI';
import HealthcareUI from './components/themes/HealthcareUI';
import EdTechUI from './components/themes/EdTechUI';
import FintechUI from './components/themes/FintechUI';
import TravelUI from './components/themes/TravelUI';
import LegalUI from './components/themes/LegalUI';
import FoodDeliveryUI from './components/themes/FoodDeliveryUI';
import RealEstateUI from './components/themes/RealEstateUI';
import FitnessUI from './components/themes/FitnessUI';
import NewsUI from './components/themes/NewsUI';
import JobBoardUI from './components/themes/JobBoardUI';

// Detail Page Content Components
import DarkDevContent from './components/detailPage/contentBlocks/DarkDevContent';
import NeomorphismContent from './components/detailPage/contentBlocks/NeomorphismContent';
import GlassmorphismContent from './components/detailPage/contentBlocks/GlassmorphismContent';
import MinimalistContent from './components/detailPage/contentBlocks/MinimalistContent';
import BrutalistContent from './components/detailPage/contentBlocks/BrutalistContent';
import MaterialContent from './components/detailPage/contentBlocks/MaterialContent';
import IOSLightContent from './components/detailPage/contentBlocks/IOSLightContent';
import CyberpunkContent from './components/detailPage/contentBlocks/CyberpunkContent';
import DashboardContent from './components/detailPage/contentBlocks/DashboardContent';
import PortfolioContent from './components/detailPage/contentBlocks/PortfolioContent';
import EcommerceContent from './components/detailPage/contentBlocks/EcommerceContent';
import BlogContent from './components/detailPage/contentBlocks/BlogContent';
import AuroraContent from './components/detailPage/contentBlocks/AuroraContent';
import BentoGridContent from './components/detailPage/contentBlocks/BentoGridContent';
import ClaymorphismContent from './components/detailPage/contentBlocks/ClaymorphismContent';
import SkeuomorphismContent from './components/detailPage/contentBlocks/SkeuomorphismContent';
import MemphisContent from './components/detailPage/contentBlocks/MemphisContent';
import MonochromeContent from './components/detailPage/contentBlocks/MonochromeContent';
import AIChatContent from './components/detailPage/contentBlocks/AIChatContent';
import HolographicContent from './components/detailPage/contentBlocks/HolographicContent';
import KineticTypographyContent from './components/detailPage/contentBlocks/KineticTypographyContent';
import PaperCollageContent from './components/detailPage/contentBlocks/PaperCollageContent';
import HealthcareContent from './components/detailPage/contentBlocks/HealthcareContent';
import EdTechContent from './components/detailPage/contentBlocks/EdTechContent';
import FintechContent from './components/detailPage/contentBlocks/FintechContent';
import TravelContent from './components/detailPage/contentBlocks/TravelContent';
import LegalContent from './components/detailPage/contentBlocks/LegalContent';
import FoodDeliveryContent from './components/detailPage/contentBlocks/FoodDeliveryContent';
import RealEstateContent from './components/detailPage/contentBlocks/RealEstateContent';
import FitnessContent from './components/detailPage/contentBlocks/FitnessContent';
import NewsContent from './components/detailPage/contentBlocks/NewsContent';
import JobBoardContent from './components/detailPage/contentBlocks/JobBoardContent';

export const THEME_DETAILS: ThemeDetail[] = [
  {
    id: 'dark-dev',
    name: 'Dark Developer UI',
    cardComponent: DarkDeveloperUI,
    detailContentComponent: DarkDevContent,
    palette: { background: '#0D1117', text: '#C9D1D9', primary: '#2F81F7', secondary: '#238636', accent: '#58A6FF' },
    font: 'font-fira-code',
    hero: { title: 'Built for Developers.', subtitle: 'A dark, focused interface that puts code first. High contrast and syntax highlighting for maximum readability.', image: 'https://picsum.photos/seed/dark-dev/1600/900' },
    features: [
      { icon: 'code', title: 'Syntax Highlighting', description: 'Optimized color palette for code clarity and reduced eye strain during long sessions.' },
      { icon: 'zap', title: 'Blazing Fast', description: 'A lightweight and performant UI that never gets in your way. Instant responses.' },
      { icon: 'terminal', title: 'Integrated Tooling', description: 'Seamlessly blend your tools and workflows with an extensible component library.' },
    ],
  },
  {
    id: 'neomorphism',
    name: 'Neomorphism UI',
    cardComponent: NeomorphismUI,
    detailContentComponent: NeomorphismContent,
    palette: { background: '#e0e5ec', text: '#555e69', primary: '#4B7BFF', secondary: '#e0e5ec', accent: '#6D5DFC' },
    font: 'font-inter',
    hero: { title: 'The Soft UI Revolution', subtitle: 'Experience a new dimension of design with soft, extruded surfaces and subtle shadows.', image: 'https://picsum.photos/seed/neomorphism/1600/900' },
    features: [
      { icon: 'layers', title: '3D Embossed Look', description: 'Elements appear to extrude from the background, creating a tangible, tactile experience.' },
      { icon: 'droplet', title: 'Soft Shadows', description: 'Dual light sources create subtle, realistic shadows that define and lift components.' },
      { icon: 'sliders', title: 'Smooth & Intuitive', description: 'Clean, minimalist aesthetics combined with intuitive interactions for a seamless user flow.' },
    ],
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism UI',
    cardComponent: GlassmorphismUI,
    detailContentComponent: GlassmorphismContent,
    palette: { background: '#1a1a1a', text: '#ffffff', primary: '#FF33A1', secondary: 'rgba(255, 255, 255, 0.1)', accent: '#00F0FF' },
    font: 'font-inter',
    hero: { title: 'Clarity in Design', subtitle: 'Frosted-glass textures, vivid colors, and a sense of depth create a stunning, multi-layered interface.', image: 'https://picsum.photos/seed/glassmorphism/1600/900' },
    features: [
      { icon: 'copy', title: 'Frosted Glass Effect', description: 'Translucent panels with a background blur create a sense of depth and focus.' },
      { icon: 'sun', title: 'Vibrant Accents', description: 'Bright, glowing highlights and colors stand out against the blurred background.' },
      { icon: 'pen-tool', title: 'Clean & Modern', description: 'A lightweight and futuristic aesthetic that feels both elegant and high-tech.' },
    ],
  },
   {
    id: 'minimalist',
    name: 'Minimalist UI',
    cardComponent: MinimalistUI,
    detailContentComponent: MinimalistContent,
    palette: { background: '#FFFFFF', text: '#111111', primary: '#007AFF', secondary: '#F2F2F7', accent: '#007AFF' },
    font: 'font-inter',
    hero: { title: 'Less is More.', subtitle: 'A focus on essential content, generous whitespace, and powerful typography.', image: 'https://picsum.photos/seed/minimalist/1600/900' },
    features: [
      { icon: 'type', title: 'Typography-focused', description: 'Content is king. We use beautiful, readable fonts to make your message clear.' },
      { icon: 'maximize', title: 'High Whitespace', description: 'Generous spacing gives elements room to breathe, improving focus and readability.' },
      { icon: 'pen-tool', title: 'Single Accent Color', description: 'A monochrome palette with one splash of color for call-to-actions and highlights.' },
    ],
  },
  {
    id: 'brutalist',
    name: 'Brutalist Web Design',
    cardComponent: BrutalistUI,
    detailContentComponent: BrutalistContent,
    palette: { background: '#FFFF00', text: '#000000', primary: '#FF0000', secondary: '#0000FF', accent: '#00FF00' },
    font: 'font-times',
    hero: { title: 'RAW. UNFILTERED. HONEST.', subtitle: 'A rugged, uncompromising approach to design that prioritizes raw content and function.', image: 'https://picsum.photos/seed/brutalist/1600/900' },
    features: [
      { icon: 'alert-triangle', title: 'Anti-Aesthetic', description: 'We reject traditional beauty standards in favor of raw, unprocessed presentation.' },
      { icon: 'grid', title: 'Rigid Layouts', description: 'Clear, sharp-edged containers and a strong grid structure define the space.' },
      { icon: 'edit-3', title: 'System Fonts', description: 'No fancy web fonts. We use default, accessible fonts for a raw and honest feel.' },
    ],
  },
  {
    id: 'material',
    name: 'Material Design',
    cardComponent: MaterialUI,
    detailContentComponent: MaterialContent,
    palette: { background: '#F5F5F5', text: '#212121', primary: '#6200EE', secondary: '#03DAC6', accent: '#3700B3' },
    font: 'font-roboto',
    hero: { title: 'Inspired by the Physical World', subtitle: 'A design system by Google that uses tactile surfaces, bold graphics, and intentional motion.', image: 'https://picsum.photos/seed/material/1600/900' },
    features: [
      { icon: 'layers', title: 'Tangible Surfaces', description: 'Elevation and shadows create a sense of depth and a clear visual hierarchy.' },
      { icon: 'move', title: 'Meaningful Motion', description: 'Animations provide feedback, guide the user, and add a touch of delight.' },
      { icon: 'bold', title: 'Bold & Graphic', description: 'Intentional color choices and large-scale typography create a clear, scannable interface.' },
    ],
  },
   {
    id: 'ios-light',
    name: 'iOS-style Light UI',
    cardComponent: IOSLightUI,
    detailContentComponent: IOSLightContent,
    palette: { background: '#F2F2F7', text: '#000000', primary: '#007AFF', secondary: '#FFFFFF', accent: '#34C759' },
    font: 'font-inter',
    hero: { title: 'Familiar, Elegant, and Intuitive.', subtitle: 'A clean, bright interface inspired by Apple’s design guidelines. Clarity and depth in every interaction.', image: 'https://picsum.photos/seed/ios-light/1600/900' },
    features: [
      { icon: 'layers', title: 'Depth & Layering', description: 'Subtle shadows and card-based layouts create a clear visual hierarchy.' },
      { icon: 'lucide-app-window', title: 'Rounded Cards', description: 'Soft, rounded corners provide a friendly and approachable user experience.' },
      { icon: 'check-circle', title: 'Clarity & Legibility', description: 'Uses the system font for crisp, highly readable text at any size.' },
    ],
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk UI',
    cardComponent: CyberpunkUI,
    detailContentComponent: CyberpunkContent,
    palette: { background: '#0a0a0a', text: '#00f0ff', primary: '#db2777', secondary: '#333333', accent: '#fef08a' },
    font: 'font-orbitron',
    hero: { title: 'High Tech, Low Life.', subtitle: 'Dive into a dystopian future with glitchy, neon-drenched interfaces and a futuristic mood.', image: 'https://picsum.photos/seed/cyberpunk/1600/900' },
    features: [
      { icon: 'zap', title: 'Neon & Glitch Effects', description: 'Vibrant, glowing text and glitch animations create a dynamic, high-energy feel.' },
      { icon: 'terminal', title: 'Hacker Aesthetic', description: 'Monospaced fonts, command-line elements, and system warnings for a techy vibe.' },
      { icon: 'activity', title: 'High Contrast', description: 'Deep blacks and bright neon colors ensure a dramatic and visually striking interface.' },
    ],
  },
  {
    id: 'dashboard',
    name: 'Dashboard Analytics',
    cardComponent: DashboardUI,
    detailContentComponent: DashboardContent,
    palette: { background: '#111827', text: '#D1D5DB', primary: '#3B82F6', secondary: '#1F2937', accent: '#10B981' },
    font: 'font-inter',
    hero: { title: 'Data at a Glance.', subtitle: 'A clean, information-dense layout for visualizing metrics, charts, and key performance indicators.', image: 'https://picsum.photos/seed/dashboard/1600/900' },
    features: [
      { icon: 'bar-chart-2', title: 'Clear Visualizations', description: 'Beautiful charts and graphs that make complex data easy to understand.' },
      { icon: 'layout-grid', title: 'Card-Based Layout', description: 'Modular cards allow for a flexible and customizable view of your most important data.' },
      { icon: 'filter', title: 'Powerful Filtering', description: 'Easily drill down into your data with intuitive filters and date range selectors.' },
    ],
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    cardComponent: PortfolioUI,
    detailContentComponent: PortfolioContent,
    palette: { background: '#FFFFFF', text: '#1F2937', primary: '#111827', secondary: '#F3F4F6', accent: '#4F46E5' },
    font: 'font-inter',
    hero: { title: 'Showcase Your Best Work.', subtitle: 'A clean, elegant, and professional layout designed to highlight your projects and skills.', image: 'https://picsum.photos/seed/portfolio-detail/1600/900' },
    features: [
      { icon: 'user', title: 'Centered Hero', description: 'Make a great first impression with a prominent profile picture and bio.' },
      { icon: 'image', title: 'Featured Projects', description: 'A beautiful grid to display your best work with case study links.' },
      { icon: 'send', title: 'Clear Call-to-Action', description: 'An easy-to-find contact button to encourage potential clients and employers.' },
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Product Page',
    cardComponent: EcommerceUI,
    detailContentComponent: EcommerceContent,
    palette: { background: '#FFFFFF', text: '#111827', primary: '#2563EB', secondary: '#F9FAFB', accent: '#EF4444' },
    font: 'font-inter',
    hero: { title: 'Designed to Convert.', subtitle: 'A mobile-friendly, feature-rich layout for showcasing products and driving sales.', image: 'https://picsum.photos/seed/ecommerce-detail/1600/900' },
    features: [
      { icon: 'camera', title: 'Product Gallery', description: 'A multi-image gallery with zoom functionality to show off your products from every angle.' },
      { icon: 'star', title: 'Ratings & Reviews', description: 'Build trust and social proof with a prominent customer review section.' },
      { icon: 'shopping-cart', title: 'Prominent Buy Button', description: 'A sticky, high-contrast "Add to Cart" button that is always accessible.' },
    ],
  },
  {
    id: 'blog',
    name: 'Blog/Article UI',
    cardComponent: BlogUI,
    detailContentComponent: BlogContent,
    palette: { background: '#FFFFFF', text: '#111827', primary: '#4F46E5', secondary: '#F3F4F6', accent: '#D946EF' },
    font: 'font-roboto',
    hero: { title: 'Tell Your Story.', subtitle: 'A beautiful, readable, and engaging layout for long-form content, articles, and case studies.', image: 'https://picsum.photos/seed/blog-detail/1600/900' },
    features: [
      { icon: 'type', title: 'Readable Serif Body', description: 'Elegant serif fonts optimized for long reading sessions, paired with clean sans-serif headers.' },
      { icon: 'image', title: 'Large Banners', description: 'Make an impact with full-width header images or videos for each article.' },
      { icon: 'arrow-down', title: 'Scroll Indicator', description: 'A reading progress bar that encourages users to scroll through the entire article.' },
    ],
  },
  {
    id: 'aurora', name: 'Aurora UI', cardComponent: AuroraUI, detailContentComponent: AuroraContent,
    palette: { background: '#0D1117', text: '#E5E7EB', primary: '#8B5CF6', secondary: '#1F2937', accent: '#14B8A6' },
    font: 'font-inter',
    hero: { title: 'Dynamic & Ethereal.', subtitle: 'Soft, shifting gradients create a mesmerizing aurora effect, bringing your interface to life.', image: 'https://picsum.photos/seed/aurora/1600/900' },
    features: [
      { icon: 'sun', title: 'Animated Gradients', description: 'Subtle, colorful blurs that move and breathe in the background for a calming effect.' },
      { icon: 'sparkles', title: 'Glassy Highlights', description: 'Translucent elements that catch the light from the shifting background colors.' },
      { icon: 'pen-tool', title: 'Minimalist Foreground', description: 'Clean lines and simple typography keep the focus on content, despite the dynamic background.' },
    ]
  },
  {
    id: 'bento', name: 'Bento Grid UI', cardComponent: BentoGridUI, detailContentComponent: BentoGridContent,
    palette: { background: '#F9FAFB', text: '#1F2937', primary: '#3B82F6', secondary: '#FFFFFF', accent: '#F59E0B' },
    font: 'font-inter',
    hero: { title: 'Organized & Modular.', subtitle: 'Inspired by Japanese bento boxes, this layout organizes diverse content into a clean, scannable grid.', image: 'https://picsum.photos/seed/bento/1600/900' },
    features: [
      { icon: 'layout-grid', title: 'Multi-Size Grid', description: 'A flexible, partitioned layout that accommodates various content types and sizes.' },
      { icon: 'info', title: 'Information Density', description: 'Presents a high level of information in a structured, easy-to-digest format.' },
      { icon: 'edit', title: 'Visually Engaging', description: 'Creates a dynamic, puzzle-like aesthetic that is both functional and interesting to look at.' },
    ]
  },
  {
    id: 'claymorphism', name: 'Claymorphism UI', cardComponent: ClaymorphismUI, detailContentComponent: ClaymorphismContent,
    palette: { background: '#F1F4F9', text: '#475569', primary: '#3B82F6', secondary: '#FFFFFF', accent: '#EC4899' },
    font: 'font-inter',
    hero: { title: 'Soft, Puffy, 3D.', subtitle: 'A playful and friendly design style featuring rounded, "clay-like" elements with inner and outer shadows.', image: 'https://picsum.photos/seed/claymorphism/1600/900' },
    features: [
      { icon: 'circle', title: 'Rounded 3D Look', description: 'Elements appear soft and "puffy" as if they are sculpted from clay, creating a friendly vibe.' },
      { icon: 'layers', title: 'Subtle Inner Shadows', description: 'A gentle inner shadow on one corner and an outer shadow on the other creates the 3D illusion.' },
      { icon: 'toy-brick', title: 'Playful & Fun', description: 'Perfect for apps that want to feel approachable, tactile, and non-intimidating.' },
    ]
  },
  {
    id: 'skeuomorphism', name: 'Skeuomorphism UI', cardComponent: SkeuomorphismUI, detailContentComponent: SkeuomorphismContent,
    palette: { background: '#C6B89E', text: '#4B3F30', primary: '#789E4A', secondary: '#F5EEDC', accent: '#C44D56' },
    font: 'font-roboto',
    hero: { title: 'Realism in Digital.', subtitle: 'Interfaces that mimic real-world objects, using textures, lighting, and familiar forms.', image: 'https://picsum.photos/seed/skeuomorphism/1600/900' },
    features: [
      { icon: 'book-open', title: 'Realistic Textures', description: 'Designs incorporate real-world materials like leather, paper, and metal.' },
      { icon: 'camera', title: 'Familiar Metaphors', description: 'Buttons, dials, and layouts are designed to look and function like their physical counterparts.' },
      { icon: 'lightbulb', title: 'Intuitive by Nature', description: 'Reduces the learning curve by making digital tools resemble objects users already know.' },
    ]
  },
  {
    id: 'memphis', name: 'Memphis Design', cardComponent: MemphisUI, detailContentComponent: MemphisContent,
    palette: { background: '#F8E54A', text: '#000000', primary: '#FF4E8D', secondary: '#00BFA5', accent: '#4D4DFF' },
    font: 'font-fira-code',
    hero: { title: 'Radical & Playful.', subtitle: 'An 80s-inspired aesthetic with bold colors, geometric shapes, and a rejection of traditional design rules.', image: 'https://picsum.photos/seed/memphis/1600/900' },
    features: [
      { icon: 'shapes', title: 'Geometric Shapes', description: 'A chaotic but fun mix of circles, squares, triangles, and squiggles.' },
      { icon: 'palette', title: 'Contrasting Colors', description: 'Bright, vivid, and often clashing colors create a high-energy, confident look.' },
      { icon: 'zap', title: 'Bold & Zany', description: 'A deliberately unconventional and anti-corporate style that is full of personality.' },
    ]
  },
  {
    id: 'monochrome', name: 'Monochrome UI', cardComponent: MonochromeUI, detailContentComponent: MonochromeContent,
    palette: { background: '#FFFFFF', text: '#0F172A', primary: '#475569', secondary: '#F1F5F9', accent: '#0F172A' },
    font: 'font-inter',
    hero: { title: 'Simplicity in a Single Hue.', subtitle: 'A sophisticated design that uses only tints, tones, and shades of a single color to create harmony.', image: 'https://picsum.photos/seed/monochrome/1600/900' },
    features: [
      { icon: 'droplets', title: 'Tonal Variations', description: 'Hierarchy and structure are created using different shades of one color, not different colors.' },
      { icon: 'eye', title: 'Elegant & Focused', description: 'A calm, uncluttered aesthetic that emphasizes content, shape, and layout.' },
      { icon: 'type', title: 'Strong Typography', description: 'Without color to rely on, typography and spacing become critical, leading to clean results.' },
    ]
  },
  {
    id: 'ai-chat', name: 'AI Chat UI', cardComponent: AIChatUI, detailContentComponent: AIChatContent,
    palette: { background: '#FFFFFF', text: '#1F2937', primary: '#4F46E5', secondary: '#F3F4F6', accent: '#9333EA' },
    font: 'font-inter',
    hero: { title: 'The Future of Conversation.', subtitle: 'An intuitive, clean, and responsive interface for human-AI interaction.', image: 'https://picsum.photos/seed/ai-chat/1600/900' },
    features: [
      { icon: 'bot', title: 'Clear Actor Indication', description: 'Distinct styling for user and AI messages makes conversations easy to follow.' },
      { icon: 'message-square', title: 'Focused Input', description: 'A clean, prominent text input with clear calls to action for sending messages.' },
      { icon: 'loader', title: 'Feedback States', description: 'Visual cues for "typing," "loading," and "error" states manage user expectations.' },
    ]
  },
  {
    id: 'holographic', name: 'Holographic UI', cardComponent: HolographicUI, detailContentComponent: HolographicContent,
    palette: { background: '#020617', text: '#E2E8F0', primary: '#4ADE80', secondary: '#1E293B', accent: '#F472B6' },
    font: 'font-orbitron',
    hero: { title: 'Digital Iridescence.', subtitle: 'A futuristic aesthetic featuring shimmering, light-refracting surfaces and glowing, translucent elements.', image: 'https://picsum.photos/seed/holographic/1600/900' },
    features: [
      { icon: 'zap', title: 'Iridescent Sheen', description: 'Elements shift in color as if catching the light, creating a dynamic, magical effect.' },
      { icon: 'activity', title: 'Animated & Glowing', description: 'Subtle animations and glowing borders give the interface a sense of energy and life.' },
      { icon: 'layers', title: 'Translucent Layers', description: 'Semi-transparent panels create a sense of depth, as if interacting with a real hologram.' },
    ]
  },
  {
    id: 'kinetic', name: 'Kinetic Typography', cardComponent: KineticTypographyUI, detailContentComponent: KineticTypographyContent,
    palette: { background: '#000000', text: '#FFFFFF', primary: '#FBBF24', secondary: '#1F2937', accent: '#FBBF24' },
    font: 'font-inter',
    hero: { title: 'Text in Motion.', subtitle: 'A bold, expressive design style where animated and styled text is the primary visual element.', image: 'https://picsum.photos/seed/kinetic/1600/900' },
    features: [
      { icon: 'type', title: 'Expressive & Bold', description: 'Typography becomes the hero, conveying emotion and meaning through size, style, and layout.' },
      { icon: 'move', title: 'Animated & Interactive', description: 'Text animates on scroll or hover, creating a dynamic and engaging user experience.' },
      { icon: 'maximize', title: 'High Visual Impact', description: 'Overlapping, oversized, and unconventional text layouts create a powerful first impression.' },
    ]
  },
  {
    id: 'paper-collage', name: 'Paper Collage UI', cardComponent: PaperCollageUI, detailContentComponent: PaperCollageContent,
    palette: { background: '#F3EFEA', text: '#312E2B', primary: '#E53E3E', secondary: '#FFFAF0', accent: '#319795' },
    font: 'font-playfair',
    hero: { title: 'Handmade Digital Craft.', subtitle: 'A charming, tactile interface that uses paper textures, torn edges, and layered elements.', image: 'https://picsum.photos/seed/paper-collage/1600/900' },
    features: [
      { icon: 'scissors', title: 'Torn Paper Edges', description: 'Elements have realistic torn or cut edges, giving a handmade, scrapbook feel.' },
      { icon: 'layers', title: 'Layered & Overlapping', description: 'Rotated and overlapping elements create a sense of depth and tangible composition.' },
      { icon: 'paperclip', title: 'Crafty Details', description: 'Includes textures, washi tape, and handwritten fonts to enhance the collage aesthetic.' },
    ]
  },
    {
    id: 'healthcare',
    name: 'Healthcare & Telemedicine',
    cardComponent: HealthcareUI,
    detailContentComponent: HealthcareContent,
    palette: { background: '#F0F7FF', text: '#1E3A8A', primary: '#2563EB', secondary: '#FFFFFF', accent: '#10B981' },
    font: 'font-inter',
    hero: { title: 'Care at Your Fingertips.', subtitle: 'A calm, accessible, and trustworthy interface for patient portals and telemedicine services.', image: 'https://picsum.photos/seed/healthcare/1600/900' },
    features: [
      { icon: 'accessibility', title: 'Accessibility First', description: 'High-contrast text, large touch targets, and clear labels for all users.' },
      { icon: 'shield', title: 'Secure & Private', description: 'A design that communicates trust and security for sensitive patient information.' },
      { icon: 'calendar', title: 'Simplified Forms', description: 'Easy-to-use forms for booking appointments and managing health records.' },
    ],
  },
  {
    id: 'edtech',
    name: 'EdTech & Learning',
    cardComponent: EdTechUI,
    detailContentComponent: EdTechContent,
    palette: { background: '#F9FAFB', text: '#1F2937', primary: '#8B5CF6', secondary: '#FFFFFF', accent: '#F59E0B' },
    font: 'font-inter',
    hero: { title: 'Learn Without Limits.', subtitle: 'An engaging, structured, and motivational platform for online courses and education.', image: 'https://picsum.photos/seed/edtech/1600/900' },
    features: [
      { icon: 'award', title: 'Gamification Elements', description: 'Progress bars, badges, and points keep learners motivated and engaged.' },
      { icon: 'book-open', title: 'Structured Modules', description: 'Tabbed navigation and clear course structures make learning materials easy to follow.' },
      { icon: 'play-circle', title: 'Multimedia Support', description: 'Seamlessly integrates video lectures, quizzes, and downloadable resources.' },
    ],
  },
    {
    id: 'fintech',
    name: 'Banking & Fintech',
    cardComponent: FintechUI,
    detailContentComponent: FintechContent,
    palette: { background: '#0F172A', text: '#E2E8F0', primary: '#FBBF24', secondary: '#1E293B', accent: '#FBBF24' },
    font: 'font-inter',
    hero: { title: 'Smart, Secure Banking.', subtitle: 'A modern, trustworthy interface for managing finances, viewing transactions, and making payments.', image: 'https://picsum.photos/seed/fintech/1600/900' },
    features: [
      { icon: 'shield-check', title: 'Security Focused', description: 'Clear indicators of security and two-factor authentication prompts build user trust.' },
      { icon: 'credit-card', title: 'Card-Based Views', description: 'Account balances and transaction histories are presented in clean, easy-to-scan cards.' },
      { icon: 'bar-chart-2', title: 'Data Visualization', description: 'Simple charts and graphs help users understand their spending habits at a glance.' },
    ],
  },
  {
    id: 'travel',
    name: 'Travel & Booking',
    cardComponent: TravelUI,
    detailContentComponent: TravelContent,
    palette: { background: '#FFFFFF', text: '#1F2937', primary: '#0EA5E9', secondary: '#F1F5F9', accent: '#F97316' },
    font: 'font-inter',
    hero: { title: 'Your Next Adventure Awaits.', subtitle: 'An inspiring and easy-to-use interface for finding, booking, and managing travel.', image: 'https://picsum.photos/seed/travel-detail/1600/900' },
    features: [
      { icon: 'image', title: 'Large Hero Banners', description: 'Inspire wanderlust with stunning, full-width photography and video of destinations.' },
      { icon: 'calendar', title: 'Intuitive Date Pickers', description: 'Frictionless date and passenger selection makes the booking process a breeze.' },
      { icon: 'map', title: 'Interactive Maps', description: 'Visualize locations, prices, and points of interest on an integrated map view.' },
    ],
  },
  {
    id: 'legal',
    name: 'Legal & Compliance',
    cardComponent: LegalUI,
    detailContentComponent: LegalContent,
    palette: { background: '#F8FAFC', text: '#0F172A', primary: '#475569', secondary: '#FFFFFF', accent: '#B45309' },
    font: 'font-playfair',
    hero: { title: 'Clarity and Precision.', subtitle: 'A minimal, conservative, and highly structured platform for legal professionals.', image: 'https://picsum.photos/seed/legal/1600/900' },
    features: [
      { icon: 'file-text', title: 'Document Centric', description: 'Optimized for viewing, annotating, and managing large legal documents and case files.' },
      { icon: 'type', title: 'Serif Fonts', description: 'Classic serif typography lends an air of authority, tradition, and readability.' },
      { icon: 'folder', title: 'Structured Navigation', description: 'A clear, hierarchical navigation system ensures information is always easy to find.' },
    ],
  },
  {
    id: 'food-delivery',
    name: 'Food Delivery',
    cardComponent: FoodDeliveryUI,
    detailContentComponent: FoodDeliveryContent,
    palette: { background: '#FFFFFF', text: '#1F2937', primary: '#DC2626', secondary: '#F9FAFB', accent: '#F59E0B' },
    font: 'font-inter',
    hero: { title: 'Craving Something New?', subtitle: 'A delicious, visually-driven interface for browsing restaurants and ordering food.', image: 'https://picsum.photos/seed/food-delivery/1600/900' },
    features: [
      { icon: 'camera', title: 'Tactile Imagery', description: 'Large, high-quality photos of food make the menu items irresistible.' },
      { icon: 'shopping-cart', title: 'Sticky Cart', description: 'An always-visible shopping cart and checkout button streamlines the ordering process.' },
      { icon: 'map-pin', title: 'Real-Time Tracking', description: 'A live map view shows the delivery status from the restaurant to your door.' },
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    cardComponent: RealEstateUI,
    detailContentComponent: RealEstateContent,
    palette: { background: '#FFFFFF', text: '#111827', primary: '#059669', secondary: '#F9FAFB', accent: '#059669' },
    font: 'font-inter',
    hero: { title: 'Find Your Place in the World.', subtitle: 'A clean, map-centric interface for browsing property listings and connecting with agents.', image: 'https://picsum.photos/seed/real-estate/1600/900' },
    features: [
      { icon: 'search', title: 'Advanced Search & Filters', description: 'Powerful filters for price, bedrooms, location, and amenities help users find the perfect home.' },
      { icon: 'map', title: 'Map-First Interface', description: 'Integrates property listings directly onto a map for an intuitive browsing experience.' },
      { icon: 'image', title: 'High-Quality Galleries', description: 'Showcase properties with beautiful, full-screen image sliders and virtual tours.' },
    ],
  },
  {
    id: 'fitness',
    name: 'Fitness & Wellness',
    cardComponent: FitnessUI,
    detailContentComponent: FitnessContent,
    palette: { background: '#171717', text: '#E5E5E5', primary: '#22C55E', secondary: '#262626', accent: '#F97316' },
    font: 'font-inter',
    hero: { title: 'Crush Your Goals.', subtitle: 'A motivational and data-driven app for tracking workouts, monitoring progress, and staying active.', image: 'https://picsum.photos/seed/fitness/1600/900' },
    features: [
      { icon: 'award', title: 'Goal & Streak Tracking', description: 'Visual cues for hitting daily goals and maintaining workout streaks keep users motivated.' },
      { icon: 'bar-chart-2', title: 'Performance Charts', description: 'Track progress over time with clean, easy-to-read charts for key fitness metrics.' },
      { icon: 'play-circle', title: 'Workout Video Modules', description: 'Integrated video content for guided workouts and exercise demonstrations.' },
    ],
  },
  {
    id: 'news',
    name: 'News & Publishing',
    cardComponent: NewsUI,
    detailContentComponent: NewsContent,
    palette: { background: '#FFFFFF', text: '#111827', primary: '#C2410C', secondary: '#F9FAFB', accent: '#C2410C' },
    font: 'font-playfair',
    hero: { title: 'The World, Delivered Daily.', subtitle: 'A classic, editorial layout for news sites and online magazines that prioritizes readability.', image: 'https://picsum.photos/seed/news-detail/1600/900' },
    features: [
      { icon: 'newspaper', title: 'Editorial Layout', description: 'A multi-column, newspaper-inspired layout that feels timeless and authoritative.' },
      { icon: 'type', title: 'Serif/Sans Font Combo', description: 'Classic serif headlines paired with a clean sans-serif body for ultimate readability.' },
      { icon: 'arrow-down', title: 'Infinite Scroll', description: 'Seamlessly load more articles as the user scrolls, encouraging continuous reading.' },
    ],
  },
  {
    id: 'job-board',
    name: 'Job Board',
    cardComponent: JobBoardUI,
    detailContentComponent: JobBoardContent,
    palette: { background: '#F8FAFC', text: '#0F172A', primary: '#4F46E5', secondary: '#FFFFFF', accent: '#4F46E5' },
    font: 'font-inter',
    hero: { title: 'Find Your Next Opportunity.', subtitle: 'A clean, efficient, and user-friendly platform for connecting talent with job opportunities.', image: 'https://picsum.photos/seed/job-board/1600/900' },
    features: [
      { icon: 'user-check', title: 'Candidate Cards', description: 'Job listings are presented in clear, scannable cards with key information visible.' },
      { icon: 'filter', title: 'Powerful Filters', description: 'Easily filter jobs by type, location, experience level, and salary.' },
      { icon: 'upload-cloud', title: 'One-Click Apply', description: 'Streamline the application process with saved resumes and easy-apply buttons.' },
    ],
  },
];
