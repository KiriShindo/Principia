let str;
let math_S = ['<math>'];
let math_E = ['</math>'];
let STRING =[];
let STRING_C;
let formula = ['<mo id="stick_g">|</mo>'];
let formula_stick_pos;



///////////////////////////////////////////////
//削除
function Delete(){


    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    switch(formula[formula_stick_pos-1]){

//  分数       '<mfrac><mrow mathsize="12pt"><mo></mo>','<mo>分子を入力</mo>','<mo></mo></mrow><mrow mathsize="12pt"><mo></mo>','<mo>分母を入力</mo>','<mo></mo></mrow></mfrac> <mo id="stick_g">|</mo>'
        case '<mo></mo></mrow></mfrac>':        //分数の削除のとき(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '<mo></mo></mrow><mrow mathsize="12pt"><mo></mo>':   //分数の削除のとき(２)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-2,1);
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '<mfrac><mrow mathsize="12pt"><mo></mo>':   //分数の削除のとき(不要な分数の要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,3);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//積分    '<msubsup><mo mathsize="25pt">&int;</mo><mrow mathsize="9pt"><mo></mo>','<mo>下端を入力</mo>','</mrow><mrow mathsize="9pt"><mo></mo>','<mo>上端入力</mo>','</mrow></msubsup>'
        case '</mrow></msubsup>':        //積分の削除のとき(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲(上端削除)
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '</mrow><mrow mathsize="9pt"><mo></mo>':        //積分の削除のとき(2)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲(下端削除)
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '<msubsup><mo mathsize="25pt">&int;</mo><mrow mathsize="9pt"><mo></mo>':   //積分の削除のとき(不要な積分の要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,3);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//冪根        <mroot><mrow><mo></mo>','<mo>底の入力</mo>' ,'</mrow><mrow><mo></mo>','<mo>指数の入力</mo>','</mrow></mroot>
/////////////////////////////////////要
/////////////////////////////////////相
/////////////////////////////////////談
/////////////////////////////////////!!
        case '</mrow></mroot>':        //rootの削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '</mrow><mrow><mo></mo>':        //rootの削除(2)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;


        case '<mroot><mrow><mo></mo>':   //rootの削除のとき(不要なrootの要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,3);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//指数        '<msup><mrow><mo></mo>','<mo>底の入力</mo>','</mrow><mrow><mo></mo>','<mo>指数の入力</mo>','</mrow></msup>'

        case '</mrow></msup>':        //rootの削除(2)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '</mrow><mrow><mo></mo>':        //rootの削除(2)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '<msup><mrow><mo></mo>':   //rootの削除のとき(不要なrootの要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,3);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//添字        '<msub><mrow><mo></mo>','<mo>テンプレ1</mo>','</mrow><mrow><mo></mo>','<mo>テンプレ2</mo>','</mrow></msub>'
        case '</mrow></msub>':        //添字の削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '</mrow><mrow><mo></mo>':        //添字の削除(2)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '<msub><mrow><mo></mo>':   //rootの削除のとき(不要なrootの要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,3);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//シグマ       <munderover><mi mathsize="25pt">&sum;</mi><mrow><mo></mo>','<mo>テンプレ1</mo>','</mrow><mrow><mo></mo>','<mo>テンプレ2</mo>','</mrow></munderover>

        case '</mrow></munderover>':        //シグマの削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '</mrow><mrow><mo></mo>':        //シグマの削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));;
            break;

        case '<munderover><mi mathsize="25pt">&sum;</mi><mrow><mo></mo>':   //シグマの削除のとき(不要なrootの要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,3);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//ベクトル表記        <mover><mrow>','<mo>テンプレ1(テンプレを編集するには回←)</mo>','</mrow><mo>&RightArrow;</mo></mover>


        case '</mrow><mo mathsize="25pt">&RightArrow;</mo></mover>':        //ベクトルの削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;


        case '<mover><mrow>':   //シグマの削除のとき(不要なrootの要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,2);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//極限        <munder><mi>lim</mi><mrow>','<mo>テンプレ</mo>','</mrow></munder>

        case '</mrow></munder>':        //極限の削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;


        case '<munder><mi mathsize="25pt">lim</mi><mrow>':   //極限の削除のとき(不要なrootの要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,2);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//合併集合        '<munder><mo>&bigcup;</mo><mrow>','<mo>テンプレ</mo>','</mrow></munder><msub><mi></mi>'
        case '</mrow></munder><mi></mi>':        //極限の削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '<munder><mo mathsize="25pt">&bigcup;</mo><mrow>':   //極限の削除のとき(不要なrootの要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,2);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//総積       '<munderover><mo>&Product;</mo><mrow>','<mo>テンプレ</mo>','<mo></mo></mrow><mrow>','<mo>テンプレ</mo>', '<mo></mo></mrow></munderover>'
        case '<mo></mo></mrow></munderover>':        //シグマの削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '<mo></mo></mrow><mrow>':        //シグマの削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '<munderover><mo mathsize="25pt">&Product;</mo><mrow>':   //シグマの削除のとき(不要なrootの要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,3);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//周回積分      '<msub><mo mathsize="25pt">&conint;</mo><mrow>','<mo>テンプレ</mo>','</mrow></msub>'
        case '</mrow></msub>':        //周回積分の削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '<msub><mo mathsize="25pt">&conint;</mo><mrow>':   //周回積分の削除のとき(不要なrootの要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,2);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//上線      '<mover><mrow><mo></mo>','<mi>テンプレ</mi>','</mrow><mo>_</mo></mover>'
        case '</mrow><mo>_</mo></mover>':        //上線の削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '<mover><mrow><mo></mo>':   //上線の削除のとき(不要なrootの要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,2);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//元素      '<mmultiscripts><mrow><mo></mo>','<mo>テンプレ</mo>','</mrow><mprescripts /><mrow>','<mi>テンプレ</mi>','</mrow><mrow><mo></mo>','<mo>テンプレ</mo>','</mrow></mmultiscripts>'
        case '</mrow></mmultiscripts>':        //上線の削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '</mrow><mrow><mo></mo>':        //上線の削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '</mrow><mprescripts /><mrow>':        //上線の削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '<mmultiscripts><mrow><mo></mo>':   //上線の削除のとき(不要なrootの要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,4);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//矢印        '<mover><mo>&rarr;</mo><mtext>&nbsp;',単射,'&nbsp;</mtext></mover>'
        case '&nbsp;</mtext></mover>':        //上線の削除(1)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);    //stick_gの削除
            formula.splice(formula_stick_pos-2,1);  //消す範囲()
            formula.splice(formula_stick_pos-2,0,'<mo id="stick_g">|</mo>');    //削除した間にstick_gを挿入
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

        case '<mover><mo>&rarr;</mo><mtext>&nbsp;':   //上線の削除のとき(不要なrootの要素全削除)
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,2);
            formula.splice(formula_stick_pos,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
            break;

//その他の
        default:
            document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
            formula.splice(formula_stick_pos,1);
            formula.splice(formula_stick_pos-1,1);
            formula.splice(formula_stick_pos-1,0,'<mo id="stick_g">|</mo>');
            STRING_C = math_S.concat(formula, math_E);
            document.getElementById('txt').value ='';
            document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
    }
}

