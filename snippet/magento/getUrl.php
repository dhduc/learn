<?php  
    // Get Base URL
    Mage::getBaseUrl();
    // Get Base Directory
    Mage::getBaseDir();
    // Get Skin URL
    Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_SKIN);
    // Unsecure Skin URL
    $this->getSkinUrl('images/imagename.jpg');
    // Secure Skin URL
    $this->getSkinUrl('images/imagename.gif', array('_secure'=>true));
    // Get Media URL
    Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_MEDIA);
    // Get JS URL
    Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_JS);
    // Get Store URL
    Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_WEB);
    // Get Current URL
    Mage::helper('core/url')->getCurrentUrl();
    // Get Url in cms pages or static blocks
    // Get Base URL
    {=store url=""=}
    // Get Skin URL
    {=skin url='images/imagename.jpg'=}
    // Get Media URL
    {=media url='/imagename.jpg'=}
    // Get Store URL
    {=store url='mypage.html'=}
?>

<?php  
    // http://example.com/
    echo Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_WEB);
    // http://example.com/js/
    echo Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_JS);
    // http://example.com/index.php/
    echo Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_LINK);
    // http://example.com/media/
    echo Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_MEDIA);
    // http://example.com/skin/
    echo Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_SKIN);
?>

<?php echo Mage::helper('core/url')->getCurrentUrl(); ?>