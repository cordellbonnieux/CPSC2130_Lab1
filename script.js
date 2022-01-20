// get root element, then append a container div
const root = document.getElementById("root");
const container = create("div", "container", root);

// get all the images and backgrounds
const backgrounds = {
    0 : "./img/la-ville.jpg",
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

// clean this up big time!
function index() {
    // set background
    document.body.style.backgroundImage = `url(${backgrounds[0]})`;
    // create header section
    const header = create("div", "header", root);
    const inner = create("div", "inner", header);
    // page title
    const title = create("h1", "title", inner);
    title.textContent = "Bienvenue a Montreal";

    // create first call to action section
    // create second call to action section
}

// returns a div with the given class name
// no validation, so use it right!
function create(type, name, parent) {
    let ele = document.createElement(type);
    ele.setAttribute("class", name);
    parent.appendChild(ele);
    return div;
}

