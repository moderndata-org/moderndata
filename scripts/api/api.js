let baseUrl = "http://192.168.4.208:4000";

let askQuestionApi = async (question) => {
    let res = await $fetch(baseUrl + "/conversation/ask-ai", {
        method: "POST",
        body: {
            message: question,
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            user: localStorage.getItem("uniqueId"),
        },
    });
    return res;
};
let getChatHistory = async () => {
    let res = await $fetch(baseUrl + "/conversation/history", {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            user: localStorage.getItem("uniqueId"),
        },
    });
    return res;
};

export { getChatHistory, askQuestionApi };
