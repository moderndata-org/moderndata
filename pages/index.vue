<script setup>
const sections = ref();
let currentSection = ref(0);
let isScrolling = ref(false);
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
      "امکان درخواست قیمت و مشاهده مکان راننده بصورت زنده"
    ],
    platform: {android: true, IOS: true, web: true},
    deployTime: 240,
    Sdate: 1400
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
      "شبکه اجتماعی و دوستیابی"
    ],
    platform: {android: true, IOS: true, web: true},
    deployTime: 120,
    Sdate: 1402
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
      "امکان استفاده بصورت آفلاین"
    ],
    platform: {android: true, IOS: true, web: true},
    deployTime: 45,
    Sdate: 1402
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
      "امکان مشاهده آموزش های استفاده از آلات مختلف کشاورزی"
    ],
    platform: {android: true, IOS: false, web: false},
    deployTime: 30,
    Sdate: 1402
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
      "امکان ارجاع به پشتیبان های دیگر"
    ],
    platform: {android: true, IOS: false, web: false},
    deployTime: 120,
    Sdate: 1402
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
      "امکان NFT تصاویر ساخته شده "
    ],
    platform: {android: true, IOS: false, web: true},
    deployTime: 120,
    Sdate: 1403
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
      "امکان ارائه رژیم"
    ],
    platform: {android: true, IOS: false, web: true},
    deployTime: 35,
    Sdate: 1402
  }
];
// scroll handler
function scrollToSection(index) {
  const targetSection = sections.value[index];
  const targetPosition = targetSection.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // Adjust this value to control the scroll speed
  let startTimestamp = null;
  function scrollStep(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = timestamp - startTimestamp;

    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );

    if (progress < duration) {
      window.requestAnimationFrame(scrollStep);
    } else {
      currentSection.value = index;
      isScrolling.value = false;
    }
  }
  isScrolling.value = true;
  window.requestAnimationFrame(scrollStep);
}
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

onMounted(() => {
  if (window.innerWidth > 768) {
    sections.value = document.querySelectorAll("section");
    window.addEventListener("wheel", function (event) {
      if (isScrolling.value) return;

      const delta = Math.sign(event.deltaY);

      if (delta > 0 && currentSection.value < sections.value.length - 1) {
        scrollToSection(currentSection.value + 1);
      } else if (delta < 0 && currentSection.value > 0) {
        scrollToSection(currentSection.value - 1);
      }
    });
    const initialSection = document.getElementById("section1");
    initialSection.classList.add("active");
  } else {
    document.body.style.overflow = "unset";
  }
});
</script>
<template>
  <div class="container">
    <section id="section1">Section 1</section>
    <section id="section2"><p data-aos="fade-up">Section 2</p></section>
    <section id="section3" class="bg-black">
      <carousel
        :autoplay="2000"
        :items-to-show="1"
        class="w-[100%] mx-auto block"
        :wrap-around="true"
      >
        <slide
          class="flex flex-col max-w-[92%] !mx-[4%] [direction:rtl]"
          v-for="item in crasoulData"
        >
          <div
            class="w-[100%] h-[clamp(300px,65vh,65vh)] tablet:h-auto pb-3 flex justify-between tablet:flex-col text-start pt-[60px] tablet:pt-0"
          >
            <div
              class="w-[40%] h-[99%] tablet:pb-[20px] border-2 border-main rounded-3xl text-[#F8F8F8] pl-6 overflow-hidden tablet:w-[100%]"
            >
              <p
                class="text-main text-[40px] mt-[40px] mb-[20px] font-[700] pr-[30px]"
              >
                {{ item.title }}
              </p>
              <p class="text-[15px] pr-[60px]">{{ item.description }}</p>
              <ul class="list-disc pr-[85px] mt-[20px]">
                <li v-for="list in item.notes">{{ list }}</li>
              </ul>
            </div>
            <div
              class="bg-white relative w-[55%] h-[100%] rounded-3xl flex justify-around *:w-[30%] *:max-w-[220px] *:h-[97%] pt-[1.5%] before:absolute before:w-[100%] before:h-[100%] before:-top-[5px] before:-left-[8px] before:border-2 before:border-white before:rounded-3xl *:z-[100] tablet:w-[100%] tablet:mt-[50px]"
            >
              <img :src="item.banner1" alt="" />
              <img :src="item.banner2" alt="" />
              <img :src="item.banner3" alt="" />
            </div>
          </div>
          <div
            class="h-[120px] mt-[47px] w-[101%] flex justify-between tablet:flex-col tablet:h-[250px]"
          >
            <div
              class="w-[40%] h-[100%] border-2 border-main rounded-3xl text-[#F8F8F8] overflow-hidden flex justify-around *:w-[105px] *:h-[70px] items-center px-4 tablet:w-[100%] tablet:!min-h-[135px]"
            >
              <div class="flex justify-around relative pb-[20px] items-center">
                <p class="absolute bottom-[2px] text-center w-[100%]">
                  پلتفرم ها
                </p>
                <img
                  v-if="item.platform.web"
                  src="/imgs/chrome.png"
                  class="w-[28px] h-[28px] relative top-[2px]"
                  alt=""
                />
                <img
                  src="/imgs/apple.png"
                  class="w-[28px] h-[28px]"
                  alt=""
                  v-if="item.platform.IOS"
                />
                <img
                  src="/imgs/android.png"
                  class="w-[28px] h-[28px]"
                  alt=""
                  v-if="item.platform.android"
                />
              </div>
              <div class="relative !w-[130px]">
                <p class="text-[28px] font-sans font-bold">
                  {{ item.deployTime }}
                </p>
                <p class="absolute bottom-1 text-[14px]">مدت زمان اجرا (روز)</p>
              </div>
              <div class="relative">
                <p class="text-[28px] font-sans font-bold">
                  {{ item.Sdate }}
                </p>
                <p class="absolute bottom-1 text-[14px]">تاریخ شروع پروژ</p>
              </div>
            </div>
            <div
              class="relative w-[55%] h-[100%] rounded-3xl before:absolute before:w-[100%] before:h-[100%] before:-bottom-[2px] before:-right-[4px] before:bg-white before:rounded-3xl before:z-[-1] tablet:w-[100%] tablet:mt-[30px]"
            >
              <img
                src="/imgs/crasoul-banner.png"
                class="z-[100] h-[98%] w-[100%] border-2 border-white rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </slide>
        <template #addons style="direction: ltr">
          <pagination />
        </template>
      </carousel>
    </section>
    <section id="section4">Section 4</section>
  </div>
</template>
<style>
@font-face {
  font-family: shabnam;
  src: url(/font/shabnam-FD.ttf) format(truetype);
}
body {
  @apply [direction:rtl] m-0 p-0 overflow-hidden;
  font-family: shabnam;
}
section {
  @apply w-[100vw] h-[100vh] flex tablet:h-auto;
}
</style>
