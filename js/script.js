/* script.js - ソラスト保育園サイトの JavaScript */

// 監聽 DOM 內容是否已完全載入和解析
document.addEventListener('DOMContentLoaded', (event) => {
    
    console.log('DOM fully loaded and parsed. Welcome to the Solasto Hoiku website!');

    // --- 需求 1: Sticky Nav 和 Logo 淡出 ---
    const headerLogo = document.querySelector('.header-logo');
    const headerNav = document.getElementById('sticky-nav');
    
    if (headerLogo && headerNav) {
        // 設置一個觸發點，例如 headerLogo 高度的一半
        const triggerPoint = headerLogo.offsetHeight / 2;

        window.addEventListener('scroll', () => {
            if (window.scrollY > triggerPoint) {
                // 滾動超過觸發點
                headerLogo.classList.add('logo-faded');
                headerNav.classList.add('nav-scrolled');
            } else {
                // 滾動回到頂部
                headerLogo.classList.remove('logo-faded');
                headerNav.classList.remove('nav-scrolled');
            }
        });
    }
    
    // ----------------------------------------


    // 範例：可以為所有卡片添加一個點擊事件 (目前僅在控制台輸出)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // 阻止連結的默認跳轉行為，以便查看 console.log
            // e.preventDefault(); // 暫時註解掉，以便連結可以正常工作
            
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