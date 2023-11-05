import {classNames} from "./classNames";

describe('classNames', () => {
    test('with only parameter', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('with two parameters', () => {
        expect(classNames('someClass', {class2: true})).toBe('someClass class2')
    })
    test('with three parameters', () => {
        expect(classNames(
            'someClass',
            {class2: undefined},
            ['class3', 'class4']))
            .toBe('someClass class3 class4')
    })
});
