import extractorSvelte from '@unocss/extractor-svelte'
import {
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default {
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        // head: '',
        body: 'DM Sans',
        mono: 'Fira Code',
      },
    }),
  ],

  transformers: [transformerDirectives(), transformerVariantGroup()],

  safelist: [],

  theme: {},

  rules: [],

  shortcuts: [
    {
      'screen': 'w-screen h-lvh',
      'dscreen': 'w-screen h-dvh',
      'full': 'w-full h-full',
      'max-full': 'max-w-full max-h-full',
      'max-screen': 'max-w-screen max-h-lvh',
      'max-dscreen': 'max-w-screen max-h-dvh',
    },
  ],

  extractors: [extractorSvelte],
}
