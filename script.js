// قائمة المنتجات
const products = [
    {
        id: 1,
        name: " برجر الحب والغرام 220 جرام",
        price: 35,
        discount: 50,
        image: '6.jpg',
        type: "meat",
        CartAdding: "bld",
    },
    {
        id: 2,
        name: "برجر الحب والغرام 120 جرام",
        price: 25,
        discount: 40,
        type: "meat",
        image: '6.jpg',
        CartAdding: "bld",
    },
    {
        id: 5,
        name: " 10x ميني برجر الحب والغرام 70 جرام",
        price: 100,
        discount: 150,
        type: "meat",
        image: '7.jpg',
        CartAdding: "bld",
    },
    {
        id: 8,
        name: "برجر نار وشرار",
        price: 35,
        discount: 50,
        type: "checkin",
        image: '1.jpg',
        CartAdding: "bld",
    },
    {
        id: 29,
        name: "10x ميني برجر نار وشرار ",
        price: 100,
        discount: 150,
        image: '8.jpg',
        type: "checkin",
        CartAdding: "bld",
    },
    {
        id: 6,
        name: "برجر غالي ومغلغل",
        price: 25,
        discount: 50,
        type: "checkin",
        image: '5.jpg',
        CartAdding: "bld",
    },
    {
        id: 37,
        name: "10x ميني برجر غالي ومغلغل ",
        price: 100,
        discount: 150,
        type: "checkin",
        image: '9.jpg',
        CartAdding: "bld",
    },
    {
        id: 9,
        name: "برجر فاخر عل اخر",
        price: 25,
        discount: 50,
        type: "checkin",
        image: '4.jpg',
        CartAdding: "bld",
    },
    {
        id: 58,
        name: "10x ميني برجر فاخر عل اخر ",
        price: 100,
        discount: 150,
        type: "checkin",
        image: '10.jpg',
        CartAdding: "bld",
    },
    {
        id: 16,
        name: 'سلاطة دجاج',
        price: 25,
        discount: 35,
        type: "other",
        image: '3.jpg',
        CartAdding: "",
    },
    {
        id: 3,
        name: 'شيبس كبير',
        price: 15,
        discount: 20,
        type: "other",
        image: '2.jpg',
        CartAdding: "",
    },
    {
        id: 15,
        name: 'شيبس صغير',
        price: 10,
        discount: 15,
        type: "other",
        image: '2.jpg',
        CartAdding: "",
    },
    {
        id: 4,
        name: 'كوكاكولا',
        price: 5,
        discount: 7,
        type: "drinks",
        image: 'drink.jpg',
        CartAdding: "",
    },
    {
        id: 25,
        name: 'كوكاكولا دايت',
        price: 5,
        discount: 7,
        type: "drinks",
        image: 'drink1.jpg',
        CartAdding: "",
    },
    {
        id: 26,
        name: 'XL',
        price: 5,
        type: "drinks",
        discount: 7,
        image: 'drink2.jpg',
        CartAdding: "",
    },
    {
        id: 27,
        name: 'BLUE',
        price: 5,
        type: "drinks",
        discount: 7,
        image: 'drink3.jpg',
        CartAdding: "",
    },
    {
        id: 28,
        name: 'فانتا',
        price: 5,
        type: "drinks",
        discount: 7,
        image: 'drink4.jpg',
        CartAdding: "",
    },
    {
        id: 29,
        name: 'كوكاكولا كبيرة',
        price: 10,
        type: "drinks",
        discount: 15,
        image: 'drink5.jpg',
        CartAdding: "",
    },
];

// السلة
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// عند تحميل الصفحة، عرض المنتجات وتحديث السلة
window.onload = () => {
    displayProducts();
    updateCart();
};