///////////////////////////////////////////////
//矢印
//←
function Move1(){
  console.log(document.getElementById('hoge').contentWindow.document.body.innerHTML);
  document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
  formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
  if(formula_stick_pos == 0){
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
  }else{
    formula.splice(formula_stick_pos-1 , 2 , formula[formula_stick_pos] , formula[formula_stick_pos-1]);
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
  }
}
//→
function Move2(){
  console.log(document.getElementById('hoge').contentWindow.document.body.innerHTML);
  document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
  formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
  if(formula_stick_pos == formula.length-1){
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
  }else{
    formula.splice(formula_stick_pos , 2 , formula[formula_stick_pos+1] , formula[formula_stick_pos]);
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
  }
}

///////////////////////////////////////////////
//行替え
function Line_break(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    console.log(formula_stick_pos);
    formula.splice(formula_stick_pos, 0 ,'</math><br><math>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//key操作
//Enter
txt.addEventListener('keypress',Enter_ivent);
function Enter_ivent(Enter){if(Enter.keyCode === 13){myFunction0();}return false;}
///////////////////////////////////////////////

//補助stick
var Interval;
function changeColor(){
    document.getElementById('hoge').contentWindow.document.writeln('<!DOCTYPE html>');
    document.getElementById('hoge').contentWindow.document.writeln('<html>');
    document.getElementById('hoge').contentWindow.document.writeln('<head>');
    document.getElementById('hoge').contentWindow.document.writeln('<meta charset="utf-8">');
    document.getElementById('hoge').contentWindow.document.writeln('<title>保存</title>');
    document.getElementById('hoge').contentWindow.document.writeln('<script type="text/javascript" src="../javascript/script.js"></script>');
    document.getElementById('hoge').contentWindow.document.writeln('</head>');
    document.getElementById('hoge').contentWindow.document.writeln('<body>');
    document.getElementById('hoge').contentWindow.document.writeln('<mo id="stick_g">|</mo>');
    console.log(document.getElementById('hoge').contentWindow.document.head);
    Interval = setInterval(stick_color,500);
}



function stick_color(){
    var flash_stick = document.getElementById('hoge').contentWindow.document.getElementById('stick_g');
    flash_stick.style.color = flash_stick.style.color == 'black' ? 'white' : 'black';
}

//iframeの文章を保存
function consv(){
  document.getElementById('hoge').contentWindow.document.getElementById('stick_g').remove();
  var str = document.getElementById('hoge').contentWindow.document.body.innerHTML;
  return str;
}

function get(str){
  document.getElementById('input1').value = str;
}


///////////////////////////////////////////////
//>
function symbol1(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 , '<mo>&gt;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//>=
function symbol2(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 , '<mo>&ge;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//<
function symbol3(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 , '<mo>&lt;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//<=
function symbol4(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 , '<mo>&le;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//+-
function symbol5(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 , '<mo>&PlusMinus;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//-+
function symbol6(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 , '<mo>&MinusPlus;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
//space
function Space(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'&nbsp;');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//Equal
function Equal(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>=</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//+
function Sum(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>+</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//-
function Difference(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>-</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//Divide
function Divide(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&divide;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//Time
function Time(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&times;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//and
function AND(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&and;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}


///////////////////////////////////////////////
//OR
function OR(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&or;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//CAP
function CAP(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&cap;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//CUP
function CUP(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&cup;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//OPLUS
function OPLUS(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&oplus;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//OMINUS
function OMINUS(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&ominus;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//OTIMES
function OTIMES(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&otimes;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//ODOT
function ODOT(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&odot;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//Sim
function Sim(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&sim;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//Simeq
function Simeq(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&simeq;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//Fallingdotseq
function Fallingdotseq(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&fallingdotseq;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//Ne
function Ne(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&ne;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//合同式
function 合同式(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&equiv;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//否合同式
function 否合同式(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&nequiv;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//GH
function GH(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&Lt;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//GL
function GL(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&Gt;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//部分集合1
function set1(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&sub;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//部分集合2
function set2(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&sup;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//部分集合3
function N_set1(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&nsub;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//部分集合4
function N_set2(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&nsup;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//部分集合5
function E_set2(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&sube;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//部分集合6
function E_set1(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&sube;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//部分集合6
function E_set2(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&supe;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//無限
function Inf(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&infin;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//元1
function element1(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&isin;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//元2
function element2(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&notin;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//元3
function element3(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mo>&ni;</mo>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//リード
function Ctdot(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&ctdot;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}





















///////////////////////////////////////////////
//判別
let text_str;
let text1;
function myFunction0(){
  console.log(document.getElementById('hoge').contentWindow.document.body.innerHTML);
  document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
  text_str = document.getElementById('txt').value;
  text1 =  text_str.split('');
    //文字か数字か判別する
  for(let i = 0; i < text1.length ; i++){
    if(isFinite(text1[i])){
      //数字のとき
        formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
        formula.splice(formula_stick_pos, 0 , '<mn>' + text1[i] + '</mn>');

    }else{
      //文字のとき
        formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
        formula.splice(formula_stick_pos, 0 , '<mi>' + text1[i] + '</mi>');
    }
  }
  STRING_C = math_S.concat(formula, math_E);
  document.getElementById('txt').value = '';
  document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//分数
function Fraction(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 , '<mfrac><mrow mathsize="12pt"><mo></mo>','<mo>分子を入力</mo>','<mo></mo></mrow><mrow mathsize="12pt"><mo></mo>','<mo>分母を入力</mo>','<mo></mo></mrow></mfrac>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//積分
function Definite(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<msubsup><mo mathsize="25pt">&int;</mo><mrow mathsize="9pt"><mo></mo>','<mo>下端を入力</mo>','</mrow><mrow mathsize="9pt"><mo></mo>','<mo>上端入力</mo>','</mrow></msubsup>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));

}


///////////////////////////////////////////////
//冪根
function Root(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mroot><mrow><mo></mo>','<mo>底の入力(rootボタン入力後３回←押す)</mo>' ,'</mrow><mrow><mo></mo>','<mo>指数の入力</mo>','</mrow></mroot>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}


///////////////////////////////////////////////
//指数
function Exponent(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<msup><mrow><mo></mo>','<mo>底の入力</mo>','</mrow><mrow><mo></mo>','<mo>指数の入力</mo>','</mrow></msup>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//添字
function Subscript(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<msub><mrow><mo></mo>','<mo>テンプレ1</mo>','</mrow><mrow><mo></mo>','<mo>テンプレ2</mo>','</mrow></msub>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//添字
function Summation(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<munderover><mi mathsize="25pt">&sum;</mi><mrow><mo></mo>','<mo>テンプレ1</mo>','</mrow><mrow><mo></mo>','<mo>テンプレ2</mo>','</mrow></munderover>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//ベクトル表記
function Vektor(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mover><mrow>','<mo>テンプレ1(テンプレを編集するには回←)</mo>','</mrow><mo>&RightArrow;</mo></mover>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}


///////////////////////////////////////////////
//極限
function Limit(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<munder><mi>lim</mi><mrow>','<mo>テンプレ</mo>','</mrow></munder>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}







///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//合併集合
function Union(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<munder><mo mathsize="25pt">&bigcup;</mo><mrow>','<mo>テンプレ</mo>','</mrow></munder><mi></mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//総積
function Product(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<munderover><mo mathsize="25pt">&Product;</mo><mrow>','<mo>テンプレ</mo>','<mo></mo></mrow><mrow>','<mo>テンプレ</mo>', '<mo></mo></mrow></munderover>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//周回積分
function Line_Integral(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<msub><mo mathsize="25pt">&conint;</mo><mrow>','<mo>テンプレ</mo>','</mrow></msub>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//上線
function Top_b(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mover><mrow><mo></mo>','<mi>テンプレ</mi>','</mrow><mo>_</mo></mover>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////
//矢印
function Arr(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mover><mo>&rarr;</mo><mtext>&nbsp;','テンプレ','&nbsp;</mtext></mover>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
///////////////////////////////////////////////
//元素
function Element(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mmultiscripts><mrow><mo></mo>','<mo>テンプレ</mo>','</mrow><mprescripts /><mrow>','<mi>テンプレ</mi>','</mrow><mrow><mo></mo>','<mo>テンプレ</mo>','</mrow></mmultiscripts>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}







//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//フラクトゥール
function fraktur_A(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">A</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_B(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">B</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_C(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">C</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_D(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">C</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_E(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">E</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_F(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">F</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_G(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">G</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_H(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">H</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_I(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">I</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_J(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">J</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_K(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">K</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_L(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">L</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_M(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">M</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_N(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">N</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_O(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">O</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_P(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">P</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_Q(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">Q</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_R(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">R</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_S(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">S</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_T(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">T</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
function fraktur_U(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">U</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_V(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">V</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_W(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">W</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_X(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">X</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_Y(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">Y</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function fraktur_Z(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi mathvariant="fraktur">Z</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//ギリシャ語(S)
function α(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&alpha;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function β(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&beta;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function γ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&gamma;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function δ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&delta;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function ε(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&epsilon;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function ζ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&zeta;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function η(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&eta;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function θ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&theta;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function ι(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&iota;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function κ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&kappa;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function λ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&lambda;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function μ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&mu;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function ν(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&nu;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function ξ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&xi;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function ο(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&omicron;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function π(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&pi;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function ρ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&rho;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function σ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&sigma;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function τ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&tau;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function υ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&upsilon;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
function φ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&phi;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function χ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&chi;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function ψ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&psi;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function ω(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&omega;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//ギリシャ語(L)
function Α(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Alpha;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Β(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Beta;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Γ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Gamma;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Δ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Delta;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Ε(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Epsilon;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Ζ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Zeta;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
     document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Η(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Eta;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Θ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Theta;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Ι(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Iota;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Κ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Kappa;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Λ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Lambda;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Μ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Mu;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Ν(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Nu;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Ξ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Xi;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Ο(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Omicron;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Π(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Pi;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Ρ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Rho;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Σ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Sigma;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Τ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Tau;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Υ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Upsilon;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
function Φ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Phi;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Χ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Chi;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Ψ(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Psi;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}

function Ω(){
    document.getElementById('hoge').contentWindow.document.body.innerHTML = "";
    formula_stick_pos = formula.indexOf('<mo id="stick_g">|</mo>');
    formula.splice(formula_stick_pos, 0 ,'<mi>&Omega;</mi>');
    STRING_C = math_S.concat(formula, math_E);
    document.getElementById('txt').value = '';
    document.getElementById('hoge').contentWindow.document.writeln(STRING_C.join(''));
}
