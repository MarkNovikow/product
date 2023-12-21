import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/ui/LangSwitcher";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string
}

const Sidebar: FC<SidebarProps> = ({className}) => {
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => setCollapsed(prevState => !prevState)
    return (
        <div
            data-testid={'test'}
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                data-testid={"sidebar-toggle"}
                onClick={onToggle}>{!collapsed ? t('Свернуть') : t('Развернуть')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>

            </div>
        </div>
    );
};

export {Sidebar}