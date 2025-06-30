import React from 'react';

export interface Theme {
  id: string;
  name: string;
  component: React.ComponentType<ThemeCardProps>;
}

export interface ThemeCardProps {
  className?: string;
}

// New detailed type for the detail pages
export interface ThemeDetail {
  id: string;
  name: string;
  cardComponent: React.ComponentType<ThemeCardProps>;
  detailContentComponent: React.ComponentType<{ palette: Palette }>;
  palette: Palette;
  font: string;
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  features: Feature[];
}

export interface Palette {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
  cardBg?: string;
  cardText?: string;
  headerText?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}
