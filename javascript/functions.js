var line_num_var = 1;
var line_num = 1;
var flag = 0;
var num_var = 0;
var num = 1;
var change_flag = 0;
var char_num = 0;

// 1行戻る //
function back_line() {
  if(flag == 0){
    return 0;
  }
  if(line_num_var == 1){
    return 0;
  }
  if(char_num != 0){
    return 0;
  }
  var hoge = document.getElementById("hoge");
  var Text_now = hoge.contentWindow.document.getElementById(line_num_var).innerHTML;
  console.log(Text_now);
  let array = Text_now.split('');
  console.log(array);
  console.log(array[array.length - 1]);
  if(array[array.length - 1] == "|"){
    array.pop();
    var New_Text = array.join('');
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = New_Text;
  }
  if(array[array.length - 1] == "\n"){
    array.pop();
    array.pop();
    var New_Text = array.join('');
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = New_Text;
  }
  line_num_var = line_num_var - 1;
  num_var = num_var - 1;
  console.log(line_num_var);
  if(line_num - line_num_var == 1){
    hoge.contentWindow.document.writeln("</div>");
    change_flag = 1;
    console.log("close");
  }
  var Text_back = hoge.contentWindow.document.getElementById(line_num_var).innerHTML;
  console.log(Text_back);
  let arraySplit = Text_back.split('');
  if(arraySplit[arraySplit.length - 1] != "|"){
    arraySplit.push("|");
    var New_Text_back = arraySplit.join('');
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = New_Text_back;
  }
}



// 文字を消去したときのバーカーソルの処理 //
function bar_delete() {
  if(hoge.contentWindow.document.getElementById(line_num_var).textContent == null){
    return 0;
  }
  const Text = hoge.contentWindow.document.getElementById(line_num_var).textContent;
  let arraySplit = Text.split('');
  arraySplit.push("|");
  var New_Text = arraySplit.join('');
  if(hoge.contentDocument) {
    hoge.contentDocument.open();
    hoge.contentDocument.write(New_Text);
  }
 else if(hoge.document) {
   hoge = window.frames["hoge"];
   hoge.document.open();
   hoge.document.write(New_Text);
 }
}



// 文字を書き込んだ時のバーカーソルの処理 //




// 改行 //
function change_line() {
  if(flag == 0){
    return 0;
  }

  if(char_num != 0){
    return 0;
  }
  // はじめての改行処理 //

    // 改行する前に | を削除 //
  var hoge = document.getElementById("hoge");
    // 何も入力していない時の改行は不可 //
    //if(hoge.contentWindow.document.getElementById(line_num_var).innerHTML.trim() == "") {
      //return 0;
    //}

  var Text = hoge.contentWindow.document.getElementById(line_num_var).innerHTML;
  let arraySplit = Text.split('');
  if(arraySplit[arraySplit.length-1] == "\n" && arraySplit.length > 2){
    arraySplit.pop();
    arraySplit.pop();
  }
  if(arraySplit[arraySplit.length-1] == "|"){
    arraySplit.pop();
  }
  if(arraySplit[1] == "\n" && arraySplit.length == 2){
    arraySplit.pop();
    arraySplit.pop();
    arraySplit.push("　");
  }
  var New_Text = arraySplit.join('');
  hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
  hoge.contentWindow.document.getElementById(line_num_var).innerHTML = New_Text;

// 改行の処理 //
  if(line_num_var == line_num){
    console.log(hoge.contentWindow.document.getElementById(line_num_var).innerHTML);
    line_num_var = line_num_var + 1;
    line_num = line_num + 1;
    console.log(change_flag);
    if(change_flag == 0){
      hoge.contentWindow.document.writeln("</div>");
      console.log("close");
    }
    if(change_flag == 1){
      change_flag = 0;
    }
    hoge.contentWindow.document.writeln("<div id=" + line_num + ">" + "|");
    console.log(hoge.contentWindow.document.getElementById(line_num).innerHTML);
    console.log("open");
  }
  if(line_num_var != line_num){
    console.log("B");
    console.log(line_num);
    line_num = line_num + 1;
    hoge.contentWindow.document.writeln("<div id=" + line_num + ">");
    for(let i = line_num - 1; i >= line_num_var + 1; i--){
      var Text = hoge.contentWindow.document.getElementById(i).innerHTML;
      hoge.contentWindow.document.getElementById(i).innerHTML = "";
      hoge.contentWindow.document.getElementById(i).innerHTML = "|";
      var l = i + 1;
      hoge.contentWindow.document.getElementById(l).innerHTML = Text;
      console.log(hoge.contentWindow.document.getElementById(l));
    }
    line_num_var = line_num_var + 1;
    hoge.contentWindow.document.writeln("</div>");
  }
}


