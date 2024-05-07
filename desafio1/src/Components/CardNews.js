class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "By Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("link-image") || "./assets/avatar-default.webp";
        newsImage.alt = this.getAttribute("alt-text");
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                border: 1px solid grey;
                -webkit-box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 80%;
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left > span {
                font-weight: 400;
            }
            
            .card__left > a {
                font-size: 25px;
                font-weight: bold;
                margin-top: 15px;
                color: black;
                text-decoration: none;
            }
            
            .card__left > p {
                color: rgb(70, 70, 70);
            }
            
            .card__right > img {
                width: 300px;
            }
        `

        return style;
    }
}

customElements.define("card-news", Cardnews);