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
<div class="panel-frontpage frontpage" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>

  <?php if ($content['header']): ?>
  <header id="header" class="header group" role="banner">
    <section class="header-content">
      <?php print $content['header']; ?>
    </section>
  </header>
  <?php endif; ?>

  <main id="main-wrapper" class="main-wrapper group" role="main">
    <section id="main-content" class="content-container">

    <?php if ($content['region-two']): ?>
      <?php $image = $variables['display']->context['panelizer']->data->field_image; ?>
      <?php if(!empty($image)) : ?>
        <?php $image_url = image_style_url('front_image' ,$image[LANGUAGE_NONE][0]['uri']); ?>
        <section id ="subject-grid" class="subject-grid" style="background: url(<?php print $image_url ?>) top center no-repeat;">
      <?php else : ?>
        <section id ="subject-grid" class="subject-grid">
      <?php endif; ?>
        <div class="content">
            <?php print $content['region-two']; ?>
        </div>
      </section>
    <?php endif; ?>


    <?php if ($content['region-four']): ?>
      <?php print $content['region-four']; ?>
    <?php endif; ?>

  <div class="region-content">
  <div class="content">
    <?php if ($content['region-five']): ?>
      <div class="region-five full-width-content">
        <?php print $content['region-five']; ?>
      </div>
    <?php endif; ?>

    <?php if ($content['region-six']): ?>
      <div class="region-six full-width-content">
        <?php print $content['region-six']; ?>
      </div>
    <?php endif; ?>

    <?php if ($content['region-seven']): ?>
      <div class="region-seven full-width-content">
        <?php print $content['region-seven']; ?>
      </div>
    <?php endif; ?>
  </div>
  </div>
  </section>
  </main>


  <?php if ($content['region-eight']): ?>
    <footer  id="footer" class="footer" role="contentinfo">
      <div id="footer-wrapper" class="footer-wrapper group">
        <?php print $content['region-eight']; ?>
      </div>
    </footer>
  <?php endif; ?>

</div>
