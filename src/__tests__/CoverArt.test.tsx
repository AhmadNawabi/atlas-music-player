import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CoverArt, { Song } from "../components/CoverArt";

describe("CoverArt snapshot tests", () => {
  const sampleSong: Song = {
    id: "1",
    title: "Test Song",
    artist: "Test Artist",
    coverArtUrl: "https://via.placeholder.com/380x280.png?text=Cover",
    audioUrl: "https://example.com/audio.mp3",
    lyrics: "Some lyrics here",
    duration: "3:45",
  };

  it("renders with lyrics on hover enabled", () => {
    const { container } = render(
      <CoverArt currentSong={sampleSong} showLyricsOnHover={true} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders with lyrics on hover disabled", () => {
    const { container } = render(
      <CoverArt currentSong={sampleSong} showLyricsOnHover={false} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders with no lyrics", () => {
    const songWithoutLyrics = { ...sampleSong, lyrics: undefined };
    const { container } = render(
      <CoverArt currentSong={songWithoutLyrics} showLyricsOnHover={true} />
    );
    expect(container).toMatchSnapshot();
  });
});
