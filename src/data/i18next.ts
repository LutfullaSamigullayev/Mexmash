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

            }
        },
        en: {
            translation: {
                Number_of_products: "Number of products",
                All_products: "All products",
                Starting_price: "Starting price",
                
            }
        },
        ru: {
            translation: {
                Number_of_products: "Количество продуктов",
                All_products: "Все продукты",
                Starting_price: "Boshlang'ich narxi",

            }
        }
    }
});

export default i18n;