// 下の行に戻る処理 //
  function go_line(){
    if(char_num != 0){
      return 0;
    }
    console.log("A");
    console.log(line_num_var);
    if(line_num == line_num_var){
      return 0;
    }
    var hoge = document.getElementById("hoge");
    var Text = hoge.contentWindow.document.getElementById(line_num_var).innerHTML;
    console.log(Text);
    let arraySplit = Text.split('');
    console.log(arraySplit);
    if(arraySplit[arraySplit.length-1] == "\n"){
      arraySplit.pop();
      arraySplit.pop();
    }
    if(arraySplit[arraySplit.length-1] == "|"){
      arraySplit.pop();
    }
    var New_Text = arraySplit.join('');
    console.log(New_Text);
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = New_Text;
    console.log(hoge.contentWindow.document.getElementById(line_num_var).innerHTML.trim());

    line_num_var = line_num_var + 1;
    console.log(line_num_var);
    var Text_back = hoge.contentWindow.document.getElementById(line_num_var).innerHTML;
    let arraySplit_back = Text_back.split('');
    if(arraySplit_back[arraySplit_back.length - 1] != "|"){
      arraySplit_back.push("|");
      var New_Text_back = arraySplit_back.join('');
      hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
      hoge.contentWindow.document.getElementById(line_num_var).innerHTML = New_Text_back;
    }
  }

function go_char(){
  var hoge = document.getElementById("hoge");
  var Text = hoge.contentWindow.document.getElementById(line_num_var).innerHTML;
  let arraySplit = Text.split('');
  if(arraySplit[arraySplit.length - 1] == "|" || arraySplit[0] == "|"){
    return 0;
  }
  arraySplit.splice(arraySplit.length - (char_num + 1), 1);
  char_num = char_num - 1;
  arraySplit.splice(arraySplit.length - char_num, 0, "|");
  var New_Text = arraySplit.join('');
  hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
  hoge.contentWindow.document.getElementById(line_num_var).innerHTML = New_Text;
}

function back_char(){
  var hoge = document.getElementById("hoge");
  var Text = hoge.contentWindow.document.getElementById(line_num_var).innerHTML;
  let arraySplit = Text.split('');
  if(char_num == arraySplit.length - 1 || arraySplit[0] == "|"){
    return 0;
  }
  arraySplit.splice(arraySplit.length - (char_num + 1), 1);
  char_num = char_num + 1;
  arraySplit.splice(arraySplit.length - char_num, 0, "|");
  var New_Text = arraySplit.join('');
  hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
  hoge.contentWindow.document.getElementById(line_num_var).innerHTML = New_Text;
}



// 文字を書き込んだ後にテキストボックスを空にする //
function clearText() {
	var textForm = document.getElementById("message");
  textForm.value = '';
}



// 文字を消去　//
function del() {
  if(flag == 0){
    return 0;
  }
  var hoge = document.getElementById("hoge");
  console.log(hoge.contentWindow.document.getElementById(line_num_var).innerHTML);
  if(hoge.contentWindow.document.getElementById(line_num_var).innerHTML.trim() == ""){   // 改良予定(空文字の時returnしない) //
    console.log("b");
    return 0;
  }
  var Text = hoge.contentWindow.document.getElementById(line_num_var).innerHTML;
  // 何も書かれていない行に対しては、行自体を削除して1つ前の行に戻る //
  if(Text == "|" && line_num_var > 1){
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
    hoge.contentWindow.document.getElementById(line_num_var).remove();
    if(line_num == line_num_var){
      line_num_var = line_num_var - 1;
      line_num = line_num - 1;
    }
    if(line_num != line_num_var){
      line_num_var = line_num_var - 1;
      for(let i = line_num_var + 2; i <= line_num; i++){
        var Text = hoge.contentWindow.document.getElementById(i).innerHTML;
        console.log(Text);
        hoge.contentWindow.document.getElementById(i).remove();
        var n = i-1;
        hoge.contentWindow.document.writeln("<div id=" + n + ">");
        console.log(hoge.contentWindow.document.getElementById(n));
        console.log(n);
        hoge.contentWindow.document.getElementById(n).innerHTML = Text;
        console.log(hoge.contentWindow.document.getElementById(n).innerHTML);
        hoge.contentWindow.document.writeln("</div>");
      }
      line_num = line_num - 1;
    }
    var Text_back = hoge.contentWindow.document.getElementById(line_num_var).innerHTML;
    console.log(Text_back);
    let array = Text_back.split('');
    array.push("|");
    console.log(array);
    var New_Text_back = array.join('');
    console.log(New_Text_back);
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = New_Text_back;
    return 0;
  }
  let arraySplit = Text.split('');
  if(arraySplit[0] == "|"){
    return 0;
  }
  arraySplit.splice(arraySplit.length - (char_num + 2), 1);
  var New_Text = arraySplit.join('');
  console.log(New_Text);
  hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
  hoge.contentWindow.document.getElementById(line_num_var).innerHTML = New_Text;
  console.log(hoge.contentWindow.document.getElementById(line_num_var).innerHTML);
}



