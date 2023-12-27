import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/ui/LangSwitcher";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {AppLink} from "shared/ui/AppLink/AppLink";
import HomePage from 'shared/assets/icons/homePage.svg'
import AboutPage from 'shared/assets/icons/aboutPage.svg'
import ArrowLeft from 'shared/assets/icons/arrow-left.svg'
import ArrowRight from 'shared/assets/icons/arrow-right.svg'

interface SidebarProps {
    className?: string
}

const Sidebar: FC<SidebarProps> = ({className}) => {
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => setCollapsed(prevState => !prevState)
    const {t: main} = useTranslation('main');
    const {t: about} = useTranslation('about')
    return (
        <div
            data-testid={'test'}
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <div className={cls.pagesLinks}>
                <div className={cls.linkItem}>
                    <HomePage/>
                    <AppLink
                        to={'/'}>
                        {main('Главная')}
                    </AppLink>
                </div>
                <div className={cls.linkItem}>
                    <AboutPage/>
                    <AppLink
                        to={'/about'}>
                        {about('О сайте')}
                    </AppLink>
                </div>
            </div>
            <div className={cls.icons}>

                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.sidebarToggle}
                data-testid={"sidebar-toggle"}
                onClick={onToggle}>{!collapsed ?
                <ArrowLeft/>
                :
                <ArrowRight/>
            }
            </Button>
        </div>
    );
};

export {Sidebar}