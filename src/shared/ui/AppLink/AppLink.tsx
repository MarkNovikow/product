import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {theme = AppLinkTheme.PRIMARY, className, to, children, ...otherProps} = props
    return (
        <Link to={to}
              {...otherProps}
              className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};

export {AppLink};