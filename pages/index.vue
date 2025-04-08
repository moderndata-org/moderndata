<script setup lang="ts">
import { homeStore } from "~/script/store/home";
import { Navigation } from "swiper/modules";
let fullpage = ref();
let store = homeStore();
import { ArrowDownIcon } from "@heroicons/vue/16/solid";
let properties = [
  {
    title: "هوش مصنوعی",
    description:
      " استفاده از جدید ترین مدل های تشخیص زبان طبیعی و تشخیص تصاویر",
    class: "!bg-main",
    delay: 300,
  },
  {
    title: "بازی سازی",
    description:
      "استفاده از جدیدترین موتورهای بازی سازی مانند Flame و استفاده از جدید ترین تکنولوژی های انیمیشن سازی و ساخت کاراکتر",
    Pclass: "!leading-[27px]",
    delay: 600,
  },
  {
    title: " طراحی UI/UX",
    description:
      " استفاده از جدیدترین و مدرن ترین روش های طراحی UI در اپلیکیشن ها و وب سایت ها",
    delay: 900,
  },
  {
    title: "پشتیبانی و بروزرسانی",
    description: "پشتیبانی دائم و بروزرسانی اپلیکیشن های تحت پشتیبانی",
    delay: 1200,
  },
];
onMounted(() => {
  store.getProjects();
  // fullpage?.value.api?.setAutoScrolling(false);
});
</script>
<template>
  <!-- <ul
    id="menu"
    class="fixed top-0 z-[2000] flex w-full gap-2 bg-black p-2 text-white *:rounded-lg *:bg-main *:p-1.5 *:text-black"
  >
    <li data-menuanchor="introduction"><a href="#1">معرفی</a></li>
    <li data-menuanchor="properties"><a href="#2">ویژگی ها</a></li>
    <li data-menuanchor="work-samples"><a href="#3">نمونه کار ها</a></li>
    <li data-menuanchor="services"><a href="#4">خدمات</a></li> 
    <li data-menuanchor="contact-us"><a href="#4">ارتباط با ما</a></li>
      :options="{
      menu: '#menu',
      easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      anchors: [
        'introduction',
        'properties',
        'work-samples',
        'services',
        'contact-us',
      ],
      licenseKey: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    }"
  </ul> -->
  <div ref="fullpage" id="fullpage">
    <section class="section">
      <div class="section-container flex flex-col lg:flex-row">
        <div
          class="absolute right-[-15%] top-[-130px] h-[50%] w-[72%] max-w-[1250px] rotate-[11deg] rounded-3xl bg-main"
        ></div>
        <div
          class="relative z-20 mt-[10vh] flex h-[58%] w-full flex-col justify-center pb-[12px] text-white lg:h-[80vh] lg:w-[60%]"
        >
          <div
            class="mb-[70px] text-center text-[60px] font-bold lg:text-[100px]"
          >
            مدرن دیتا <br />
            <p class="text-[20px]">راهکارهای هوشمند برای چالش‌های پیچیده</p>
          </div>
          <ArrowDownIcon
            class="absolute bottom-0 right-[50%] hidden size-[45px] translate-x-[50%] animate-bounce cursor-pointer rounded-full bg-main p-1 text-black lg:block"
            @click="fullpage.api.moveTo(2)"
          />
        </div>
        <div
          class="before mx-auto mb-[100px] mt-[50px] flex h-fit w-[90%] flex-col items-center justify-center rounded-3xl bg-main pb-[30px] pt-[50px] before:left-[-5px] before:top-[-5px] lg:mt-[10vh] lg:h-[80vh] lg:w-[32%] lg:pt-0"
        >
          <div class="flex flex-col items-center justify-center lg:pt-[20%]">
            <img src="/imgs/logo.png" class="w-[250px] lg:w-[320px]" />
            <p
              class="relative bottom-7 text-center text-[55px]"
              style="font-family: poppins"
            >
              Modern Data
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-container flex flex-col lg:flex-row">
        <div class="flex w-full lg:w-[37%]">
          <div class="min-h-full w-[15%] bg-main lg:w-[28%]" />
          <div class="w-[85%] bg-secondary pb-[80px] text-white lg:w-[72%]">
            <p class="mb-[30px] mt-[60px] pr-[15px] text-[60px] font-bold">
              خدمات ما
            </p>
            <p class="pl-[30px] pr-[15px] text-[17px] leading-[30px]">
              شرکت ما با نام داده پردازان پارسیان نامی (مدرن دیتا) در سال 1396
              تأسیس گردیده است. ما با تکیه بر تجربه و تخصصی که در این حوزه بدست
              آورده‌ایم، تلاش می‌کنیم تا بهترین و جذاب‌ترین راهکارهای نرم‌افزاری
              را برای مشتریان خود ارائه دهیم. تیم ما از افرادی با استعداد و
              متخصص تشکیل شده است که در تمامی مراحل تولید، از طراحی تا
              پیاده‌سازی، با انگیزه بالا و بهبود پایدار به کار می‌پردازند. ما به
              ارائه راهکارهای نوآورانه، قابلیت های کاربردی و طراحی بصری جذاب در
              اپلیکیشن‌ها و بازی‌های موبایلی خود متعهد هستیم. از زمان تأسیس،
              شرکت ما در زمینه طراحی و تولید اپلیکیشن‌ها و بازی‌های موبایلی به
              ارائه خدمات به مشتریان در داخل و خارج از کشور می‌پرداخته است. ما
              افتخار می کنیم که با همکاری با شرکت‌ها و سازمان‌های مختلف، نیازهای
              نرم‌افزاری آن‌ها را برآورده نموده و به بهبود عملکرد و رشد کسب و
              کار آن‌ها کمک کرده‌ایم.
            </p>
          </div>
        </div>
        <div
          class="relative flex min-h-full w-full items-center justify-center overflow-hidden bg-secondary pb-[3%] lg:w-[63%] lg:bg-[#F8F8F8]"
        >
          <div
            class="absolute bottom-[-53%] left-[-35%] h-[80%] w-[500px] rotate-[11deg] rounded-3xl bg-main lg:left-[-15%] lg:w-[90%]"
          ></div>
          <div
            class="z-10 my-[50px] ml-[8%] mr-[12%] flex h-[80%] min-h-fit w-[80%] flex-wrap justify-between rounded-3xl border-[#c0c0c0] px-4 py-[20px] sm:px-[45px] lg:my-0 lg:border"
          >
            <div
              class="property-container mb-[15px] w-full rounded-2xl bg-white p-5 py-10 opacity-0 shadow-lg sm:w-[45%]"
              v-for="item in properties"
              :class="item.class"
            >
              <p class="text-[25px] font-bold">{{ item.title }}</p>
              <p
                class="mt-[7px] text-[18px] leading-[30px]"
                :class="item.Pclass"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-container pt-[50px]">
        <div
          class="absolute -top-[25%] left-[-45%] z-0 hidden h-[80%] w-[80%] rotate-[-11deg] rounded-3xl bg-main lg:block"
        ></div>
        <p class="mx-auto block w-[91%] text-[30px] font-bold text-main">
          نمونه کار ها
        </p>
        <div v-if="!store.isProjectDataReceived" class="mx-auto block w-[95%]">
          <div class="skeleton h-[50vh]" />
          <div class="skeleton mt-[5vh] h-[30vh]" />
        </div>
        <Swiper
          v-else
          :loop="true"
          class="relative mx-auto block w-[92%]"
          space-between="20"
          :navigation="true"
          :modules="[Navigation]"
        >
          <SwiperSlide v-for="item in store.projects">
            <div
              class="flex flex-col justify-between pb-3 lg:h-[clamp(300px,65vh,65vh)] lg:flex-row lg:pb-0 lg:pt-[10px]"
            >
              <div
                class="mt-5 h-fit w-full overflow-hidden rounded-3xl border-2 border-main pb-8 pl-6 text-white lg:mt-0 lg:h-full lg:w-[40%]"
              >
                <p
                  class="mb-[20px] mt-[20px] pr-[30px] text-[40px] font-bold text-main"
                >
                  {{ item.name }}
                </p>
                <p class="pr-[60px] text-[15px]">{{ item.description }}</p>
                <ul class="mt-[20px] list-disc pr-[85px]">
                  <li v-for="list in item.features.split(',')">{{ list }}</li>
                </ul>
                <div
                  class="mt-8 flex items-center pr-[60px]"
                  v-if="item.preview_link !== '-'"
                >
                  <nuxt-link
                    :to="item.preview_link"
                    external
                    target="_blank"
                    class="rounded-lg bg-main p-2 text-black"
                  >
                    پیش نمایش
                  </nuxt-link>
                </div>
              </div>
              <div
                class="before ml-2 mt-12 flex h-[300px] w-[98%] justify-around rounded-3xl bg-white py-[10px] *:h-[97%] *:w-[30%] *:max-w-[270px] *:rounded-xl before:-left-[8px] before:-top-[5px] before:hidden lg:mt-0 lg:h-full lg:w-[54%] lg:before:block"
              >
                <img v-for="i in item.images" :src="i.image" />
              </div>
            </div>
            <div
              class="mt-[27px] flex w-full flex-col justify-between lg:flex-row"
            >
              <div
                class="flex h-[120px] w-full items-center justify-around overflow-hidden rounded-3xl border-2 border-main px-4 text-[#F8F8F8] *:h-[70px] *:w-[105px] lg:w-[40%]"
              >
                <div
                  class="relative flex items-center justify-around pb-[20px]"
                >
                  <p
                    class="absolute bottom-[2px] w-full text-center text-[12px] lg:text-base"
                  >
                    پلتفرم ها
                  </p>
                  <img
                    v-if="
                      item.platform.some((some: any) => some.name === 'web')
                    "
                    src="/imgs/chrome.svg"
                    class="relative top-[2px] h-[26px] w-[34px]"
                  />
                  <img
                    src="/imgs/apple.svg"
                    class="h-[38px] w-[34px]"
                    v-if="
                      item.platform.some((some: any) => some.name === 'ios')
                    "
                  />
                  <img
                    src="/imgs/android.svg"
                    class="h-[28px] w-[24px]"
                    v-if="
                      item.platform.some((some: any) => some.name === 'android')
                    "
                  />
                </div>
                <div class="relative !w-[130px]">
                  <p class="text-center font-sans text-[28px] font-bold">
                    {{ item.days }}
                  </p>
                  <p
                    class="absolute bottom-1 w-full text-center text-xs lg:text-sm"
                  >
                    مدت زمان اجرا (روز)
                  </p>
                </div>
                <div class="relative text-center">
                  <p class="font-sans text-[28px] font-bold">
                    {{ item.start_year }}
                  </p>
                  <p
                    class="absolute bottom-1 w-full text-center text-xs lg:text-sm"
                  >
                    تاریخ شروع پروژه
                  </p>
                </div>
              </div>
              <div
                class="before relative mt-[30px] hidden h-[120px] w-full before:-bottom-[2px] before:-right-[4px] before:z-[-1] before:bg-white lg:mt-0 lg:block lg:w-[55%]"
              >
                <img
                  src="/imgs/crasoul-banner.png"
                  class="h-[98%] w-full rounded-3xl border-2 border-white"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <section class="section">
      <div
        class="section-container mt-10 flex !min-h-fit flex-col sm:flex-row lg:mt-0 lg:min-h-[100vh]"
      >
        <div class="z-[100] hidden bg-secondary text-white sm:w-[34%] lg:block">
          <p
            class="mb-[100px] mt-[100px] pr-[70px] text-[50px] font-bold sm:mb-[200px]"
          >
            ارتباط با ما
          </p>
          <p class="mb-[30px] px-[30px] text-[24px] leading-[40px]">
            گلستان،گرگان،بلوار شهید کلانتری، کارخانه نوآوری گرگان،طبقه اول،واحد
            405
          </p>
          <p
            class="mb-[50px] pl-[30px] text-[20px] leading-[4r0px] [direction:ltr]"
          >
            info@moderndata.ir <br />
            09376908446
          </p>
        </div>
        <div class="relative lg:w-[66%]">
          <div
            class="absolute left-[-12%] top-[-40%] z-[1] h-[80%] w-[80%] rotate-[-13deg] rounded-3xl bg-main"
          ></div>
          <img src="/imgs/footer.png" class="size-full" />
          <div
            class="absolute inset-0 z-[2] bg-black/45 pr-4 text-white lg:hidden"
          >
            <p class="mt-[5%] text-[50px] font-bold text-white sm:mb-[200px]">
              ارتباط با ما
            </p>
            <p class="mb-[30px] mt-5 text-[24px] leading-[40px]">
              گلستان،گرگان،بلوار شهید کلانتری، کارخانه نوآوری گرگان،طبقه
              اول،واحد 405
            </p>
            <p class="mb-[50px] pl-[30px] text-end text-[20px] leading-[40px]">
              info@moderndata.ir <br />
              09376908446
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
