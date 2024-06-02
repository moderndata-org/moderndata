<script setup>
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
let services = [
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
let sections = null;
let currentSection = 0;
let isScrolling = false;
function scrollToSection(index) {
  const targetSection = sections[index];
  const targetPosition = targetSection.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let startTimestamp = null;

  function scrollStep(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = timestamp - startTimestamp;

    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration),
    );

    if (progress < duration) {
      window.requestAnimationFrame(scrollStep);
    } else {
      currentSection = index;
      isScrolling = false;
    }
  }

  isScrolling = true;
  window.requestAnimationFrame(scrollStep);
}
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}
onMounted(() => {
  const initialSection = document.getElementById("section1");
  initialSection.classList.add("active");
  sections = document.querySelectorAll("section");
  window.addEventListener("wheel", function (event) {
    if (this.window.innerWidth > 950) {
      this.document.body.style.overflowY = "hidden";
      if (isScrolling) return;
      const delta = Math.sign(event.deltaY);
      if (delta > 0 && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      } else if (delta < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    } else {
      this.document.body.style.overflowY = "unset";
    }
  });
});
</script>
<template>
  <div
    class="absolute left-[-45%] top-[170%] z-[1] h-[80%] w-[80%] rotate-[-11deg] rounded-3xl bg-main large:hidden"
  ></div>
  <div class="container">
    <section id="section1">
      <div
        class="flex w-[100%] bg-secondry large:flex-col"
        style="-webkit-overflow-scrolling: touch; overflow-y: scroll"
      >
        <div
          class="absolute right-[-15%] top-[-130px] h-[50%] w-[72%] max-w-[1250px] rotate-[11deg] rounded-3xl bg-main"
        ></div>
        <div
          class="z-20 mt-[10vh] flex h-[80vh] w-[60%] flex-col justify-end pb-[12px] text-white large:h-[58%] large:w-[100%]"
        >
          <p
            class="mb-[70px] text-center text-[75px] font-bold large:text-[60px]"
          >
            داده پردازان
            <br />
            پارسیان نامی
          </p>
          <div
            class="mt-5 flex items-end justify-between px-[15%] *:h-[80px] large:px-9"
          >
            <div>
              <p class="text-[32px] font-extrabold text-main large:text-[20px]">
                شناسه ملی
              </p>
              <br />
              <p
                class="relative bottom-[26px] font-sans text-[32px] large:text-[18px]"
              >
                14006683500
              </p>
            </div>
            <div>
              <p class="text-[32px] font-extrabold text-main large:text-[20px]">
                شماره ثبت
              </p>
              <br />
              <p
                class="relative bottom-[26px] font-sans text-[32px] large:text-[18px]"
              >
                12047
              </p>
            </div>
            <div>
              <p class="text-[32px] font-extrabold text-main large:text-[20px]">
                مدیرعامل
              </p>
              <br />
              <p class="relative bottom-[26px] text-[32px] large:text-[18px]">
                فاطمه فتحی
              </p>
            </div>
          </div>
        </div>
        <div
          class="before mb-[100px] mt-[10vh] flex h-[80vh] w-[32%] flex-col items-center justify-center rounded-3xl bg-main pb-[30px] before:left-[-5px] before:top-[-5px] large:mx-auto large:mt-[50px] large:!h-[fit-content] large:w-[90%] large:pt-[50px]"
        >
          <div
            class="flex flex-col items-center justify-center pt-[20%] large:pt-0"
          >
            <img
              src="/imgs/logo.png"
              alt=""
              class="w-[320px] large:w-[250px]"
            />
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

    <section id="section2" class="*:z-30">
      <div class="flex h-[100vh] large:h-auto large:flex-col">
        <div class="flex w-[37%] large:w-[100%]">
          <div
            class="min-h-[100%] min-w-[28%] bg-main large:!min-w-[15%] large:max-w-[15%]"
          ></div>
          <div class="w-[72%] bg-secondry pb-[80px] text-white large:w-[85%]">
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
          class="relative z-10 flex min-h-[100%] w-[63%] items-center justify-center bg-[#F8F8F8] pb-[3%] *:z-10 large:w-[100%]"
        >
          <div
            class="absolute bottom-[-53%] left-[-15%] h-[80%] w-[90%] rotate-[11deg] rounded-3xl bg-main large:left-[-35%] large:w-[500px]"
          ></div>
          <div
            class="ml-[8%] mr-[12%] flex h-[80%] !min-h-[fit-content] w-[80%] flex-wrap justify-between rounded-3xl border border-[#c0c0c0] px-[45px] py-[20px] mobile:px-4 large:my-[50px]"
          >
            <div
              class="mb-[15px] w-[45%] rounded-2xl bg-white p-5 shadow-lg mobile:mx-auto mobile:w-[100%] mobile:py-10"
              data-aos="fade-left"
              v-for="item in services"
              :data-aos-delay="item.delay"
              :class="item.class"
            >
              <p class="text-[25px] font-bold">{{ item.title }}</p>
              <p
                class="mt-[7px] text-[18px] font-medium leading-[30px]"
                :class="item.Pclass"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section3" class="z-10 flex bg-secondry *:z-10 large:flex-col">
      <Swiper
        :loop="true"
        class="relative mx-auto block w-[92%]"
        space-between="20"
        :navigation="true"
      >
        <SwiperSlide v-for="item in crasoulData" :key="slide">
          <div
            class="flex h-[clamp(300px,65vh,65vh)] justify-between pb-3 pt-[60px] text-start large:h-auto large:flex-col large:pt-0"
          >
            <div
              class="h-[99%] w-[40%] overflow-hidden rounded-3xl border-2 border-main pl-6 text-[#F8F8F8] large:mt-[40px] large:!max-h-[450px] large:!min-h-[450px] large:w-[100%]"
            >
              <p
                class="mb-[20px] mt-[20px] pr-[30px] text-[40px] font-[700] text-main"
              >
                {{ item.title }}
              </p>
              <p class="pr-[60px] text-[15px]">{{ item.description }}</p>
              <ul class="mt-[20px] list-disc pr-[85px] large:!mb-[50px]">
                <li v-for="list in item.notes">{{ list }}</li>
              </ul>
            </div>
            <div
              class="before ml-2 flex h-[100%] w-[54%] justify-around rounded-3xl bg-white py-[10px] *:z-[100] *:max-h-[97%] *:min-h-[97%] *:w-[30%] *:max-w-[220px] before:-left-[8px] before:-top-[5px] large:mt-[50px] large:max-h-[300px] large:min-h-[300px] large:w-[98%]"
            >
              <img :src="item.banner1" alt="" />
              <img :src="item.banner2" alt="" />
              <img :src="item.banner3" alt="" />
            </div>
          </div>
          <div
            class="mt-[47px] flex h-[120px] w-[100%] justify-between large:h-[350px] large:flex-col"
          >
            <div
              class="flex h-[100%] w-[40%] items-center justify-around overflow-hidden rounded-3xl border-2 border-main px-4 text-[#F8F8F8] *:h-[70px] *:w-[105px] large:!h-[135px] large:w-[100%]"
            >
              <div class="relative flex items-center justify-around pb-[20px]">
                <p
                  class="absolute bottom-[2px] w-[100%] text-center large:text-[12px]"
                >
                  پلتفرم ها
                </p>
                <img
                  v-if="item.platform.web"
                  src="/imgs/chrome.svg"
                  class="relative top-[2px] h-[26px] w-[34px]"
                  alt=""
                />
                <img
                  src="/imgs/apple.svg"
                  class="h-[38px] w-[34px]"
                  alt=""
                  v-if="item.platform.IOS"
                />
                <img
                  src="/imgs/android.svg"
                  class="h-[28px] w-[24px]"
                  alt=""
                  v-if="item.platform.android"
                />
              </div>
              <div class="relative !w-[130px]">
                <p class="text-center font-sans text-[28px] font-bold">
                  {{ item.deployTime }}
                </p>
                <p
                  class="absolute bottom-1 w-[100%] text-center text-[14px] large:text-[12px]"
                >
                  مدت زمان اجرا (روز)
                </p>
              </div>
              <div class="relative text-center">
                <p class="font-sans text-[28px] font-bold">
                  {{ item.Sdate }}
                </p>
                <p
                  class="absolute bottom-1 w-[100%] text-center text-[14px] large:text-[12px]"
                >
                  تاریخ شروع پروژه
                </p>
              </div>
            </div>
            <div
              class="before relative h-[100%] w-[55%] before:-bottom-[2px] before:-right-[4px] before:z-[-1] before:bg-white large:mt-[30px] large:h-[150px] large:w-[100%]"
            >
              <img
                src="/imgs/crasoul-banner.png"
                class="z-[100] h-[98%] w-[100%] rounded-3xl border-2 border-white"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <section id="section4" class="flex min-h-[100vh] mobile:flex-col">
      <div class="z-10 min-w-[34%] bg-secondry text-white">
        <p
          class="mb-[200px] mt-[100px] pr-[70px] text-[50px] font-bold mobile:mb-[100px]"
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
          09382138446
        </p>
      </div>

      <div class="relative min-w-[66%]">
        <div
          class="absolute left-[-12%] top-[-40%] z-[1] h-[80%] w-[80%] rotate-[-13deg] rounded-3xl bg-main"
        ></div>
        <img src="/imgs/footer.png" alt="" class="h-[100%] w-[100%]" />
      </div>
    </section>
  </div>
</template>
<style>
@font-face {
  font-family: poppins;
  src: url(/font/Poppins-Bold.ttf) format(truetype);
}
@font-face {
  font-family: shabnam;
  src: url(/font/Shabnam-FD.ttf) format(truetype);
}
* {
  @apply !max-w-[100vw];
}
.__nuxt,
.__nuxt > div {
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
}
body {
  @apply m-0 max-w-[100vw] overflow-hidden p-0 [direction:rtl];
  font-family: shabnam;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
}
section {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  @apply large:h-auto;
}
.before {
  @apply relative before:absolute before:h-[100%] before:w-[100%] before:rounded-3xl before:border-2 before:border-white;
}
.swiper-button-prev,
.swiper-button-next {
  @apply !text-main;
}
::-webkit-scrollbar {
  display: none;
}
</style>
