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
    //add the footer
}

function index() {
    //background
    document.body.style.backgroundImage = `url(${backgrounds[0]})`;

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

    //add main content
    createSection(container, false, [sectionOneH1, sectionOneText]);
    createSection(container, true, [sectionTwoH2, sectionTwoText]);

}

function indexHeader() {
    // create header content section
    const section = create("header", "section landing", content);
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

function createSection(parent, inverted, children) {
    //create page
    const wrapper = inverted ? create("div", "sectionWrapper inverted", parent) : create("div", "sectionWrapper", parent);
    
    // section in page
    const contentSection = create("section", "section", wrapper);

    //add the content
    for (let i = 0; i < children.length; i++) {
        console.log("added " + children[i].textContent);
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

