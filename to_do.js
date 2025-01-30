const onClickAdd = () =>{
    // テキストボックスの内容を取得して，初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    alert(inputText);

    // 未完了リストに追加
    createIncompleteTodo(inputText);

    // htmlをjsで作る
    // // li生成
    // const li = document.createElement("li");
    // console.log(li);

    // // div生成
    // const div = document.createElement("div");
    // div.className = "list-row";
    // console.log(div); 

    // // p生成
    // const p = document.createElement("p");  
    // p.className = "todo-item";
    // p.innerText = inputText;

    // // button(完了)生成
    // const completeButton = document.createElement("button");
    // completeButton.innerText = "完了"; //innerTextでテキストの設定
    // completeButton.addEventListener("click", () => {
    //     // alert("完了");
    //     //　押された完了ボタンにあるliタグ配下の完了ボタンと削除ボタンの削除
    //     // moveTargetは参照型であるため，JSで取得したDOMや変数は全て参照を持っている(
    //     // そのため，画面と連動して変化するもの（参照型のもの）→　だから移動ボタンだけで処理がうまくいく
    //     const moveTarget = completeButton.closest("li");
    //     completeButton.nextElementSibling.remove();//nextElmentSiblingは次の要素を取得(つまり削除ボタンを削除ってこと)
    //     completeButton.remove();//完了ボタンを削除
    //     // 戻すボタンを生成してdivタグ配下に設定
    //     const backButton = document.createElement("button");
    //     backButton.innerText = "戻す";
    //     backButton.addEventListener("click", () => {
    //     })
    //     moveTarget.firstElementChild.append(backButton);//子要素の最初の要素（div）に追加
    //     // 完了リストに追加
    //     document.getElementById("complete-list").appendChild(moveTarget);

    // });//alert()でボタンが押された時の処理を追加

    // // console.log(completeButton);

    // // button(削除)生成
    // const deleteButton = document.createElement("button");
    // deleteButton.innerText = "削除"; //innerTextでテキストの設定
    // deleteButton.addEventListener("click", () => {
    //     // alert("削除");
    //     //　押された削除ボタンにあるliタグを未完了りすとから削除
    //     const deleteTarget = deleteButton.closest("li");//closeetは近いの意味
    //     console.log(deleteTarget);
    //     document.getElementById("incomplete-list").removeChild(deleteTarget);//子供から削除
    // });//alert()でボタンが押された時の処理を追加
    // // console.log(deleteButton);

    // // 階層構造を作っていく(liタグの子要素に各要素を設定)
    // div.appendChild(p);
    // div.appendChild(completeButton);
    // div.appendChild(deleteButton);
    // li.appendChild(div);

    // // 未完了リストに追加
    // document.getElementById("incomplete-list").appendChild(li);
    // console.log(li); //pはconsole.logで表示される

}

// 渡された引数を基に未完成のTO DOを作成する関数
const createIncompleteTodo = (todo) => {

       // li生成
       const li = document.createElement("li");
       console.log(li);
   
       // div生成
       const div = document.createElement("div");
       div.className = "list-row";
       console.log(div); 
   
       // p生成
       const p = document.createElement("p");  
       p.className = "todo-item";
       p.innerText = todo;
   
       // button(完了)生成
       const completeButton = document.createElement("button");
       completeButton.innerText = "完了"; //innerTextでテキストの設定
       completeButton.addEventListener("click", () => {
           // alert("完了");
           //　押された完了ボタンにあるliタグ配下の完了ボタンと削除ボタンの削除
           // moveTargetは参照型であるため，JSで取得したDOMや変数は全て参照を持っている(
           // そのため，画面と連動して変化するもの（参照型のもの）→　だから移動ボタンだけで処理がうまくいく
           const moveTarget = completeButton.closest("li");
           completeButton.nextElementSibling.remove();//nextElmentSiblingは次の要素を取得(つまり削除ボタンを削除ってこと)
           completeButton.remove();//完了ボタンを削除
           // 戻すボタンを生成してdivタグ配下に設定
           const backButton = document.createElement("button");
           backButton.innerText = "戻す";
           backButton.addEventListener("click", () => {
                const todoText = backButton.previousElementSibling.innerText;
                //これで未完了リストが作成される
                createIncompleteTodo(todoText);
                //押された戻すボタンの親タグ(li)を未完了リストから削除
                backButton.closest("li").remove();
           })
           moveTarget.firstElementChild.append(backButton);//子要素の最初の要素（div）に追加
           // 完了リストに追加
           document.getElementById("complete-list").appendChild(moveTarget);
   
       });//alert()でボタンが押された時の処理を追加
   
       // console.log(completeButton);
   
       // button(削除)生成
       const deleteButton = document.createElement("button");
       deleteButton.innerText = "削除"; //innerTextでテキストの設定
       deleteButton.addEventListener("click", () => {
           // alert("削除");
           //　押された削除ボタンにあるliタグを未完了リストから削除
           const deleteTarget = deleteButton.closest("li");//closeetは近いの意味
           console.log(deleteTarget);
           document.getElementById("incomplete-list").removeChild(deleteTarget);//子供から削除
       });
       //alert()でボタンが押された時の処理を追加
       // console.log(deleteButton);
       
       // 階層構造を作っていく(liタグの子要素に各要素を設定)
       div.appendChild(p);
       div.appendChild(completeButton);
       div.appendChild(deleteButton);
       li.appendChild(div);
   
       // 未完了リストに追加
       document.getElementById("incomplete-list").appendChild(li);
       console.log(li); //pはconsole.logで表示される
   
}


//addEventListener: イベントが発生した時に、指定した関数を実行する
//第一引数: イベントの種類
//第二引数: 関数(イベントが実行された時に起こるもの)
document.getElementById("add-button").addEventListener("click", onClickAdd);


