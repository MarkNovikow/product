import React, {FC, lazy, useCallback, useEffect, useRef, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

import cls from './Modal.module.scss';
import Portal from "shared/ui/Portal/Portal";
import {useTheme} from "app/providers/ThemeProvider";

const ANIMATION_DELAY = 300;

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean
}

const Modal: FC<ModalProps> = ({className, children, onClose, isOpen, lazy}) => {
    const {theme} = useTheme()
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef(null);
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen]);
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeHandler()
        }
    }, [closeHandler])
    useEffect(() => {
        if (isOpen) {
            window.onkeydown = onKeyDown;
        }
        return () => {
            clearTimeout(timeRef.current)
            window.onkeydown = null;
        }
    }, [isOpen]);
    if (lazy && !isMounted) {
        return null
    }
    return (
        <Portal>
            <div
                className={
                    classNames(cls.Modal, {
                            [cls.opened]: isOpen,
                            [cls.closing]: isClosing
                        },

                        [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div onClick={onContentClick}
                         className={classNames(cls.content)}>
                        {children}
                    </div>
                </div>

            </div>
        </Portal>
    );
};

export default Modal;