<?php
/**
 * @file
 * kos_roles_and_permissions.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function kos_roles_and_permissions_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}
