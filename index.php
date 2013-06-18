<?php
/*
 * 
 * @author Juris Malinens<juris.malinens@inbox.lv>
 * @version 0.1
 */

define('FLD_DIRS', 9);

$nVersion = isset($_GET['version']) ? $_GET['version'] : 0;
$sAction = isset($_GET['action']) ? $_GET['action'] : 'parse'; //times

//$raw_data_masiivs = ["1600", "", "", "E.Birznieka-Upīša", "E. Birznieka - Upīša iela", "", "2412378", "5694854", "0074,0709,2072", "143", "1", "158", "1", "214", "1", "354", "0", "355", "15", "357", "13", "358", "9"];
//$raw_data_masiivs[9] = 143;
//count($raw_data_masivs) = 23;

//for ($c = FLD_DIRS; $c < count($raw_data_masivs); $c += 2) {
//    $H = +$raw_data_masivs[$c + 1];
    //for ($O = $M + $H * $M; $N--; ) {
    //} //var O
    
//} //var c
require "classes/Stops.php";

//$Stops = new Stops();
//$aStops = $Stops->parse("data/stops.txt");

require "controllers/$sAction.php";


/*$x = explodeTimes();
$nWorkdaysLength = $nWorkdaysLength2 = count($x['workdays']);
for ($nWorkdaysLength; $nWorkdaysLength2--; ) {
 //255 un zemāk
 $minute = $x['times'][$nWorkdaysLength2];
 
 $nRealMinute = $minute % 60;
 echo $nRealMinute." <br/>\n";
}
*/

$sCmd = "echo require('fs');eval(fs.readFileSync('./planner2.js', 'utf8')); | node";