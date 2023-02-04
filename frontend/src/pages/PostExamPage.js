import { useTranslation } from 'react-i18next';





const PostExamPage = () => {

    const { t } = useTranslation();

    const onSubmit = (data) => {
        console.log("SUBMITED");
        console.log(data);
        // setUniversity(data.university);
        // history.push(`/search?university=${data.university}`);
    }

    return (
        <>
            <div className="m-auto">
                <form>
                    <form onSubmit={onSubmit}>

                        <label for="fname">{t("school_name")}:</label>
                        <input type="text" id="fname" name="fname" /><br /><br />

                        <label for="lname">{t("subject")}:</label>
                        <input type="text" id="lname" name="lname" /><br /><br />

                        <label for="lname">{t("year_of_exam")}:</label>
                        <input type="text" id="lname" name="lname" /><br /><br />


                        <input type="submit" value={t("submit")} />
                    </form>
                </form>
            </div>
        </>
    )
}

export default PostExamPage;
