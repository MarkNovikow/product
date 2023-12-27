import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

import cls from './Modal.module.scss';
import Portal from "shared/ui/Portal/Portal";
import {useTheme} from "app/providers/ThemeProvider";

const ANIMATION_DELAY = 300;

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void
}

const Modal: FC<ModalProps> = ({className, children, onClose, isOpen}) => {
    const {theme} = useTheme()
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef(null);
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
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda commodi
                            dicta
                            distinctio dolore et ex expedita fugit ipsum odio, quae quia, repellat tempora voluptas
                            voluptatum! Fuga minus numquam sed!
                        </div>
                    </div>
                </div>

            </div>
        </Portal>
    );
};

export default Modal;