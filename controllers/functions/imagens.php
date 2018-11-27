<?php 

add_image_size( 'lugares_mobile', 87.5, 87.5, true );
add_image_size( 'lugares_desktop', 640, 549, true );

function get_imagens_size($field, $id, $size)
{
	$attachment_id = get_field($field);
	$image = wp_get_attachment_image_src( $attachment_id, $size );
	return $image[0];
}