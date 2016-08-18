<?php

/**
 * implementation of hook_panels_layouts()
 */
// Plugin definition
$plugin = array(
  'title' => t('Single column for event info'),
  'category' => t('Columns: 1'),
  'icon' => 'event_info.png',
  'theme' => 'eventinfo',
  'css' => 'event_info.css',
  'regions' => array('middle' => t('Middle column')),
);
