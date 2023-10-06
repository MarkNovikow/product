import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({className}) => {
    const {t: main} = useTranslation('main');
    const {t: about} = useTranslation('about')
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={'/'}>
                    {main('Главная страница')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={'/about'}>
                    {about('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};

export {Navbar};