<?php
session_start();

$_SESSION['count'] = $_SESSION['count'] + 1;
if($_SESSION['count'] == 1){
  $_SESSION['random_val'] = date('Ymd-His-') . rand(10000, 99999);
  $initial_path = dirname(__FILE__) . '/file_uploaded/' . $_SESSION['random_val'] . '.php';
  touch($initial_path);
}

$file = "file_uploaded/" . $_SESSION['random_val'] . ".php";

if($_SESSION['count'] == 1){
  file_put_contents($file, "<!DOCTYPE html>". PHP_EOL, FILE_APPEND);
  file_put_contents($file, "<html>". PHP_EOL, FILE_APPEND);
  file_put_contents($file, "<head>". PHP_EOL, FILE_APPEND);
  file_put_contents($file, "  <meta charset='utf-8'>". PHP_EOL, FILE_APPEND);
  file_put_contents($file, "  <title>保存</title>". PHP_EOL, FILE_APPEND);
  file_put_contents($file, "  <script id='MathJax-script' async src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-chtml.js'></script>". PHP_EOL, FILE_APPEND);
  file_put_contents($file, "</head>". PHP_EOL, FILE_APPEND);
  file_put_contents($file, "<body>". PHP_EOL, FILE_APPEND);
}

if(isset($_POST["comment"])){
  $str = $_POST["comment"];
  file_put_contents($file, $str, FILE_APPEND);
  echo "<script>";
  echo "location.href = 'consv.php'";
  echo "</script>";
}


 ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>作成</title>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-chtml.js"></script>
