const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard-with-typescript',
    'plugin:jsonc/recommended-with-jsonc',
    './.eslintrc-auto-import.json'
  ],
  overrides: [
    {
      files: [
        '*.vue'
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'vue/v-on-style': [2, 'shorthand'],
        'vue/component-tags-order': [2, {
          order: ['script', 'template', 'style']
        }],
        'vue/attributes-order': [2, {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT'
          ],
          alphabetical: false
        }],
        'vue/v-for-delimiter-style': [2, 'of'],
        'vue/multi-word-component-names': [2, {
          ignores: [
            'Todo'
          ]
        }]
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    createDefaultProgram: true,
    project: ['./tsconfig.json']
  },
  plugins: [
    'vue',
    'html'
  ],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 0
  }
})
