// Log URL on BrowserAction button click
// (using background.js and message passing)
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "clicked_browser_action" ) {
      		var firstHref = $("a[href^='http']").eq(0).attr("href");
      		var christmas = new Date(("2017-12-25 00:00"));
      		var currentDate = new Date();
      		var monthsRemaining = christmas.getMonth()-currentDate.getMonth();
      		var daysRemaining = christmas.getDate()-currentDate.getDate();
      		var hoursRemaining = 23+(christmas.getHours()-currentDate.getHours());
      		var minutesRemaining = 59+(christmas.getMinutes()-currentDate.getMinutes());
      		var secondsRemaining = 59+(christmas.getSeconds()-currentDate.getSeconds());

      		//window.alert("Christmas is on "+christmas+ " "+currentDate);
      		//window.alert("There are "+monthsRemaining+ " months "+daysRemaining+" days "+hoursRemaining+" hours "+minutesRemaining+" minutes "+secondsRemaining+" seconds until Christmas Day");
      		document.getElementById("countdown").value = ("There are "+monthsRemaining+ " months "+daysRemaining+" days "+hoursRemaining+" hours "+minutesRemaining+" minutes "+secondsRemaining+" seconds until Christmas Day");
    	}
	}
	

);
