import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {Button} from "shared/ui/Button/Button";
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
            onClick={toggleLanguage}
            className={classNames(cls.LangSwitcher, {}, [className])}>
            {t('Язык')}
        </Button>
    );
};

export {LangSwitcher};