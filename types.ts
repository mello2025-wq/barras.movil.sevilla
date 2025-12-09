import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'wedding' | 'party' | 'corporate';
}

export interface CocktailRecipe {
  name: string;
  description: string;
  ingredients: string[];
  instructions: string;
  funFact?: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}