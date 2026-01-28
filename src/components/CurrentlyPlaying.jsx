
import CoverArt from './CoverArt'
import SongTitle from './SongTitle'
import PlayControls from './PlayControls'
import VolumeControls from './VolumeControls'

export default function CurrentlyPlaying() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  )
}
