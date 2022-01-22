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

// get spinner imgs
const spinner = [
    "img/spin/img1.png",
    "img/spin/img2.png",
    "img/spin/img3.png",
    "img/spin/img4.png",
    "img/spin/img5.png",
    "img/spin/img6.png",
    "img/spin/img7.png",
    "img/spin/img8.png",
    "img/spin/img9.png",
    "img/spin/img10.png",
    "img/spin/img11.png",
    "img/spin/img12.png"
];

// some mock text
const someText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non tellus" +
"orci ac auctor augue mauris augue neque. Sagittis purus sit amet volutpat" +
"consequat mauris nunc congue nisi. Vitae ultricies leo integer malesuada nunc" +
"vel risus commodo viverra. Quam pellentesque nec nam aliquam sem et. Justo" +
"donec enim diam vulputate. Fames ac turpis egestas integer. Odio euismod " +
"lacinia at quis risus sed. Suspendisse ultrices gravida dictum fusce ut placerat. " +
"Non consectetur a erat nam. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Feugiat vivamus at augue eget.";

// build the page
buildPage();

// determine what page to build, then build it!
function buildPage() {
    navigation(true);
    if (root.className == "index") {
        index();
    } else if (root.className == "recreation") {
        recreation();
    } else if (root.className == "newsevents") {
        newsevents();
    }
    navigation(false);
}

function index() {
    //background
    bg.style.backgroundImage = `url(${backgrounds[0]})`;
    // header
    createHeader("Bienvenue a Montreal", true);
    // create main container
    const container = create("main", "container", content);

    // Create some mock content
    const section1 = create("div", "left");
    const sectionOneH1 = create("h1", "title", section1);
    const sectionOneText = create("p", "textContent", section1);
    sectionOneH1.textContent = "Main Page Heading";
    sectionOneText.textContent = someText;

    // get video div
    const node = document.getElementById("vid");
    // deep clone
    const video = node.cloneNode(true);
    // remove original from dom
    node.parentNode.removeChild(node);

    //add main content
    createSection(container, false, [section1]);
    createSection(container, true, [video]);
}

function recreation() {
    //background
    bg.style.backgroundImage = `url(${backgrounds[2]})`;
    // header
    createHeader("Recreation", false);
    // create main container
    const container = create("main", "container", content);

    //text
    const h2 = create("h2", "title",);
    h2.textContent = images[0][1];
    const text = create("p", "text");
    text.textContent = someText;

    //section1
    const section1 = create("div", "section1Box1 flex");
    const section1left = create("div", "half left", section1);
    const section1right = create("div", "half", section1);
    create("img", "galleryImg", section1right).setAttribute("src", images[5][0]);
    section1left.appendChild(h2.cloneNode(true));
    section1left.appendChild(text.cloneNode(true));

    // get music div
    const node = document.getElementById("mus");
    // deep clone
    const music = node.cloneNode(true);
    // remove original from dom
    node.parentNode.removeChild(node);

    //section4
    const section3 = create("div", "section4");
    section3.appendChild(h2.cloneNode(true));
    section3.appendChild(text.cloneNode(true));

    //section4
    const section4 = create("div", "section3");
    for (let i = 0; i < Object.keys(images).length; i++) {
        const img = create("img", "galleryImg half", section4);
        img.setAttribute("src", images[i][0]);
    }

    // add sections
    createSection(container, false, [section1]);
    createSection(container, true, [music]);
    createSection(container, false, [section3]);
    createSection(container, true, [section4]);
}

function newsevents() {
    //background
    bg.style.backgroundImage = `url(${backgrounds[1]})`;
    // header
    createHeader("News Events", false);
    // create main container
    const container = create("main", "container", content);

    //section 2
    const section2 = create("div", "spinner");
    const section2Inner = create("div", "spinnerInner", section2);
    let imgs = [];
    for (let i = 0; i < spinner.length; i++) {
        const img = create("img", "spinnerImg", section2Inner);
        img.setAttribute("src", spinner[i]);
        imgs.push(img);
    }
    const section2Controls = create("div", "spinnerControls", section2Inner);
    const back = create("input", "back btn", section2Controls);
    back.type = "button";
    back.value = "<";
    const next = create("input", "next btn", section2Controls);
    next.type = "button";
    next.value = ">";
    let current = 0;
    imgs.forEach((img) => {img.style.display = "none"});
    imgs[current].style.display = "inline";
    back.onclick = () => {
        let last = current;
        current = (current - 1 >= 0) ? current -1 : imgs.length - 1;
        imgs[last].style.display = "none";
        imgs[current].style.display = "inline";
    };
    next.onclick = () => {
        let last = current;
        current = (current + 1) % imgs.length;
        imgs[last].style.display = "none";
        imgs[current].style.display = "inline";
    };

    createSection(container, true, [section2]);
}

function createHeader(t, addSlider) {
    // create header content section
    const section = create("header", "section landing", content);
    const inner = create("div", "inner", section);

    // landing title
    const title = create("div", "landingTitleWrapper item", inner);
    const titleH1 = create("h1", "landingTitle", title);
    titleH1.textContent = t;

    if (addSlider) {
        createSlider(inner, [images[0], images[1]]);
    }
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