</head>
<body onload="changeColor();">
  <iframe id="hoge" src="http://localhost/Web/php/file_uploaded/<?=$_SESSION['random_val']?>.php" width="1485" height="600"></iframe><br><br>

  <input type="txt" id="txt">
  <input type="button" id="btn0" value="Enter" onclick="myFunction0()">
  <input type="button" id="Del" value="Del" onclick="Delete()">

  <input type="button" id="btn1" value="←" onclick="Move1()">
  <input type="button" id="btn2" value="→" onclick="Move2()">
  <input type="button" id="btn3" value="Line_break" onclick="Line_break()">
  <input type="button" id="btnP" value="Space" onclick="Space()">

  <br>
  <br>
  <input type="button" id="btn4" value=">" onclick="symbol1()">
  <input type="button" id="btn5" value=">=" onclick="symbol2()">
  <input type="button" id="btn5" value="<" onclick="symbol3()">
  <input type="button" id="btn5" value="<=" onclick="symbol4()">
  <input type="button" id="btn6" value="+-" onclick="symbol5()">
  <input type="button" id="btn7" value="-+" onclick="symbol6()">
  <input type="button" id="Equal" value="=" onclick="Equal()">
  <input type="button" id="Sum" value="+" onclick="Sum()">
  <input type="button" id="Difference" value="-" onclick="Difference()">
  <input type="button" id="Divide" value="÷" onclick="Divide()">
  <br>
  <input type="button" id="Time" value="X" onclick="Time()">
  <input type="button" id="AND" value="∧" onclick="AND()">
  <input type="button" id="OR" value="∨" onclick="OR()">
  <input type="button" id="CAP" value="∩" onclick="CAP()">
  <input type="button" id="CUP" value="∪" onclick="CUP()">
  <input type="button" id="OPLUS" value="⊕" onclick="OPLUS()">
  <input type="button" id="OMINUS" value="⊖" onclick="OMINUS()">
  <input type="button" id="OTIMES" value="⊗" onclick="OTIMES()">
  <input type="button" id="ODOT" value="⊙" onclick="ODOT()">
  <input type="button" id="Sim" value="∼" onclick="Sim()">
  <br>
  <input type="button" id="Simeq" value="≃" onclick="Simeq()">
  <input type="button" id="Fallingdotseq" value="≒" onclick="Fallingdotseq()">
  <input type="button" id="Ne" value="≠" onclick="Ne()">
  <input type="button" id="合同式" value="≡" onclick="合同式()">
  <input type="button" id="否合同式" value="≢" onclick="否合同式()">
  <input type="button" id="GH" value="≪" onclick="GH()">
  <input type="button" id="GL" value="≫" onclick="GL()">
  <input type="button" id="set1" value="⊂" onclick="set1()">
  <input type="button" id="set2" value="⊃" onclick="set2()">
  <input type="button" id="N_set1" value="⊄" onclick="N_set1()">
  <br>
  <input type="button" id="N_set2" value="⊅" onclick="N_set2()">
  <input type="button" id="E_set1" value="⊆" onclick="E_set1()">
  <input type="button" id="E_set2" value="⊇" onclick="E_set2()">
  <input type="button" id="Inf" value="∞" onclick="Inf()">
  <input type="button" id="element1" value="∈" onclick="element1()">
  <input type="button" id="element2" value="∉" onclick="element2()">
  <input type="button" id="element3" value="∋" onclick="element3()">
  <input type="button" id="Ctdot" value="..." onclick="Ctdot()">



  <br>
  <br>
  <!--分数--><input type="button" id="Fraction" value="分数" onclick="Fraction()">
  <!--積分--><input type="button" id="Definite" value="∫" onclick="Definite()">
  <!--累乗根--><input type="button" id="Root" value="root" onclick="Root()">
  <!--冪乗--><input type="button" id="Exponent" value="冪乗" onclick="Exponent()">
  <!--添字--><input type="button" id="Subscript" value="添字" onclick="Subscript()">
  <!--和--><input type="button" id="Summation" value="Σ" onclick="Summation()">
  <!--ベクトル表記--><input type="button" id="Vektor" value="ベクトル表記" onclick="Vektor()">
  <!--極限--><input type="button" id="Limit" value="極限" onclick="Limit()">
  <!--合併集合--><input type="button" id="Union" value="合併集合(Union)" onclick="Union()">
  <!--総積--><input type="button" id="Product" value="総積(Product)" onclick="Product()">
  <!--周回積分--><input type="button" id="Line_Integral" value="周回積分(∮)" onclick="Line_Integral()">
  <!--上棒--><input type="button" id="Top_b" value="上線" onclick="Top_b()">
  <!--元素--><input type="button" id="Element" value="Element" onclick="Element()">
  <!--矢印--><input type="button" id="Arr" value="矢印" onclick="Arr()">
  <br>
  <br>
  <div class="Char_fraktur">
  <!--フラクトゥール-->
      <input type="button" id="fraktur_A" value="fraktur_A" onclick="fraktur_A()">
      <input type="button" id="fraktur_B" value="fraktur_B" onclick="fraktur_B()">
      <input type="button" id="fraktur_C" value="fraktur_C" onclick="fraktur_C()">
      <input type="button" id="fraktur_D" value="fraktur_D" onclick="fraktur_D()">
      <input type="button" id="fraktur_E" value="fraktur_E" onclick="fraktur_E()">
      <input type="button" id="fraktur_F" value="fraktur_F" onclick="fraktur_F()">
      <input type="button" id="fraktur_G" value="fraktur_G" onclick="fraktur_G()">
      <input type="button" id="fraktur_H" value="fraktur_H" onclick="fraktur_H()">
      <input type="button" id="fraktur_I" value="fraktur_I" onclick="fraktur_I()">
      <input type="button" id="fraktur_J" value="fraktur_J" onclick="fraktur_J()">
  <br>
      <input type="button" id="fraktur_K" value="fraktur_K" onclick="fraktur_K()">
      <input type="button" id="fraktur_L" value="fraktur_L" onclick="fraktur_L()">
      <input type="button" id="fraktur_M" value="fraktur_M" onclick="fraktur_M()">
      <input type="button" id="fraktur_N" value="fraktur_N" onclick="fraktur_N()">
      <input type="button" id="fraktur_O" value="fraktur_O" onclick="fraktur_O()">
      <input type="button" id="fraktur_P" value="fraktur_P" onclick="fraktur_P()">
      <input type="button" id="fraktur_Q" value="fraktur_Q" onclick="fraktur_Q()">
      <input type="button" id="fraktur_R" value="fraktur_R" onclick="fraktur_R()">
      <input type="button" id="fraktur_S" value="fraktur_S" onclick="fraktur_S()">
      <input type="button" id="fraktur_T" value="fraktur_T" onclick="fraktur_T()">
  <br>
      <input type="button" id="fraktur_U" value="fraktur_U" onclick="fraktur_U()">
      <input type="button" id="fraktur_V" value="fraktur_V" onclick="fraktur_V()">
      <input type="button" id="fraktur_W" value="fraktur_W" onclick="fraktur_W()">
      <input type="button" id="fraktur_X" value="fraktur_X" onclick="fraktur_X()">
      <input type="button" id="fraktur_Y" value="fraktur_Y" onclick="fraktur_Y()">
      <input type="button" id="fraktur_Z" value="fraktur_Z" onclick="fraktur_Z()">
  </div>

      <div class="Char_fraktur_S">
  <!--ギリシア文字-->
      <input type="button" id="α" value="α" onclick="α()">
      <input type="button" id="β" value="β" onclick="β()">
      <input type="button" id="γ" value="γ" onclick="γ()">
      <input type="button" id="δ" value="δ" onclick="δ()">
      <input type="button" id="ε" value="ε" onclick="ε()">
      <input type="button" id="ζ" value="ζ" onclick="ζ()">
      <input type="button" id="η" value="η" onclick="η()">
      <input type="button" id="θ" value="θ" onclick="θ()">
      <input type="button" id="ι" value="ι" onclick="ι()">
      <input type="button" id="κ" value="κ" onclick="κ()">
  <br>
      <input type="button" id="λ" value="λ" onclick="λ()">
      <input type="button" id="μ" value="μ" onclick="μ()">
      <input type="button" id="ν" value="ν" onclick="ν()">
      <input type="button" id="ξ" value="ξ" onclick="ξ()">
      <input type="button" id="ο" value="ο" onclick="ο()">
      <input type="button" id="π" value="π" onclick="π()">
      <input type="button" id="ρ" value="ρ" onclick="ρ()">
      <input type="button" id="σ" value="σ" onclick="σ()">
      <input type="button" id="τ" value="τ" onclick="τ()">
      <input type="button" id="υ" value="υ" onclick="υ()">
  <br>
      <input type="button" id="φ" value="φ" onclick="φ()">
      <input type="button" id="χ" value="χ" onclick="χ()">
      <input type="button" id="ψ" value="ψ" onclick="ψ()">
      <input type="button" id="ω" value="ω" onclick="ω()">
  </div>


      <div class="Char_fraktur_L">
  <!--ギリシア文字-->
      <input type="button" id="Α" value="Α " onclick="Α()">
      <input type="button" id="Β" value="Β" onclick="Β()">
      <input type="button" id="Γ" value="Γ" onclick="Γ()">
      <input type="button" id="Δ" value="Δ" onclick="Δ()">
      <input type="button" id="Ε" value="Ε" onclick="Ε()">
      <input type="button" id="Ζ" value="Ζ" onclick="Ζ()">
      <input type="button" id="Η" value="Η" onclick="Η()">
      <input type="button" id="Θ" value="Θ" onclick="Θ()">
      <input type="button" id="Ι" value="Ι" onclick="Ι()">
      <input type="button" id="Κ" value="Κ" onclick="Κ()">
  <br>
      <input type="button" id="Λ" value="Λ" onclick="Λ()">
      <input type="button" id="Μ" value="Μ" onclick="Μ()">
      <input type="button" id="Ν" value="Ν" onclick="Ν()">
      <input type="button" id="Ξ" value="Ξ" onclick="Ξ()">
      <input type="button" id="Ο" value="Ο" onclick="Ο()">
      <input type="button" id="Π" value="Π" onclick="Π()">
      <input type="button" id="Ρ" value="Ρ" onclick="Ρ()">
      <input type="button" id="Σ" value="Σ" onclick="Σ()">
      <input type="button" id="Τ" value="Τ" onclick="Τ()">
      <input type="button" id="Υ" value="Υ" onclick="Υ()">
  <br>
      <input type="button" id="Φ" value="Φ" onclick="Φ()">
      <input type="button" id="Χ" value="Χ" onclick="Χ()">
      <input type="button" id="Ψ" value="Ψ" onclick="Ψ()">
      <input type="button" id="Ω" value="Ω" onclick="Ω()">
  </div>

  <script type="text/javascript" src="../javascript/script.js"></script><br><br>

  <button onclick="get(consv());">書き込む要素を出力</button>

  <form action="" method="post">
    <input id="input1" type = "txt" name ="comment" value=""><br/>
    <input type = "submit" value ="書き込み"><br>
  </form>


<!--
  <form action="consv.php" method="post">
    <input type = "submit" value ="保存">
  </form>
-->


  <button onclick="location.href='my_page.php'">ホームに戻る</button>
</body>
</html>
