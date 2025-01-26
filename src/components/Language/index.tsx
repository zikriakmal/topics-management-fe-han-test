import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import Context from "../../context";
import { useTranslation } from "react-i18next";

const Language = () => {
    const context = useContext(Context);
    const { t } = useTranslation();
    return (
        <button onClick={() => context?.lang === 'en' ? context.setLang('it') : context?.setLang('en')} className='hover:bg-gray-400 hover:text-white hover:-translate-y-1.5 transition-all mb-5 cursor-pointer flex flex-row border-[0.5px] rounded px-2 items-center gap-3 shadow bg-white py-2'>
            <p className="font-bold text-xs"> {t('change_language_to')} {context?.lang == 'en' ? '(italia)' : '(english)'} </p>
            <FontAwesomeIcon icon={faLanguage} />
        </button>
    )
}


export default Language;