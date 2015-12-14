$(document).ready(function(){

	$("#button").click(function(){

		excuseGen()
		
	});    

	excuseGen();
	
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

function excuseGen() {
	
		var eNum = (Math.floor(Math.random() * 67) + 1);
		
		var intro = "I'd love to ride with you guys tomorrow, but ";
		
		if( eNum == 1 ) {excuse = "I woke up feeling janky. Gonna try to sleep it off.";}
		else if( eNum ==  2 ) {excuse = "I'm feeling a bit janky.";}
		else if( eNum ==  3 ) {excuse = "the ground is kind of wet.";}
		else if( eNum ==  4 ) {excuse = "I got a flat on Valencia.";}
		else if( eNum ==  5 ) {excuse = "I got a flat on Market.";}
		else if( eNum ==  6 ) {excuse = "I think it's supposed to rain.";}
		else if( eNum ==  7 ) {excuse = "I'm too out of shape.";}
		else if( eNum ==  8 ) {excuse = "it's going to be windy.";}
		else if( eNum ==  9 ) {excuse = "I need to swap my tires.";}
		else if( eNum ==  10 ) {excuse = "my axle bolt rusted to the fork.";}
		else if( eNum ==  11 ) {excuse = "I switched my pump to Schrader and my tires are low.";}
		else if( eNum ==  12 ) {excuse = "I'm all out of CO2.";}
		else if( eNum ==  13 ) {excuse = "I'm swamped at work this week.";}
		else if( eNum ==  14 ) {excuse = "I'm going for a run instead.";}
		else if( eNum ==  15 ) {excuse = "I can't ride until next week :(";}
		else if( eNum ==  16 ) {excuse = "I'm in Texas.";}
		else if( eNum ==  17 ) {excuse = "it really depends how early.";}
		else if( eNum ==  18 ) {excuse = "I've got the janky leg.";}
		else if( eNum ==  19 ) {excuse = "I'm gonna drive a truck instead.";}
		else if( eNum ==  20 ) {excuse = "I left my bike at work.";}
		else if( eNum ==  21 ) {excuse = "I left my riding shoes at work.";}
		else if( eNum ==  22 ) {excuse = "I'll be swimming.";}
		else if( eNum ==  23 ) {excuse = "I have a race this weekend.";}
		else if( eNum ==  24 ) {excuse = "I'm going to sleep in then crush an omelette.";}
		else if( eNum ==  25 ) {excuse = "drunk and still awake at 9 PK.";}
		else if( eNum ==  26 ) {excuse = "yoga for me.";}
		else if( eNum ==  27 ) {excuse = "some jackass stole my saddle.";}
		else if( eNum ==  28 ) {excuse = "I'm at a metal show.";}
		else if( eNum ==  29 ) {excuse = "I'm having a rough sleep and coughing.";}
		else if( eNum ==  30 ) {excuse = "I'm drunk and still awake at 2. So I'm out lol";}
		else if( eNum ==  31 ) {excuse = "trying to decide if I want to ride or surf.";}
		else if( eNum ==  32 ) {excuse = "nature is too metal.";}
		else if( eNum ==  33 ) {excuse = "didn't listen to my alarm today :-\\ ";}
		else if( eNum ==  34 ) {excuse = "drunk and riding my bike at 1 am!! I also had an edible.";}
		else if( eNum ==  35 ) {excuse = "left my bike at BART.";}
		else if( eNum ==  36 ) {excuse = "I'm actually still working. Ugh. Gonna sleep in tomorrow.";}
		else if( eNum ==  37 ) {excuse = "gotta drop off the dog.";}
		else if( eNum ==  38 ) {excuse = "going to bike party tomorrow night instead.";}
		else if( eNum ==  39 ) {excuse = "I've been trying to get my snooze score up for the last two weeks. My body was complaining.";}
		else if( eNum ==  40 ) {excuse = "gonna be too long for me this week, may do something shorter.";}
		else if( eNum ==  41 ) {excuse = "I can't find my gloves.";}
		else if( eNum ==  42 ) {excuse = "I can't find my socks.";}
		else if( eNum ==  43 ) {excuse = "it's supposed to be kind of cold.";}
		else if( eNum ==  44 ) {excuse = "it's supposed to be kind of wet.";}
		else if( eNum ==  45 ) {excuse = "my bikes making noises.";}
		else if( eNum ==  46 ) {excuse = "I'm out of shape.";}
		else if( eNum ==  47 ) {excuse = "I'm gonna be too slow.";}
		else if( eNum ==  48 ) {excuse = "I had too many Wes burgers. ";}
		else if( eNum ==  49 ) {excuse = "I think I'm getting sick. ";}
		else if( eNum ==  50 ) {excuse = "I drank too much beer. ";}
		else if( eNum ==  51 ) {excuse = "gotta pick up the dog.";}
		else if( eNum ==  52 ) {excuse = "my friends are getting married.";}
		else if( eNum ==  53 ) {excuse = "I have an early meeting.";}
		else if( eNum ==  54 ) {excuse = "having some tire issues.";}
		else if( eNum ==  55 ) {excuse = "I'm actually just gonna take it easy. My legs are beat from yesterday.";}
		else if( eNum ==  56 ) {excuse = "dang that's early.";}
		else if( eNum ==  57 ) {excuse = "I started having a sore throat yesterday and it has only been getting worse. I now have a cough and feel a bit feverish.";}
		else if( eNum ==  58 ) {excuse = "I'm going to use this as an opportunity to sleep in.";}
		else if( eNum ==  59 ) {excuse = "I need to bail tomorrow unfortunately, sore throat.";}
		else if( eNum ==  60 ) {excuse = "I'm feeling under the weather, down to ride on Friday though.";}
		else if( eNum ==  61 ) {excuse = "it's going to be too dark.";}
		else if( eNum ==  62 ) {excuse = "I left my helmet at work.";}
		else if( eNum ==  63 ) {excuse = "depends how late I'm up tonight. I'll keep you posted.";}
		else if( eNum ==  64 ) {excuse = "bailing tomorrow. Getting to bed too late, sorry.";}
		else if( eNum ==  65 ) {excuse = "I'm likely opting for a lunch ride or yoga tomorrow.";}
		else if( eNum ==  66 ) {excuse = "I'm only half committed to riding at 6... I'll check in later.";}
		else if( eNum ==  67 ) {excuse = "I have a friend in town.";}
		else if( eNum ==  68 ) {excuse = "I won't be riding tomorrow, but let me know if you guys grab coffee and maybe I will meet up!";}
		else if( eNum ==  69 ) {excuse = "I'm out for tomorrow. Walking home from a date right now. Had quite a few drinks lol";}
		else if( eNum ==  70 ) {excuse = "depends on timing.";}
		else if( eNum ==  71 ) {excuse = "I was actually getting the beginnings of a cold as of yesterday.";}
		else if( eNum ==  72 ) {excuse = "Derp. I forgot that my sister and I have plans tomorrow morning! Gonna watch the sunrise from the Castro.";}
		else if( eNum ==  73 ) {excuse = "Haha I don't think I'm leaving my house til around 8:30";}
		else if( eNum ==  74 ) {excuse = "I'm going to bail all together. 6 sounds horrible and it was my idea.";}
		else if( eNum ==  75 ) {excuse = "sometimes sacrifice at the sun god's alter is a solitary act.";}
		else if( eNum ==  76 ) {excuse = "can't ride tomorrow, I fell through a worm hole.";}
	
		
		$("#message").text(excuse);
	
	}