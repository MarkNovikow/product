import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string
}


const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const {i18n, t} = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}
            className={classNames(cls.LangSwitcher, {}, [className])}>
            {t('RU')}
        </Button>
    );
};

export {LangSwitcher};