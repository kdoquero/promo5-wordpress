<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}

add_action( 'zerif_our_team_header_title', 'zerif_our_team_header_title_function' ); // Outputs the title in Our team section
add_action( 'zerif_our_team_header_subtitle', 'zerif_our_team_header_subtitle_function' );
?>