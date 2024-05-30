!(function () {
  const e = document.querySelector("select"),
    t = ["ua", "en"],
    n = {
      titles: {
        ua: "Дитячий садочок Вулик ЗДО №28 Луцького району Волинської області",
        en: "Children's Kindergarten Vulyk Preschool Educational Institution No. 28 of the Lutsk District, Volyn Region",
      },
      navLink: { ua: 'Дитячий садок "Вулик"', en: 'Kindergarten "Vulyk"' },
      aboutMenu: { ua: "Про нас", en: "About" },
      offersMenu: { ua: "Пропозиції", en: "Offers" },
      scheduleMenu: { ua: "Режим дня", en: "Day routine" },
      teachersMenu: { ua: "Вихователі", en: "Teachers" },
      programsMenu: { ua: "Програма", en: "Programs" },
      parentsMenu: { ua: "Батькам", en: "To parents" },
      galleryMenu: { ua: "Галерея", en: "Gallery" },
      baseMenu: { ua: "Довідкова база", en: "Reference base" },
      contactsMenu: { ua: "Контакти", en: "Contacts" },
      location: { ua: "Волинь місто Луцьк", en: "Volyn, Lutsk City" },
      welcome: {
        ua: "Вас вітає дошкільний навчальний заклад",
        en: "Welcome to Preschool Educational Institution",
      },
      name: { ua: "№28 Вулик", en: "28" },
      titleinfo: {
        ua: "компенсуючого типу для дітей з вадами розвитку",
        en: "Compensatory Type for Children with Developmental Disabilities",
      },
      aboutTitle: { ua: "Про наш садочок", en: "About ours kindergarden" },
      about1: {
        ua: "Доброго дня! Ми раді вітати Вас на сторінці Дитячого садка №28 Вулик у Луцьку.",
        en: "About ours kindergarden",
      },
      about2: {
        ua: "Садок Вулик - це сучасний заклад дошкільної освіти для дітей віком від 2 до 7 років. Ми пропонуємо індивідуальний підхід до кожної дитини та створюємо для них комфортні умови для розвитку та навчання.",
        en: "About ours kindergarden",
      },
      about3: {
        ua: "Наш заклад розташований на вулиці Даньшина, 4, у затишному куточку міста,де панують спокій і безпека.",
        en: "About ours kindergarden",
      },
      about4: {
        ua: "Головною метою нашого садка є підготовка малюків до школи, підтримка фізичного і психічного здоров'я, розвиток соціальної адаптації та творчого мислення.",
        en: "About ours kindergarden",
      },
      offerstitle: { ua: "Наші пропозиції", en: "About ours kindergarden" },
      offersHead1: { ua: "Здорове харчування1", en: "About ours kindergarden" },
      offersHead2: { ua: "Здорове харчування2", en: "About ours kindergarden" },
      offersHead3: { ua: "Здорове харчування3", en: "About ours kindergarden" },
      offersHead4: { ua: "Здорове харчування4", en: "About ours kindergarden" },
      offersHead5: { ua: "Здорове харчування5", en: "About ours kindergarden" },
      offersHead6: { ua: "Здорове харчування6", en: "About ours kindergarden" },
      eventstitle: { ua: "Події", en: "Events" },
      eventsHead1: { ua: "П'ЯТНИЦЯ 1 ВЕРЕСНЯ", en: "FRI 1 SEP" },
      eventsHead2: { ua: "СЕРЕДА 13 ЖОВТНЯ", en: "WED 13 OCT" },
      eventsParty1: { ua: "Шкільна лінійка", en: "-----" },
      eventsParty2: { ua: "День осені", en: "------" },
      eventsdestanition1: { ua: "Луцьк", en: "---" },
      eventsdestanition2: { ua: "Луцьк", en: "---" },
      eventsMore: { ua: "Більше", en: "More" },
      infoTitle: { ua: "Режим дня", en: "Day routine" },
      teachersTitle: { ua: "Наші вихователі", en: "Our teachers" },
      teachersMore: { ua: "Більше", en: "More" },
      programsTitle: { ua: "Наша програма", en: "Our programs" },
      programDescrip: {
        ua: "Ми віддані турботі та освіті",
        en: "We are committed to care and education",
      },
      galleryTitle: { ua: "Галерея", en: "Gallery" },
    };
  e.addEventListener("change", () => {
    const t = e.value;
    (window.location.hash = t), window.location.reload();
  }),
    (() => {
      const o = window.location.hash.substring(1);
      t.includes(o)
        ? ((e.value = o),
          (document.title = n.titles[o]),
          (document.querySelector(".navLink").textContent = n.navLink[o]),
          (document.querySelector(".aboutMenu").textContent = n.aboutMenu[o]),
          (document.querySelector(".offersMenu").textContent = n.offersMenu[o]),
          (document.querySelector(".scheduleMenu").textContent =
            n.scheduleMenu[o]),
          (document.querySelector(".teachersMenu").textContent =
            n.teachersMenu[o]),
          (document.querySelector(".programsMenu").textContent =
            n.programsMenu[o]),
          (document.querySelector(".parentsMenu").textContent =
            n.parentsMenu[o]),
          (document.querySelector(".galleryMenu").textContent =
            n.galleryMenu[o]),
          (document.querySelector(".baseMenu").textContent = n.baseMenu[o]),
          (document.querySelector(".contactsMenu").textContent =
            n.contactsMenu[o]),
          (document.querySelector(".local").textContent = n.location[o]),
          (document.querySelector(".title").textContent = n.welcome[o]),
          (document.querySelector(".title-number").textContent = n.name[o]),
          (document.querySelector(".aboutTitle").textContent = n.aboutTitle[o]),
          (document.querySelector(".about1").textContent = n.about1[o]),
          (document.querySelector(".about2").textContent = n.about2[o]),
          (document.querySelector(".about3").textContent = n.about3[o]),
          (document.querySelector(".about4").textContent = n.about4[o]),
          (document.querySelector(".offers__title").textContent =
            n.offerstitle[o]),
          (document.querySelector(".offersHead1").textContent =
            n.offersHead1[o]),
          (document.querySelector(".offersHead2").textContent =
            n.offersHead2[o]),
          (document.querySelector(".offersHead3").textContent =
            n.offersHead3[o]),
          (document.querySelector(".offersHead4").textContent =
            n.offersHead4[o]),
          (document.querySelector(".offersHead5").textContent =
            n.offersHead5[o]),
          (document.querySelector(".offersHead6").textContent =
            n.offersHead6[o]),
          (document.querySelector(".eventstitle").textContent =
            n.eventstitle[o]),
          (document.querySelector(".eventsHead1").textContent =
            n.eventsHead1[o]),
          (document.querySelector(".eventsHead2").textContent =
            n.eventsHead2[o]),
          (document.querySelector(".eventsParty1").textContent =
            n.eventsParty1[o]),
          (document.querySelector(".eventsParty2").textContent =
            n.eventsParty2[o]),
          (document.querySelector(".eventsdestanition1").textContent =
            n.eventsdestanition1[o]),
          (document.querySelector(".eventsdestanition2").textContent =
            n.eventsdestanition2[o]),
          (document.querySelector(".eventsMore").textContent = n.eventsMore[o]),
          (document.querySelector(".infoTitle").textContent = n.infoTitle[o]),
          (document.querySelector(".teachersTitle").textContent =
            n.teachersTitle[o]),
          (document.querySelector(".teachersMore").textContent =
            n.teachersMore[o]),
          (document.querySelector(".programsTitle").textContent =
            n.programsTitle[o]),
          (document.querySelector(".programDescrip").textContent =
            n.programDescrip[o]),
          (document.querySelector(".galleryTitle").textContent =
            n.galleryTitle[o]))
        : ((window.location.hash = "ua"), window.location.reload());
    })();
})();
