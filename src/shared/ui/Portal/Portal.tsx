import React, {FC} from 'react';

import cls from './Portal.module.scss';
import {createPortal} from "react-dom";

interface PortalProps {
  className?: string;
  children: React.ReactNode;
  element?: HTMLElement;
}

const Portal:FC<PortalProps> = ({className, children, element = document.body}) => {
 return (
     createPortal(children, element/* ? element : document.body*/)
 );
};

export default Portal;