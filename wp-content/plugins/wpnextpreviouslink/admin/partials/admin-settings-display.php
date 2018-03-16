<?php
/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       http://codeboxr.com
 * @since      1.0.0
 *
 * @package    Wpnextpreviouslink
 * @subpackage Wpnextpreviouslink/admin/partials
 */
if (!defined('WPINC')) {
    die;
}
?>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->

<!-- This file should primarily consist of HTML with a little bit of PHP. -->

<div class="wrap">
    <div id="icon-options-general" class="icon32"></div>
    <?php
    $pro_note = '';
    //$output = '<div class="icon32 icon32_cbrp_admin icon32-cbrp-edit" id="icon32-cbrp-edit"><br></div>';
    if ( !is_plugin_active( 'wpnextpreviouslinkaddon/wpnextpreviouslinkaddon.php' ) ) {
    //plugin is not activated
    $pro_note = ' <a title="'.__('Grab pro version to unlock more features', 'wpnextpreviouslink').'" class="button" href="http://codeboxr.com/product/show-next-previous-article-for-wordpress?utm_source=customerdomain&utm_medium=plugin&utm_campaign=wpnextpreviouslink" target="_blank">'.__('Grab Pro','wpnextpreviouslink').'</a>';
    }
    ?>
    <h2><?php _e('CBX Next Previous Link Options', 'wpnextpreviouslink'); ?>  <?php echo $pro_note; ?></h2>


    <div id="poststuff">

        <div id="post-body" class="metabox-holder columns-2">

            <!-- main content -->
            <div id="post-body-content">
                <div class="meta-box-sortables ui-sortable">
                    <div class="postbox">
                        <div class="inside">
                            <?php
                            $this->settings_api->show_navigation();
                            $this->settings_api->show_forms();
                            ?>
                        </div> <!-- .inside -->
                    </div> <!-- .postbox -->
                </div> <!-- .meta-box-sortables .ui-sortable -->
            </div> <!-- post-body-content -->
            <?php
            include('sidebar.php');
            ?>

        </div> <!-- #post-body .metabox-holder .columns-2 -->

        <br class="clear">
    </div> <!-- #poststuff -->

</div> <!-- .wrap -->

<script type="text/javascript">

    jQuery(document).ready(function($) {
        //if need any js code here
    });

</script>