# 🤖 OpenClaw AI Customer Service

![GitHub repo](https://img.shields.io/badge/GitHub-tdta0905-blue?logo=github)
![Status](https://img.shields.io/badge/Status-Prototype-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌐 Live Demo

- **GitHub Repository:** [OPENCLAW-AI-CH-M-S-C-KH-CH-H-NG](https://github.com/tdta0905/OPENCLAW-AI-CH-M-S-C-KH-CH-H-NG)
- **README:** [Xem README trên GitHub](https://github.com/tdta0905/OPENCLAW-AI-CH-M-S-C-KH-CH-H-NG/blob/main/README.md)
- **Demo website:** [Mở Live Demo](https://tdta0905.github.io/OPENCLAW-AI-CH-M-S-C-KH-CH-H-NG/)

> Lưu ý: Link GitHub Pages chỉ hoạt động sau khi bật và triển khai GitHub Pages cho repository.

## 📌 Giới thiệu

Dự án thử nghiệm giao diện tư vấn khách hàng bằng AI, hướng đến việc hỗ trợ trả lời câu hỏi thường gặp và tạo nền tảng cho việc tích hợp OpenClaw AI Agent.

## ✨ Tính năng bản mẫu

- Giao diện chat tư vấn khách hàng.
- Trả lời một số câu hỏi theo các quy tắc có sẵn ở phía giao diện.
- Có thể mở rộng để tư vấn sản phẩm và kiểm tra tồn kho.
- Thiết kế làm nền tảng cho việc tích hợp OpenClaw trong các phiên bản tiếp theo.

## 🏗️ Kiến trúc dự kiến

```text
Khách hàng
    |
    v
Giao diện chat (HTML/CSS/JavaScript)
    |
    v
Backend / API (dự kiến)
    |
    v
OpenClaw AI Agent (dự kiến)
    |
    +---- Tư vấn sản phẩm
    |
    +---- Kiểm tra tồn kho
    |
    +---- Hỗ trợ chăm sóc khách hàng
```

## 📁 Cấu trúc dự án tham khảo

```text
OPENCLAW-AI-CH-M-S-C-KH-CH-H-NG/
├── index.html
├── README.md
├── style.css
└── script.js
```

> Đây là cấu trúc tham khảo. Hãy điều chỉnh cho khớp với các tệp thực tế trong repository.

## 🚀 Chạy dự án trên máy tính

1. Tải hoặc clone repository:

   ```bash
   git clone https://github.com/tdta0905/OPENCLAW-AI-CH-M-S-C-KH-CH-H-NG.git
   ```

2. Mở thư mục dự án.
3. Nếu có tệp `index.html`, mở tệp đó bằng trình duyệt hoặc dùng tiện ích Live Server trong VS Code.

## 🌍 Triển khai GitHub Pages

1. Mở repository trên GitHub.
2. Chọn **Settings → Pages**.
3. Trong **Build and deployment**, chọn **Deploy from a branch**.
4. Chọn nhánh `main` và thư mục `/(root)`, sau đó nhấn **Save**.
5. Đợi GitHub triển khai. Đảm bảo `index.html` nằm ở vị trí được chọn.

## 🔌 Hướng phát triển tiếp theo

- Tích hợp OpenClaw Gateway qua backend/API phù hợp.
- Kết nối nguồn dữ liệu sản phẩm và tồn kho.
- Bổ sung cơ chế xác thực và phân quyền.
- Ghi nhận lịch sử hội thoại và xử lý lỗi.
- Chỉ cung cấp dữ liệu tồn kho sau khi backend xác minh từ nguồn dữ liệu đáng tin cậy.

## 🔐 Bảo mật

- Không đưa API key, token hoặc mật khẩu vào mã frontend hay repository công khai.
- Lưu thông tin bí mật trong biến môi trường phía backend.
- Kiểm tra và giới hạn quyền truy cập trước khi kết nối hệ thống thật.

## 📌 Trạng thái dự án

Đây là bản mẫu/đồ án đang phát triển. Chưa nên xem đây là hệ thống chăm sóc khách hàng đã kết nối OpenClaw hoặc dữ liệu tồn kho thực tế, trừ khi các tích hợp đó đã được triển khai và kiểm thử.

## 👨‍💻 Tác giả

**tdta0905** — Dự án học tập về HTML, JavaScript và ứng dụng OpenClaw AI Agent trong tự động hóa chăm sóc khách hàng.

GitHub: [@tdta0905](https://github.com/tdta0905)
