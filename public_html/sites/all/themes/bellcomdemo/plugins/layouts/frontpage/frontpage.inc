<?php

// Plugin definition
$plugin = array(
  'title' => t('Front page'),
  'category' => t('Site layouts'),
  'icon' => 'frontpage.png',
  'theme' => 'frontpage',
  'css' => 'frontpage.css',
  'regions' => array(
    'header'       => t('Header (DO NOT CHANGE!)'),
    'region-two'   => t('First region'),
    'region-three' => t('Slider (ONLY FOR SLIDER!)'),
    'region-four'  => t('Second region'),
    'region-five'  => t('Third region'),
    'region-six'   => t('Fourth region'),
    'region-seven' => t('Five region'),
    'region-eight' => t('Footer (DO NOT CHANGE!)')
  ),
);
