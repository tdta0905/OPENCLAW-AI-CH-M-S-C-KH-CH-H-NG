# 🤖 OpenClaw AI Customer Service

<p align="center">
  <img src="https://img.shields.io/badge/OpenClaw-AI%20Agent-blueviolet?style=for-the-badge" alt="OpenClaw AI Agent">
  <img src="https://img.shields.io/badge/HTML-CSS-JavaScript-orange?style=for-the-badge" alt="Web technologies">
  <img src="https://img.shields.io/badge/Status-Prototype-blue?style=for-the-badge" alt="Prototype">
</p>

<p align="center">
  <b>Website demo chăm sóc khách hàng tự động, định hướng tích hợp OpenClaw AI Agent.</b>
</p>

<p align="center">
  <!-- Sau khi bật GitHub Pages, thay URL bên dưới bằng địa chỉ website thật -->
  <a href="https://TEN-TAI-KHOAN.github.io/TEN-REPOSITORY/">
    <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-Trải_nghiệm_ngay-2ea44f?style=for-the-badge" alt="Live Demo">
  </a>
</p>

## 🌐 Live Demo

**[👉 Bấm vào đây để trải nghiệm website chăm sóc khách hàng](https://TEN-TAI-KHOAN.github.io/TEN-REPOSITORY/)**

> Trước khi dùng link này, hãy thay `TEN-TAI-KHOAN` và `TEN-REPOSITORY` bằng thông tin GitHub thật, sau đó bật GitHub Pages. README không thể dùng đường dẫn `file:///D:/...` để mở file trên máy tính người khác.

## 📌 Giới thiệu

ClawCare là prototype website HTML/CSS/JavaScript minh họa giao diện chăm sóc khách hàng tự động. Người dùng có thể gửi câu hỏi về sản phẩm, giao hàng, đổi trả và yêu cầu liên hệ nhân viên. Phiên bản hiện tại trả lời bằng bộ quy tắc mẫu ở phía trình duyệt.

Mục tiêu học tập là phát triển từ giao diện website thành một quy trình tự động hóa có thể kết nối backend, OpenClaw Gateway và Skills.

## ✨ Tính năng demo

- 💬 Giao diện chat responsive.
- 🧭 Chủ đề gợi ý: sản phẩm, giao hàng, đổi trả và nhân viên.
- 💡 Trả lời mẫu theo từ khóa.
- 🔄 Làm mới hội thoại.
- 📱 Giao diện tương thích màn hình nhỏ.
- 🛡️ Skill mẫu nhấn mạnh việc không bịa chính sách và bảo vệ thông tin khách hàng.

## 🏗️ Kiến trúc định hướng

```text
Khách hàng
    ↓
Website HTML / CSS / JavaScript
    ↓
Backend API (cần triển khai)
    ↓
OpenClaw Gateway (cần cấu hình)
    ↓
AI Agent + Customer Support Skill
    ↓
Phản hồi khách hàng
```

## 📁 Cấu trúc dự án

```text
openclaw-ai-customer-service/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── data/
│   └── faq.json
├── openclaw/
│   └── skills/
│       └── customer-support/
│           └── SKILL.md
└── README.md
```

## 🚀 Chạy demo trên máy tính

1. Tải hoặc clone repository.
2. Mở `index.html` bằng Chrome, Edge hoặc Firefox.
3. Thử các chủ đề trong khung chat.

Không cần cài đặt package cho demo giao diện này. Google Fonts cần kết nối Internet để tải đúng phông chữ; website vẫn có phông dự phòng nếu không tải được.

## 🌍 Xuất bản với GitHub Pages

1. Đưa toàn bộ file lên repository GitHub.
2. Mở **Settings → Pages**.
3. Trong **Build and deployment**, chọn **Deploy from a branch**.
4. Chọn nhánh `main` và thư mục `/ (root)`, sau đó nhấn **Save**.
5. Đợi GitHub tạo URL Pages, mở thử URL đó.
6. Thay hai URL mẫu `https://TEN-TAI-KHOAN.github.io/TEN-REPOSITORY/` ở đầu README bằng URL thực tế.

Tài liệu chính thức: [GitHub Pages](https://docs.github.com/en/pages).

## 🔌 Tích hợp OpenClaw trong giai đoạn tiếp theo

- Xây dựng backend API nhận tin nhắn.
- Cấu hình backend giao tiếp với OpenClaw Gateway theo tài liệu phiên bản đang dùng.
- Cài đặt và kiểm tra `openclaw/skills/customer-support/SKILL.md` theo quy trình Skills của OpenClaw.
- Thêm nguồn FAQ/chính sách đã được xác minh.
- Bổ sung xác thực, phân quyền, ghi log tối thiểu và chuyển tiếp cho nhân viên.

Tham khảo: [OpenClaw trên GitHub](https://github.com/tdta0905/openclaw).

## 🔐 Bảo mật

- Không đưa API key, token hoặc thông tin đăng nhập vào HTML/JavaScript công khai.
- Không để trình duyệt gọi trực tiếp endpoint nội bộ có quyền cao.
- Chỉ cho Agent sử dụng công cụ đúng phạm vi quyền.
- Không tự động thực hiện giao dịch nhạy cảm khi chưa có xác nhận và cơ chế kiểm soát.

## ⚠️ Trạng thái hiện tại

Đây là **prototype giao diện**. Chatbot dùng câu trả lời mẫu chạy trong trình duyệt, chưa kết nối OpenClaw Gateway, chưa tra cứu đơn hàng thật và chưa tích hợp Telegram. Không dùng demo này để xử lý dữ liệu khách hàng thật.

## 👨‍💻 Tác giả
tdta0905
Thành Đạt — dự án học tập về HTML, JavaScript và ứng dụng AI Agent trong tự động hóa chăm sóc khách hàng.

