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

	var what = christmas.getTime()/1000-currentDate.getTime()/1000;

      		/*$("#seconds").slideDown("fast",function(){
      			document.getElementById("seconds").innerHTML = secondsRemaining;
      		});*/
      		/*if(daysRemaining<0){
      			daysInMonth(monthsRemaining,2017);
      			monthsRemaining--;
      		}*/
      		/*var clock = $('.countdown').FlipClock(3600 * 24 * 2, {
				//countdown:true;
				clockFace: 'DailyCounter',
				countdown: true
			});*/
			var clock = $('.countdown').FlipClock(what, {
				//countdown:true;
				clockFace: 'DailyCounter',
				countdown: true
			});

      		/*var clock = new FlipClock({
      			isCountdown: true,
      			startTime: '31:00:00:05',
      			containerElement: $('.countdown'),
      			face: {
      				days: {
      					maxValue: 31
      				},
      				hours: {
      					maxValue: 23
      				},
      				minutes: {
      					maxValue: 59
      				},
      				seconds: {
      					maxValue: 59
      				}
      			}
      		});*/

      		document.getElementById("months").innerHTML = monthsRemaining;
      		document.getElementById("days").innerHTML = daysRemaining;
      		document.getElementById("hours").innerHTML = hoursRemaining;
      		document.getElementById("minutes").innerHTML = minutesRemaining;
      		document.getElementById("seconds").innerHTML = secondsRemaining;

      		//document.getElementById("countdown").innerHTML = ("There are "+monthsRemaining+ " months "+daysRemaining+" days "+hoursRemaining+" hours "+minutesRemaining+" minutes "+secondsRemaining+" seconds until Christmas Day");
      		//Refreshes function every second
      		//setTimeout(CalcChristmas, 1000);
      	}