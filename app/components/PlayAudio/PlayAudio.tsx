import Image from 'next/image'

interface Props {
  audioSrc: string
}
export const PlayAudio = ({ audioSrc }: Props) => {
  const clickHandler = () => {
    new Audio(audioSrc).play()
  }
  return (
    <div className="flex">
      <button
        onClick={clickHandler}
        className="focus:outline-none focus-visible:outline-none"
      >
        <Image
          src="icon_play_circle.svg"
          alt="play audio"
          height={40}
          width={40}
        />
      </button>
    </div>
  )
}
