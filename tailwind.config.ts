/** @type {import("tailwindcss").Config} */

import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  plugins: [],
  content: [],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 0,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
}
