(function($){
	$(function(){
		//加减数字
		
		$(".reduce").click(function(e) {

			e.preventDefault();
			var numVal = $(".input_num input").val();
			if(numVal == 1) {
				$(".add").addClass("active")
				$(".reduce").removeClass("active")
			}
			if(numVal > 0) {
				//					alert(1)
				$(".add").addClass("active")
				numVal--;
				$(".input_num input").val(numVal);
			}
		});
		$(".add").click(function(e) {
			e.preventDefault();
			var numVal = $(".input_num input").val();
			if(numVal < 10) {
				numVal++;
				$(".add").addClass("active")
				$(".reduce").addClass("active")
				$(".input_num input").val(numVal);
			}
			if(numVal == 10) {
				$(".reduce").addClass("active")
				$(".add").removeClass("active")
			}
		});
	})
})(jQuery)
