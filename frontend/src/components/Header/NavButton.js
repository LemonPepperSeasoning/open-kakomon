import { useTranslation } from "react-i18next";

const NavButton = (props) => {
    const { t } = useTranslation();

    return (
        <div className='border-b-[3px] border-transparent hover:border-blue-500'>
            <a href={props.path}>
                <button className="w-auto p-2 bg-white rounded-md">
                    {t(props.title)}
                </button>
            </a>
        </div >

    )
}

export default NavButton;
