$(document).ready(function(){
	
		CalcChristmas();		
});

function CalcChristmas(){
	var firstHref = $("a[href^='http']").eq(0).attr("href");
      		var christmas = new Date(("2017-12-25 00:00"));
      		var currentDate = new Date();
      		var monthsRemaining = christmas.getMonth()-currentDate.getMonth();
      		var daysRemaining = christmas.getDate()-currentDate.getDate();
      		var hoursRemaining = 23+(christmas.getHours()-currentDate.getHours());
      		var minutesRemaining = 59+(christmas.getMinutes()-currentDate.getMinutes());
      		var secondsRemaining = 59+(christmas.getSeconds()-currentDate.getSeconds());

      		document.getElementById("months").innerHTML = monthsRemaining;
      		document.getElementById("days").innerHTML = daysRemaining;
      		document.getElementById("hours").innerHTML = hoursRemaining;
      		document.getElementById("minutes").innerHTML = minutesRemaining;
      		document.getElementById("seconds").innerHTML = secondsRemaining;
      		//document.getElementById("countdown").innerHTML = ("There are "+monthsRemaining+ " months "+daysRemaining+" days "+hoursRemaining+" hours "+minutesRemaining+" minutes "+secondsRemaining+" seconds until Christmas Day");
      		//Refreshes function every second
      		setTimeout(CalcChristmas, 1000);
}