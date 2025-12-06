document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            // تبديل حالة 'active' للزر المضغوط
            this.classList.toggle("active");

            // الحصول على لوحة المحتوى
            const content = this.nextElementSibling;

            // التحقق مما إذا كانت اللوحة مفتوحة أم مغلقة
            if (content.style.maxHeight) {
                // إذا كانت مفتوحة، أغلقها
                content.style.maxHeight = null;
                content.style.padding = "0 1rem";
            } else {
                // إذا كانت مغلقة، افتحها
                // اضبط max-height على ارتفاع المحتوى الفعلي لجعل الانتقال سلسًا
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "1rem";
            }
        });
    });
});
