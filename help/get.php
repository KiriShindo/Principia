<?php
	if( $_POST[ "com" ] )
	    $id = $_POST[ "com" ];
	else
	    $id = uniqid();


	$fn = "/dev/shm/com_" . $id;

	$w = "";
	if( file_exists( $fn ) )
	    $w = file_get_contents( $fn );

	if( $_POST[ "option" ] == "sqrt" )
	    $w = "<msqrt>" . $w . "</msqrt>";
	else
	    $w .= "<" . $_POST[ "option" ] . ">" . $_POST[ "val" ] . "</" . $_POST[
	"option" ] . ">";

	$d = file_put_contents( $fn , $w );
?>
<input type="hidden" id="com" value="<?= $id ?>">
<iframe src="getFunction.php?id=<?= $id ?>"></iframe>
