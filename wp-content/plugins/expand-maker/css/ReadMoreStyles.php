<?php
Class ReadMoreStyles {

	public function __construct() {
		
	}

	public function registerStyles($hook) {

		wp_register_style('readMoreBootstrap', YRM_CSS_URL.'bootstrap.css', array(), EXPM_VERSION);
        wp_register_style('readMoreAdmin', YRM_CSS_URL.'readMoreAdmin.css', array(), EXPM_VERSION);
        wp_register_style('yrmselect2', YRM_CSS_URL.'select2.css', array(), EXPM_VERSION);

		if($hook == 'toplevel_page_readMore' || $hook == 'read-more_page_addNew' || $hook == 'read-more_page_button' ) {
			wp_enqueue_style('yrmselect2');
			wp_enqueue_style('readMoreAdmin');
			wp_enqueue_style('readMoreBootstrap');

			wp_register_style('colorbox.css', YRM_CSS_URL."colorbox/colorbox.css");
			wp_enqueue_style('colorbox.css');
		}

		if($hook == 'read-more_page_rmmore-plugins') {
			wp_enqueue_style('readMoreAdmin');
		}
	}

}
