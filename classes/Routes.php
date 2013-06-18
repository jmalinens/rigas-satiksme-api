<?php
/**
 * Routes class
 *
 * @author Juris Malinens <juris.malinens@inbox.lv>
 */
class Routes
{

    public function __construct()
    {

    }
    
    public function parseLine($sLine)
    {
	$aTokens = explode(";", $sLine);
        $aReturn = [];
        if (stripos($aTokens[0], ",") === false && count($aTokens) == 14) {
            $aReturn['RouteNum'] = $aTokens[0];
            $aReturn['Authority'] = $aTokens[1];
            $aReturn['City'] = $aTokens[2];
            $aReturn['Transport'] = $aTokens[3];
            $aReturn['Operator'] = $aTokens[4];
            $aReturn['ValidityPeriods'] = $aTokens[5];
            $aReturn['SpecialDates'] = $aTokens[6];
            $aReturn['RouteTag'] = $aTokens[7];
            $aReturn['RouteType'] = $aTokens[8] . replaceAll("-", "_");
            $aReturn['Commercial'] = $aTokens[9];
            $aReturn['RouteName'] = $aTokens[10];
            $aReturn['Weekdays'] = $aTokens[11];

            $StreetsStr = $aTokens[12];
            if (stripos($StreetsStr, ",") !== false) {
                $StreetsStrArr = explode(",", $StreetsStr);
                foreach ($StreetsStrArr as $s) {
                    if (!empty($s)) {
                        array_push($aReturn['Streets'], $s);
                    }
                }
            }

            $RouteStopsStr = $aTokens[13];
            if (stripos($RouteStopsStr, ",") !== false) {
                $RouteStopsStrArr = explode(",", $RouteStopsStr);
                foreach ($RouteStopsStrArr as $s) {
                    if (!empty($s)) {
                        array_push($aReturn['RouteStops'], $s);
                    }
                }
            }
        }
        
        return $aReturn;
    }
}
