
// function button1() {
//     num++;
//     document.getElementById("output").innerHTML = "Press x " + num;
// }

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var styleElem = document.getElementById("changeStyle");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var fileName = styleElem.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    var newFileName = "app2.css"
    if(fileName == "app.css") {
        newFileName = "app2.css"
    }
    else {
        newFileName = "app.css"
    }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    styleElem.setAttribute("href", newFileName);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("giraffe", newFileName);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var stylesheetValue = localStorage.getItem("giraffe") || "app.css";

    // 2 (b) get html style element by ID
    var styleElem = document.getElementById("changeStyle");

    // 2 (c) replace href attribute of html element.
    styleElem.setAttribute("href", stylesheetValue);
}


