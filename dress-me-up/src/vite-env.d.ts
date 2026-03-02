/// <reference types="vite/client" />

// Allow importing image assets as modules
// This prevents TypeScript errors like "Cannot find module '../assets/base.png' or its corresponding type declarations." 

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
declare module '*.webp';

// Allow importing audio assets as modules
declare module '*.mp3';
declare module '*.wav';
declare module '*.ogg';