async function askOpenClaw(message, context = "") {
    const apiUrl = process.env.OPENCLAW_CHAT_URL;
    const token = process.env.OPENCLAW_API_TOKEN;
    const model = process.env.OPENCLAW_MODEL;

    if (!apiUrl) {
        throw new Error("Chưa cấu hình OPENCLAW_CHAT_URL");
    }

    const headers = {
        "Content-Type": "application/json"
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
            model,
            messages: [
                {
                    role: "system",
                    content:
                        "Bạn là trợ lý chăm sóc khách hàng. " +
                        "Hãy tư vấn lịch sự, chính xác và không tự tạo thông tin sản phẩm. " +
                        "Chỉ sử dụng dữ liệu được cung cấp."
                },
                {
                    role: "user",
                    content:
                        `Dữ liệu tham khảo:\n${context}\n\n` +
                        `Câu hỏi khách hàng: ${message}`
                }
            ]
        })
    });

    if (!response.ok) {
        throw new Error(`AI API lỗi: HTTP ${response.status}`);
    }

    const data = await response.json();

    const answer = data.choices?.[0]?.message?.content;

    if (!answer) {
        throw new Error("AI API không trả về nội dung hợp lệ");
    }

    return answer;
}

module.exports = { askOpenClaw };
