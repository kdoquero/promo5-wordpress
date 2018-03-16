<?php
class RadMoreAjax {
	
	public function init() {
		
		add_action('wp_ajax_delete_rm', array($this, 'deleteRm'));
	}
	
	public function deleteRm() {

		check_ajax_referer('YrmNonce', 'ajaxNonce');
		$id  = (int)$_POST['readMoreId'];

		$dataObj = new ReadMoreData();
		$dataObj->setId($id);
		$dataObj->delete();

		echo '';
		die();
	}
}