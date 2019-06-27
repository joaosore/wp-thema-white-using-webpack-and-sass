<?php 

function get_page_jd($page)
{
	include_once get_template_directory() . '/src/pages/'.$page.'/'.$page.'.php';
}

function get_componet_jd($componet)
{
	include_once get_template_directory() . '/src/componets/'.$componet.'/'.$componet.'.php';
}