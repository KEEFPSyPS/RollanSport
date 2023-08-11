$(document).ready(function()
{
	var altura = $('#templatemo_nav_top').offset().top;
	
	$(window).on('scroll', function()
	{
		if ( $(window).scrollTop() > altura )
		{
			$('#templatemo_nav_top').addClass('menu-fixed');
		} 
		
		
		
		
		else
		{
			$('#templatemo_nav_top').removeClass('menu-fixed');
		}
	});

});