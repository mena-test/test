$(document).on('turbolinks:load', function () {
    const observer = lozad();
    observer.observe();
  })
  if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
  }
  document.querySelectorAll('img').forEach(img => {
  img.setAttribute('draggable', 'false');
})
// ///////////////////////////////////////////////////////////////////////////////
  
document.querySelectorAll('a[href]').forEach(function(link) {
  if (!link.href.startsWith(window.location.origin)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
  }
});


document.addEventListener("DOMContentLoaded", function () {
// ✅ منع النقر بزر الفأرة الأيمن
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// ✅ منع سحب الصور
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("dragstart", function (e) {
        e.preventDefault();
    });
});

// ✅ تعطيل اختصارات DevTools مثل F12 و Ctrl+Shift+I و Ctrl+U
document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
        (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
        alert("🚫 تم تعطيل الاختصارات لحماية الموقع!");
    }
});

// ✅ مراقبة فتح DevTools وإخفاء المحتوى أو تعطيله
function detectDevTools() {
    // إذا كان الفرق بين أبعاد نافذة المتصفح و الأبعاد الداخلية أكبر من 200 بكسل (فتح DevTools)
    if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
        document.body.innerHTML = "<h2 style='text-align:center; color:red;'>🚫 تم اكتشاف أدوات المطور!</h2>";
        setTimeout(() => { window.location.href = "about:blank"; }, 1000); // إعادة التوجيه إلى صفحة فارغة
    }
}

// ✅ فحص مستمر على فترات (كل 1 ثانية) لمراقبة أدوات المطور
setInterval(detectDevTools, 1000);

});
