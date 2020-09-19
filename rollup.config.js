import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import size from 'rollup-plugin-size';
import externalDeps from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript2';

const external = ['react']

const globals = {
  react: 'React',
}

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'useTypeahead',
      file: 'dist/use-typeahead.es.js',
      format: 'es',
      sourcemap: true,
      globals
    },
    external,
    plugins: [
      typescript(),
      replace({ 'process.env.NODE_ENV': `"development"`, delimiters: ['', ''] }),
      babel(),
      externalDeps(),
      terser(),
      size()
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      name: 'useTypeahead',
      file: 'dist/use-typeahead.min.js',
      format: 'umd',
      sourcemap: true,
      globals
    },
    external,
    plugins: [
      typescript(),
      replace({ 'process.env.NODE_ENV': `"production"`, delimiters: ['', ''] }),
      babel(),
      externalDeps(),
      terser(),
      size()
    ]
  }
]