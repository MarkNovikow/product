import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

import cls from './LoginModal.module.scss';
import Modal from "shared/ui/Modal/Modal";
import {LoginForm} from "../LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void

}

const LoginModal: FC<LoginModalProps> = ({className, onClose, isOpen}) => {
    return (
        <Modal className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen} onClose={onClose}
        >
            <LoginForm isOpen={isOpen}/>
        </Modal>
    );
};

export {LoginModal};