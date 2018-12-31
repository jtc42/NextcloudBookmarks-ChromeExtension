chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.getSelected(null,function(tab) {
        var a=window, c=encodeURIComponent;
        
        chrome.windows.getCurrent(function(w) {
            var top = w.top + 50;
            var left = w.left + w.width - 440;
            
            var nc_link = 'https://cloud.bowkite.net/index.php/apps/bookmarks/bookmarklet?output=popup&url='+c(tab.url)+'&title='+tab.title;

            var d=a.open(nc_link, 'bkmk_popup', 'left='+left+',top='+top+',height=420px,width=360px,resizable=1,alwaysRaised=1');a.setTimeout(function(){d.focus()},300);
            
        });

    });
});