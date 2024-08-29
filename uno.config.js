import extractorSvelte from '@unocss/extractor-svelte'
import {
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default {
  presets: [
    presetUno(),
    presetAnimations(),
    presetShadcn({
      color: 'gray',
    }),
  ],

  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/**/*.{js,ts}',
      ],
    },
  },

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
      'typ-lead': 'text-muted-foreground text-xl',
      'typ-large': 'text-lg font-semibold',
      'typ-muted': 'text-muted-foreground text-sm',
    },
  ],

  extractors: [extractorSvelte],
}
