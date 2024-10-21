import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: 'uz', // Corrected from fallbackLang
    supportedLngs: ["uz", "en", "ru"], // Corrected from supportedLang
    resources: { // Corrected from resourses
        uz: {
            translation: {
                Number_of_products: "Mahsulotlar soni",
                All_products: "Barcha mahsulotlar",
                Starting_price: "Boshlang'ich narxi",
                Total_amount: "Umumiy summa",
                Number_of_users: "Foydalanuvchilar soni",
                User_name: "Foydalanuvchi nomi",
                Phone_number: "Telefon raqami",
                Action: "Harakat",
                List_of_users: "Foydalanuvchilar ro'yxati",
                Editing: "Tahrirlash",
                Enter_the_name: "Nomini kiriting",
                Yes: "Ha",
                No: "Yo'q",
                Delete: "O'chirilsinmi",
                Name: "Nomi",
                Price: "Narxi",
                Real: "Haqiqiy",
                Image: "Rasm",
                List_of_products: "Mahsulotlar ro'yxati",
                Add_product: "Mahsulot qo'shish",
                Enter_the_price: "Narxni kiriting",
                Enter_the_real_price: "Haqiqiy narxni kiriting",
                Enter_the_image_URL: "Rasm URL ini kiriting",
                Main: "Asosiy",
                Users: "Foydalanuvchilar",
                Products: "Maxsulotlar",
                Orders: "Buyurtmalar",
                
            }
        },
        en: {
            translation: {
                Number_of_products: "Number of products",
                All_products: "All products",
                Starting_price: "Starting price",
                Total_amount: "Total amount",
                Number_of_users: "Number of users",
                User_name: "User name",
                Phone_number: "Phone number",
                Action: "Action",
                List_of_users: "List of users",
                Editing: "Editing",
                Enter_the_name: "Enter the name",
                Yes: "Yes",
                No: "No",
                Delete: "Delete",
                Name: "Name",
                Price: "Price",
                Real: "Real",
                Image: "Image",
                List_of_products: "List of products",
                Add_product: "Add product",
                Enter_the_price: "Enter the price",
                Enter_the_real_price: "Enter the real price",
                Enter_the_image_URL: "Enter the image URL",
                Main: "Main",
                Users: "Users",
                Products: "Products",
                Orders: "Orders",

            }
        },
        ru: {
            translation: {
                Number_of_products: "Количество продуктов",
                All_products: "Все продукты",
                Starting_price: "Boshlang'ich narxi",
                Total_amount: "Общая сумма",
                Number_of_users: "Количество пользователей",
                User_name: "Имя пользователя",
                Phone_number: "Номер телефона",
                Action: "Действие",
                List_of_users: "Список пользователей",
                Editing: "Редактирование",
                Enter_the_name: "Введите имя",
                Yes: "Да",
                No: "Нет",
                Delete: "Удалить",
                Name: "Имена",
                Price: "Цена",
                Real: "Реальная",
                Image: "Изображение",
                List_of_products: "Список продуктов",
                Add_product: "Добавить продукт",
                Enter_the_price: "Введите цену",
                Enter_the_real_price: "Введите реальную цену",
                Enter_the_image_URL: "Введите URL изображения",
                Main: "Основной",
                Users: "Пользователи",
                Products: "Продукты",
                Orders: "Заказы",

            }
        }
    }
});

export default i18n;
