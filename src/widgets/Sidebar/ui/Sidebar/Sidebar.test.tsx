import {fireEvent, screen} from '@testing-library/react'
import {Sidebar} from "widgets/Sidebar";
import {renderWithTranslation} from "shared/lib/renderWithTranslation/renderWithTranslation";
describe('Sidebar', () => {
    test('Render test', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('test')).toBeInTheDocument();
    })
    test('Render test', () => {
        renderWithTranslation(<Sidebar/>);
        const toggleButton = screen.getByTestId('sidebar-toggle')
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('test')).toHaveClass('collapsed');
    })
});
