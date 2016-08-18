<?php
/**
 * @file
 * Template for a 3 column panel layout.
 *
 * This template provides a very simple "one column" panel display layout.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:
 *   $content['middle']: The only panel in the layout.
 */
?>

<?php
$rgb = '#1189d0';
$node = $variables['display']->context['requiredcontext_entity:node_1']->data;

if (!empty($node)) {
  $term = field_get_items('node', $node, 'field_os2web_ec_tax_category');

  if ($term) {
    $tid = $term[0]['tid'];
    $term = taxonomy_term_load($tid);

    if ($term) {
      $field_color = field_get_items('taxonomy_term', $term, 'field_os2web_ec_color');
      $rgb = $field_color[0]['rgb'];
    }
  }
}
?>

<div class="panel-display panel-1col clearfix event-main-info"
     style="border-color: <?php print $rgb; ?>;"
  <?php if (!empty($css_id)) {
    print "id=\"$css_id\"";
  } ?>>
  <div class="panel-panel panel-col">
    <div><?php print $content['middle']; ?></div>
  </div>
</div>
