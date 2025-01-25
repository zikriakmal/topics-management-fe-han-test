import { faAdd, faSignOut, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import Context from "../../context";
import SampleImage from '../../assets/sample_post_image.png';


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
    return (
        <div className="container mx-auto lg:max-w-3xl mt-10  flex-1 flex flex-col  justify-center">
            <div className="flex flex-row justify-between items-center mx-4">
                <p className="font-bold text-sm sm:text-xl">List of Topics</p>
                <div className="flex flex-row gap-2">
                    <button className="cursor-pointer bg-green-600 hover:bg-green-900 text-white font-semibold text-xs p-4 py-2 rounded" onClick={() => context?.setIsLoggedIn(false)}>
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
                        body={dt.body} />
                )}
            </div>
        </div>
    )
}


const Topic = ({ title, createdBy, body, likePercentage, dislikePercentage }:
    {
        title: string,
        createdBy: string,
        body: string,
        likePercentage: string,
        dislikePercentage: string
    }) => {
    return (
        <div className="flex sm:flex-row sm:items-start flex-col items-center gap-2">
            <div className="h-auto w-30">
                <img src={SampleImage} alt="" className="h-auto w-30" />
            </div>
            <div className="flex flex-col items-center flex-1">
                <p className="font-semibold text-md">{title}</p>
                <p className="font-light text-sm">{createdBy}</p>
                <p className="font-medium text-xs text-center mt-3">{body}</p>
                <div className="flex flex-row mt-2 gap-4">
                    <button className="cursor-pointer flex-row text-xs text-white bg-red-600 flex gap-4 rounded border border-red-600 overflow-hidden">
                        <div className="flex flex-row p-2 py-1 items-center justify-center gap-2 flex-1">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <p className="font-bold">Like</p>
                        </div>
                        <div className="bg-white p-2 py-1">
                            <p className="text-red-600">{likePercentage}%</p>
                        </div>
                    </button>
                    <button className="cursor-pointer flex-row text-xs text-blue-400 flex gap-4 rounded border border-blue-400 overflow-hidden">
                        <div className="flex flex-row p-2 py-1 items-center justify-center gap-2 flex-1">
                            <FontAwesomeIcon icon={faThumbsDown} />
                            <p className="font-bold">Dislike</p>
                        </div>
                        <div className="bg-white p-2 py-1 border-l">
                            <p>{dislikePercentage}%</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default TopicsPage;