// دالة لعرض المنتجات بشكل ديناميكي
function displayProducts() {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // تفريغ العناصر القديمة
    products.forEach(product => {
        const productCard = `
            <div class="card ${product.type}" id="product-${product.id}">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>

                <span style="text-align: left; direction: ltr; display: block;">
                    <!-- عرض 5 نجوم -->
                    <span class="star-rating" style="display: inline-block;color:#ffb067;">
                        ★★★★★
                    </span>
                    <!-- عرض النص "(99+)" -->
                    <span style="
                        font-size: 12px !important;
                        line-height: 18px !important;
                        font-weight: 400;
                        color: #8C9EC5;
                    ">
                    (99+)
                    </span>
                </span>

                <div class="product-price" style="
                    text-align: left;
                    direction: ltr;
                    margin-top: 7px;
                ">
                    <span class="jg83612gdxsx1" style="
                     margin-right: 5px;
    color: #010101 !important;
    font-size: 19px;
    line-height: 28px;
    font-weight: bold;
                    "
                    >₪${product.price}.0</span><small class="jmgfd793hjfdsa" style="
                        text-decoration: line-through;
                        font-size: 16px;
                        line-height: 24px;
                        transition: all 0.3s ease 0s;
                        font-weight: 400;
                        color: #8C9EC5;
                    "
                    >₪${product.discount}.0</small>
                    
                </div>

                ${product.CartAdding === "bld" ? `<button onclick="openCustomize(${product.id})">اختار الأضافات </button>` : `<button onclick="addToCart(${product.id})">اضف للكيس</button>`}
            </div>
        `;
        productsContainer.innerHTML += productCard;
    });
}

// إضافة المنتج إلى السلة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    if (productId === 1) {
        // عند بناء البرجر، اختر المكونات
        const selectedIngredients = Array.from(document.querySelectorAll(`#customize-${productId} input[type="checkbox"]:checked`)).map(ingredient => ingredient.value);
        
        const cartItem = { ...product, quantity: 1, ingredients: selectedIngredients };

        // إضافة البرجر إلى السلة بشكل منفرد
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();

        // إغلاق نافذة بناء البرجر
        closeCustomize();

        // إعادة تعيين checkboxes
        resetCheckboxes(productId);

        // إظهار رسالة التأكيد
        showNotification(" تم إضافة الطلب إلى الكيس");
    } else {
        // مباشرة إضافة البطاطس أو المشروب
        const cartItem = { ...product, quantity: 1, ingredients: [] };

        // إضافة المنتج إلى السلة بشكل منفرد
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        
        // إظهار رسالة التأكيد
        showNotification(" تم إضافة الطلب إلى الكيس");
    }
}

// دالة لإعادة تعيين checkboxes
function resetCheckboxes(productId) {
    const checkboxes = document.querySelectorAll(`#customize-${productId} input[type="checkbox"]`);
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}
// تحديث السلة
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    // إجمالي السعر
    let totalCost = 0;

    cart.forEach((item, index) => {
        // حساب السعر الإجمالي للمنتج (السعر * الكمية)
        const itemTotalPrice = item.price * item.quantity;
        totalCost += itemTotalPrice;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>سعر: ${item.price * item.quantity} ₪</p>
                <p>
                    كمية:     
                    <button onclick="decreaseQuantity(${index})" style="    margin-right: 15px;
    width: 22px;
    height: 22px;
    padding: 0;
    background: #171717;
    border: none;
    border-radius: 5px;
    color: white;
                    ">-</button>
                    <input type="text" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)" min="1" style="
                        width: 25px;
                        font-size: 16px;
                        text-align: center;
                        background: none;
                        border: none;
                    ">
                    <button onclick="increaseQuantity(${index})" style="
                 width: 22px;
    height: 22px;
    padding: 0;
    background: #171717;
    border: none;
    border-radius: 5px;
    color: white;
                    ">+</button>
                </p>
                ${item.ingredients.length > 0 ? `<p>مكونات: ${item.ingredients.join(', ')}</p>` : ''}
            </div>
            <button onclick="removeFromCart(${index})" style="width: 20px; border: none; background: none; margin-left: 20px; font-size: 16px; cursor: pointer;">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });

    // تحديث عدد المنتجات في السلة
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;

    // وضع المجموع الكلي داخل العنصر checkout-button
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.innerText = `₪${totalCost}`;
    }
}

