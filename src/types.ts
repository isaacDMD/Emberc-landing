/**
 * EMBERC - Types and Interfaces for Landing Page
 */

export interface FeatureModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface UserRole {
  id: string;
  title: string;
  badge: string;
  description: string;
  capabilities: string[];
  iconName: string;
}

export interface ProgressItem {
  id: string;
  title: string;
  description: string;
  status: 'done' | 'upcoming';
  category: string;
}

export interface ScreenshotItem {
  id: string;
  title: string;
  category: 'fidele' | 'responsable' | 'admin';
  description: string;
  imageSrc: string;
  aspectRatio?: 'desktop' | 'mobile';
  badge: string;
  highlights: string[];
}
