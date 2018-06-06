<php
	function curPageURL() {
		$pageURL = 'http';
			if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
				$pageURL .= "://";
			if ($_SERVER["SERVER_PORT"] != "80") {
				$pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
			}			 else {
				$pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
			}
				return $pageURL;
	}

function getData(){
	$x=curPageURL();
	$y=explode("?",$x);
	$z=explode("&",y[1]);
	if (in_array($z[0], $z)) && (in_array($z[1], $z)){
		echo z[0] . " " . z[1];
	}
	else {
		echo "nevalidni podaci";
	}
}
<?php
 <div class="img-marketing"><img class="big-img" src=""><div class="up-right"><img id="abs-img" alt="" src="img/iconx2-000000.png"><a href="#" class="close"></div></div>
	
		
			<img src="https://tpc.googlesyndication.com/daca_images/simgad/15951719908511322019" border="0" width="970" alt="">
				
		
 ");
});