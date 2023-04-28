const babel = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const del = require('rollup-plugin-delete');
const packageJson = require('./package.json');
const terser = require('@rollup/plugin-terser');

module.exports = {
  input: './src/lib/index.js',
  plugins: [
    del({ targets: './dist/*' }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    nodeResolve(),
    commonjs(),
    terser(),
  ],
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      name: packageJson.name,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
};
