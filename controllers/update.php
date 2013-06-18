<?php
/*
 * 
 * @author Juris Malinens<juris.malinens@inbox.lv>
 * @version 0.1
 */

define("RS_STOPS_LINK", "http://saraksti.rigassatiksme.lv/riga/stops.txt");
define("RS_ROUTES_LINK", "http://saraksti.rigassatiksme.lv/riga/routes.txt");

if (!is_file(dirname(__FILE__)."/../data/stops.txt")) {
    error_log("stops.txt file not found!");
}

if (!is_file(dirname(__FILE__)."/../data/routes.txt")) {
    error_log("routes.txt file not found!");
}

$existing_stops_sha1 = sha1_file(dirname(__FILE__)."/../data/stops.txt");
$new_stops_sha1 = sha1(file_get_contents(RS_STOPS_LINK));

$existing_routes_sha1 = sha1_file(dirname(__FILE__)."/../data/routes.txt");
$new_routes_sha1 = sha1(file_get_contents(RS_ROUTES_LINK));

if ($existing_stops_sha1 == $new_stops_sha1 && $existing_routes_sha1 == $new_routes_sha1) {
    //db already up-to-date
} else {
    
    if ($existing_stops_sha1 != $new_stops_sha1) {
        //regenerate stops.txt
    }

    if ($existing_routes_sha1 != $new_routes_sha1) {
        //regenerate routes.txt
    }
    
}

file_put_contents(dirname(__FILE__)."/../json/version.json", json_encode($x+1));


