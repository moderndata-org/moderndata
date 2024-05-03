<script setup>
let sections = null;
let currentSection = 0;
let isScrolling = false;
function scrollToSection(index) {
  const targetSection = sections[index];
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
      currentSection = index;
      isScrolling = false;
    }
  }

  isScrolling = true;
  window.requestAnimationFrame(scrollStep);
}

// Easing function - Cubic easing in/out - acceleration until halfway, then deceleration
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

// Set the initial active section
onMounted(() => {
  const initialSection = document.getElementById("section1");
  initialSection.classList.add("active");
  sections = document.querySelectorAll("section");
  window.addEventListener("wheel", function (event) {
    if (isScrolling) return;

    const delta = Math.sign(event.deltaY);

    if (delta > 0 && currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    } else if (delta < 0 && currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  });
});
</script>
<template>
  <div class="container">
    <section id="section1">Section 1</section>
    <section id="section2">Section 2</section>
    <section id="section3">Section 3</section>
    <section id="section4">Section 4</section>
  </div>
</template>
<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #111111;
  font-family: sans-serif;
}

section {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
}

section:nth-child(even) {
  background-color: #212121;
}
</style>
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