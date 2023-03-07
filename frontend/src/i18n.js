import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';



i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({

        lng: "jp", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    "title": "langugage in English",
                    "search_title": "Search for University Exam Papers",
                    "upload_exam": "Share past exam papers",
                    "school_name": "School Name",
                    "year_of_exam": "Year of Exam",
                    "subject": "Subject / Major",
                    "submit": "Submit",
                    "about": "About",
                    "privacy-policy": "privacy-policy",
                    "licensing": "Licensing",
                    "contact": "Contact",
                    "open-kakomon": "Open Kakomon",
                    "gather-by-community-message": "This is a public database, gathered by our community.",
                    "please-share-message": "If you have any exam, please share with us by submitting it below.",
                    "comment": "comment",
                    "write-a-review": "Write a review",
                    "website": "Website",
                    "exam": "Exam",
                    "reviews": "Review",
                    "post-comment": "Post comment",
                    "helpful": "Helpful",
                    "not-helpful": "Not helpful",
                    "report": "Report",
                    "read-more": "Read more",
                    "write-a-comment": "Write a comment...",
                }
            },
            jp: {
                translation: {
                    "title": "langugage in Japanese",
                    "search_title": "大学の名前を調べてみよう。",
                    "upload_exam": "過去問をシェアーする",
                    "school_name": "学校名",
                    "year_of_exam": "年",
                    "subject": "科目",
                    "submit": "送信",
                    "about": "オープン過去問について",
                    "privacy-policy": "プライバシー",
                    "licensing": "利用規約",
                    "contact": "お問い合わせ",
                    "open-kakomon": "オープン過去問",
                    "gather-by-community-message": "このサイトは、皆さもの協力により過去問を提供させていただいております。",
                    "please-share-message": "もし、過去問がありましたら是非シェアーしてください。",
                    "comment": "コメント",
                    "write-a-review": "クチコミを書く",
                    "website": "Webサイト",
                    "exam": "過去問",
                    "reviews": "クチコミ",
                    "post-comment": "送信",
                    "helpful": "役に立った",
                    "not-helpful": "役に立たない",
                    "report": "報告する",
                    "read-more": "もっと見る",
                    "write-a-comment": "ここに質問を入力",
                }
            }
        },

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },

        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

            // cache user language on
            caches: ['localStorage', 'cookie'],
        }
    });