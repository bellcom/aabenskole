<?php

// Plugin definition
$plugin = array(
  'title'     =>  t('Node page with headline'),
  'category'  =>  t('Site layouts'),
  'icon'      =>  'eventnode.png',
  'theme'     =>  'eventnode',
  'css'       =>  'eventnode.css',
  'regions'   =>  array(
    'header'  =>    t('Header'),
    'node-header'  =>    t('Node header'),
    'node-content'  =>    t('Content'),
    'node-sidebar'  =>    t('Sidebar'),
    'footer'  =>   t('Footer')
  )
);
