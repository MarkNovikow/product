import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = "clear",

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme;
}

const Button: FC<ButtonProps> = (props) => {
    const {className, theme, children, ...otherProps} = props
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export {Button};