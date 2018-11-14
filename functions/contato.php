<?php 

// Bloqueia Criação e Edição
function block_post_new_edit_contatos( $pagehook ){
    global $post_type, $current_screen;
    if($post_type == 'contatos')
    {
        wp_enqueue_script('block-title', '/wp-content/themes/' . get_template().'/admin/disable_all_components.js', array('jquery'));
    }
}
add_action('admin_enqueue_scripts', 'block_post_new_edit_contatos');

//Cria o Post Contatos
function create_contatos_post_types() {
    register_post_type( 'contatos',
        array(
            'labels' => array(
                'name' => __( 'Contatos' ),
                'singular_name' => __( 'Contatos' )
            ),
            'public' => true,
            'hierarchical' => true,
            'show_ui' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_icon' => 'dashicons-email-alt',
            'supports' => array( 'title'),
            'rewrite' => array( 'slug' => 'instaladores', 'with_front' => false ),
        )
    );
}
add_action( 'init', 'create_contatos_post_types' );


function add_contato($form)
{
	$some_post = array(
	    'post_title' => $form['nome'] . ' - ' . $form['assunto'],
	    'post_type' => 'contatos',
	    'post_status' => 'publish'
	);
	$the_post_id = wp_insert_post($some_post);
	update_field('nome', $form['nome'], $the_post_id);
	update_field('telefone', $form['telefone'], $the_post_id);
	update_field('email', $form['email'], $the_post_id);
	update_field('assunto', $form['assunto'], $the_post_id);
	update_field('mensagem', $form['mensagem'], $the_post_id);
	update_field('utm_source', $form['utm_source'], $the_post_id);
	update_field('utm_medium', $form['utm_medium'], $the_post_id);
	update_field('utm_content', $form['utm_content'], $the_post_id);
	update_field('utm_campaign', $form['utm_campaign'], $the_post_id);
	update_field('utm_term', $form['utm_term'], $the_post_id);
}