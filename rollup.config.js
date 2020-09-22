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

const extensions = ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx']
const babelConfig = { extensions, runtimeHelpers: true }

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
      typescript({ typescript: require("typescript") }),
      replace({ typescript: require("typescript") }),
      babel(babelConfig),
      externalDeps(),
      terser(),
      size({
        writeFile: false
      })
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
      typescript({ typescript: require("typescript") }),
      replace({ 'process.env.NODE_ENV': `"production"`, delimiters: ['', ''] }),
      babel(babelConfig),
      externalDeps(),
      terser(),
      size({
        writeFile: false
      })
    ]
  }
]