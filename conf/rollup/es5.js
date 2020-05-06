import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import base from './base';


export default Object.assign(base, {
  plugins: [
    babel({ exclude: 'node_modules/**', presets: ["@babel/preset-env"],}),
    uglify(),
  ],
  output: Object.assign(base.output, {
    file: 'dist/bundles/rxmetics.es5.min.js',
  }),
});
