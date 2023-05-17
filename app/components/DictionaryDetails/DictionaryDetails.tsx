import { Data, Definition } from '@vam/data/types'
import { PlayAudio } from '../PlayAudio'

interface Props {
  data: Data[]
}

const DefinitionList = ({ definition }: { definition: Definition[] }) => {
  return (
    <ul className="list-disc px-5">
      {definition.map((def, index) => (
        <li className="text-slate-700 pb-2" key={index}>
          {def.definition}
        </li>
      ))}
    </ul>
  )
}

const ExampleText = ({ definition }: { definition: Definition[] }) => {
  return (
    <>
      {definition.map((def, index) => {
        if (!def.example) return null
        return (
          <blockquote
            key={`example-${index}`}
            className="text-slate-700 italic"
          >
            {`"${def.example}"`}
          </blockquote>
        )
      })}
    </>
  )
}

const SynoAntoList = ({ synonym }: { synonym: string[] }) => {
  if (!synonym) return null
  return (
    <div className="flex gap-2 m-5">
      {synonym.map(s => (
        <span className="text-xl text-purple-700" key={s}>
          {synonym}
        </span>
      ))}
    </div>
  )
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
                  <span className="text-sm flex text-purple-700">
                    {d.phonetic}
                  </span>
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
                  <h3 className="text-2xl lg:text-3xl text-slate-500 mb-5">
                    Meaning
                  </h3>
                  <DefinitionList definition={meaning.definitions} />
                  {meaning.synonyms && meaning.synonyms.length > 0 && (
                    <div className="flex items-baseline">
                      <h4 className="text-2xl lg:text-3xl text-slate-500 mb-5">
                        Synonyms
                      </h4>
                      <SynoAntoList synonym={meaning.synonyms} />
                    </div>
                  )}
                  {meaning.antonymns && meaning.antonymns.length > 0 && (
                    <div className="flex gap-2 items-baseline">
                      <h4 className="text-2xl lg:text-3xl text-slate-500 mb-5">
                        Antonymns
                      </h4>
                      <SynoAntoList synonym={meaning.antonymns} />
                    </div>
                  )}
                  <ExampleText definition={meaning.definitions} />
                </div>
              </div>
            ))}
            <div className="flex mb-2 mt-2 py-4 px-2 border-t-[1px] border-t-slate-700 gap-2">
              <h5>Source: </h5>
              {d.sourceUrls.map(url => (
                <a
                  key={url}
                  href={url}
                  className="flex overflow-hidden overflow-ellipsis whitespace-nowrap"
                  target="_blank"
                >
                  {url}
                </a>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
