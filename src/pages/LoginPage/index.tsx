import { faEnvelope, faLanguage, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactLogo from '../../assets/react.svg';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LoginPage = () => {
    const [lang, setLang] = useState("en");
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLang(lng)
    };

    return (
        <div className="flex flex-col flex-1 h-svh justify-center items-center">
            <button onClick={() => lang === 'en' ? changeLanguage('it') : changeLanguage('en')} className='mb-5 cursor-pointer flex flex-row border-[0.5px] rounded px-2 items-center gap-3 shadow bg-white'>
                <p> {lang} </p>
                <FontAwesomeIcon icon={faLanguage} />
            </button>
            <div className="flex flex-row items-center gap-2">
                <img src={reactLogo} className="logo react" alt="React logo" />
                <p className={`text-[#50b1a9] font-bold`}>Log-in to Your account</p>
            </div>
            <form onSubmit={() => { }}>
                <div className={`w-80 shadow rounded py-4 px-4 flex flex-col gap-4`}>
                    <div className='relative'>
                        <div className='absolute top-1 left-2'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-gray-500' />
                        </div>
                        <input placeholder='email' type="email" className="pl-8 px-2 py-1 w-full rounded border-[0.5px]" />
                    </div>
                    <div className='relative'>
                        <div className='absolute top-1 left-2'>
                            <FontAwesomeIcon icon={faLock} className='text-gray-500' />
                        </div>
                        <input placeholder='Password' type="password" className="pl-8 px-2 py-1 w-full rounded border-[0.5px]" />
                    </div>
                    <div>
                        <button type='submit' onClick={() => console.log('login')} className={`cursor-pointer w-full h-8 bg-[#50b1a9] text-white text-xs rounded font-semibold hover:bg-cyan-900`}>
                            {t('login.button')}
                        </button>
                    </div>
                </div>
            </form>
            <div className='mt-4 border border-gray-200 w-80 items-center flex-row flex justify-center py-3 bg-gray-50'>
                <p className='text-sm'>New to us? <a href="/register" className='text-blue-400'>Sign Up</a></p>
            </div>

            {/* <div className='flex flex-col gap-2'>
                <button onClick={() => changeLanguage('it')}>Italiano</button>
                <button onClick={() => changeLanguage('en')}>Englishno</button>
            </div> */}
        </div >
    )
}

export default LoginPage;