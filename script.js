// get root element, then append a container div
const root = document.getElementById("root");
const container = create("div", "container");
root.appendChild(container);

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
    const header = create("div", "header");
    const title = create("h1", "title");
    title.textContent = "Bienvenue a Montreal";
    header.appendChild(title);
    root.appendChild(header);
    // create first call to action section
    // create second call to action section
}

// returns a div with the given class name
function create(type, name) {
    if (typeof name != 'string') {
        return null;
    }
    let div = document.createElement(type);
    div.setAttribute("class", name);
    return div;
}

