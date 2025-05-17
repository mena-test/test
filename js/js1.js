// دالة لمعالجة كل ديف بشكل مستقل
function handleDiv(divId, storageKey, initialValue) {
    // استرجاع الرقم المخزن من localStorage أو البدء من القيمة الافتراضية إذا لم يكن موجوداً
    let count = localStorage.getItem(storageKey) ? parseInt(localStorage.getItem(storageKey)) : initialValue;

    // عرض الرقم الحالي في العنصر span الخاص بالديف المحدد
    document.getElementById(divId).textContent = count;

    // التحقق مما إذا كانت هذه زيارة جديدة
    let lastVisit = localStorage.getItem(storageKey + '_lastVisit');
    let currentTime = new Date().getTime(); // الوقت الحالي بالمللي ثانية

    // إذا لم يكن هناك زيارة سابقة أو إذا مر وقت طويل منذ الزيارة الأخيرة، اعتبرها زيارة جديدة
    if (!lastVisit || currentTime - lastVisit > 9 *60*60* 1000) { // مرور 24 ساعة أو أكثر
        count++; // زيادة الرقم بمقدار 1
        localStorage.setItem(storageKey, count); // تخزين الرقم الجديد
        localStorage.setItem(storageKey + '_lastVisit', currentTime); // تحديث وقت الزيارة الأخيرة
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////
handleDiv('count1', 'count1', 30);  // الديف الأول يبدأ من 50
handleDiv('count2', 'count2', 40); // الديف الثاني يبدأ من 100
handleDiv('count3', 'count3', 50); // الديف الثالث يبدأ من 150
handleDiv('count4', 'count4', 60); // الديف الثالث يبدأ من 150
handleDiv('count5', 'count5', 70); // الديف الثالث يبدأ من 150
handleDiv('count6', 'count6', 80); // الديف الثالث يبدأ من 150
handleDiv('count7', 'count7', 90); // الديف الثالث يبدأ من 150
handleDiv('count8', 'count8', 20); // الديف الثالث يبدأ من 150
handleDiv('count9', 'count9', 20); // الديف الثالث يبدأ من 150