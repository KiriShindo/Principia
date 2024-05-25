<?php
	$d = "";
	$fn = "/dev/shm/com_" . $_GET[ "id" ];
	if( file_exists( $fn ) )
	    $d = file_get_contents( $fn );
	else
	  $d = $fn;
?>

<?xml version="1.0" encoding="UTF-8" ?> 
<!DOCTYPE html  PUBLIC
  "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN"
  "http://www.w3.org/TR/MathML2/dtd/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja"> 

<!--~~~~~~~~~~ここからhead~~~~~~~~~~-->
<head>
  <script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=MML_SVG"></script>
</head>
<!--~~~~~~~~~~~~~body~~~~~~~~~~~-->
<body>

<math xmlns="http://www.w3.org/1998/Math/MathML">

<?php
/*
    <msqrt>
      <mrow>
        <mi>x</mi>
      	<mo>-</mo>
     	<mn>2</mn>
      </mrow>
    </msqrt>
*/
?>
  <?= $d ?>
</math>
<!--~~~~~~~~~~~~script~~~~~~~~~~~~~-->

</body>
  
</html>
