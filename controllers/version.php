<?php
/*
 * 
 * @author Juris Malinens<juris.malinens@inbox.lv>
 * @version 0.1
 */

if (!is_file(dirname(__FILE__)."/../json/version.json")) {
    error_log("version.json file not found!");
}

echo json_decode(file_get_contents(dirname(__FILE__)."/../json/version.json"));
