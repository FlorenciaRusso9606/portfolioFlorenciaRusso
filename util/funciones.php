<?php
function data_submitted()
{
    $_AAux = array();
    if (!empty($_REQUEST))
        $_AAux = $_REQUEST;
    if (count($_AAux)) {
        foreach ($_AAux as $indice => $valor) {
            if ($valor == "")
                $_AAux[$indice] = 'null';
        }
    }
    return $_AAux;
}



spl_autoload_register(function ($class_name) {
    $directories = array(
        isset($GLOBALS['ROOT']) ? $GLOBALS['ROOT'] . 'Control/' : '',
        isset($GLOBALS['ROOT']) ? $GLOBALS['ROOT'] . 'util/' : '',
        isset($GLOBALS["ROOT"]) ? $GLOBALS["ROOT"] . "vendor/autoload.php" : '',
    );
    foreach ($directories as $directory) {
        if ($directory && file_exists($directory . $class_name . '.php')) {
            require_once($directory . $class_name . '.php');
            return;
        }
    };
});
