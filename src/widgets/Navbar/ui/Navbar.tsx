import React, {FC, useCallback, useContext, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {LoginModal} from "features/AuthByUsername";

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({className}) => {

    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false)
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    },[])
    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    },[])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.auth}>
                <Button onClick={onShowModal} theme={ButtonTheme.CLEAR}>
                    {t('Войти')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>

            </div>
        </div>
    );
};

export {Navbar};