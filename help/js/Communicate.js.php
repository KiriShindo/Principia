<?php
////////////////////////////////////////////////////////////////////////
//
//                          通信制御ライブラリ
//
//
//
//
//
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
//
//
//
////////////////////////////////////////////////////////////////////////
?>
////////////////////////////////////////////////////////////////////////
//
//
//
//
//
//
//======================================================================
//
//
//----------------------------------------------------------------------
if( window.ActiveXObject && ! window.XMLHttpRequest ){
  window.XMLHttpRequest = function () {
    try{
      return new ActiveXObject( 'Msxml2.XMLHTTP' );
    }
    catch( e ) {};

    try{
      return new ActiveXObject( 'Microsoft.XMLHTTP' );
    }
    catch( e ) {};
	 
    return ( null );
  };
}
