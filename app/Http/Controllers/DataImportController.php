<?php

namespace App\Http\Controllers;

use Storage;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Pion\Laravel\ChunkUpload\Exceptions\UploadMissingFileException;
use Pion\Laravel\ChunkUpload\Handler\AbstractHandler;
use Pion\Laravel\ChunkUpload\Handler\HandlerFactory;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;

use App\User;
use Illuminate\Routing\Controller as BaseController;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use App\Traits\ApiResponser;
use App\Traits\ConsumeExternalService;
use DB;


class DataImportController extends BaseController 
{
    use ConsumeExternalService;
    /**
     * The request instance.
     *
     * @var \Illuminate\Http\Request
     */
    private $baseUri;

    /**
     * Create a new controller instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
    */

    public function __construct()
    {
       $this->baseUri = config('servicesurl.dataprocessing.base_uri');
    }

    public function get(Request $request,$slug) {
        return $this->performRequest('GET', $this->baseUri.'/'.$slug, [],[], $request);
    }

    public function otherPostAction(Request $request,$slug) {
        $header = $this->generateHeader($request->headers->all());
        return $this->performRequest('POST', $this->baseUri.'/'.$slug, $request->all(),$header, $request);
    }

    protected function generateHeader($header){

        $get_first = function($x){
            return $x[0];
        };

        return array_map($get_first, $header);
        
    }

}
