=== Easy Load More ===
Contributors: brianbrey
Tags: wordpress, plugin, ajax, load more, svg
Requires at least: 3.9
Tested up to: 4.9
Stable tag: 1.0.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Add a "Load More" button to dynamically add posts without pagination and page loads.

== Description ==

Rather than having your users download a new page each time they click to view older posts, speed up your website by dynamically loading those posts on the same page using ajax. With minimal editing to your theme files, Easy Load More will add a button for ajax content loading. Works automatically on your front page, any taxonomy or custom post type page, any archive page, and search pages without special configuration.

Easy Load More has a light footprint that won't slow your website down. Buttons are lightly styled that won't override or interfere with your theme styles. The required javascript is tiny at only 766 bytes. Animated loading icons are rendered with SVG so your users don't have to download images. Finally advanced theme developers can optionally turn off plugin styles and javascript to bundle it with theme files, reduce HTTP requests that increase page load time, and completely customize the look and feel of the loading buttons.

== Installation ==

Installing "Easy Load More" can be done either by searching for "Easy Load More" via the "Plugins > Add New" screen in your WordPress dashboard, or by using the following steps:

1. Download the plugin via WordPress.org
2. Upload the ZIP file through the 'Plugins > Add New > Upload' screen in your WordPress dashboard
3. Activate the plugin through the 'Plugins' menu in WordPress

Once plugin is activated, you need to update plugin settings under 'Settings > Easy Load More'. On pages where you would like to use the button you need to add the "load_more_button()" function to your template files.

== Screenshots ==

1. Add a load more button to your posts loop.
2. Choose from 9 different animated loading icons.
3. Example of how to add the button to your template.

== Changelog ==

= 1.0.3 =
* 2017-11-27
* Added custom events polyfill for IE

= 1.0.2 =
* 2017-05-30
* Added javascript events "elm-loaded", "elm-lastPage", and "elm-fail"

= 1.0.1 =
* 2017-03-01
* Removed dependency on Wordpress jquery handle for script loading
* Moved plugin script to footer
* Fixed constant name conflict

= 1.0 =
* 2015-06-18
* Initial release

== Upgrade Notice ==

= 1.0 =
* 2015-06-18
* Initial release
