import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import Context from "../../context";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const Language = () => {
    const context = useContext(Context);
    return (
        <button onClick={() => context?.lang === 'en' ? context.setLang('it') : context?.setLang('en')} className='mb-5 cursor-pointer flex flex-row border-[0.5px] rounded px-2 items-center gap-3 shadow bg-white'>
            <p> {context?.lang == 'en' ? 'it' : 'en'} </p>
            <FontAwesomeIcon icon={faLanguage} />
        </button>
    )
}


export default Language;