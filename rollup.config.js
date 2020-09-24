/* eslint-disable global-require, consistent-return */
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import size from 'rollup-plugin-size';
import externalDeps from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const globals = {
  react: 'React'
};

const extensions = ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'];

const babelConfig = {
  extensions,
  runtimeHelpers: true 
};

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
    external: Object.keys(globals),
    plugins: [
      typescript({
        typescript: require('typescript') 
      }),
      babel(babelConfig),
      externalDeps(),
      terser({
        output: {
          comments: (node, comment) => {
            const text = comment.value;
            const { type } = comment;
            if (type === 'comment2') {
              return /@preserve|@license|@cc_on/i.test(text);
            }
          }
        }
      }),
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
    external: Object.keys(globals),
    plugins: [
      typescript({
        typescript: require('typescript') 
      }),
      babel(babelConfig),
      externalDeps(),
      terser({
        output: {
          comments: (node, comment) => {
            const text = comment.value;
            const { type } = comment;
            if (type === 'comment2') {
              return /@preserve|@license|@cc_on/i.test(text);
            }
          }
        }
      }),
      size({
        writeFile: false
      })
    ]
  }
];
