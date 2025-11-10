import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintPluginImport from 'eslint-plugin-import'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      // 🔴 КРИТИЧЕСКИ ВАЖНЫЕ - предотвращают ошибки
      'import/no-unresolved': 'error', // Импорты должны существовать
      'import/named': 'error', // Импортируемые имена должны существовать в модуле
      'import/namespace': 'error', // Проверка пространства имен импорта
      
      // 🟡 ВАЖНЫЕ - улучшают качество кода
      'import/no-absolute-path': 'error', // Запрет абсолютных путей
      'import/no-dynamic-require': 'warn', // Предупреждение для dynamic require
      'import/no-webpack-loader-syntax': 'error', // Запрет webpack-специфичного синтаксиса
      'import/no-self-import': 'error', // Запрет импорта самого себя
      'import/no-cycle': ['error', { maxDepth: 10 }], // Запрет циклических импортов
      'import/no-useless-path-segments': 'warn', // Убирает лишние сегменты пути
      
      // 🟢 СТИЛИСТИЧЕСКИЕ - порядок и организация
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',    // Node.js built-in modules
            'external',   // Внешние библиотеки (react, lodash, etc.)
            'internal',   // Внутренние модули (aliases, etc.)
            'parent',     // Родительские директории
            'sibling',    // Файлы в той же директории
            'index',      // index файлы
            'object',     // Object imports
            'type',       // Type imports
          ],
          'newlines-between': 'always', // Пустые строки между группами
          alphabetize: {
            order: 'asc', // Сортировка по алфавиту
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
        },
      ],
      
      'import/first': 'warn', // Импорты должны быть в начале файла
      'import/newline-after-import': 'warn', // Пустая строка после импортов
      'import/no-duplicates': 'warn', // Запрет дублирующихся импортов
      'import/no-named-default': 'warn', // Запрет named default импортов
      
      // 🔵 ТИПЫ - работа с TypeScript
      'import/no-unused-modules': 'warn', // Предупреждение о неиспользуемых модулях
      
      // TypeScript-специфичные правила (если используете typescript-eslint)
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'warn', // Разделение type и value импортов
    },
    settings: {
      'import/resolver': {
        typescript: {
          // Указывает ESLint где искать tsconfig.json
          project: './tsconfig.json',
        },
        node: true,
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
  },
])