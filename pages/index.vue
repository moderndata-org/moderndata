<script setup lang="ts">
import { homeStore } from "~/script/store/home";
import { Navigation } from "swiper/modules";
let fullpage = ref();
let store = homeStore();
import { ArrowDownIcon } from "@heroicons/vue/16/solid";
let crasoulData = [
  {
    title: "کامیاب رهگشا رادین",
    banner1: "/imgs/kamyab-1.png",
    banner2: "/imgs/kamyab-2.png",
    banner3: "/imgs/kamyab-3.png",
    description:
      "اپلیکیشن کامیاب رهگشا در زمینه درخواست امداد خودرو در دو نسخه امداد رسان ها و امدادخواهان در  استان گلستان فعالیت میکند . از قابلیت های اپلیکیشن میتوان به موارد زیر اشاره کرد: ",
    notes: [
      "امکان استعلام قیمت",
      "امکان درخواست امداد",
      "امکان مشاهده سابقه امداد ها",
      "امکان تسویه حساب",
      "امکان درخواست قیمت و مشاهده مکان راننده بصورت زنده",
    ],
    platform: { android: true, IOS: true, web: true },
    deployTime: 240,
    Sdate: 1400,
  },
  {
    title: "پدرخوانده دستیار مافیا",
    banner1: "/imgs/godfather-1.png",
    banner2: "/imgs/godfather-2.png",
    banner3: "/imgs/godfather-3.png",
    description:
      "اپلیکیشن پدرخوانده دستیار مافیا در زمینه آموزش , سرگرمی و شبکه اجتماعی بازی مافیا فعالیت میکند. از قابلیت های اپلیکیشن میتوان به موارد زیر اشاره کرد:",
    notes: [
      "امکان بازی گروهی",
      "امکان آموزش سناریو های مختلف مافیا",
      "بازی آنلاین",
      "رتبه بندی کاربران",
      "شبکه اجتماعی و دوستیابی",
    ],
    platform: { android: true, IOS: true, web: true },
    deployTime: 120,
    Sdate: 1402,
  },
  {
    title: "AR Gallery",
    banner1: "/imgs/ARG-1.png",
    banner2: "/imgs/ARG-2.png",
    banner3: "/imgs/ARG-3.png",
    description:
      "اپلیکیشن ARGallery در زمینه هوش مصنوعی فعالیت میکند. این اپلیکیشن قابلیت Train تصاویر مختلف و مشاهده ویدئو مورد نظر روی تصویر با استفاده از AR را دارد. از قابلیت های اپلیکیشن میتوان به موارد زیر اشاره کرد:",
    notes: [
      "امکان Train در لحظه تصاویر",
      "امکان حذف اضافه یا ویرایش تصاویر و ویدئو های مرتبط",
      "امکان Multi - Target",
      "امکان استفاده بصورت آفلاین",
    ],
    platform: { android: true, IOS: true, web: true },
    deployTime: 45,
    Sdate: 1402,
  },
  {
    title: "کشاورز",
    banner1: "/imgs/farmer-1.png",
    banner2: "/imgs/farmer-2.png",
    banner3: "/imgs/farmer-3.png",
    description:
      "اپلیکیشن کشاورز پلتفرمی آنلاین برای ارتباط بین کشاورزان و افراد دارای آلات کشاورزی میباشد از قابلیت های اپلیکیشن میتوان به موارد زیر اشاره کرد:",
    notes: [
      "امکان درخواست سرویس (شخم , کاشت و ...)",
      "امکان مشاهده سرویس دهندگان در اطراف شما",
      "مشاهده هزینه انجام سرویس",
      "امکان ساخت پروفایل کاربری",
      "امکان مشاهده آموزش های استفاده از آلات مختلف کشاورزی",
    ],
    platform: { android: true, IOS: false, web: false },
    deployTime: 30,
    Sdate: 1402,
  },
  {
    title: "EASA",
    banner1: "/imgs/easa-1.png",
    banner2: "/imgs/easa-2.png",
    banner3: "/imgs/easa-3.png",
    description:
      "اپلیکیشن EASA در زمینه پشتیبانی دستگاه های خودپرداز در استان البرز فعالیت میکند . از قابلیت های اپلیکیشن میتوان به موارد زیر اشاره کرد:",
    notes: [
      "امکان مشاهده پشتیبان ها روی نقشه",
      "امکان مشاهده درخواست های پشتیبانی در اپلیکیشن",
      "امکان تخصیص سرویس به پشتیبان از پنل مدیریت",
      "امکان مشاهده تاریخچه پشتیبانی ها",
      "امکان ارجاع به پشتیبان های دیگر",
    ],
    platform: { android: true, IOS: false, web: true },
    deployTime: 120,
    Sdate: 1402,
  },
  {
    title: "Virtustich",
    banner1: "/imgs/virt-1.png",
    banner2: "/imgs/virt-2.png",
    banner3: "/imgs/virt-3.png",
    description:
      "اپلیکیشنی به زبان انگلیسی در زمینه خدمات خیاطی که کاربر با استفاده از Prompt ها میتواند لباس مورد نظر خود را طراحی و درخواست خیاطی ثبت کند و خیاط ها هم درخواست خود را برای انجام کار ثبت کنند. از قابلیت های اپلیکیشن میتوان به موارد زیر اشاره کرد: ",
    notes: [
      "امکان ساخت تصویر لباس با هوش مصنوعی",
      "امکان مشاهده نظرات درمورد خیاط و سفارش دهنده",
      "امکان مشاهده لیست سفارشات",
      "امکان قیمت گذاری روی تصاویر",
      "امکان NFT تصاویر ساخته شده ",
    ],
    platform: { android: true, IOS: false, web: true },
    deployTime: 120,
    Sdate: 1403,
  },
  {
    title: "قوزک",
    banner1: "/imgs/ghousak-1.png",
    banner2: "/imgs/ghousak-2.png",
    banner3: "/imgs/ghousak-3.png",
    description:
      "اپلیکیشن قوزک در زمینه تشخیص تعداد قدم ها و پرداخت جایزه به کاربران به ازای تعداد قدم ها در روز فعالیت میکند. از قابلیت های اپلیکیشن میتوان به موارد زیر اشاره کرد:",
    notes: [
      "امکان شمارش قدم ها بصورت آفلاین",
      "امکان شمارش در لحظه",
      "امکان نمایش آموزش های ورزشی",
      "امکان ارائه رژیم",
    ],
    platform: { android: true, IOS: false, web: true },
    deployTime: 35,
    Sdate: 1402,
  },
];
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
  store.get_projects();
});
</script>
<template>
  <ul
    id="menu"
    class="fixed top-0 z-[2000] flex w-full gap-2 bg-black p-2 text-white *:rounded-lg *:bg-main *:p-1.5 *:text-black"
  >
    <li data-menuanchor="introduction"><a href="#1">معرفی</a></li>
    <li data-menuanchor="properties"><a href="#2">ویژگی ها</a></li>
    <li data-menuanchor="work-samples"><a href="#3">نمونه کار ها</a></li>
    <li data-menuanchor="services"><a href="#4">خدمات</a></li>
    <li data-menuanchor="contact-us"><a href="#5">ارتباط با ما</a></li>
  </ul>
  <full-page
    ref="fullpage"
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
      menu: '#menu',
    }"
    id="fullpage"
  >
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
            <p class="text-[20px]">
              راهکارهای هوشمند برای چالش‌های پیچیده            </p>
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
          <div class="bg-secondary w-[85%] pb-[80px] text-white lg:w-[72%]">
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
          class="relative flex min-h-full w-full items-center justify-center overflow-hidden bg-[#F8F8F8] pb-[3%] lg:w-[63%]"
        >
          <div
            class="absolute bottom-[-53%] left-[-35%] h-[80%] w-[500px] rotate-[11deg] rounded-3xl bg-main lg:left-[-15%] lg:w-[90%]"
          ></div>
          <div
            class="z-10 my-[50px] ml-[8%] mr-[12%] flex h-[80%] min-h-fit w-[80%] flex-wrap justify-between rounded-3xl border border-[#c0c0c0] px-4 py-[20px] sm:px-[45px] lg:my-0"
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
          <SwiperSlide v-for="item in store.projects" :key="slide">
            <div
              class="flex flex-col justify-between pb-3 lg:h-[clamp(300px,65vh,65vh)] lg:flex-row lg:pt-[10px]"
            >
              <div
                class="mt-5 h-[450px] w-full overflow-hidden rounded-3xl border-2 border-main pl-6 text-white lg:mt-0 lg:h-full lg:w-[40%]"
              >
                <p
                  class="mb-[20px] mt-[20px] pr-[30px] text-[40px] font-bold text-main"
                >
                  {{ item.name }}
                </p>
                <p class="pr-[60px] text-[15px]">{{ item.description }}</p>
                <ul class="mb-12 mt-[20px] list-disc pr-[85px] lg:mb-0">
                  <li v-for="list in item.features">{{ list }}</li>
                </ul>
              </div>
              <div
                class="before ml-2 mt-12 flex h-[300px] w-[98%] justify-around rounded-3xl bg-white py-[10px] *:h-[97%] *:w-[30%] *:max-w-[220px] before:-left-[8px] before:-top-[5px] lg:mt-0 lg:h-full lg:w-[54%]"
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
                    v-if="item.platform.some((some) => some.name === 'WEB')"
                    src="/imgs/chrome.svg"
                    class="relative top-[2px] h-[26px] w-[34px]"
                  />
                  <img
                    src="/imgs/apple.svg"
                    class="h-[38px] w-[34px]"
                    v-if="item.platform.some((some) => some.name === 'IOS')"
                  />
                  <img
                    src="/imgs/android.svg"
                    class="h-[28px] w-[24px]"
                    v-if="item.platform.some((some) => some.name === 'Android')"
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
                <div class="flex items-center">
                  <button class="h-[55px] rounded-lg bg-main p-2 text-black">
                    پیش نمایش
                  </button>
                </div>
              </div>
              <div
                class="before relative mt-[30px] h-[120px] w-full before:-bottom-[2px] before:-right-[4px] before:z-[-1] before:bg-white lg:mt-0 lg:w-[55%]"
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
      <div class="section-container pt-[50px]">
        <div
          class="absolute -top-[25%] left-[-45%] z-0 hidden h-[80%] w-[80%] rotate-[-11deg] rounded-3xl bg-main lg:block"
        />
        <p class="mx-auto block w-[91%] text-[30px] font-bold text-main">
          خدمات ما
        </p>
        <div v-if="false" class="mx-auto block w-[95%]">
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
          <SwiperSlide v-for="item in crasoulData" :key="slide">
            <div
              class="flex flex-col justify-between pb-3 lg:h-[570px] lg:flex-row lg:pt-[10px]"
            >
              <div
                class="mt-5 h-[450px] w-full overflow-hidden rounded-3xl border-2 border-main pl-6 text-white lg:mt-0 lg:h-full lg:w-[40%]"
              >
                <p
                  class="mb-[20px] mt-[20px] pr-[30px] text-[40px] font-bold text-main"
                >
                  {{ item.title }}
                </p>
                <p class="pr-[60px] text-[15px]">{{ item.description }}</p>
                <ul class="mb-12 mt-[20px] list-disc pr-[85px] lg:mb-0">
                  <li v-for="list in item.notes">{{ list }}</li>
                </ul>
              </div>
              <div
                class="before ml-2 mt-12 flex h-[300px] w-[98%] justify-around rounded-3xl bg-white py-[10px] *:h-[97%] *:w-[30%] *:max-w-[220px] before:-left-[8px] before:-top-[5px] lg:mt-0 lg:h-full lg:w-[54%]"
              >
                <img :src="item.banner1" />
                <img :src="item.banner2" />
                <img :src="item.banner3" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <section class="section">
      <div class="section-container flex flex-col sm:flex-row">
        <div class="bg-secondary z-[100] text-white sm:w-[34%]">
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
        <div class="relative sm:w-[66%]">
          <div
            class="absolute left-[-12%] top-[-40%] z-[1] h-[80%] w-[80%] rotate-[-13deg] rounded-3xl bg-main"
          ></div>
          <img src="/imgs/footer.png" class="size-full" />
        </div>
      </div>
    </section>
  </full-page>
</template>
