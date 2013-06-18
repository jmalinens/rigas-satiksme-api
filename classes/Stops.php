<?php
/**
 * Stops class
 *
 * @author Juris Malinens <juris.malinens@inbox.lv>
 */
class Stops
{
    public function __construct()
    {

    }
    
    public function parse($sFile)
    {
        
        $aStops = [];
        $aFile = file($sFile);
        foreach ($aFile as $nId => $sLine) {
            if ($nId == 0) {
                continue; //skip first line
            }
            $aStop = $this->parseLine($sLine);
            if ($aStop !== false) {
                if (empty($aStop['Name'])) {
                    $aStop['Name'] = $this->sPrevStopName;
                }
                $aStops[$aStop['ID']] = $aStop;
            }
        }
    }
    
    public function parseLine($sLine)
    {
        $tokens = explode(";", $sLine);
        $aReturn = [];
        $aReturn['ID'] = $tokens[0];
        $aReturn['Lat'] = $this->convertMapPoint($tokens[1]);
        $aReturn['Lng'] = $this->convertMapPoint($tokens[2]);
        $aReturn['StopsStr'] = $tokens[3];
        if (stripos($aReturn['StopsStr'], ",") !== false) {
            $StopsStrArr = explode(",", $aReturn['StopsStr']);
            foreach ($StopsStrArr as $s) {
                if (!empty($s)) {
                        $aReturn['Stops'][] = $s;
                }
            }
        } else {
            $this->Stops[] = $aReturn['StopsStr'];
        }
        if (count($tokens) >= 5) {
            $aReturn['Name'] = $tokens[4];
        }
        $this->sPrevStopName = $aReturn['Name'];
        
        return $aReturn;
    }
    
    private function convertMapPoint($point) {
        return $point/100000;
    }
}
