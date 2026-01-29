import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PlayListItem from "../components/PlayListItem";

describe("PlayListItem snapshot tests", () => {
    it("renders a normal playlist item", () => {
        const { container } = render(
            <PlayListItem
                title="Song one"
                artist="Artist one"
                duration="3:45"
                active={false}
            />
        );
        expect(container).toMatchSnapshot();
    });

    it("renders an active Playlist item", () => {
        const { container } = render(
            <PlayListItem
                title="Song Two"
                artist="Artist Two"
                duration="4:20"
                active={true}
            />
        );
        expect(container).toMatchSnapshot();
    })

    it("renders without isActive prop", () => {
        const { container } = render(
            <PlayListItem
                title="Song Three"
                artist="Artist Three"
                duration="2:55"
            />
        );
        expect(container).toMatchSnapshot();
    });
});
