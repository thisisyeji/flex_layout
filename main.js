const articles = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("a");

for (let article of articles) {
    article.addEventListener("mouseenter", () => {
        aside.querySelector("video").currentTime = 0;
        article.querySelector("video").play();
    })

    article.addEventListener("mouseleave", () => {
        article.querySelector("video").pause();
    })

    article.addEventListener("click", (e) => {
        const title = e.currentTarget.querySelector("h2").innerText;
        const info = e.currentTarget.querySelector("p").innerText;
        const vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        aside.querySelector("h1").innerText = title;
        aside.querySelector("p").innerText = info;
        aside.querySelector("video").setAttribute("src", vidSrc);

        aside.classList.add("on");
        aside.querySelector("video").currentTime = 0;
        aside.querySelector("video").play();
    })
}


close.addEventListener("click", (e) => {
    aside.classList.remove("on");
    aside.querySelector("video").pause();
})