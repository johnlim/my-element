import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'my-element',
  output: {
    file: 'build/js/my-element.min.js',
    format: 'iife',
    sourcemap: true, 
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
