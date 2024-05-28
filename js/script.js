// 初期状態では動画を非表示にする
const videoPlayer = document.getElementById('videoplayer');
videoPlayer.style.display = 'none';



// 動画再生ボタンのクリックイベントを設定
$('#btn1, #btn2, #btn3').on('click', function () {
    videoPlayer.style.display = 'block'; // 動画を表示
    const randomNumber = Math.random();
    if (randomNumber > 0.67) {
        // グーの動画を再生
        videoPlayer.src = 'videos/gu.mp4';
        videoPlayer.play();
    } else if (randomNumber > 0.33 && randomNumber <= 0.67) {
        // チョキの動画を再生
        videoPlayer.src = 'videos/choki.mp4';
        videoPlayer.play();
    } else {
        // パーの動画を再生
        videoPlayer.src = 'videos/pa.mp4';
        videoPlayer.play();
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
    videoPlayer.style.display = 'block'; // 動画を表示
    // 後出しの動画を再生
    videoPlayer.src = 'videos/atodashi.mp4';
    videoPlayer.play();

    
});