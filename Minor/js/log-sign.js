$(".signin-form").hide();
$(".signin").css("background", "#fff");
    
$(".signin").click(function(){
  $(".signup-form").hide();
  $(".signin-form").show();
  $(".signup").css({"background":"#fff"});
  $(".signin").css({"background": "#ecf4f3"});
});
    
$(".signup").click(function(){
  $(".signup-form").show();
  $(".signin-form").hide();
  $(".signup").css({"background": "#ecf4f3"});
  $(".signin").css({"background": "#fff"});
});


document.getElementById('catagory').addEventListener('change', function() {
  if (this.value == "student") {
      document.getElementById('cource').disabled = false;
      document.getElementById('year').disabled = false;
      document.getElementById('sem').disabled = false;
      document.getElementById('abbli').disabled = true;

  } else {
    document.getElementById('cource').disabled = true;
    document.getElementById('year').disabled = true;
    document.getElementById('sem').disabled = true;
    document.getElementById('abbli').disabled = false;
  }
});

function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "MCA"){
		var optionArray = ["Selet Year|select year","1ST|1st","2ND|2nd","3RD|3rd"];
	} else if(s1.value == "MTECH"){
		var optionArray = ["Selet Year|select year","1ST|1st","2ND|2nd"];
	} else if(s1.value == "M.SC"){
		var optionArray = ["Selet Year|select year","1ST|1st","2ND|2nd"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}