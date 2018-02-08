<?php
$action = isset($_GET["action"]) ? $_GET["action"] : "";

switch ($action) {
    case 'contact':
        header('location:/');
        break;
}
?>
