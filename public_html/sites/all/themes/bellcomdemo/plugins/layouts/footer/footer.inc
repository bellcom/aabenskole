<?php

// Plugin definition
$plugin = array(
  'title' => t('Footer'),
  'category' => t('Site parts'),
  'icon' => 'footer.png',
  'theme' => 'footer',
  'css' => 'footer.css',
  'regions' => array(
    'header' => t('Logo'),
    'contacts' => t('Contacts'),
    'second-contacts'   => t('Secondary contacts'),
    'nav' => t('Navigation'),
    'external-nav' => t('External navigation'),
    'policy'   => t('Policy'),
  ),
);
