import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import reactLogo from '../../assets/react.svg';
import Language from '../../components/Language';
import Context from '../../context';

const RegisterPage = () => {
    const { t } = useTranslation();
    const context = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="flex flex-col flex-1 h-svh justify-center items-center">
            <Language />
            <div className="flex flex-row items-center gap-2">
                <img src={reactLogo} className="logo react" alt="React logo" />
                <p className={`text-[#50b1a9] font-bold`}>{t('register.title')}</p>
            </div>
            <form onSubmit={() => { }}>
                <div className={`w-80 shadow rounded py-4 px-4 flex flex-col gap-4`}>
                    <div className='relative'>
                        <div className='absolute top-1 left-2'>
                            <FontAwesomeIcon icon={faUser} className='text-gray-500' />
                        </div>
                        <input placeholder='Username' type="text" className="pl-8 px-2 py-1 w-full rounded border-[0.5px]" />
                    </div>
                    <div className='relative'>
                        <div className='absolute top-1 left-2'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-gray-500' />
                        </div>
                        <input placeholder='Email' type="email" className="pl-8 px-2 py-1 w-full rounded border-[0.5px]" />
                    </div>
                    <div className='relative'>
                        <div className='absolute top-1 left-2'>
                            <FontAwesomeIcon icon={faLock} className='text-gray-500' />
                        </div>
                        <input placeholder='Password' type="password" className="pl-8 px-2 py-1 w-full rounded border-[0.5px]" />
                    </div>
                    <div>
                        <button type='button' onClick={() => context?.setIsLoggedIn(true)} className={`cursor-pointer w-full h-8 bg-[#50b1a9] text-white text-xs rounded font-semibold hover:bg-cyan-900`}>
                            {t('register.button')}
                        </button>
                    </div>
                </div>
            </form>
            <div className='mt-4 border border-gray-200 w-80 items-center flex-row flex justify-center py-3 bg-gray-50'>
                <p className='text-sm'>{t('register.already_have_an_account')} <a onClick={() => navigate('/')} className='cursor-pointer text-blue-400'>{t('login.button')}</a></p>
            </div>
        </div>
    )
}

export default RegisterPage;