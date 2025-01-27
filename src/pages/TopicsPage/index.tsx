import { faAdd, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, FormikProps } from "formik";
import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Language from "../../components/Language";
import Modal from "../../components/Modal";
import Topic from "../../components/Topic";
import Context from "../../context";
import { createTopic, getAllTopic } from "../../services/topic";

interface TopicDetail {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    user: {
        id: number,
        username: string,
        name: string,
    },
    formattedUpdatedAtDifference: string,
}

interface topicFormValues {
    title: string;
    description: string;
}

const TopicsPage = () => {
    const context = useContext(Context);
    const [errorsApi, setErrorsApi] = useState<string>("")
    const modalRef = useRef<{ open: () => void, close: () => void }>(null);
    const formikRef = useRef<FormikProps<topicFormValues>>(null);

    const [topics, setTopics] = useState<Array<TopicDetail>>([]);
    const { t } = useTranslation();

    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        getAllTopic().then((data) => {
            setTopics(data?.data?.data)
        })
    }

    const likeTopic = ({ id, isLike }: { id: number, isLike: boolean }) => {
        console.log(id, isLike, "tessst");
    }

    const initialValues: topicFormValues = {
        title: '',
        description: '',
    };

    const submitForm = async (values: topicFormValues) => {
        try {
            await createTopic({ title: values.title, description: values.description });
            modalRef?.current?.close();
            getAll();
            formikRef?.current?.resetForm();
        } catch (e: any) {
            setErrorsApi(e?.response?.data?.errors ?? "");
        };
    }

    return (
        <div>
            <Modal title={t('topics.add_new_button')} ref={modalRef}>
                <Formik innerRef={formikRef}
                    onSubmit={(e) => { submitForm(e); }}
                    initialValues={initialValues} >
                    {({ values, handleChange, handleSubmit }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className="px-3 py-2 flex flex-col gap-3">
                                    <div>
                                        <p className="text-sm mb-1"> {t('topics.form_title_label')}<span className="text-red-500">*</span></p>
                                        <input onChange={handleChange} value={values.title} placeholder={t('topics.form_title_label')} name="title" type="text" className=" px-2 py-1 w-full rounded border-[0.5px] border-gray-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm mb-1"> {t('topics.form_description_label')} <span className="text-red-500">*</span></p>
                                        <textarea onChange={handleChange} value={values.description} placeholder={t('topics.form_description_label')} name="description" className=" px-2 py-1 w-full rounded border-[0.5px] border-gray-300" />
                                    </div>
                                    <div>
                                        {errorsApi !== "" ? <p className='text-sm text-red-500'>{errorsApi}</p> : null}
                                    </div>
                                    <div className="flex flex-row-reverse flex-1">
                                        <button type='submit' className={`cursor-pointer px-6 h-8 bg-green-500 text-white text-xs rounded font-semibold hover:bg-cyan-900`}>
                                            {t('topics.form_save_button')}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )
                    }}

                </Formik>
            </Modal>
            <div className="container mx-auto lg:max-w-3xl  flex-1 flex flex-col  justify-center">
                <div className="mt-5 justify-items-center">
                    <Language />
                </div>
                <div className="flex flex-row justify-between items-center mx-4 mt-5">
                    <p className="font-bold text-sm sm:text-xl">{t('topics.list_of_topics')}</p>
                    <div className="flex flex-row gap-2">
                        <button className="cursor-pointer bg-green-500 hover:bg-green-900 text-white font-semibold text-xs p-4 py-2 rounded" onClick={() => modalRef?.current?.open()}>
                            <FontAwesomeIcon icon={faAdd} className="pr-2" />
                            {t('topics.add_new_button')}
                        </button>
                        <button className="cursor-pointer bg-red-600 hover:bg-red-900 text-white font-semibold text-xs p-4 py-2 rounded" onClick={() => context?.setIsLoggedIn(false)}>
                            <FontAwesomeIcon icon={faSignOut} className="pr-2" />
                            {t('topics.logout_button')}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col mx-4 my-10 gap-12">
                    {topics.map((dt: TopicDetail, index: number) =>
                        <Topic
                            id={dt.id}
                            key={index}
                            likePercentage={"0"}
                            dislikePercentage={"0"}
                            title={dt.title}
                            createdBy={dt.user.name}
                            body={dt.description}
                            likeAction={likeTopic}
                        />
                    )}
                </div>
            </div>
        </div>

    )
}

export default TopicsPage;