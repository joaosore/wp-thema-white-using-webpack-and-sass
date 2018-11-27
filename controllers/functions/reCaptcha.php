<?php 

define('SITE_KEY', '');
define('SECRETE_KEY', '');

function checkReCaptcha($form)
{
	$googleValidade = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.SECRETE_KEY.'&response='.$form['fitlers']['token'].'');
	$debug = json_decode($googleValidade);
	if($debug->success == true && $debug->score >= 0.5)
	{
		return true;
	}
	else
	{
		return false;
	}
}