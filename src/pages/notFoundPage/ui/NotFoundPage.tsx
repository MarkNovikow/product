import {useTranslation} from "react-i18next";
import cls from './NotFoundPage.module.scss'
import {classNames} from "shared/lib/classNames/classNames";

const NotFoundPage = () => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage)}>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundPage;
