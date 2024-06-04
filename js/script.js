// 初期状態では動画を非表示にする
const videoPlayer = document.getElementById('videoplayer');
videoPlayer.style.display = 'none';

// const senrekiList = ['グー', 'チョキ' ,'パー'];
// console.log(senrekiList[1]);

let senreki_you = [];

// ローカルストレージからデータを取ってきて、文字→配列に変換
const yours = localStorage.getItem('you');
// 配列をJSON.parseで文字化
if (yours) {
    senreki_you = JSON.parse(yours);
    for(let i = 0; i <= 3;){$('#senreki').append(yours)}
}
console.log(senreki_you);



$('#btn1').on('click', function(){
    // あなたの手：配列グー
    senreki_you.push("グー");
    // console.log(senreki_you);
    localStorage.setItem("you", JSON.stringify(senreki_you));
    // 「戦歴」にグー表示
    $('#senreki').append('<li>あなたの手:グー</li>');
});

$('#btn2').on('click', function(){
    // あなたの手：配列チョキ
    senreki_you.push("チョキ");
    // console.log(senreki_you);
    localStorage.setItem("you", JSON.stringify(senreki_you));
    // 「戦歴」にチョキ表示
    $('#senreki').append('<li>あなたの手:チョキ</li>');
});

$('#btn3').on('click', function(){
    // あなたの手：配列パー
    senreki_you.push("パー");
    // console.log(senreki_you);
    localStorage.setItem("you", JSON.stringify(senreki_you));
    // 「戦歴」にパー表示
    $('#senreki').append('<li>あなたの手:パー</li>');
});

let senreki_sazae = [];

// 動画再生ボタンのクリックイベントを設定
$('#btn1, #btn2, #btn3').on('click', function () {
    videoPlayer.style.display = 'block'; // 動画を表示
    const randomNumber = Math.random();
    if (randomNumber > 0.67) {
        // グーの動画を再生
        videoPlayer.src = 'videos/gu.mp4';
        videoPlayer.play();
        // サザエさんの手：配列にグー
        senreki_sazae.push("グー");
        // console.log(senreki_sazae);
        localStorage.setItem("sazae", JSON.stringify(senreki_sazae));
        // 「戦歴」にグー表示
        $('#senreki').append('<li>サザエさんの手:グー</li>');
    } else if (randomNumber > 0.33 && randomNumber <= 0.67) {
        // チョキの動画を再生
        videoPlayer.src = 'videos/choki.mp4';
        videoPlayer.play();
        // サザエさんの手：配列チョキ
        senreki_sazae.push("チョキ");
        // console.log(senreki_sazae);
        localStorage.setItem("sazae", JSON.stringify(senreki_sazae));
        // 「戦歴」にチョキ表示
        $('#senreki').append('<li>サザエさんの手:チョキ</li>');
    } else {
        // パーの動画を再生
        videoPlayer.src = 'videos/pa.mp4';
        videoPlayer.play();
        // サザエさんの手：配列パー
        senreki_sazae.push("パー");
        // console.log(senreki_sazae);
        localStorage.setItem("sazae", JSON.stringify(senreki_sazae));
        // 「戦歴」にパー表示
        $('#senreki').append('<li>サザエさんの手:パー</li>');
    }
    // じゃんけんに勝った場合にエンディング動画を再生
if (this.id === 'btn1' && randomNumber > 0.33 && randomNumber <= 0.67) {
    setTimeout(function () {
        videoPlayer.src = 'videos/sazaesan_ending.mp4'; // エンディング動画を指定
        videoPlayer.play(); // 再生開始
    }, 6000); // 6秒後に再生
} else if (this.id === 'btn2' && randomNumber <= 0.33) {
    setTimeout(function () {
        videoPlayer.src = 'videos/sazaesan_ending.mp4'; // エンディング動画を指定
        videoPlayer.play(); // 再生開始
    }, 6000); // 6秒後に再生
} else if (this.id === 'btn3' && randomNumber > 0.67) {
    setTimeout(function () {
        videoPlayer.src = 'videos/sazaesan_ending.mp4'; // エンディング動画を指定
        videoPlayer.play(); // 再生開始
    }, 6000); // 6秒後に再生
} 
});

// btn4のクリックイベントを設定
$('#btn4').on('click', function () {
    // 後出しをクリックすると
    // あなたの手：後出し
    senreki_you.push("後出し");
    // console.log(senreki_you);
    localStorage.setItem("you", JSON.stringify(senreki_you));
    // サザエの手：怒
    senreki_sazae.push("怒");
    // console.log(senreki_sazae);
    localStorage.setItem("sazae", JSON.stringify(senreki_sazae));
    
    // 「戦歴」に後出し、サザエさん怒表示
    $('#senreki').append('<li>あなたの手:後出し</li>');
    $('#senreki').append('<li>サザエさんの手:怒</li>');
    videoPlayer.style.display = 'block'; // 動画を表示
    // 後出しの動画を再生
    videoPlayer.src = 'videos/atodashi.mp4';
    videoPlayer.play();    
});


$('#btn5').on('click', function(){
    localStorage.clear();
    $('#senreki').empty();
    配列の中身を空にする
    senreki_you = [];
    senreki_sazae = [];
})
