import StoreList from "./StoreList";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
]


describe("StoreList", () => {
    it("renders a list of StoreCards based on the stores prop", () => {
        //step 1: render the component
        render(<StoreList stores={mockStores} sale={true} loadData={() => { }} />)
        //step 2: write the assertion
        const store1Address = screen.getByText("store 1 address");
        expect(store1Address).toBeTruthy();
        const store2Address = screen.getByText("store 2 address");
        expect(store2Address).toBeTruthy();
        const store3Address = screen.getByText("store 3 address");
        expect(store3Address).toBeTruthy();
    })

    it("applies the sale class based on the sale prop to the container div", () => {
        const { container } = render(<StoreList stores={mockStores} sale={true} loadData={() => { }} />)

        // console.log(container.firstChild)
        expect(container.firstChild.classList.contains("sale")).toBe(true);

    })

    it("renders the load more stores button", () => {
        //Render the component
        render(<StoreList stores={mockStores} sale={true} loadData={() => { }} />)

        //write the assertion
        //get the button from the screen
        //check that it is there
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })

    it("calls loadData when the load more stores button is clicked", () => {
        // make a mock of the function we pass as the loadData prop
        const mockLoadData = jest.fn();

        render(<StoreList stores={mockStores} sale={true} loadData={mockLoadData} />)

        // stimulate the user click on the button
        const loadMoreStoresButton = screen.getByText("load more stores");
        userEvent.click(loadMoreStoresButton);

        //write the assertion
        expect(mockLoadData).toBeCalled();
    })

    it("matches the snapshot", () => {
        const view = render(<StoreList stores={mockStores} sale={true} loadData={() => { }} />)

        expect(view).toMatchSnapshot();
    })
})