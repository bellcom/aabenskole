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

<div class="events-list-page" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>

  <?php if ($content['header']): ?>
  <header id="header" class="header group" role="banner">
    <section class="header-content">
      <?php print $content['header']; ?>
    </section>
  </header>
  <?php endif; ?>

  <main id="main-wrapper" class="main-wrapper group" role="main">
    <section id="main-content" class="content-container">

      <section id="events-list" class="events-list content">
        <header>
          <?php if ($content['first-region']): ?>
            <?php print $content['first-region']; ?>
          <?php endif; ?>
        </header>

        <?php if ($content['second-region']): ?>
          <div class="events">
            <?php print $content['second-region']; ?>
          </div>
        <?php endif; ?>

        <?php if ($content['third-region']): ?>
          <?php print $content['third-region']; ?>
        <?php endif; ?>

      </section>
    </section>
  </main>

  <?php if ($content['footer']): ?>
    <footer  id="footer" class="footer" role="contentinfo">
      <div id="footer-wrapper" class="footer-wrapper group">
        <?php print $content['footer']; ?>
      </div>
    </footer>
  <?php endif; ?>

</div>

