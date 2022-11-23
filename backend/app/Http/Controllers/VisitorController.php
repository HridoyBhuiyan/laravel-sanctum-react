<?php

namespace App\Http\Controllers;

use Adrianorosa\GeoLocation\GeoLocation;
use App\Models\VisitorModel;
use http\Env;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
    function visitorInfo($ip, Request $request){

        $visitorInfo = GeoLocation::lookup($ip);
        $country = $visitorInfo->getCountry();
        $city = $visitorInfo->getCity();
        $address = $ip;

        $result = VisitorModel::insert([
            'address'=>$address,
            'country'=>$country,
            'city'=>$city
        ]);

        return $visitorInfo;

    }
}
