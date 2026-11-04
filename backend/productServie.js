const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

function readJSON(fileName) {
    const filePath = path.join(ROOT, fileName);

    try {
        return JSON.parse(fs.readFileSync(filePath, "utf8"));
    } catch (error) {
        console.error(`Không đọc được ${fileName}:`, error.message);
        return [];
    }
}

function getProducts() {
    return readJSON("products.json");
}

function getFAQs() {
    return readJSON("faq.json");
}

function searchProducts(keyword) {
    const products = getProducts();

    const list = Array.isArray(products)
        ? products
        : products.products || [];

    const key = keyword.toLowerCase();

    return list.filter(product =>
        JSON.stringify(product).toLowerCase().includes(key)
    );
}

function searchFAQs(keyword) {
    const faqs = getFAQs();

    const list = Array.isArray(faqs)
        ? faqs
        : faqs.faqs || [];

    const key = keyword.toLowerCase();

    return list.filter(item =>
        JSON.stringify(item).toLowerCase().includes(key)
    );
}

module.exports = {
    getProducts,
    getFAQs,
    searchProducts,
    searchFAQs
};
