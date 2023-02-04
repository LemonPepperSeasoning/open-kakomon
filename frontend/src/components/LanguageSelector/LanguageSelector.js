import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };


    return (
        <div className='border-b-4 border-transparent hover:border-blue-500'>
            <select className="p-2 border-transparent rounded-md w-28"
                name="Language"
                id="language"
                onChange={(e) => changeLanguage(e.target.value)}
            >

                <option value="en">English</option>
                <option value="jp">日本語</option>
            </select>
        </div >

    )
}

export default LanguageSelector;
