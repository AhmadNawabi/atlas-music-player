import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SongTitle from "../components/SongTitle";
import { Song } from "../components/CoverArt";

describe("SongTitle snapshot tests", () => {
    const sampleSong: Song = {
        id: "1",
        title: "Test Song",
        artist: "Test Artest",
        coverArtUrl: "https://via.placehoder.com/300",
        audioUrl: "https://example.com/audio.mp3",
        duration: "3:45",
    };

    it("renders song title and artist", () => {
        const { container } = render(
            <SongTitle currentSong={sampleSong} />
        );
        expect(container).toMatchSnapshot();
    });

    it("renders with different song data", () => {
        const anotherSong: Song = {
            ...sampleSong,
            title: "Another Song",
            artist: "Another Artist",
        };
        const { container } = render(
            <SongTitle currentSong={anotherSong} />
        );
        expect(container).toMatchSnapshot();
    });
});
