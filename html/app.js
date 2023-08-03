const { ref } = Vue

// Customize language for dialog menus and carousels here

const introApp = Vue.createApp({
    mounted() {
        var main = document.getElementById("loading-main");
        main.hidden = true

        var intro = document.getElementById("intro");
        var introloading = document.getElementById("introloading");
        var music = document.getElementById("music");
        intro.addEventListener("ended", (event) => {
            intro.hidden = true
            
            music.play();
            
            introApp.unmount()
            introloading.hidden = true
        
            main.hidden = false
            load.mount('#loading-main')
        });
    },
})

const load = Vue.createApp({
  setup () {
    let main = document.getElementById('loading-main');
    main.classList.add('fadeInCustom');
    return {
        CarouselTitle1: "Welcome",
        CarouselSubtitle1: "This is my very cool roleplay server",
        CarouselDescription1: "You can head down to Los Santos to find new and exclusive vehicles at the car dealership. Feeling bored maybe? Come join us at our weekly car meets and have some fun with some new friends!",

        firstap: ref(true),
        secondap: ref(true),
        thirdap: ref(true),
        firstslide: ref(1),
        secondslide: ref('1'),
        thirdslide: ref('5'),
        audioplay: ref(true),
        playvideo: ref(true),
        download: ref(true),
        settings: ref(false),
    }
  }
})

introApp.use(Quasar, { config: {} })
load.use(Quasar, { config: {} })

introApp.mount('#introloading')


let count = 0;
let thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (data.idx / count) * 100 + "%";
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;

        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (thisCount / count) * 100 + "%";
    },
};

window.addEventListener("message", function (e) {
    (handlers[e.data.eventName] || function () {})(e.data);
});
