/*
  <section>
    <header class="header">
      <img class="header__image" src="./cat-banner.png" alt="party banner string with 9 cat faces">
    </header>
    <div class="hero-banner">
      <h1 class="hero-banner__text">Cat Party Information</h1>
    </div>
    <p class="party-info">All cats must be in costumes</p>
    <p class="party-info">Cats memes encouraged</p>
    <p class="party-info">BYOC (Bring Your Own Catnip)</p>
  </section>
*/

class HomePage {
    constructor() {
        this.heroBanner = new HeroBanner("Dog Party Information")
        this.header = new Header('./dog-banner.png', 'double banner of cool dogs wearing party hats, sunglasses, bowties')
        this.infoComponent = new InfoSection();
    }
    render() {
        return `
        <section>
            ${this.header.render()}
            ${this.heroBanner.render()}
            ${this.infoComponent.render()}
        </section>
        `
    }
}

class Header {
    constructor(imgURL, altText) {
        this.imgURL = imgURL;
        this.altText = altText
    }

    // src="theimage.png"
    render() {
        return `
            <header class="header">
                <img class="header__image" src="${this.imgURL}" alt="${this.altText}">
            </header>
        `
    }
}

class HeroBanner {
    constructor(text) {
        this.text = text;
    }

    render() {
        return `
            <div class="hero-banner">
                <h1 class="hero-banner__text">${this.text}</h1>
            </div>
        `
    }
}

class InfoSection {
    render() {
        return `
        <p class="party-info">All cats must be in costumes</p>
        <p class="party-info">Cats memes encouraged</p>
        <p class="party-info">BYOC (Bring Your Own Catnip)</p>
        `
    }
}
const container = document.getElementById("app")
const catHomePage = new HomePage();
container.innerHTML = catHomePage.render();

// function HomePage() {
//     return `
//     <section>
//         <header class="header">
//             <img class="header__image" src="./cat-banner.png" alt="party banner string with 9 cat faces">
//         </header>
//         <div class="hero-banner">
//             <h1 class="hero-banner__text">Cat Party Information</h1>
//         </div>
//         <p class="party-info">All cats must be in costumes</p>
//         <p class="party-info">Cats memes encouraged</p>
//         <p class="party-info">BYOC (Bring Your Own Catnip)</p>
//     </section>
//     `
// }