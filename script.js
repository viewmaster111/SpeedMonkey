var style = document.createElement("style");
style.type = "text/css";
var head = document.head;
head.appendChild(style);
style.sheet.insertRule("* { color: #aaa !important; background-color: #333 !important; border-color: currentColor !important; }");
completion(true);
