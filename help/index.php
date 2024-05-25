<?xml version="1.0" encoding="UTF-8" ?> 
<!DOCTYPE html  PUBLIC
  "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN"
  "http://www.w3.org/TR/MathML2/dtd/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja"> 

<!--~~~~~~~~~~ここからhead~~~~~~~~~~-->
<head>
  <script type="text/javascript" src="js/Communicate.js.php"></script>
  <script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=MML_SVG"></script>
  <script type="text/javascript">
    function get( id , op , v )
    {
        let x = new XMLHttpRequest();
	let lnk = "get.php";
	let f = new FormData ();
	x.open( "POST" , lnk , true );
	x.onreadystatechange = function ()
	{
		if( x.readyState == 4 && x.status == 200 ){
		    let d = document.getElementById( id );
		    d.innerHTML = x.responseText;
		}
	};
	f.append( "com" , document.getElementById( "com" ).value );
	f.append( "option" , document.getElementById( op ).value );
	f.append( "val" , document.getElementById( v ).value );
	x.send( f );
    }
  </script>
</head>
<!--~~~~~~~~~~~~~body~~~~~~~~~~~-->
<body>

<div id="view">
  <input type="hidden" id="com" value="">
</div>


<input type="hidden" id="op1" value="mn">
<input type="text" id="v1" value="">
<input type="button" value="Value" onClick="get('view','op1','v1');"><br>

<input type="hidden" id="op1_1" value="mi">
<input type="text" id="v1_1" value="">
<input type="button" value="Parameter" onClick="get('view','op1_1','v1_1');"><br>

<input type="hidden" id="op2" value="mo">
<input type="hidden" id="v2" value="+">
<input type="button" value="Add" onClick="get('view','op2','v2');"><br>

<input type="hidden" id="op3" value="mo">
<input type="hidden" id="v3" value="-">
<input type="button" value="Sub" onClick="get('view','op3','v3');"><br>

<input type="hidden" id="op4" value="sqrt">
<input type="hidden" id="v4" value="">
<input type="button" value="Sqrt" onClick="get('view','op4','v4');"><br>


<!--~~~~~~~~~~~~script~~~~~~~~~~~~~-->

</body>
  
</html>
