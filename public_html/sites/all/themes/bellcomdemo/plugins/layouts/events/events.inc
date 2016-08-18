<?php

// Plugin definition
$plugin = array(
  'title'     =>  t('Events Page'),
  'category'  =>  t('Site layouts'),
  'icon'      =>  'events.png',
  'theme'     =>  'events',
  'css'       =>  'events.css',
  'regions'   =>  array(
    'header'        =>    t('Header'),
    'first-region'  =>    t('First region'),
    'second-region' =>    t('Second region'),
    'third-region'  =>    t('Third region'),
    'footer'  =>   t('Footer')
  )
);
