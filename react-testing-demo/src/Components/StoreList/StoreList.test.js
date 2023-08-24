import StoreList from "./StoreList";
import { render, screen } from "@testing-library/react"

const mockStores = [
    {
        id: "1",
        address: "store 1 address"
    },
    {
        id: "2",
        address: "store 2 address"
    },
    {
        id: "3",
        address: "store 3 address"
    }
];

describe("StoreList component", () => {

    //snapshot test

    it("matches the snapshot", () => {
        const view = render(<StoreList stores={mockStores} sale={true} loadData={() => { }} />);

        expect(view).toMatchSnapshot();
    })

})