import { useTranslation } from 'react-i18next';

const PostExamPage = () => {

    const { t } = useTranslation();

    const onSubmit = (data) => {
        console.log("SUBMITED");
        console.log(data);
    }

    return (
        <>
            <div className="m-auto">
                <form>
                    <form onSubmit={onSubmit}>

                        <label for="fname">{t("school_name")}:</label><br />
                        <input className="m-auto border-2 border-black rounded-md" type="text" id="fname" name="fname" /><br /><br />

                        <label for="lname">{t("subject")}:</label><br />
                        <input className="border-2 border-black rounded-md" type="text" id="lname" name="lname" /><br /><br />

                        <label for="lname">{t("year_of_exam")}:</label><br />
                        <input className="border-2 border-black rounded-md" type="number" id="lname" name="lname" /><br /><br />

                        <label for="lname">{t("file")}:</label><br />
                        <input className="border-2 border-black rounded-md" type="file" id="files" name="lname" multiple /><br /><br />


                        <input className="border-2 border-black rounded-md" type="submit" value={t("submit")} />
                    </form>
                </form>
            </div>
        </>
    )
}

export default PostExamPage;
