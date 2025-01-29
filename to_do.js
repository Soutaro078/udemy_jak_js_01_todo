const onClickAdd = () =>{
    alert();
}

//addEventListener: イベントが発生した時に、指定した関数を実行する
//第一引数: イベントの種類
//第二引数: 関数(イベントが実行された時に起こるもの)
document.getElementById("add-button").addEventListener("click", onClickAdd);
