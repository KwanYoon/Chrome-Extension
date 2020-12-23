var gogUrl = "https://www.gog.com";

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currTab = tabs[0];
    if (currTab) {
        url = currTab.url;
        slashLoc = 0;
        for (i = url.length - 2; i > 0; i--) {
            if (url.charAt(i) == '/') {
                slashLoc = i;
                i = 0;
            }
        }

        gogUrl = "https://www.gog.com/game/" + url.substring(slashLoc + 1, url.length - 1);
        document.getElementById("gog-url").onclick = gogHyperlink(gogUrl);
    }
});

function gogHyperlink(link) {
    window.open(link)
}