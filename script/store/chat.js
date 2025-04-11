import { askQuestionApi, getChatHistory } from "../api/api";
import { marked } from "marked";

export const chatStore = defineStore("chatStore", () => {
    let messages = ref([]);

    let askQuestion = async (question) => {
        let res = await askQuestionApi(question);
        messages.value.push(res.data);
    };
    let loadChatHistory = async (question) => {
        let res = await getChatHistory(question);
        messages.value = res.data.messages;
        for (let i of messages.value) {
            i.content = marked.parse(i.content);
        }
    };
    return { askQuestion, loadChatHistory, messages };
});
