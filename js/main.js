$(document).ready(function(){

	$("#portfolio-filter-all").on("click", function(e){
		e.preventDefault();
		$(this).addClass("active");
		$("#portfolio-filter-professional").removeClass("active");
		$("#portfolio-filter-personal").removeClass("active");
		$(".project").each(function(i){
			$(this).css("display", "block");
		});
	});
	$("#portfolio-filter-professional").on("click", function(e){
		e.preventDefault();
		$("#portfolio-filter-all").removeClass("active");
		$(this).addClass("active");
		$("#portfolio-filter-personal").removeClass("active");
		$(".project").each(function(i){
			console.log($(this).data("tag"));
			if($(this).data("tag") != "professional") {
				$(this).css("display", "none");
			}
			else {
				$(this).css("display", "block");
			}
		});
	});
	$("#portfolio-filter-personal").on("click", function(e){
		e.preventDefault();
		$("#portfolio-filter-all").removeClass("active");
		$("#portfolio-filter-professional").removeClass("active");
		$("#portfolio-filter-personal").addClass("active");
		$(".project").each(function(i){
			console.log($(this).data("tag"));
			if($(this).data("tag") != "personal") {
				$(this).css("display", "none");
			}
			else {
				$(this).css("display", "block");
			}
		});
	});
});