<?php
/*
 * 
 * @author Juris Malinens<juris.malinens@inbox.lv>
 * @version 0.1
 */


$sRoutesFile = file_get_contents(dirname(__FILE__)."/../json/routes.json");
$aRoutesJson = json_decode($sRoutesFile); //masīvs

$sStopsFile = file_get_contents(dirname(__FILE__)."/../json/stops.json");
$oStopsJson = json_decode($sStopsFile); //objekts



foreach ($aRoutesJson as $aRouteJson) {
    echo $aRouteJson->raw_data."\n";
}
print_r($oStopsJson);