// دالة لزيادة الكمية
function increaseQuantity(index) {
    cart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// دالة لتقليل الكمية
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

// دالة لتحديث الكمية بشكل يدوي من حقل الإدخال
function updateQuantity(index, value) {
    const newQuantity = parseInt(value, 10);
    if (newQuantity >= 1) {
        cart[index].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

// إزالة المنتج من السلة
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// فتح السلة
function openCart() {
    const cartModal = document.getElementById('cart');
    cartModal.style.display = 'block';
    document.body.style.overflow = "hidden"
}

// إغلاق السلة
function closeCart() {
    const cartModal = document.getElementById('cart');
    const message = document.getElementById('message');
    cartModal.style.display = 'none';
    message.style.display = 'none';
    document.body.style.overflow = "auto"
}

// فتح نافذة تخصيص البرجر
function openCustomize(productId) {
    const customizeModal = document.getElementById('customize-modal');
    customizeModal.style.display = 'block';
    document.body.style.overflow = "hidden"
}

// إغلاق نافذة تخصيص البرجر
function closeCustomize() {
    const customizeModal = document.getElementById('customize-modal');
    customizeModal.style.display = 'none';
    document.body.style.overflow = "auto"
}

// عرض رسالة تأكيد
function showNotification(message) {
    const notification = document.getElementById('global-success-message');
    notification.innerText = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

// التحكم بحقل العنوان في حال الاستلام من الفرع
function toggleAddressField() {
    const addressField = document.getElementById('address-field');
    addressField.style.display = document.getElementById('pickup-checkbox').checked ? 'none' : 'block';
}

// إظهار نموذج الدفع
function checkout() {
    const checkoutForm = document.getElementById('checkout-form');
    const evreything = document.querySelector('.container');
    const messageElement = document.getElementById('message'); // احصل على العنصر

    if (cart.length > 0) { // تحقق من وجود منتجات في السلة
        checkoutForm.style.display = 'block';
        evreything.style.display = 'none';
        messageElement.style.display = 'none'; // إخفاء الرسالة إذا كانت السلة تحتوي على منتجات
        closeCart();
    } else {
        messageElement.style.display = 'block'; // عرض الرسالة إذا لم يكن هناك منتجات في السلة
    }
}

function submitOrder() {
    // جلب بيانات الزبون من الحقول
    const customerName = document.getElementById('customer-name').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const customerAddress = document.getElementById('customer-address').value;

    // حساب القيمة الإجمالية للطلبية
    const totalOrderPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    // تعيين القيمة الإجمالية مع رمز العملة في الحقل المخفي
    document.getElementById('customer-price').value = `${totalOrderPrice} ₪`;

    const orderItems = cart.map(item => `${item.name} (x${item.quantity}) ${item.ingredients.length > 0 ? `\nمكونات: ${item.ingredients.join(', ')}` : ''}\n---------------------------------------`).join('\n');

    // بناء الرسالة التي سيتم إرسالها
    const orderMessage = `\n${orderItems}`;

    // وضع الرسالة داخل حقل name="message"
    document.getElementById('customer-message').value = orderMessage;

    // إظهار اللودير قبل بدء الإرسال
    document.getElementById('loader').style.display = 'block';

    // إخفاء الرسالة السابقة (إن وجدت)
    document.getElementById('orderMessage').style.display = 'none';

    // إرسال الطلب إلى Google Sheets
    const formData = new FormData();
    formData.append('your-name', customerName);
    formData.append('your-number', customerPhone);
    formData.append('address', customerAddress);
    formData.append('price', `${totalOrderPrice} ₪`); // إضافة السعر الكلي للطلبية مع رمز العملة
    formData.append('message', orderMessage);

    // طلب POST إلى Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbz0p-sqbOOPkJiIGEBoX2_3nilq0a0OU4wkDIvNgk4omb5J3BRelUKLsYkBsxLTHEfK/exec', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // إخفاء اللودير بعد إتمام الإرسال
        document.getElementById('loader').style.display = 'none';
        
        if (data.result === 'success') {
            // إظهار الرسالة التي تحتوي على اسم الزبون
            document.getElementById('orderMessage').innerText = `تم إرسال الطلب بنجاح، شكرًا لك يا ${customerName}!`;
            document.getElementById('orderMessage').style.display = 'block';
            
            // إعادة تعيين الحقول
            document.getElementById('orderForm').reset();
        } else {
            alert('حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.');
        }
    })
    .catch(error => {
        console.error('خطأ في الإرسال:', error);
        alert('حدث خطأ في الاتصال. حاول مرة أخرى.');
        // إخفاء اللودير في حالة الخطأ
        document.getElementById('loader').style.display = 'none';
    });
}
function submitOrder() {
    // جلب بيانات الزبون من الحقول
    const customerName = document.getElementById('customer-name').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const customerAddress = document.getElementById('customer-address').value;

    // التحقق من أن جميع الحقول المطلوبة مكتملة
    if (!customerName || !customerPhone) {
        alert('يرجى ملء جميع الحقول المطلوبة.');
        return; // إيقاف الدالة إذا كانت الحقول غير مكتملة
    }

    // حساب القيمة الإجمالية للطلبية
    const totalOrderPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    // تعيين القيمة الإجمالية مع رمز العملة في الحقل المخفي
    document.getElementById('customer-price').value = `${totalOrderPrice} ₪`;

    const orderItems = cart.map(item => `${item.name} (x${item.quantity}) ${item.ingredients.length > 0 ? `\nمكونات: ${item.ingredients.join(', ')}` : ''}\n---------------------------------------`).join('\n');

    // بناء الرسالة التي سيتم إرسالها
    const orderMessage = `\n${orderItems}`;

    // وضع الرسالة داخل حقل name="message"
    document.getElementById('customer-message').value = orderMessage;

    // إظهار اللودير قبل بدء الإرسال
    document.getElementById('loader').style.display = 'flex';

    // إخفاء الرسالة السابقة (إن وجدت)
    document.getElementById('orderMessage').style.display = 'none';

    // إرسال الطلب إلى Google Sheets
    const formData = new FormData();
    formData.append('your-name', customerName);
    formData.append('your-number', customerPhone);
    formData.append('address', customerAddress); // يمكن تركه فارغًا إذا لم يقم الزبون بملئه
    formData.append('price', `${totalOrderPrice} ₪`); // إضافة السعر الكلي للطلبية مع رمز العملة
    formData.append('message', orderMessage);

    // طلب POST إلى Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbz0p-sqbOOPkJiIGEBoX2_3nilq0a0OU4wkDIvNgk4omb5J3BRelUKLsYkBsxLTHEfK/exec', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // إخفاء اللودير بعد إتمام الإرسال
        document.getElementById('loader').style.display = 'none';
        
        if (data.result === 'success') {
            // إظهار الرسالة التي تحتوي على اسم الزبون
            document.getElementById("customerName").innerText = customerName;
            document.getElementById('orderMessage').style.display = 'block';
            document.getElementById("orderForm").style.display = "none";
            // إعادة تعيين الحقول
            document.getElementById('orderForm').reset();
        } else {
            alert('حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.');
        }
    })
    .catch(error => {
        console.error('خطأ في الإرسال:', error);
        alert('حدث خطأ في الاتصال. حاول مرة أخرى.');
        // إخفاء اللودير في حالة الخطأ
        document.getElementById('loader').style.display = 'none';
    });
}
