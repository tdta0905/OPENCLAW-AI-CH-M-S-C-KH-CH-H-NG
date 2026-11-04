require("dotenv").config();

const express = require("express");
const cors = require("cors");

const {
    getProducts,
    getFAQs
} = require("./productService");

const { askOpenClaw } = require("./openclaw");

const app = express();

app.use(cors());
app.use(express.json({ limit: "20kb" }));

// Kiểm tra máy chủ
app.get("/api/health", (req, res) => {
    res.json({
        status: "online",
        service: "OpenClaw AI Customer Service"
    });
});

// Nhận tin nhắn khách hàng
app.post("/api/chat", async (req, res) => {
    try {
        const message = req.body.message;

        if (
            typeof message !== "string" ||
            !message.trim() ||
            message.length > 2000
        ) {
            return res.status(400).json({
                error: "Tin nhắn không hợp lệ"
            });
        }

        const products = getProducts();
        const faqs = getFAQs();

        const context = JSON.stringify({
            products,
            faqs
        });

        const answer = await askOpenClaw(
            message.trim(),
            context
        );

        res.json({
            success: true,
            reply: answer
        });

    } catch (error) {
        console.error("Chat error:", error.message);

        res.status(500).json({
            success: false,
            error: "Không thể xử lý tin nhắn lúc này."
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(
        `OpenClaw backend đang chạy tại port ${PORT}`
    );
});
