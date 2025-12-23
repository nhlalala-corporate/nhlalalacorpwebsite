// server/api/i18n/index.get.ts
export default defineEventHandler(() => {
  // Return available languages
  return {
    languages: [
      { code: 'en', name: 'English' },
      { code: 'af', name: 'Afrikaans' },
      { code: 'zu', name: 'Zulu' },
      { code: 'xh', name: 'Xhosa' },
      { code: 'st', name: 'Sotho' },
      { code: 'ts', name: 'Tsonga' },
      { code: 'ss', name: 'Swati' },
      { code: 've', name: 'Venda' },
      { code: 'nr', name: 'Ndebele' }
    ],
    default: 'en'
  }
})