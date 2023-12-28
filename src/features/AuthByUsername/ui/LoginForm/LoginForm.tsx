import React, {FC, useEffect, useRef, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Formik} from "formik";
import axios from "axios";

interface LoginFormProps {
    className?: string;
    isOpen?: boolean;
}

const LoginForm: FC<LoginFormProps> = ({className, isOpen}) => {
    const {t} = useTranslation();
    const usernameInput = useRef(null);
    const [errorFetching, setErrorFetching] = useState('')
    useEffect(() => {
        if (isOpen) {
            usernameInput.current.focus();
        }
    }, [isOpen]);
    return (
        <>
            <div>
                <Formik

                    initialValues={{username: '', password: ''}}
                    validate={values => {
                        const errors: {
                            username?: {},
                            password?: {}
                        } = {};
                        if (!values.username) {
                            errors.username = 'Обязательное поле';
                        }
                        if (!values.password) {
                            errors.password = 'Обязательное поле';
                        } else if (
                            values.password.length < 6
                        ) {
                            errors.password = 'Пароль должен быть длиннее 6 символов!';
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        axios.post("http://localhost:8000/login", {
                            username: values.username,
                            password: values.password
                        }).then(res => {
                            console.log(res)

                        }).catch((res) => {
                                if (res.response.status === 403) {
                                    setErrorFetching(res.response.data.message)
                                }
                                values.password = ''
                            }
                        ).finally(() => {
                            setSubmitting(false);
                        })

                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form
                            className={classNames(cls.LoginForm, {}, [className])}
                            onSubmit={handleSubmit}>
                            <div className={cls.inputGroup}>
                                <input
                                    ref={usernameInput}
                                    placeholder={t('Имя пользователя')}
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                />
                                {errors.username && touched.username && t(errors.username)}
                                <input
                                    placeholder={t("Пароль")}
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && t(errors.password)}
                            </div>
                            {errorFetching && <div>{t(errorFetching)}</div>
                            }
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className={cls.loginButton}
                                theme={ButtonTheme.CLEAR}>
                                {t("Войти")}
                            </Button>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export {LoginForm};