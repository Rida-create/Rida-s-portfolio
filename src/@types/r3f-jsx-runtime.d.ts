declare module '@react-three/fiber/jsx-runtime' {
  // Minimal shim for TypeScript JSX runtime import when using
  // "jsxImportSource": "@react-three/fiber" in tsconfig.
  // This re-exports relevant runtime helpers and types from the library.
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
  export type JSXElementConstructor = any;
  export * from '@react-three/fiber';
}
