import { guardApi } from "./api.config"


const createTopic = async ({ title, description }: { title: string, description: string }) => {
    const res = await guardApi.post('/api/v1/topics', {
        title: title,
        description: description
    });
    return res;

}

const getAllTopic = async () => {
    const res = await guardApi.get('/api/v1/topics');
    return res;
}

const deleteTopicById = async (id: number) => {
    const res = await guardApi.delete('/api/v1/topics/' + id)
    return res;
}

export { createTopic, getAllTopic, deleteTopicById }