import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>
    );
};

export {ThemeSwitcher};