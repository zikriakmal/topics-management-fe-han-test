import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactLogo from '../../assets/react.svg';

const RegisterPage = () => {
    return (
        <div className="flex flex-col flex-1 h-svh justify-center items-center">
            <div className="flex flex-row items-center gap-2">
                <img src={reactLogo} className="logo react" alt="React logo" />
                <p className={`text-[#50b1a9] font-bold`}>Register Your account</p>
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
                        <button type='submit' onClick={() => console.log('login')} className={`cursor-pointer w-full h-8 bg-[#50b1a9] text-white text-xs rounded font-semibold hover:bg-cyan-900`}>
                            Login
                        </button>
                    </div>
                </div>
            </form>
            <div className='mt-4 border border-gray-200 w-80 items-center flex-row flex justify-center py-3 bg-gray-50'>
                <p className='text-sm'>Already have an account? <a href="/login" className='text-blue-400'>Sign In</a></p>
            </div>
        </div>
    )
}

export default RegisterPage;