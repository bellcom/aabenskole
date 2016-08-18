<?php

// Plugin definition
$plugin = array(
  'title'     =>  t('Blogs Page'),
  'category'  =>  t('Site layouts'),
  'icon'      =>  'blogs.png',
  'theme'     =>  'blogs',
  'css'       =>  'blogs.css',
  'regions'   =>  array(
    'header'  =>    t('Header'),
    'blogs-list' => t('Blogs list'),
    'sidebar'  =>   t('Sidebar'),
    'footer'  =>    t('Footer')
  )
);
