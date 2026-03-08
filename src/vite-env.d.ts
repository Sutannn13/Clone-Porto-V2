/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.glb' {
    const src: string;
    export default src;
}

declare module 'meshline' {
    export const MeshLineGeometry: any;
    export const MeshLineMaterial: any;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshLineGeometry: any;
            meshLineMaterial: any;
        }
    }
}
