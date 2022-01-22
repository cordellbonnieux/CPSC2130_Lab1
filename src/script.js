// get root element, then append a container div
const root = document.getElementById("root");
const bg = create("div", "bg", root);
const content = create("div", "content", root);

// get all the images and backgrounds
const backgrounds = {
    0 : "img/bg1.jpg",
    1 : "img/bg2.jpg",
    2 : "img/bg3.jpg"
};

// get gallery imgs
const images = {
    0 : ["img/v1.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit..", "recreation.html"],
    1 : ["img/v2.jpg", "Suspendisse ultrices gravida dictum fusce ut placerat..", "newsevents.html"],
    2 : ["img/v3.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."],
    3 : ["img/v4.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."],
    4 : ["img/v5.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."],
    5 : ["img/v6.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."],
    6 : ["img/v7.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."],
    7 : ["img/v8.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."],
};

buildPage();

// determine what page to build, then build it!
function buildPage() {
    navigation(true);
    if (root.className == "index") {
        index();
    } else if (root.className == "recreation") {
        // set background
        // create header section
        // create content area (with images)
    } else if (root.className == "newsevents") {
        // set background
        // create header section
        // create content area (with images)
    }
    navigation(false);
}

function index() {
    //background
    bg.style.backgroundImage = `url(${backgrounds[0]})`;

    // landing header
    indexHeader();

    // create main container
    const container = create("main", "container", content);

    // Create some mock content
    const sectionOneH1 = create("h1", "title");
    const sectionOneText = create("p", "textContent");
    const sectionTwoH2 = create("h2", "title");
    const sectionTwoText = create("p", "textContent");
    sectionOneH1.textContent = "Main Page Heading";
    sectionOneText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non tellus" +
        "orci ac auctor augue mauris augue neque. Sagittis purus sit amet volutpat" +
        "consequat mauris nunc congue nisi. Vitae ultricies leo integer malesuada nunc" +
        "vel risus commodo viverra. Quam pellentesque nec nam aliquam sem et. Justo" +
        "donec enim diam vulputate. Fames ac turpis egestas integer. Odio euismod " +
        "lacinia at quis risus sed. Suspendisse ultrices gravida dictum fusce ut placerat. " +
        "Non consectetur a erat nam. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Feugiat vivamus at augue eget.";
    sectionTwoH2.textContent = sectionOneH1.textContent;
    sectionTwoText.textContent = sectionOneText.textContent;

    // get video div
    const node = document.getElementById("vid");
    // deep clone
    const video = node.cloneNode(true);
    // remove original from dom
    node.parentNode.removeChild(node);
    // adjust size to parent
    //video.style = "min-height:300px; width:auto;";

    //add main content
    createSection(container, false, [sectionOneH1, sectionOneText]);
    createSection(container, true, [video]);
}

function indexHeader() {
    // create header content section
    const section = create("header", "section landing", content);
    const inner = create("div", "inner", section);

    // landing title
    const title = create("div", "landingTitleWrapper item", inner);
    const titleH1 = create("h1", "landingTitle", title);
    titleH1.textContent = "Bienvenue a Montreal";

    createSlider(inner, [images[0], images[1]]);
}

function navigation(top) {
    const nav = top ? create("nav", "navigation", content) : create("footer", "footer", content);
    const navInner = create("div", "navInner", nav);
    // index
    const home = create("a", "nav", navInner);
    home.setAttribute("href", "index.html");
    home.textContent = "home";
    //newsevents
    const news = create("a", "nav", navInner);
    news.setAttribute("href", "newsevents.html");
    news.textContent = "news";
    // recreation
    const rec = create("a", "nav", navInner);
    rec.setAttribute("href", "recreation.html");
    rec.textContent = "recreation";
}

function createSlider(parent, imgs) {
    const wrapper = create("div", "sliderWrapper", parent);
    const inner = create("div", "sliderInner", wrapper);
    const controls = create("div", "sliderControls", wrapper);
    for (let i = 0; i < imgs.length; i++) {
        const slide = createSlide(imgs[i][0], imgs[i][1], imgs[i][2], i, inner);
        const radio = create("input", `radio${i}`, controls);
        radio.type = "radio";
        radio.name = "slides";
        radio.onclick = function() { displaySlide(this, i, slide) };
        if (i != 0) {
            slide.style.display = "none";
        } else {
            radio.checked = true;
        }
    }
}

function createSlide(image, txt, lnk, num, parent){
    // container
    const wrapper = create("div", `slide slide${num}`, parent);
    wrapper.id = `slide${num}`;
    // image
    const img = create("img", "slideImg", wrapper);
    img.setAttribute("src", image);
    // call to action container
    const callToAction = create("div", "slide callToAction item", wrapper);
    //text
    const text = create("h3", "slideText", callToAction);
    text.textContent = txt;
    //link
    const link = create("a", "link", callToAction);
    link.setAttribute("href", lnk);
    link.textContent = "Read More >>";

    //return the slide
    return wrapper;
}

function displaySlide(btn, num, slide) {
    if (btn.checked) {
        const slides = document.querySelectorAll(".slide");
        for (const s of slides) {
            s.style.display = "none";
        }
        slide.style.display = "inline-block";
        for (const n of slide.childNodes) {
            n.style.display = "inline-block";
        }
    }
}

function createSection(parent, inverted, children) {
    //create page
    const wrapper = inverted ? create("div", "sectionWrapper inverted", parent) : create("div", "sectionWrapper", parent);
    
    // section in page
    const contentSection = create("section", "section", wrapper);

    //add the content
    for (let i = 0; i < children.length; i++) {
        contentSection.appendChild(children[i]);
    }
}

// returns a div with the given class name
// no validation, so use it right!
function create(type, name, parent) {
    let ele = document.createElement(type);
    ele.setAttribute("class", name);
    if (parent != null) {
        parent.appendChild(ele);
    }
    return ele;
}

