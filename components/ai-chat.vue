<script setup>
import { chatStore } from "~/script/store/chat.js";
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
                chat.messages.push({
                    content: prompt.value,
                    sender: 0,
                    createdAt: new Date(),
                });
                chatEvents();
                sendButton.value = false;
                loading.value = true;
                prompt.value = null;
                startChating.value = true;

                chat.askQuestion(chat.messages[chat.messages.length - 1].content)
                    .then(async (res) => {

                        chatEvents();
                        sendButton.value = true;
                        loading.value = false;
                    })
                    .catch((err) => {
                        chat.messages.pop();
                        error.value = true;
                        sendButton.value = true;
                        loading.value = false;
                        placeholder.value = "مشکلی پیش امده لطفا مجدد امتحان کنید";
                        setTimeout(() => {
                            placeholder.value = "پیام خود را اینجا بنویسید";
                            error.value = false;
                        }, 3000);
                    });
            } else {
                error.value = true;
                placeholder.value = "لطفا پیام خود را بنویسید";
                setTimeout(() => {
                    placeholder.value = "پیام خود را اینجا بنویسید";
                    error.value = false;
                }, 3000);
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
    <div dir="ltr">
        <div class="fixed bottom-4 z-[10000] w-full max-w-sm px-4">
            <Popover class="relative flex flex-col-reverse gap-3">
                <div class="load-animation flex items-center gap-1">
                    <PopoverButton class="group inline-flex gap-2 h-16 px-3 items-center justify-center rounded-full bg-[#e7cd27]/80 focus:outline-none" @click="chatEvents">
                        <Icon icon="tabler:message-chatbot" class="size-14 text-black" />
                        <p class="cursor-default">پشتیبانی مدرن دیتا</p>
                    </PopoverButton>
                </div>
                <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                    <PopoverPanel v-slot="{ close }" class="absolute left-[180px] z-10 mb-20 flex min-h-[70svh] max-w-[350px] -translate-x-1/2 transform flex-col justify-between overflow-scroll rounded-lg bg-[url(/public/imgs/ai-chat-bg.png)] sm:px-0">
                        <div class="relative flex min-h-[70svh] w-full flex-col justify-between overflow-hidden">
                            <div class="relative z-50 h-12 w-full bg-[#e7cd27]">
                                <div @click="close" class="m-3 flex size-7 items-center justify-center rounded-full bg-black/15">
                                    <Icon icon="maki:cross" class="size-4 text-black" />
                                </div>
                            </div>
                            <div class="flex min-h-[50svh] min-w-[350px] flex-col justify-end transition-all delay-200 duration-700 ease-in-out">
                                <div class="flex w-full flex-col justify-center py-4">
                                    <div ref="chatBox" v-show="startChating" class="absolute bottom-20 right-[-20px] h-fit max-h-full flex-col items-end overflow-y-auto px-8 pt-32 transition-all duration-200 ease-in-out">
                                        <div dir="rtl" v-for="HtmlMessage in chat.messages">
                                            <div v-if="HtmlMessage.sender == '0'" class="relative mt-3 flex min-h-16 w-fit min-w-16 max-w-[300px] shrink-0 items-center rounded-xl bg-[#ffe732]/60 px-4 py-4 pb-1">
                                                <div class="mb-6 text-[14px]" style="direction: rtl">
                                                    <div v-html="HtmlMessage.content"></div>
                                                </div>
                                                <div class="absolute bottom-0.5 right-4">
                                                    {{ parseDate(HtmlMessage.createdAt) }}
                                                </div>
                                            </div>
                                            <div v-else class="relative right-6 mt-3 flex min-h-16 w-fit min-w-16 max-w-[300px] shrink-0 items-center rounded-xl bg-white/60 px-4 py-4 pb-1">
                                                <div class="mb-6 text-[14px]" style="direction: rtl">
                                                    <div v-html="HtmlMessage.content"></div>
                                                </div>
                                                <div class="absolute bottom-0.5 right-4">
                                                    {{ parseDate(HtmlMessage.createdAt) }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex min-w-full justify-center" v-show="!startChating">
                                        <div class="mb-24 flex w-[330px] flex-col items-center px-6 text-center lg:w-[350px]">
                                            <p class="font-inter text-xl font-semibold tracking-tight lg:text-xl">👋 سلام! من مودو هستم</p>
                                            <p class="text-sm text-gray-500 lg:text-[12px]">اگر مایل باشید، می‌توانم اطلاعاتی درباره شرکت داده پردازان پارسیان نامی (مدرن دیتا)، در اختیار شما قرار دهم</p>
                                            <p class="text-sm text-gray-500 lg:text-[12px]">آیا مایل هستید درباره شرکت مدرن دیتا بیشتر بدانید یا سؤالی درباره خدمات آن دارید ؟</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-6 flex items-center justify-center">
                                    <div class="mx-3 flex h-12 w-full items-center justify-between rounded-xl bg-[#d9d9d9] px-1.5">
                                        <input @keypress.enter.exact="sendPrompt" :placeholder="placeholder" v-model="prompt" type="text" :class="['mx-5 h-10 w-full bg-transparent outline-none placeholder:text-black placeholder:text-black/40', error ? 'placeholder:text-sm placeholder:text-red-600' : '']" style="direction: rtl" />
                                        <div class="flex items-center justify-center rounded-full" @click="sendPrompt">
                                            <button v-show="sendButton" class="relative z-50 flex size-9 cursor-pointer items-center justify-center rounded-xl bg-[#e7cd27] text-white hover:opacity-90">
                                                <Icon icon="material-symbols:send-outline-rounded" class="size-8 text-black" />
                                            </button>
                                            <div class="flex size-12 cursor-pointer items-center justify-center rounded-full p-2" v-if="loading">
                                                <div class="loader"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute bottom-1 mx-auto mt-1 flex w-full justify-center text-xs text-black/30">
                            <p><span class=" text-[rgb(92,70,121)] font-bold">Modo</span> قدرت گرفته از</p>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>
        </div>
    </div>
</template>
