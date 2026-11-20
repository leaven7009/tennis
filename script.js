function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedTime = `${year}-${month}-${day}<br>${hours}:${minutes}:${seconds}`;
    clockElement.innerHTML = formattedTime;
}

setInterval(updateClock, 1000);
updateClock(); // 初始化时钟显示

// --- 新增：生成固定日期的函数 ---
function setFixedDate() {
    const fixedDateElement = document.getElementById('fixed-date');
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    // 拼接固定格式 YYYY-MM-DD 23:00
    const fixedDateString = `${year}-${month}-${day} 23:00`;
    fixedDateElement.textContent = fixedDateString;
}

// 页面加载时执行一次即可（因为只要过了0点刷新页面就会变，不需要每秒更新）
setFixedDate();
