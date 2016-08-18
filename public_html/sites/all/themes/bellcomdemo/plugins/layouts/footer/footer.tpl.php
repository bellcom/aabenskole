<?php
/**
 * @file
 * Template for a 2 column panel layout.
 *
 * This template provides a two column panel display layout, with
 * additional areas for the top and the bottom.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:
 *   - $content['top']: Content in the top row.
 *   - $content['left']: Content in the left column.
 *   - $content['right']: Content in the right column.
 *   - $content['bottom']: Content in the bottom row.
 */
?>
<div class="content">
<?php if (!empty($content['header'])): ?>
  <section class="logo" role="region">
    <?php print $content['header']; ?>
  </section>
<?php endif; ?>

  <?php if (!empty($content['contacts'])): ?>
    <section class="contacts" role="region">
      <?php print $content['contacts']; ?>
    </section>
  <?php endif; ?>

  <?php if (!empty($content['second-contacts'])): ?>
    <section class="contacts-secondary" role="region">
      <?php print $content['second-contacts']; ?>
    </section>
  <?php endif; ?>

  <?php if (!empty($content['nav'])): ?>
    <nav class="nav" role="navigation">
      <?php print $content['nav']; ?>
    </nav>
  <?php endif; ?>

  <?php if (!empty($content['external-nav'])): ?>
    <nav class="nav last-element" role="navigation">
      <?php print $content['external-nav']; ?>
    </nav>
  <?php endif; ?>

<?php if (!empty($content['policy'])): ?>
  <section class="policy" role="region">
    <div class="content">
      <?php print $content['policy']; ?>
    </div>
  </section>
<?php endif; ?>
</div>
