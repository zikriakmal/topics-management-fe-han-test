import { faAdd, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useRef } from "react";
import Language from "../../components/Language";
import Modal from "../../components/Modal";
import Topic from "../../components/Topic";
import Context from "../../context";

interface TopicList {
    title: string;
    createdBy: string;
    body: string;
    likePercentage: string;
    dislikePercentage: string;
}

const topicListData: Array<TopicList> = [
    {
        title: "Spring boot Spring-Security",
        createdBy: "Created By Louay Yahyaoui",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        likePercentage: "0",
        dislikePercentage: "0"
    },
    {
        title: "Spring boot Microservices",
        createdBy: "Created By Louay Yahyaoui",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dymmy text ever since the 1500s",
        likePercentage: "0",
        dislikePercentage: "0"
    },
    {
        title: "React Js",
        createdBy: "Created By Louay Yahyaoui",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dymmy text ever since the 1500s",
        likePercentage: "10",
        dislikePercentage: "90"
    },
    {
        title: "React Redux Toolkit",
        createdBy: "Created By Louay Yahyaoui",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dymmy text ever since the 1500s",
        likePercentage: "0",
        dislikePercentage: "0"
    },
    {
        title: "React Redux Toolkit",
        createdBy: "Created By Louay Yahyaoui",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dymmy text ever since the 1500s",
        likePercentage: "0",
        dislikePercentage: "0"
    }
]

const TopicsPage = () => {
    const context = useContext(Context);
    const modalRef = useRef<{ open: () => void, close: () => void }>(null);

    const submitForm = () => {
        modalRef?.current?.close();
    }

    const likeTopic = ({ id, isLike }: { id: number, isLike: boolean }) => {
        console.log(id, isLike, "tessst");
    }

    return (
        <div>
            <Modal title="Add new Topic" ref={modalRef}>
                <form action="">
                    <div className="px-3 py-2 flex flex-col gap-3">
                        <div>
                            <p className="text-sm mb-1">Title <span className="text-red-500">*</span></p>
                            <input placeholder='title' type="text" className=" px-2 py-1 w-full rounded border-[0.5px] border-gray-300" />
                        </div>
                        <div>
                            <p className="text-sm mb-1"> Description <span className="text-red-500">*</span></p>
                            <textarea placeholder='description' className=" px-2 py-1 w-full rounded border-[0.5px] border-gray-300" />
                        </div>
                        <div className="flex flex-row-reverse flex-1">
                            <button type='button' onClick={() => submitForm()} className={`cursor-pointer px-6 h-8 bg-green-500 text-white text-xs rounded font-semibold hover:bg-cyan-900`}>
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
            <div className="container mx-auto lg:max-w-3xl  flex-1 flex flex-col  justify-center">
                <div className="mt-5 justify-items-center">
                    <Language />
                </div>
                <div className="flex flex-row justify-between items-center mx-4 mt-5">
                    <p className="font-bold text-sm sm:text-xl">List of Topics</p>
                    <div className="flex flex-row gap-2">
                        <button className="cursor-pointer bg-green-600 hover:bg-green-900 text-white font-semibold text-xs p-4 py-2 rounded" onClick={() => modalRef?.current?.open()}>
                            <FontAwesomeIcon icon={faAdd} className="pr-2" />
                            Add new
                        </button>
                        <button className="cursor-pointer bg-red-700 hover:bg-red-900 text-white font-semibold text-xs p-4 py-2 rounded" onClick={() => context?.setIsLoggedIn(false)}>
                            <FontAwesomeIcon icon={faSignOut} className="pr-2" />
                            Logout
                        </button>
                    </div>
                </div>
                <div className="flex flex-col mx-4 my-10 gap-12">
                    {topicListData.map((dt: TopicList, index: number) =>
                        <Topic
                            key={index}
                            likePercentage={dt.likePercentage}
                            dislikePercentage={dt.dislikePercentage}
                            title={dt.title}
                            createdBy={dt.createdBy}
                            body={dt.body}
                            likeAction={likeTopic}
                        />
                    )}
                </div>
            </div>
        </div>

    )
}

export default TopicsPage;