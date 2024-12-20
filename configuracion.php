<?php
header('Content-Type: text/html; charset=utf-8');
header("Cache-Control: no-cache, must-revalidate");
date_default_timezone_set('America/Argentina/Buenos_Aires');

// Configuración de la aplicación
$PROYECTO = 'PortfolioFlorenciaRusso';
$ROOT = $_SERVER['DOCUMENT_ROOT'] . "/$PROYECTO/";

$GLOBALS['ROOT'] = $ROOT;

$page_title = "Portfolio - Florencia Russo";

include_once($ROOT . 'util/funciones.php');

// Definición de rutas
$PRINCIPAL = "http://" . $_SERVER['HTTP_HOST'] . "/$PROYECTO/Vista/index.php";
$RUTAVISTA = "http://" . $_SERVER['HTTP_HOST'] . "/$PROYECTO/vista/";
$rutalogo = "./img/";

// Variables de entorno
$GLOBALS['PRINCIPAL'] = $PRINCIPAL;
$GLOBALS['RUTAVISTA'] = $RUTAVISTA;
