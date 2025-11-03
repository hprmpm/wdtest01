/* script.js - ソラスト保育園サイトの JavaScript */

// 監聽 DOM 內容是否已完全載入和解析
document.addEventListener('DOMContentLoaded', (event) => {
    
    console.log('DOM fully loaded and parsed. Welcome to the Solasto Hoiku website!');
    
    // 將來的に、ここに対話的な機能（例：スライダー、モーダル、ハンバーガーメニュー）
    // を追加することができます。
    
    // 範例：可以為所有卡片添加一個點擊事件 (目前僅在控制台輸出)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // 阻止連結的默認跳轉行為，以便查看 console.log
            e.preventDefault(); 
            
            // 獲取卡片標題
            const title = card.querySelector('.card-title') || card.querySelector('h4');
            if (title) {
                console.log(`你點擊了卡片: ${title.innerText}`);
            } else {
                console.log('你點擊了一張卡片。');
            }
        });
    });

});