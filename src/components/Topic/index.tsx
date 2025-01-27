
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import SampleImage from '../../assets/sample_post_image.png';

const Topic = ({ id, title, createdBy, body, likePercentage, dislikePercentage, likeAction }:
    {
        id: number,
        title: string,
        createdBy: string,
        body: string,
        likePercentage: string,
        dislikePercentage: string,
        likeAction: ({ id, isLike }: { id: number, isLike: boolean }) => void
    }) => {
    const { t } = useTranslation();

    return (
        <div className="flex sm:flex-row sm:items-start flex-col items-center gap-2">
            <div className="h-auto w-30">
                <img src={SampleImage} alt="" className="h-auto w-30" />
            </div>
            <div className="flex flex-col items-center flex-1">
                <p className="font-semibold text-md">{title}</p>
                <p className="font-light text-sm">Created By {createdBy}</p>
                <p className="font-medium text-xs text-center mt-3">{body}</p>
                <div className="flex flex-row mt-2 gap-4">
                    <button onClick={() => likeAction({ id: id, isLike: true })} className="hover:bg-red-900 hover:-translate-y-0.5 cursor-pointer flex-row text-xs text-white bg-red-600 flex gap-4 rounded border border-red-600 overflow-hidden">
                        <div className="flex flex-row p-2 py-1 items-center justify-center gap-2 flex-1">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <p className="font-bold">{t('topics.like_button')}</p>
                        </div>
                        <div className="bg-white p-2 py-1">
                            <p className="text-red-600 ">{likePercentage}%</p>
                        </div>
                    </button>
                    <button onClick={() => likeAction({ id: id, isLike: false })} className="hover:bg-blue-200 hover:-translate-y-0.5 transition-all cursor-pointer flex-row text-xs text-blue-400 flex gap-4 rounded border border-blue-400 overflow-hidden">
                        <div className="flex flex-row p-2 py-1 items-center justify-center gap-2 flex-1">
                            <FontAwesomeIcon icon={faThumbsDown} />
                            <p className="font-bold">{t('topics.dislike_button')}</p>
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

export default Topic;