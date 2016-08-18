<?php

// Plugin definition
$plugin = array(
  'title'     =>  t('Subscribe Page'),
  'category'  =>  t('Site layouts'),
  'icon'      =>  'subscribe.png',
  'theme'     =>  'subscribe',
  'css'       =>  'subscribe.css',
  'regions'   =>  array(
    'header'  =>    t('Header'),
    'node-content'  =>    t('Content'),
    'node-sidebar'  =>    t('Sidebar'),
    'footer'  =>   t('Footer')
  )
);
