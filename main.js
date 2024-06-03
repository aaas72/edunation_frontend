// تعريف العناصر
const pageLinks = {
    'home-page': 'index.html',
    'coures-page': 'coureslist.html',
    'articles-page': 'articles.html',
    'events-page': 'events.html',
    'contact-page': 'contact.html',
    'login-button': 'loginpage.html',
    'signup-button': 'signuppage.html'
};

const downBoxes = [
    document.querySelector('.down-box1'),
    document.querySelector('.down-box2'),
    document.querySelector('.down-box3')
];

const accountIcon = document.getElementById('icon');
const accountMenu = document.querySelector('.account');
const closeButton = document.getElementById('x');

// إضافة استماع للنقر على الروابط
Object.entries(pageLinks).forEach(([linkId, linkUrl]) => {
    const link = document.getElementById(linkId);
    if (link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navigateToPage(linkUrl);
        });
    }
});

// دالة لتحويل المستخدم إلى الصفحة المحددة
function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

// إضافة استماع للنقر على أيقونة الحساب لعرض/إخفاء القائمة
accountIcon.addEventListener('click', function(event) {
    toggleElementDisplay(accountMenu);
});

// إضافة استماع للنقر على زر الإغلاق لإخفاء القائمة
closeButton.addEventListener('click', function(event) {
    hideElement(accountMenu);
});

// إضافة استماع للنقر على العناصر التي تفتح/تغلق صناديق القائمة
[...document.querySelectorAll('[id^="add-box"]')].forEach((button, index) => {
    button.addEventListener('click', function(event) {
        toggleElementDisplay(downBoxes[index]);
    });
});

// دالة لتبديل عرض العنصر بين الظهور والإخفاء
function toggleElementDisplay(element) {
    element.style.display = (element.style.display === 'block') ? 'none' : 'block';
}

// دالة لإخفاء العنصر
function hideElement(element) {
    element.style.display = 'none';
}


// فتح قاعدة البيانات
var request = indexedDB.open("my_database", 1);

request.onerror = function(event) {
    console.log("Error opening database");
};

request.onsuccess = function(event) {
    var db = event.target.result;
    // القيام بعمليات القراءة/الكتابة هنا
};

// إنشاء قاعدة بيانات جديدة أو ترقيتها
request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("courses", { keyPath: "id" });
    // إضافة مؤشرات أو تعريفات أخرى لقاعدة البيانات
};

// إضافة بيانات جديدة
var transaction = db.transaction(["courses"], "readwrite");
var objectStore = transaction.objectStore("courses");
objectStore.add({ id: 1, name: "Course 1", description: "Description 1" });

// استرداد البيانات
var transaction = db.transaction(["courses"]);
var objectStore = transaction.objectStore("courses");
var request = objectStore.get(1);
request.onerror = function(event) {
    console.log("Error getting data");
};
request.onsuccess = function(event) {
    var data = request.result;
    console.log(data);
};
