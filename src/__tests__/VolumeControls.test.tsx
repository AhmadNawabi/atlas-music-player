import { render, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import VolumeControls from "../components/VolumeControls";

afterEach(()=> {
    cleanup();
});

describe("VolumeControls", () => {
    it("renders volume slider and button", () => {
        const setVolume = vi.fn();

        const { container } = render(
            <VolumeControls volume={0.5} setVolume={setVolume} />
        );
        expect(container).toMatchSnapshot();
    });
    it("calls setVolume when slider changes", () => {
        const setVolume = vi.fn();

        const { getByRole } = render(
            <VolumeControls volume={0.5} setVolume={setVolume} />
        );
        const slider = getByRole("slider");
        fireEvent.change(slider, { target: {value: "0.8"} });

        expect(setVolume).toHaveBeenCalledWith(0.8);
    });

    it("toggles mute when button is clicked", () => {
        const setVolume = vi.fn();
        const { getByRole } = render(
            <VolumeControls volume={0} setVolume={setVolume} />
        );

        const button = getByRole("button");
        fireEvent.click(button);
        expect(setVolume).toHaveBeenCalledWith(0.5);
    });
});
