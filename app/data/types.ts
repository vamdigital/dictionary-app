export interface Definition {
  definition: string
  example: string
  synonyms: string[]
  antonymns: string[]
}

interface Phonetic {
  text: string
  audio: string
}

interface Meanings {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonymns: string[]
}

export interface Data {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  sourceUrls: string[]
  meanings: Meanings[]
}
