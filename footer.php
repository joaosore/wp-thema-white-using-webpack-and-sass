<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package jd
 */

?>

<footer>

</footer>

<?php wp_footer(); ?>
<script src='https://www.google.com/recaptcha/api.js?render=<?php echo SITE_KEY; ?>'></script>
<script type="text/javascript">
	SITE_KEY = '<?php echo SITE_KEY; ?>';
</script>
<script src="<?php echo get_template_directory_uri(); ?>/dist/js/main.js" defer></script>
</body>
</html>