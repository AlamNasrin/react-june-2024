import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';

describe("Counter Test Suite", () => {
    it("Test1", () => {
        // Call some function
        var x = 10;
        var y = 12;

        // assert
        expect(x + y).toBe(22);
    })
    it('should render the component', () => {
        render(<Counter initialValue={5}/>);
        expect(screen.getByText("Count: 5")).toBeTruthy();
    })
    it('should update the component', () => {
        render(<Counter initialValue={5}/>);
        expect(screen.getByText("Count: 5")).toBeTruthy();
        fireEvent.click(screen.getByText("Increment"), {});
        expect(screen.getByText("Count: 6")).toBeTruthy();
    })
})