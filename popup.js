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

        var gameName = url.substring(slashLoc + 1, url.length - 1)

        gogUrl = "https://www.gog.com/game/" + gameName;
        document.getElementById("gog-url").onclick = hyperlink(gogUrl);

        cdkeysUrl = "https://www.cdkeys.com/catalogsearch/result/?q=" + gameName
        document.getElementById("cdkeys-url").onclick = hyperlink(cdkeysUrl);
    }
});

function hyperlink(link) {
    window.open(link)
}