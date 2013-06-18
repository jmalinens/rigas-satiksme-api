<?php
/*
 * 
 * @author Juris Malinens<juris.malinens@inbox.lv>
 * @version 0.1
 */

$sFile = file_get_contents(dirname(__FILE__)."/../json/stops.json");
$oStops = json_decode($sFile);



 foreach (new DirectoryIterator(dirname(__FILE__)."/../json/routes/") as $fn) {
     if (!$fn->isDot()) {
         echo $fn->getFilename()."<br/>\n";
         generate_timetable($oStops, $fn->getFilename());
     }
     
 }

function generate_timetable($oStops, $sFile, $nVersion)
{
    $sFileContents = file_get_contents(dirname(__FILE__)."/../json/routes/$sFile");
    $oJson = json_decode($sFileContents);

    if (isset($oJson->times_new)) {
        return true;
    }
    //print_r($oJson);
    //print_r($oStops);  

    $aLaiki = [];
    $aStops = array_reverse($oJson->stops);
    $nPrevTime = 0;
    $nPrevHour = 99;
    //$sDienasTips = "b";//67
    $sDienasTips = $sLastDienasTips = $oJson->times2->workdays[count($oJson->times2->workdays)-1];
    $nPieturasNr = 0;
    for ($i = count($oJson->times2->times)-1; $i > 0; $i--) {

        $nCurrTime = $oJson->times2->times[$i];
        
        //echo "i: $i wcount: ".(count($oJson->times2->workdays))." i2: ".($i % count($oJson->times2->workdays))."<br/>\n";
        $sDienasTips = $oJson->times2->workdays[($i % count($oJson->times2->workdays))];
        //echo "prev: $nPrevTime curr: $nCurrTime<br/>\n";
        if ($nPrevTime < $nCurrTime && $sDienasTips == $sLastDienasTips) {
            //echo "pieturas_nr: ".$nPieturasNr."<br/>\n";

            //if (!isset($aStops[$nPieturasNr])) {
            //    echo "dienas tips: ".$sDienasTips." i: $i curr time: $nCurrTime<br/>\n";
            //    print_r($aStops);
            //}
            $sPieturasNosaukums = trim($oStops->{trim($aStops[$nPieturasNr])}->name);
            //echo "<h3>pietura: $sPieturasNosaukums</h3>";
            $nPrevHour = 99;
            //$sDienasTips = "d";
            //echo "darba dienas:<br/>\n";
            $nPieturasNr++;
        }

        $minute = $oJson->times2->times[$i];
        $nRealMinute = $minute % 60;
        $nRealHour = floor($minute/60) % 24;
        if ($nPrevHour < $nRealHour) {
            //$sDienasTips = "b";
            //echo "<br/><br/>brivdienas:\n";
        }
        if ($nPrevHour != $nRealHour) {
            //echo "<br/><b>$nRealHour</b>: \n";
        }

        $nRealMinute2 = $nRealMinute;
        $nRealHour2 = $nRealHour;
        /*if (strlen($nRealMinute) == 1) {
            $nRealMinute2 = "0".$nRealMinute;
        }
        if (strlen($nRealHour) == 1) {
            $nRealHour2 = "0".$nRealHour;
        }*/

        $aLaiki[$sPieturasNosaukums][$sDienasTips][$nRealHour2][] = $nRealMinute2;
        sort($aLaiki[$sPieturasNosaukums][$sDienasTips][$nRealHour2]);
        ksort($aLaiki[$sPieturasNosaukums][$sDienasTips]);
        //echo "$nRealMinute\n";
        $nPrevHour = $nRealHour;
        $nPrevTime = $nCurrTime;
        //$aLaiki->pieturas_nosaukums = $sPieturasNosaukums;
    }
    //print_r($aLaiki);
    unset($oJson->times);
    unset($oJson->times2);

    $oJson->times_new = (object)$aLaiki;
    
    $x = new stdClass;
    $x->id = $oJson->id;
    $x->transport = $oJson->transport;
    $x->num = $oJson->num;
    $x->name = $oJson->name;
    $x->raw_data = $oJson->raw_data;
    $x->pieturas = [];
    foreach ($oJson->times_new as $sPieturasNosaukums => $aLaiki) {
        $pietura = new stdClass;
        $pietura->nosaukums = $sPieturasNosaukums;
        //$pietura->lat = $oStops->{trim($aStops[$nPieturasNr])}->lat;
        //$pietura->lng = $oStops->{trim($aStops[$nPieturasNr])}->lng;
        
        foreach ($aLaiki as $sKuraasDienaas => $aKonkrLaiki) {
            $konkr_dienu_tipu_laiks = new stdClass;
            $konkr_dienu_tipu_laiks->nosaukums = (string)$sKuraasDienaas;
            $konkr_dienu_tipu_laiks->laiki = $aKonkrLaiki;
            
            $pietura->laiki[] = $konkr_dienu_tipu_laiks;
            unset($konkr_dienu_tipu_laiks);
            unset($aKonkrLaiki);
        }
        
        $x->pieturas[] = $pietura;
    }
    $x->pieturas = array_reverse($x->pieturas);
    unset($oJson);
    //print_r($oJson);

    file_put_contents(dirname(__FILE__)."/../json/routes/$sFile", json_encode($x));
    unset($x);
}