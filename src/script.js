// get root element, then append a container div
const root = document.getElementById("root");
const content = create("div", "content", root);

// get all the images and backgrounds
const backgrounds = {
    0 : "img/la-ville.jpg",
}

buildPage();

// determine what page to build, then build it!
function buildPage() {
    // create sticky navigation
    if (root.className = "index") {
        index();
    } else if (root.className = "recreation") {
        // set background
        // create header section
        // create content area (with images)
    } else if (root.className = "newsevents") {
        // set background
        // create header section
        // create content area (with images)
    }
}

function index() {
    document.body.style.backgroundImage = `url(${backgrounds[0]})`;
    indexHeader();

    const container = create("div", "container", content);

    //create page
    const page = create("div", "sectionWrapper", container);
}

function indexHeader() {
    // create header content section
    const section = create("div", "section", content);
    const inner = create("div", "inner", section);

    // landing title
    const title = create("div", "landingTitleWrapper item", inner);
    const titleH1 = create("h1", "landingTitle", title);
    titleH1.textContent = "Bienvenue a Montreal";

    // create first call to action section
    const news = create("div", "callToAction item", inner);
    const newsLink = create ("a", "newsLink", news);
    newsLink.setAttribute("href", "newsevents.html");
    newsLink.textContent = "News Events";

    // create second call to action section
    const rec = create("div", "callToAction item", inner);
    const recLink = create("a", "recLink", rec);
    recLink.setAttribute("href", "recreation.html");
    recLink.textContent = "Recreation";
}

// returns a div with the given class name
// no validation, so use it right!
function create(type, name, parent) {
    let ele = document.createElement(type);
    ele.setAttribute("class", name);
    parent.appendChild(ele);
    return ele;
}

