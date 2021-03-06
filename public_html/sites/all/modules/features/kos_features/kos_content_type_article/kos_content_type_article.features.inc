<?php
/**
 * @file
 * kos_content_type_article.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function kos_content_type_article_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "panelizer" && $api == "panelizer") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function kos_content_type_article_node_info() {
  $items = array(
    'article' => array(
      'name' => t('Artikel'),
      'base' => 'node_content',
      'description' => t('Bruges til permanent indhold, som ikke skal skiftes ud særligt ofte. Det kan fx være beskrivelser af procedurer, lovgivning, projekter mv.'),
      'has_title' => '1',
      'title_label' => t('Titel'),
      'help' => '',
    ),
  );
  return $items;
}
