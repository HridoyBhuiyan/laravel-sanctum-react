<?php

namespace App\Http\Controllers;

use Adrianorosa\GeoLocation\GeoLocation;
use App\Models\VisitorModel;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
    function visitorInfo($ip){

        $visitorInfo = GeoLocation::lookup($ip);
        $country = $visitorInfo->getCountry();
        $city = $visitorInfo->getCity();
        $address = $ip;

        $result = VisitorModel::insert([
            'address'=>$address,
            'country'=>$country,
            'city'=>$city
        ]);

        return $result;

    }
}
