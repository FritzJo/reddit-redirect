var currentPath = window.location.pathname
var currentHostname = window.location.hostname

if (!currentHostname.includes("old")){
  window.location.href = "https://old.reddit.com" + currentPath
} 

