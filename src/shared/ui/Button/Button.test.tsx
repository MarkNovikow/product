import {render, screen} from '@testing-library/react'
import {Button} from "shared/ui/Button/Button";
describe('Button', () => {
    test('Render test', () => {
        render(<Button>TEST </Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    })
});
