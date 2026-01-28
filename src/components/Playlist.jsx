import PlayListItem from './PlayListItem'

export default function Playlist() {
  return (
    <div className="w-full"> 
      <h3 className="mb-4 text-lg font-semibold text-text dark:text-text-dark">
        Playlist
      </h3>

      <div className="space-y-2 overflow-y-auto max-h-[460px] rounded-lg p-3">
        <PlayListItem title="Painted in Blue" artist="Soul Canvas" duration="5:55" active />
        <PlayListItem title="Tidal Drift" artist="Echoes of the Sea" duration="8:02" />
        <PlayListItem title="Fading Shadows" artist="The Emberlight" duration="3:01" />
        <PlayListItem title="Cosmic Drift" artist="Solar Flare" duration="5:01" />
        <PlayListItem title="Urban Serenade" artist="Midnight Groove" duration="4:54" />
        <PlayListItem title="Whispers in the Wind" artist="Rust & Ruin" duration="6:13" />
        <PlayListItem title="Electric Fever" artist="Neon Jungle" duration="8:41" />
        <PlayListItem title="Edge of the Abyss" artist="Steel Horizon" duration="2:27" />
        <PlayListItem title="Golden Haze" artist="Valvet Waves" duration="3:15" />
        <PlayListItem title="Shatter the Silence" artist="Thunderclap Echo" duration="8:22" />
      </div>
    </div>
  )
}
