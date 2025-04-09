<script setup>
import { Icon } from "@iconify/vue";
import { marked } from "marked";

// provideHeadlessUseId(() => useId())

let InformationBox = ref(true);
let isSidebarOpen = ref(true);
let loading = ref(false);

let prompt = ref();
let chatBox = ref();
let Enter = ref();
let chatBoxParent = ref();
let mainScreen = ref();

let chats = ref([]);

const route = useRoute();

let clock = `${new Date().getHours().toString().padStart(2, "0")}:${new Date().getMinutes().toString().padStart(2, "0")}`;

//==========================================================================================================

let chatEvents = () => {
    setTimeout(() => {
        chatBoxParent.value.scrollTop = chatBoxParent.value.scrollHeight;
    }, 100);
};

let sendPrompt = () => {
    if (prompt.value) {
        chats.value.push(prompt.value);
    } else {
        if (window.innerWidth < 700) {
        } else {
        }
    }
    if (chats.value[chats.value.length - 1]) {
        loading.value = true;
        prompt.value = null;
        Enter.value.style.display = "none";
        chatEvents();

        if (InformationBox.value) {
            chatBoxParent.value.style.display = "flex";
            InformationBox.value = false;
        }

        askQuestionApi(queryId, chats.value[chats.value.length - 1])
            .then(async (res) => {
                chats.value.push(marked.parse(await res.data.ai));
                chatEvents();

                Enter.value.style.display = "flex";
                loading.value = false;
            })
            .catch((err) => {
                Enter.value.style.display = "flex";
                loading.value = false;
            });
    }
};

onMounted(() => {});
</script>
<template>
    <div class="fixed bottom-16 w-full max-w-sm px-4">
        <Popover v-slot="{ open }" class="relative flex flex-col-reverse">
            <PopoverButton class="group inline-flex items-center rounded-md bg-[#FFBF00]/60 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                <span>Solutions</span>
            </PopoverButton>

            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                <PopoverPanel class="absolute left-[225px] rounded-lg min-w-[450px] z-10 mb-14 -translate-x-1/2 transform sm:px-0 lg:max-w-3xl border max-h-[500px] overflow-scroll">
                    <div class="relative flex lg:h-[60svh] overflow-hidden lg:w-full justify-center" style="font-family: vazir">
                        <div class="z-10 flex min-h-[50svh] w-full flex-col justify-end transition-all delay-200 duration-700 ease-in-out" ref="mainScreen">
                            <div class="z-40 flex w-full flex-col justify-center px-5 py-4 lg:px-12">
                                <div ref="chatBoxParent" class="hide-Scroll absolute bottom-28 right-6 hidden h-fit max-h-[20vh] flex-col items-end overflow-y-auto transition-all duration-200 ease-in-out lg:mb-0 lg:max-h-[42vh] px-8">
                                    <div dir="ltr" ref="chatBox" v-for="HtmlMessage in chats">
                                        <div id="message" class="break-words whitespace-normal relative mt-3 flex min-h-16 min-w-16 max-w-[340px] shrink-0 items-center rounded-xl bg-[#FFBF00]/70 px-4 py-4 pb-1 text-right">
                                            <div class="mb-6" style="direction: rtl">
                                                <div v-html="HtmlMessage"></div>
                                            </div>
                                            <div class="absolute bottom-0.5 right-4">{{ clock }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="InformationBox">
                                    <div class="z-20 flex w-full flex-col items-center mb-24">
                                        <div class="w-[330px] text-center lg:w-[350px]">
                                            <p class="font-inter text-xl font-semibold tracking-tight lg:text-xl">How can We <span class="logo-gradiant"> assist </span>you today?</p>
                                            <p class="text-sm text-gray-500 lg:text-[12px]">Get expert guidance powered by AI agents specializing in Sales, Marketing, and Negotiation. Choose the agent that suits your needs and start your conversation with ease.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4 flex items-center justify-center">
                                <div class="flex h-16 items-center justify-between rounded-full bg-[#8C8C8C3D] px-2">
                                    <div class="flex items-center">
                                        <div>
                                            <button class="flex size-12 cursor-pointer items-center justify-center rounded-full bg-[#424242] hover:opacity-80">
                                                <Icon icon="material-symbols:attach-file-rounded" class="size-9 rotate-45 text-white" />
                                            </button>
                                        </div>
                                    </div>
                                    <input @keypress.enter.exact="sendPrompt" v-model="prompt" placeholder="پیام خود را اینجا بنویسید" type="text" class="mx-5 h-10 w-full bg-transparent outline-none placeholder:text-black" style="direction: rtl" />
                                    <div class="flex items-center justify-center rounded-full" @click="sendPrompt">
                                        <button ref="Enter" class="flex size-12 z-50 relative cursor-pointer items-center justify-center rounded-full bg-[#FFBF00] text-white hover:opacity-90">
                                            <Icon icon="material-symbols:arrow-forward" class="size-8 text-black" />
                                        </button>
                                        <div class="flex size-12 cursor-pointer items-center justify-center rounded-full p-2" v-if="loading">
                                            <div class="loader fill-black"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PopoverPanel>
            </transition>
        </Popover>
    </div>
</template>
<style>
*:hover {
    transition: all 200ms ease 30ms;
}
.loader {
    width: 50px;
    aspect-ratio: 1;
    display: grid;
    -webkit-mask: conic-gradient(from 15deg, #0000, #000);
    animation: l26 1s infinite steps(12);
}
.loader,
.loader:before,
.loader:after {
    background:
        radial-gradient(closest-side at 50% 12.5%, #ffbf00 96%, #0000) 50% 0/20% 80% repeat-y,
        radial-gradient(closest-side at 12.5% 50%, #ffbf00 96%, #0000) 0 50%/80% 20% repeat-x;
}
.loader:before,
.loader:after {
    content: "";
    grid-area: 1/1;
    transform: rotate(30deg);
}
.loader:after {
    transform: rotate(60deg);
}

@keyframes l26 {
    100% {
        transform: rotate(1turn);
    }
}
.hide-Scroll::-webkit-scrollbar {
    display: none;
}
.hide-Scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
