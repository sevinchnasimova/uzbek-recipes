const navElement = await fetch("./nav.html")
  .then((response) => response.text())
  .then((html) => {
    const parser = new DOMParser();
    return parser.parseFromString(html, "text/html").querySelector("nav");
  });

// console.log(navElement);

const bodyElement = document.querySelector("body");
bodyElement.before(navElement);
