chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if( request.message === "clicked_browser_action" ) {
    var huluInput = document.getElementById('q');
    huluInput.value = "Married";
    //hit go
    var searchIcon = document.getElementById('search-icon');
    searchIcon.click();
  }
});
