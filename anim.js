//Carolina Pantoja
//CIS 128
// animation.js
// Animation application
// Homework 1A 
// Date 2/11/2019

$ (document).ready(function() {
	
	$("#animButton").click(function() {
		$("#anim h1").animate(
			       { fontSize: "350%", opacity: 1, left: "+=250" }, 2000)
				   .animate( 
			       { fontSize: "175%", left: "-=275" }, 2000 );
				  // function() {
				   //$("#anim h1"). next().fadeIn(1000).fadeOut(1000);
	

				    
		    //  .animate( 
			  //     { fontSize: "175%", left: "-=275" }, 1000 );
			  
	}); // end click


//	
//	$("#anim h1").animate ({fontSize:"350%", opacity: 1, left: "+=250"}, 
//	2000,
//	function() {
//		$("#anim h1"). next().fedeIn(1000).fadeOut(1000);
	//}
	//); // end of animate
	
}); // end of ready