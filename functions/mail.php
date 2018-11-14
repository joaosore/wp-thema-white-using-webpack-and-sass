<?php 
function send_mail_wp($form)
{

	$to = 'joao.marcos@criah.com.br';;
	$subject = 'Contato Site - '. $form['assunto'] .' - ('. $form['nome'] .')';

	$headers = array(
		'Content-Type: text/html; charset=UTF-8'
	);

	# Topo
	$body .= '<!DOCTYPE html><html><head></head><body style="background-color: #ebebeb;">';

		$body .= '<table width="730" cellspacing="0" cellpadding="0" height="50"></table>';
		$body .= '<table width="730" cellspacing="0" cellpadding="0" align="center" style="background-color: #fff;">';
			$body .= '<tr>';
				$body .= '<td width="50"></td>';
				$body .= '<td>';

					$body .= '<table width="630" cellspacing="0" cellpadding="0" align="center" style="font-family: Verdana, Arial, sans-serif; background-color: #fff;">';
						$body .= '<tr height="30"></tr>';
						$body .= '<tr>';
							$body .= '<td width="45"></td>';
							$body .= '<td width="640">';
								$logo_principal = get_field('header_logo', 'options');
								$body .= '<img src="' . $logo_principal['url'] . '" width="200" >';
							$body .= '</td>';
							$body .= '<td width="45"></td>';
						$body .= '</tr>';
						$body .= '<tr height="30"></tr>';
					$body .= '</table>';

					$body .= '<table width="630" cellspacing="0" cellpadding="0" align="center" style="font-family: Verdana, Arial, sans-serif; background-color: #fff;">';
						$body .= '<tr><td colspan="2" align="center"><h3>Contato via site</h3></td></tr>';
						if ($form['nome'] != '') {
							$body .= '<tr><td style="padding-right:4px; width:24%;"><b>Nome:</b> </td><td>'. $form['nome'] .'</td></tr>';
						}
						if ($form['telefone'] != '') {
							$body .= '<tr><td style="padding-right:4px; width:24%;"><b>Telefone:</b> </td><td>'. $form['telefone'] .'</td></tr>';
						}
						if ($form['email'] != '') {
							$body .= '<tr><td style="padding-right:4px; width:24%;"><b>E-mail:</b> </td><td>'. $form['email'] .'</td></tr>';
						}
						if ($form['assunto'] != '') {
							$body .= '<tr><td style="padding-right:4px; width:24%;"><b>Assunto:</b> </td><td>'. $form['assunto'] .'</td></tr>';
						}
						if ($form['mensagem'] != '') {
							$body .= '<tr><td style="padding-right:4px; width:24%;"><b>Menssage:</b> </td><td>'. $form['mensagem'] .'</td></tr>';
						}

						if ($form['utm_source'] != '' || $form['utm_medium'] != '' || $form['utm_content'] != '' || $form['utm_campaign'] != '' || $form['utm_term'] != '')
						{
							$body .= '<tr><td colspan="2" align="center"><h3>UTM</h3></td></tr>';
						}

						if ($form['utm_source'] != '') {
							$body .= '<tr><td style="padding-right:4px; width:24%;"><b>UTM Source:</b> </td><td>'. $form['utm_source'] .'</td></tr>';
						}
						if ($form['utm_medium'] != '') {
							$body .= '<tr><td style="padding-right:4px; width:24%;"><b>UTM Medium:</b> </td><td>'. $form['utm_medium'] .'</td></tr>';
						}
						if ($form['utm_content'] != '') {
							$body .= '<tr><td style="padding-right:4px; width:24%;"><b>UTM Content:</b> </td><td>'. $form['utm_content'] .'</td></tr>';
						}
						if ($form['utm_campaign'] != '') {
							$body .= '<tr><td style="padding-right:4px; width:24%;"><b>UTM Campaign:</b> </td><td>'. $form['utm_campaign'] .'</td></tr>';
						}
						if ($form['utm_term'] != '') {
							$body .= '<tr><td style="padding-right:4px; width:24%;"><b>UTM Term:</b> </td><td>'. $form['utm_term'] .'</td></tr>';
						}

					$body .= '</table>';

					# Rodapé
					$body .= '<table width="630" cellspacing="0" cellpadding="0" align="center" style="font-family: Verdana, Arial, sans-serif; background-color: #fff;">';
						$body .= '<tr height="30"></tr>';
						$body .= '<tr>';
							$body .= '<td width="45"></td>';
							$body .= '<td width="640">';
								$body .= '<small><b style="color: #000;">Mensagem de e-mail confidencial.</b></small><br>';
							$body .= '</td>';
							$body .= '<td width="45"></td>';
						$body .= '</tr>';
						$body .= '<tr height="30"></tr>';
					$body .= '</table>';

				$body .= '</td>';
				$body .= '<td width="50"></td>';
			$body .= '</tr>';
		$body .= '</table>';
		$body .= '<table width="730" cellspacing="0" cellpadding="0" height="50"></table>';

	$body .= '</body></html>';

	wp_mail( $to, $subject, $body, $headers, null );
}