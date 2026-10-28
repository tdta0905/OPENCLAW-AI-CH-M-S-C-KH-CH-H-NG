const messages = document.getElementById("messages");
const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const reset = document.getElementById("reset-chat");

const answers = [
  { keys: ["đổi trả", "hoàn trả", "trả hàng", "bảo hành"], answer: "Bạn có thể kiểm tra điều kiện đổi trả và bảo hành trong chính sách của cửa hàng. Đây là nội dung minh họa của bản demo; vui lòng xác nhận điều khoản thực tế với đơn vị bán hàng trước khi áp dụng." },
  { keys: ["giao hàng", "vận chuyển", "ship", "nhận hàng"], answer: "Thông thường, thời gian giao hàng phụ thuộc khu vực và đơn vị vận chuyển. Bản demo chưa kết nối dữ liệu đơn hàng thực tế nên chưa thể xác nhận ngày giao dự kiến cho bạn." },
  { keys: ["sản phẩm", "điện thoại", "giá", "tư vấn", "mua hàng"], answer: "Mình có thể giúp bạn xác định nhu cầu, ví dụ ngân sách, thương hiệu và mục đích sử dụng. Hiện tại đây là bản demo giao diện nên chưa có catalog sản phẩm trực tiếp." },
  { keys: ["nhân viên", "người thật", "liên hệ", "tư vấn viên"], answer: "Mình đã ghi nhận bạn muốn gặp nhân viên hỗ trợ. Trong bản demo chưa có hệ thống chuyển tiếp hội thoại thật; khi triển khai, có thể bổ sung kênh liên hệ hoặc chuyển ticket cho đội chăm sóc khách hàng." },
  { keys: ["xin chào", "chào", "hello", "hi "], answer: "Xin chào bạn! 👋 Mình là trợ lý ClawCare. Bạn muốn hỏi về sản phẩm, giao hàng, đổi trả hay cách liên hệ nhân viên?" },
  { keys: ["giúp gì", "hỗ trợ", "chức năng", "làm được gì"], answer: "Mình có thể minh họa các luồng hỏi đáp về sản phẩm, giao hàng, đổi trả và liên hệ nhân viên. Để dùng AI thật, website cần được kết nối với backend và OpenClaw Gateway." }
];

function getAnswer(text) {
  const normalized = text.toLocaleLowerCase("vi");
  const found = answers.find(item => item.keys.some(key => normalized.includes(key)));
  return found ? found.answer : "Cảm ơn bạn đã gửi câu hỏi. Mình chưa có câu trả lời phù hợp trong bộ dữ liệu mẫu. Khi tích hợp OpenClaw, yêu cầu có thể được chuyển đến AI Agent hoặc nhân viên phụ trách. Bạn có thể thử hỏi về sản phẩm, giao hàng, đổi trả hoặc liên hệ nhân viên.";
}

function addMessage(text, who) {
  const row = document.createElement("div");
  row.className = `message ${who}`;
  const avatar = document.createElement("div");
  avatar.className = "message-avatar";
  avatar.textContent = who === "assistant" ? "✦" : "B";
  const body = document.createElement("div");
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  const time = document.createElement("time");
  time.textContent = new Date().toLocaleTimeString("vi-VN", {hour:"2-digit", minute:"2-digit"});
  body.append(bubble, time);
  row.append(avatar, body);
  messages.append(row);
  messages.scrollTop = messages.scrollHeight;
}

function send(text) {
  const clean = text.trim();
  if (!clean) return;
  addMessage(clean, "user");
  input.value = "";
  window.setTimeout(() => addMessage(getAnswer(clean), "assistant"), 350);
}
form.addEventListener("submit", event => {
  event.preventDefault();
  send(input.value);
});
document.querySelectorAll("[data-prompt]").forEach(button => {
  button.addEventListener("click", () => send(button.dataset.prompt));
});
reset.addEventListener("click", () => {
  messages.replaceChildren();
  addMessage("Xin chào! 👋 Mình là trợ lý ClawCare. Bạn cần hỗ trợ về sản phẩm, giao hàng hay chính sách đổi trả?", "assistant");
});