// 数学記号の埋め込み //
function math_input() {
  var hoge = document.getElementById("hoge");

  if(hoge.contentDocument) {
    hoge.contentDocument.writeln('<math xmlns="http://www.w3.org/1998/Math/MathML">');
    hoge.contentDocument.writeln('  <mo>&int;</mo>');
    hoge.contentDocument.writeln("  <mrow>");
    hoge.contentDocument.writeln("    <mfenced>");
    hoge.contentDocument.writeln("      <mrow>");
    hoge.contentDocument.writeln("        <mi>x</mi>");
    hoge.contentDocument.writeln("        <mo>+</mo>");
    hoge.contentDocument.writeln("        <mn>1</mn>");
    hoge.contentDocument.writeln("      </mrow>");
    hoge.contentDocument.writeln("    </mfenced>");
    hoge.contentDocument.writeln("    <mo>&InvisibleTimes;</mo>");
    hoge.contentDocument.writeln("    <mrow>");
    hoge.contentDocument.writeln("      <mo>&DifferentialD;</mo>");
    hoge.contentDocument.writeln("      <mi>x</mi>");
    hoge.contentDocument.writeln("    </mrow>");
    hoge.contentDocument.writeln("  </mrow>");
    hoge.contentDocument.writeln("</math>");
  }
 else if(hoge.document) {
   hoge = window.frames["hoge"];
   hoge.contentDocument.writeln('<math xmlns="http://www.w3.org/1998/Math/MathML">');
   hoge.contentDocument.writeln('  <mo>&int;</mo>');
   hoge.contentDocument.writeln("  <mrow>");
   hoge.contentDocument.writeln("    <mfenced>");
   hoge.contentDocument.writeln("      <mrow>");
   hoge.contentDocument.writeln("        <mi>x</mi>");
   hoge.contentDocument.writeln("        <mo>+</mo>");
   hoge.contentDocument.writeln("        <mn>1</mn>");
   hoge.contentDocument.writeln("      </mrow>");
   hoge.contentDocument.writeln("    </mfenced>");
   hoge.contentDocument.writeln("    <mo>&InvisibleTimes;</mo>");
   hoge.contentDocument.writeln("    <mrow>");
   hoge.contentDocument.writeln("      <mo>&DifferentialD;</mo>");
   hoge.contentDocument.writeln("      <mi>x</mi>");
   hoge.contentDocument.writeln("    </mrow>");
   hoge.contentDocument.writeln("  </mrow>");
   hoge.contentDocument.writeln("</math>");
 }
}



// 文字を書き込む //
function write_text() {
  // 入力欄に何も書かれていないときは終了 //
  var textbox_none = document.getElementById("message");
  var value_none = textbox_none.value;
  var str = value_none;
  if(!str){
    return 0;
  }


  // 末尾(|)を削除 //



 // 入力されたテキストを表示 //
  var hoge = document.getElementById("hoge");
  const textbox = document.getElementById("message");
  const value = textbox.value;
  var str = value;

  if(flag == 0){
    hoge.contentWindow.document.writeln("<div id=" + line_num + ">");
    console.log("open");
    flag = flag + 1;
  }

  // |を削除 //
  if(char_num == 0){
    hoge = document.getElementById("hoge");
    console.log(line_num_var);
    var Text = hoge.contentWindow.document.getElementById(line_num_var).innerHTML;
    console.log(Text);
    let arraySplit = Text.split('');
    var last = arraySplit[arraySplit.length - 1];
    if(last == "\n" && arraySplit[arraySplit.length - 2] == "|"){
      arraySplit.pop();
      arraySplit.pop();
      console.log(arraySplit);
      var New_Text = arraySplit.join('');
      console.log(New_Text);
    }
    if(last == "|"){
      arraySplit.pop();
      console.log(arraySplit);
      var New_Text = arraySplit.join('');
      console.log(New_Text);
    }
    else{
      var New_Text = "";
    }
    // 書き込み //
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = New_Text + str + "|";
    console.log(hoge.contentWindow.document.getElementById(line_num_var));
  }

// バーが最後尾でないとき //
  if(char_num != 0){
    hoge = document.getElementById("hoge");
    var Text = hoge.contentWindow.document.getElementById(line_num_var).innerHTML;
    let arraySplit = Text.split('');
    let textSplit = str.split('');
    arraySplit.splice(arraySplit.length - (char_num + 1), 1);
    for(let i = 0; i <= textSplit.length - 1; i++){
      arraySplit.splice(arraySplit.length - char_num, 0, textSplit[i]);
    }
    arraySplit.splice(arraySplit.length - char_num, 0, "|");
    var New_Text = arraySplit.join('');
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = "";
    hoge.contentWindow.document.getElementById(line_num_var).innerHTML = New_Text;
  }

}
