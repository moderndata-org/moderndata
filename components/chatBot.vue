<script setup>
import { chatStore } from "~/scripts/store/app.js";
import { Icon } from "@iconify/vue";

let chat = chatStore();

let startChating = ref(false);
let loading = ref(false);
let error = ref(false);

let prompt = ref();
let sendButton = ref(true);
let chatBox = ref();
let placeholder = ref("پیام خود را اینجا بنویسید");

//=============================================================================

let sendPrompt = () => {
    error.value = false;
    if (!localStorage.getItem("uniqueId")) {
        localStorage.setItem("uniqueId", Math.floor(Math.random() * 90000000) + 10000000);
    } else {
        if (!loading.value) {
            if (prompt.value) {
                chat.messages.push({ content: prompt.value, sender: 0, createdAt: new Date() });
                console.log(prompt.value);
                chatEvents();
                sendButton.value = false;
                loading.value = true;
                prompt.value = null;
                startChating.value = true;
                
                chat.askQuestion(chat.messages[chat.messages.length - 1].content)
                    .then(async (res) => {
                        console.log("test" + res);

                        chatEvents();
                        sendButton.value = true;
                        loading.value = false;
                    })
                    .catch((err) => {
                        console.log("error" + err);

                        error.value = true;
                        sendButton.value = true;
                        loading.value = false;
                        placeholder.value = "مشکلی پیش امده لطفا مجدد امتحان کنید";
                    });
            } else {
                error.value = true;
                placeholder.value = "لطفا پیام خود را بنویسید";
            }
        }
    }
};

let chatEvents = () => {
    setTimeout(() => {
        chatBox.value.scrollTop = chatBox.value.scrollHeight;
    }, 10);
};

let parseDate = (date = new Date().toString()) => {
    return new Date(date).getHours().toString().padStart(2, "0") + ":" + new Date(date).getMinutes().toString().padStart(2, "0");
};
onMounted(() => {
    if (localStorage.getItem("uniqueId")) {
        chat.loadChatHistory().then((res) => {
            startChating.value = true;
        });
    }
});
</script>
<template>
    <div class="w-full h-screen bg-black">
        <div class="fixed bottom-4 w-full max-w-sm px-4" style="font-family: vazir">
            <Popover class="relative flex flex-col-reverse gap-3">
                <PopoverButton class="group inline-flex items-center justify-center rounded-full size-14 bg-[#FFBF00]/80 hover:text-white focus:outline-none" @click="chatEvents">
                    <Icon icon="tabler:message-chatbot" class="size-9 text-black" />
                </PopoverButton>
                <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                    <PopoverPanel v-slot="{ close }" class="absolute left-[180px] flex flex-col justify-between rounded-lg max-w-[350px] z-10 mb-16 bg-[url(/public/images/chat-bot-background/bgchat.png)] -translate-x-1/2 transform sm:px-0 min-h-[70svh] overflow-scroll">
                        <div class="relative flex flex-col overflow-hidden w-full justify-between min-h-[70svh]">
                            <div class="w-full h-12 relative z-50 bg-[#FFBF00]">
                                <div @click="close" class="size-7 bg-black/15 rounded-full flex items-center justify-center m-3">
                                    <Icon icon="maki:cross" class="size-4 text-black" />
                                </div>
                            </div>
                            <div class="flex min-h-[50svh] min-w-[350px] flex-col justify-end transition-all delay-200 duration-700 ease-in-out">
                                <div class="flex w-full flex-col justify-center py-4">
                                    <div ref="chatBox" v-show="startChating" class="absolute bottom-20 right-[-20px] h-fit flex-col items-end overflow-y-auto transition-all duration-200 ease-in-out max-h-full px-8 pt-32">
                                        <div dir="rtl" v-for="HtmlMessage in chat.messages">
                                            <div v-if="HtmlMessage.sender == '0'" class="w-fit relative mt-3 flex min-h-16 min-w-16 max-w-[300px] shrink-0 items-center rounded-xl bg-[#ffe732]/60 px-4 py-4 pb-1">
                                                <div class="mb-6" style="direction: rtl">
                                                    <div v-html="HtmlMessage.content"></div>
                                                </div>
                                                <div class="absolute bottom-0.5 right-4">{{ parseDate(HtmlMessage.createdAt) }}</div>
                                            </div>
                                            <div v-else class="w-fit right-6 relative mt-3 flex min-h-16 min-w-16 max-w-[300px] shrink-0 items-center rounded-xl bg-white/60 px-4 py-4 pb-1">
                                                <div class="mb-6" style="direction: rtl">
                                                    <div v-html="HtmlMessage.content"></div>
                                                </div>
                                                <div class="absolute bottom-0.5 right-4">{{ parseDate(HtmlMessage.createdAt) }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex min-w-full justify-center" v-show="!startChating">
                                        <div class="flex flex-col items-center mb-24 w-[330px] text-center lg:w-[350px] px-6">
                                            <p class="font-inter text-xl font-semibold tracking-tight lg:text-xl">👋 سلام! من مودو هستم</p>
                                            <p class="text-sm text-gray-500 lg:text-[12px]">اگر مایل باشید، می‌توانم اطلاعاتی درباره شرکت داده پردازان پارسیان نامی (مدرن دیتا)، در اختیار شما قرار دهم</p>
                                            <p class="text-sm text-gray-500 lg:text-[12px]">❓ آیا مایل هستید درباره شرکت مدرن دیتا بیشتر بدانید یا سؤالی درباره خدمات آن دارید؟</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center mb-6">
                                    <div class="flex h-12 items-center w-full mx-3 justify-between rounded-xl bg-[#d9d9d9] px-1.5">
                                        <input @keypress.enter.exact="sendPrompt" :placeholder="placeholder" v-model="prompt" type="text" :class="['mx-5 h-10 w-full bg-transparent outline-none placeholder:text-black', error ? 'placeholder:text-red-600 placeholder:text-sm' : '']" style="direction: rtl" />
                                        <div class="flex items-center justify-center rounded-full" @click="sendPrompt">
                                            <button v-show="sendButton" class="flex size-9 z-50 relative cursor-pointer items-center justify-center rounded-xl bg-[#FFBF00] text-white hover:opacity-90">
                                                <Icon icon="material-symbols:arrow-forward" class="size-8 text-black" />
                                            </button>
                                            <div class="flex size-12 cursor-pointer items-center justify-center rounded-full p-2" v-if="loading">
                                                <div class="loader"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute flex justify-center text-black/30 mt-1 text-xs mx-auto w-full bottom-1">
                            <p>Modo قدرت گرفته از</p>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>
        </div>
    </div>
</template>
