
import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
}

const Icon: React.FC<IconProps> = ({ name, className, style, fill }) => {
  const commonProps: React.SVGProps<SVGSVGElement> = {
      className,
      style,
      viewBox: "0 0 24 24",
      fill: fill || "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
  }
    
  switch (name) {
    case 'code':
      return <svg {...commonProps}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    case 'zap':
      return <svg {...commonProps}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
    case 'terminal':
      return <svg {...commonProps}><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>;
    case 'layers':
      return <svg {...commonProps}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;
    case 'droplet':
      return <svg {...commonProps}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>;
    case 'sliders':
      return <svg {...commonProps}><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>;
    case 'copy':
      return <svg {...commonProps}><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>;
    case 'pen-tool':
      return <svg {...commonProps}><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>;
    case 'type':
      return <svg {...commonProps}><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>;
    case 'maximize':
      return <svg {...commonProps}><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>;
    case 'alert-triangle':
      return <svg {...commonProps}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
    case 'grid':
      return <svg {...commonProps}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="3" x2="9" y2="21"></line></svg>;
    case 'edit-3':
      return <svg {...commonProps}><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>;
    case 'move':
      return <svg {...commonProps}><polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line></svg>;
    case 'bold':
      return <svg {...commonProps}><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path></svg>;
    case 'check-circle':
      return <svg {...commonProps}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
    case 'activity':
      return <svg {...commonProps}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
    case 'bar-chart-2':
      return <svg {...commonProps}><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>;
    case 'layout-grid':
      return <svg {...commonProps}><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
    case 'user':
      return <svg {...commonProps}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
    case 'send':
      return <svg {...commonProps}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;
    case 'camera':
      return <svg {...commonProps}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>;
    case 'shopping-cart':
      return <svg {...commonProps}><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>;
    case 'arrow-down':
      return <svg {...commonProps}><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>;
    case 'sparkles':
      return <svg {...commonProps}>
               <path d="m12 3-1.45 4.1-4.1 1.45 4.1 1.45L12 14l1.45-4.1 4.1-1.45-4.1-1.45z"/>
               <path d="m5 21 1.45-4.1 4.1-1.45-4.1-1.45L5 10l-1.45 4.1-4.1 1.45 4.1 1.45z"/>
               <path d="m19 21 1.45-4.1 4.1-1.45-4.1-1.45L19 10l-1.45 4.1-4.1 1.45 4.1 1.45z"/>
             </svg>;
    case 'info':
      return <svg {...commonProps}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
    case 'circle':
      return <svg {...commonProps}><circle cx="12" cy="12" r="10"></circle></svg>;
    case 'toy-brick':
      return <svg {...commonProps}><rect x="3" y="8" width="18" height="12" rx="1"></rect><path d="M10 8V5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3"></path></svg>;
    case 'book-open':
      return <svg {...commonProps}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
    case 'lightbulb':
      return <svg {...commonProps}><path d="M9 18h6v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2Z"></path><path d="M12 2a4 4 0 0 0-3.9 3.9C8.1 7.2 9.2 9 10.6 11h2.8c1.4-2 2.5-3.8 2.5-5.1A4 4 0 0 0 12 2Z"></path></svg>;
    case 'shapes':
      return <svg {...commonProps}><path d="M21 17.2a2.3 2.3 0 0 0-1.4.5L13.8 13a2.3 2.3 0 0 0 0-1.8l5.8-4.7a2.3 2.3 0 1 0-2.8-3.4l-5.8 4.7a2.3 2.3 0 0 0-3.4 0L2 3.1a2.3 2.3 0 1 0-1.2 4.2L6.6 11a2.3 2.3 0 0 0 0 1.8l-5.8 4.7a2.3 2.3 0 1 0 1.2 4.2l5.8-4.7a2.3 2.3 0 0 0 3.4 0l5.8 4.7a2.3 2.3 0 1 0 4.2-1.2Z"></path></svg>;
    case 'palette':
      return <svg {...commonProps}><circle cx="13.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="10.5" r="2.5"></circle><circle cx="15.5" cy="15.5" r="2.5"></circle><circle cx="10.5" cy="17.5" r="2.5"></circle><circle cx="6.5" cy="13.5" r="2.5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.83-.13 2.69-.37"></path></svg>;
    case 'droplets':
      return <svg {...commonProps}><path d="M17 2.1a9.8 9.8 0 0 0-12.4 0c-3 3-3 7.8 0 10.8l5.7 5.7c.4.4 1 .4 1.4 0l5.7-5.7c3-3 3-7.8 0-10.8zM12 17.6l-5.7-5.7C5 10.6 5 8 6.3 6.6c1.3-1.3 3.4-1.3 4.7 0l1 1 .9-.9c1.3-1.3 3.4-1.3 4.7 0C19 8 19 10.6 17.7 12z"></path></svg>;
    case 'eye':
      return <svg {...commonProps}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
    case 'bot':
      return <svg {...commonProps}><path d="M12 8V4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4h-4a4 4 0 0 1-4-4Z"></path><path d="M12 8h4v4a4 4 0 0 1-4 4v-4a4 4 0 0 1-4-4h4Z"></path></svg>;
    case 'message-square':
      return <svg {...commonProps}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
    case 'loader':
      return <svg {...commonProps}><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>;
    case 'scissors':
      return <svg {...commonProps}><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>;
    case 'paperclip':
      return <svg {...commonProps}><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>;
    case 'accessibility':
      return <svg {...commonProps}><circle cx="12" cy="12" r="10"></circle><path d="M12 16.5c-2.8 0-5-1.8-5-4s2.2-4 5-4 5 1.8 5 4-2.2 4-5 4zM12 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>;
    case 'shield':
      return <svg {...commonProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
    case 'award':
      return <svg {...commonProps}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88"></polyline></svg>;
    case 'play-circle':
      return <svg {...commonProps}><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>;
    case 'credit-card':
      return <svg {...commonProps}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;
    case 'map':
      return <svg {...commonProps}><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>;
    case 'search':
      return <svg {...commonProps}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
    case 'folder':
      return <svg {...commonProps}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>;
    case 'user-check':
      return <svg {...commonProps}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>;
    case 'upload-cloud':
      return <svg {...commonProps}><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>;
    case 'lucide-app-window':
      return <svg {...commonProps}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/></svg>;
    case 'star':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill={fill || "currentColor"}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    case 'chart-bar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}>
          <path d="M12 20V10M18 20V4M6 20V16" />
        </svg>
      );
    case 'filter':
       return (
        <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}>
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
       );
    case 'sun':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}>
                <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
        );
    case 'moon':
        return (
             <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        );
    case 'heart-pulse':
      return <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>;
    case 'shield-check':
      return <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>;
    case 'plane':
      return <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-1-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 5.2 5.2c.3.3.8.4 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>;
    case 'file-text':
      return <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
    case 'utensils':
       return <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v11"></path><path d="M14 5v15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5"></path></svg>;
    case 'home':
       return <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
    case 'flame': {
       const props = { ...commonProps, fill: fill || "currentColor" };
       return <svg xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>;
    }
    case 'newspaper':
       return <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4v12a2 2 0 0 0 2 2h8v4a2 2 0 0 1-2 2H4Z"></path><path d="M16 18h-4"></path><path d="M16 14h-4"></path><path d="M10 10h.01"></path></svg>;
    case 'briefcase':
       return <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
    case 'bed':
       return <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}><path d="M2 3v16h20V3"></path><path d="M2 9h20"></path><path d="M12 14v-5"></path></svg>;
    case 'bath':
       return <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}><path d="M9 6L6 3H3v3l3 3"></path><path d="M18 15l3 3v3h-3l-3-3"></path><path d="M15 6l3-3h3v3l-3 3"></path><path d="M6 15l-3 3v3h3l3-3"></path><path d="M9.5 10.5l5 5"></path><path d="M14.5 9.5l-5 5"></path></svg>;
    case 'map-pin':
       return <svg xmlns="http://www.w3.org/2000/svg" {...commonProps}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
    case 'calendar':
      return <svg {...commonProps}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
    default:
      return null;
  }
};

export default Icon;