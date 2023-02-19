import { useTranslation } from "react-i18next";

const NavButton = (props) => {
    const { t } = useTranslation();

    return (
        <a href={props.path}>
            <p className="p-2 border-b-[3px] border-transparent hover:border-blue-500">
                {t(props.title)}
            </p>
        </a>
    )
}

export default NavButton;
