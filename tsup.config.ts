import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  tsconfig: 'tsconfig.json',
  esbuildOptions(options) {
    options.jsx = 'automatic'; // 或者 'transform'，根据您的需求
  },
});
