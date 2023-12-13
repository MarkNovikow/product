import React, {FC} from 'react';
import './PageLoader.scss'

interface PageLoaderProps {
    className?: string
}

const PageLoader: FC<PageLoaderProps> = () => {
    return (
        <div className={'loader-container'}>
            <div className="page__loader">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export {PageLoader};
