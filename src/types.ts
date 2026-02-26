export type Language = 'en' | 'am' | 'om';
export type Theme = 'light' | 'dark';
export type View = 'home' | 'about' | 'learnMore' | 'login' | 'manager' | 'sector';

export interface UserState {
  id: number;
  name: string;
  role: 'manager' | 'sector' | 'user';
}

export interface SectorSubmission {
  sectorId: number;
  data: any;
}