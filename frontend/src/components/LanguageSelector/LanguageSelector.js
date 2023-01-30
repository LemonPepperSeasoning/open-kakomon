import { useTranslation } from 'react-i18next';

const Header = () => {

    const { t, i18n } = useTranslation();
    
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };

      
    return (
    <>
        <div className="m-6">
            <select name="Language" id="language" onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="jp">日本語</option>
            </select> 
        </div>
    </>
    )
}

export default Header;
