// get root element, then append a container div
const root = document.getElementById("root");
const container = createDiv('container');
root.appendChild(container);

// determine what page to build, then build it!
function buildPage() {

    // create sticky navigation

    if (root.className = "index") {

    } else if (root.className = "recreation") {

    } else if (root.className = "newsevents") {

    }
}

// returns a div with the given class name
function createDiv(name) {
    if (typeof name != 'string') {
        return null;
    }
    let div = document.createElement("div");
    div.setAttribute("class", name);
    return div;
}

