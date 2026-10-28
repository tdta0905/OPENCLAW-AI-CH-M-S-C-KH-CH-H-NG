
# 📱 OpenClaw Phone Store AI

> Trợ lý AI chăm sóc khách hàng cho cửa hàng điện thoại — website demo, API sản phẩm/đơn hàng và Skill dành cho OpenClaw.

<p align="left">
  <a href="https://github.com/openclaw/openclaw"><img alt="OpenClaw" src="https://img.shields.io/badge/Powered%20by-OpenClaw-176B4D?style=for-the-badge"></a>
  <img alt="Node" src="https://img.shields.io/badge/Node.js-20%2B-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img alt="Status" src="https://img.shields.io/badge/Status-Prototype-orange?style=for-the-badge">
</p>

## 🔗 Liên kết

- [OpenClaw gốc](https://github.com/openclaw/openclaw)
- [Tài liệu OpenClaw](https://docs.openclaw.ai/)
- [Hướng dẫn tạo Skills](https://docs.openclaw.ai/tools/creating-skills)
- **Website demo chạy tại:** `http://localhost:3000` sau khi khởi động theo hướng dẫn bên dưới.

> Đây là dự án mở rộng/ứng dụng mẫu dựa trên nền tảng OpenClaw, không phải mã nguồn chính thức của OpenClaw. Website và API trong repo này là prototype; tích hợp mô hình AI trực tiếp vào website, thanh toán, vận chuyển và dữ liệu cửa hàng thật cần được cấu hình thêm.

## ✨ Chức năng

- **Website responsive:** danh mục điện thoại, tìm kiếm, lọc theo hãng, giá và thông tin sản phẩm.
- **Chat tư vấn demo:** gợi ý theo ngân sách và tra cứu trong danh mục mẫu.
- **API sản phẩm:** danh sách, tìm kiếm, chi tiết sản phẩm.
- **API đơn hàng demo:** tiếp nhận đơn và cập nhật tồn kho mẫu.
- **API quản trị cơ bản:** cập nhật giá/tồn kho và trạng thái đơn với `ADMIN_TOKEN`.
- **OpenClaw Skill:** hướng dẫn Agent tư vấn sản phẩm, không tự bịa giá hoặc chính sách.
- **Định hướng đa kênh:** có thể cấu hình Telegram qua channel tích hợp sẵn của OpenClaw.

## 🧱 Kiến trúc

```text
Website / Telegram
       │
       ├── Website demo ──> Express API ──> Catalog JSON / Demo orders
       │
       └── Telegram ──────> OpenClaw Gateway ──> Agent + phone-store-support Skill
                                                    │
                                                    └── Approved catalog / tools
```

Website chat trong bản prototype hiện dùng quy tắc đơn giản, chưa gọi trực tiếp LLM hoặc OpenClaw Gateway. Điều này giúp demo chạy ngay cả khi chưa cấu hình API key. Skill cung cấp hành vi cho OpenClaw khi được cài vào workspace; để Agent truy cập giá/tồn kho thật, cần kết nối nguồn dữ liệu hoặc công cụ được cấp quyền.

## 🗂️ Cấu trúc thư mục

```text
openclaw-phone-store-ai/
├── data/
│   └── products.json
├── openclaw/
│   └── skills/
│       └── phone-store-support/
│           └── SKILL.md
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## 🚀 Chạy website demo

Yêu cầu: Node.js 20 trở lên. Bản demo dùng Node.js built-in modules, không cần cài thư viện ngoài.

**Windows:** nhấp đúp `start-demo.bat`.

**macOS / Linux / Terminal:**

```bash
node server.js
```

Mở `http://localhost:3000`. Nếu bạn đã clone repo của mình, vào thư mục dự án rồi chạy lệnh trên. Nếu muốn dùng npm, `npm start` cũng được.

Kiểm tra API:

```bash
curl http://localhost:3000/api/health
curl http://localhost:3000/api/products
```

## 🧪 API chính

| Method | Endpoint | Mô tả |
|---|---|---|
| `GET` | `/api/health` | Kiểm tra máy chủ |
| `GET` | `/api/products` | Danh mục; hỗ trợ `q`, `brand`, `maxPrice` |
| `GET` | `/api/products/:id` | Chi tiết sản phẩm |
| `POST` | `/api/chat` | Trả lời tư vấn demo |
| `POST` | `/api/orders` | Tạo đơn hàng demo |
| `GET` | `/api/admin/orders` | Danh sách đơn, cần admin token |
| `PATCH` | `/api/admin/orders/:id` | Đổi trạng thái đơn, cần admin token |
| `PUT` | `/api/admin/products/:id` | Cập nhật tên, giá và tồn kho, cần admin token |

Ví dụ tạo đơn demo:

```json
{
  "customerName": "Nguyen Van A",
  "phone": "0900000000",
  "address": "Dia chi nhan hang",
  "items": [{ "id": "IP13-128", "quantity": 1 }],
  "note": "Gọi trước khi giao"
}
```

**Không dùng dữ liệu khách hàng thật trong bản demo.** API đơn hàng chưa có xác thực khách hàng, chống spam, giao dịch thanh toán hoặc bảo vệ dữ liệu theo yêu cầu production.

## 🦞 Cài Skill vào OpenClaw

1. Cài đặt và cấu hình OpenClaw theo [tài liệu chính thức](https://docs.openclaw.ai/).
2. Sao chép thư mục `openclaw/skills/phone-store-support` trong dự án này vào thư mục workspace skills của OpenClaw, thường là:

   ```text
   ~/.openclaw/workspace/skills/phone-store-support/
   ```

3. Kiểm tra Skill:

   ```bash
   openclaw skills list
   ```

4. Bắt đầu phiên chat mới hoặc khởi động lại Gateway nếu cần, rồi thử hỏi Agent về cách tư vấn khách hàng.

### Kết nối Telegram

Cấu hình Telegram theo [hướng dẫn channel chính thức](https://docs.openclaw.ai/). Không commit bot token vào GitHub. Với khách hàng bên ngoài, hãy bật cơ chế pairing/allowlist hoặc kiểm soát truy cập tương đương, rồi thử nghiệm bằng tài khoản được cho phép trước khi mở rộng.

Skill chỉ hướng dẫn cách hành xử. Muốn Agent tra cứu sản phẩm và xử lý đơn thật, hãy cung cấp một công cụ/API được xác thực, giới hạn quyền và kiểm tra dữ liệu đầu vào/đầu ra.

## 🛡️ Bảo mật và giới hạn

- Dữ liệu sản phẩm hiện là dữ liệu minh họa, không phải giá thị trường hoặc tồn kho thực.
- Đặt `ADMIN_TOKEN` bằng biến môi trường mạnh trước khi dùng API quản trị; không để token trong frontend hoặc repo công khai.
- Không mở cổng server/Gateway ra Internet nếu chưa cấu hình xác thực, phân quyền, giới hạn tốc độ và HTTPS phù hợp.
- Tin nhắn khách hàng là dữ liệu không đáng tin; không cho AI tự ý hoàn tiền, hủy đơn hoặc thay đổi thông tin nhạy cảm.
- Bản mẫu lưu đơn trong file JSON, không phù hợp nhiều người dùng đồng thời hay triển khai quy mô lớn.
- Không thu thập thông tin thanh toán nhạy cảm hoặc dữ liệu cá nhân không cần thiết.

## 🗺️ Roadmap

- [x] Giao diện website responsive
- [x] Danh mục và lọc sản phẩm
- [x] Chat tư vấn demo
- [x] API đơn hàng mẫu và API quản trị cơ bản
- [x] OpenClaw Skill cho chăm sóc khách hàng
- [ ] Kết nối website chat với OpenClaw Gateway bằng cơ chế được hỗ trợ
- [ ] Cơ sở dữ liệu PostgreSQL và phân quyền nhân viên
- [ ] Dashboard quản trị hoàn chỉnh
- [ ] Kết nối nguồn giá/tồn kho thật
- [ ] Tích hợp quy trình giao hàng, thanh toán và bảo hành có xác nhận
- [ ] Kiểm thử bảo mật, tải và quyền riêng tư trước triển khai

## 📄 Giấy phép

Dự án mẫu này được cung cấp để học tập và phát triển. OpenClaw là dự án riêng; xem giấy phép và thông báo bản quyền của [kho OpenClaw chính thức](https://github.com/openclaw/openclaw) trước khi phân phối các thành phần của nó.
