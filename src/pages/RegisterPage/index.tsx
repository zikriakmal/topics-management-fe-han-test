import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import reactLogo from '../../assets/react.svg';
import Language from '../../components/Language';
import Context from '../../context';
import { register } from '../../services/public/auth';
import { AxiosError } from 'axios';

interface SignUpFormValues {
    name: string;
    username: string;
    password: string;
}

const RegisterPage = () => {
    const { t } = useTranslation();
    const [errorsApi, setErrorsApi] = useState<string>("")
    const context = useContext(Context);
    const navigate = useNavigate();

    const signUpSchema = Yup.object().shape({
        name: Yup.string().required(),
        username: Yup.string().email("Email must be valid").required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const initialValues: SignUpFormValues = {
        name: '',
        username: '',
        password: '',
    };

    return (
        <div className="flex flex-col flex-1 h-svh justify-center items-center">
            <Language />
            <div className="flex flex-row items-center gap-2">
                <img src={reactLogo} className="logo react" alt="React logo" />
                <p className={`text-[#50b1a9] font-bold`}>{t('register.title')}</p>
            </div>
            <Formik validationSchema={signUpSchema} initialValues={initialValues} onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                try {
                    const res = await register({ name: values.name, email: values.username, username: values.username, password: values.password })
                    if (res.status === 200) {
                        context?.setIsLoggedIn(true)
                        context?.setAccessToken(res.data?.data?.accessToken)
                        localStorage.setItem('name', res.data?.data?.user?.name)
                        localStorage.setItem('username', res.data?.data?.user?.username)
                        localStorage.setItem('id', res.data?.data?.user?.id)
                        localStorage.setItem('accessToken', res.data?.data?.accessToken)
                    }
                } catch (e: unknown) {
                    if (e instanceof AxiosError) {
                        if (e?.response?.status === 401) setErrorsApi("Username or password is wrong");
                        else setErrorsApi(e?.response?.data?.errors ?? "");
                    } else {
                        setErrorsApi("An unexpected error occurred.");
                    }
                }
                setSubmitting(false);
            }}>
                {({
                    values,
                    handleSubmit,
                    handleChange,
                    isValid
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`w-80 shadow rounded py-4 px-4 flex flex-col gap-4`}>
                            <div className='relative'>
                                <div className='absolute top-1 left-2'>
                                    <FontAwesomeIcon icon={faUser} className='text-gray-500' />
                                </div>
                                <input placeholder={t('register.form_name_label')} value={values.name} onChange={handleChange} name='name' type="name" className="pl-8 px-2 py-1 w-full rounded border-[0.5px]" />
                            </div>
                            <div className='relative'>
                                <div className='absolute top-1 left-2'>
                                    <FontAwesomeIcon icon={faEnvelope} className='text-gray-500' />
                                </div>
                                <input placeholder={t('register.form_email_label')} value={values.username} onChange={handleChange} name='username' type="email" className="pl-8 px-2 py-1 w-full rounded border-[0.5px]" />
                            </div>
                            <div className='relative'>
                                <div className='absolute top-1 left-2'>
                                    <FontAwesomeIcon icon={faLock} className='text-gray-500' />
                                </div>
                                <input placeholder={t('register.form_password_label')} value={values.password} onChange={handleChange} name='password' type="password" className="pl-8 px-2 py-1 w-full rounded border-[0.5px]" />
                            </div>
                            <div>
                                {errorsApi !== "" ? <p className='text-sm text-red-500'>{errorsApi}</p> : null}
                            </div>
                            <div>
                                <button type='submit' disabled={!isValid} className={`${isValid ? "bg-[#50b1a9]" : "bg-gray-400"} cursor-pointer w-full h-8  text-white text-xs rounded font-semibold hover:bg-cyan-900`}>
                                    {t('register.button')}
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
            <div className='mt-4 border border-gray-200 w-80 items-center flex-row flex justify-center py-3 bg-gray-50'>
                <p className='text-sm'>{t('register.already_have_an_account')} <a onClick={() => navigate('/')} className='cursor-pointer text-blue-400'>{t('login.button')}</a></p>
            </div>
        </div>
    )
}

export default RegisterPage;