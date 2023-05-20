import { Data, Definition } from '@vam/data/types'
import { PlayAudio } from '../PlayAudio'
import Image from 'next/image'

interface Props {
  data: Data[]
}

const DefinitionList = ({ definition }: { definition: Definition[] }) => {
  return (
    <ul className="list-disc px-5">
      {definition.map((def, index) => (
        <li className="text-slate-700 dark:text-slate-400 pb-2" key={index}>
          {def.definition}
        </li>
      ))}
    </ul>
  )
}

const ExampleText = ({ definition }: { definition: Definition[] }) => {
  return (
    <div className="flex flex-col my-8">
      <h4 className="text-2xl lg:text-3xl text-slate-500 dark:text-slate-400 mb-5 underline underline-offset-8">
        Example
      </h4>
      {definition.map((def, index) => {
        if (!def.example) return null
        return (
          <blockquote
            key={`example-${index}`}
            className="text-slate-700 dark:text-slate-300 italic py-3 border-b-[1px] last:border-none border-b-gray-400"
          >
            {`"${def.example}"`}
          </blockquote>
        )
      })}
    </div>
  )
}

const synoAntoList = ({ synonym }: { synonym: string[] }) => {
  if (!synonym) return null
  return synonym.reduce<string[]>((acc, curr) => {
    acc = [...acc, curr]
    return acc
  }, [])
}

const joinedList = ({ synonym }: { synonym: string[] }) => {
  const list = synoAntoList({ synonym })
  if (!list) return null
  return list.join(', ')
}

export const DictionaryDetails = ({ data }: Props) => {
  return (
    <div className="mt-11 flex">
      {data.slice(0, 1).map(d => {
        const audioUrl = d.phonetics.find(x => x.audio.trim().length > 0)
        return (
          <div key={d.word} className="flex flex-col w-full">
            <div className="flex justify-between w-full mb-11 ">
              <div className="flex">
                <div className="flex flex-col">
                  <h1 className="text-4xl lg:text-5xl flex pb-4">{d.word}</h1>
                  <pre className="text-sm flex text-purple-700 dark:text-sky-400">
                    {d.phonetic}
                  </pre>
                </div>
              </div>
              {audioUrl && <PlayAudio audioSrc={audioUrl?.audio} />}
            </div>
            {d.meanings.map(meaning => (
              <div className="flex mb-11" key={meaning.partOfSpeech}>
                <div className="flex flex-col">
                  <h2 className="text-2xl lg:text-3xl mb-11">
                    {meaning.partOfSpeech}
                  </h2>
                  <h3 className="text-2xl lg:text-3xl text-slate-500 dark:text-slate-400 mb-5 underline underline-offset-8">
                    Meaning
                  </h3>
                  <DefinitionList definition={meaning.definitions} />
                  {meaning.synonyms && meaning.synonyms.length > 0 && (
                    <div className="flex flex-col gap-3 my-8">
                      <h4 className="mb-2 text-2xl lg:text-3xl text-slate-500 dark:text-slate-400 underline underline-offset-8">
                        Synonyms
                      </h4>
                      <div className="flex flex-col">
                        <span className="flex text-xl text-purple-700 dark:text-sky-400">
                          {joinedList({ synonym: meaning.synonyms })}
                        </span>
                      </div>
                    </div>
                  )}

                  {meaning.antonymns && meaning.antonymns.length > 0 && (
                    <div className="flex flex-col gap-3 my-8">
                      <h4 className="mb-2 text-2xl lg:text-3xl text-slate-500 dark:text-slate-400 underline underline-offset-8">
                        Antonymns
                      </h4>
                      <div className="flex flex-col">
                        <span className="flex text-xl text-purple-700 dark:text-sky-400">
                          {joinedList({ synonym: meaning.antonymns })}
                        </span>
                      </div>
                    </div>
                  )}
                  <ExampleText definition={meaning.definitions} />
                </div>
              </div>
            ))}
            <div className="flex mb-2 mt-2 py-4 px-2 border-t-[1px] border-t-slate-700 gap-2">
              <h5>Source: </h5>
              {d.sourceUrls.slice(0, 1).map(url => (
                <a
                  key={url}
                  href={url}
                  className="flex overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-blue-700 dark:text-sky-400 underline underline-offset-4"
                  target="_blank"
                >
                  {url}
                  <div className="flex px-2">
                    <Image
                      src="icon_source.svg"
                      width={12}
                      height={12}
                      alt="external source icon"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
