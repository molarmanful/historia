import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: true,
  svelte: {
    overrides: {
      'svelte/sort-attributes': 1,
    },
  },
  unocss: true,
  ignores: ['build/', '.svelte-kit/', 'dist/'],
}, {
  rules: {
    'style/top-level-functions': 0,
    'import/order': [1, {
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'always',
    }],
  },
})
