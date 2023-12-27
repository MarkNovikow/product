import React, {FC, useCallback, useContext, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import Modal from "shared/ui/Modal/Modal";

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({className}) => {

    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false)
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState)
    },[setIsAuthModal])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.auth}>
                <Button onClick={() => setIsAuthModal(true)} theme={ButtonTheme.CLEAR}>
                    {t('Войти')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur corporis
                        cupiditate distinctio ipsum molestiae neque nisi omnis quidem sunt. Atque dolorum ipsam libero,
                        minus non numquam officia provident quasi!
                    </div>
                    <div>Culpa et harum id laudantium omnis, quasi quod voluptas voluptatibus. Aperiam consequuntur
                        cumque dignissimos expedita maiores, minus, natus perspiciatis provident quam quasi quo quod
                        quos tempore temporibus veritatis? Optio, tempore?
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export {Navbar};