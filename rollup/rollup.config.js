import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import replace from 'rollup-plugin-replace'

export default {
  input: '../my-element',
  output: {
    file: '../build/js/my-element.min.js',
    format: 'iife',
    sourcemap: true, 
  },
  plugins: [
    builtins(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      // babelrc: false is needed to prevent reading broken .babelrc files from
      // dependencies (we have to process node_modules). Thats why we also need
      // to inline our own .babelrc file
      babelrc: false,
      presets: [["@babel/es2015", { modules: false }]]
    })
  ],
};
