function escapeHtml(unsafe) {
  if (!unsafe && unsafe !== 0) return "";
  return String(unsafe)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function contactTemplate({
  first_name,
  last_name,
  email,
  subject,
  message,
}) {
  const now = new Date().toLocaleString("en-US", {
    timeZone: "Africa/Nairobi",
  });
  const msg = escapeHtml(message).replaceAll("\n", "<br/>");

  return `
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body style="margin:0;padding:0;background:#f5f7fb;font-family:Helvetica,Arial,sans-serif;">
    <div style="max-width:600px;margin:24px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,0.06);">
      
      <!-- Header -->
      <div style="background:linear-gradient(90deg,#CC320A 0%,#df2f14 100%);padding:20px 24px;">
        <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">
          New Contact Form Submission
        </h1>
      </div>

      <!-- Body -->
      <div style="padding:24px;color:#333333;">
        <p style="margin-top:0;margin-bottom:16px;font-size:14px;color:#666;">
          You have received a new message from your website.
        </p>

        <div style="margin-bottom:12px;font-size:14px;color:#444;">
          <strong>From:</strong> ${escapeHtml(first_name)} ${escapeHtml(
    last_name || ""
  )}
        </div>

        <div style="margin-bottom:12px;font-size:14px;color:#444;">
          <strong>Email:</strong> <a href="mailto:${escapeHtml(
            email
          )}" style="color:#CC320A;text-decoration:none;">${escapeHtml(
    email
  )}</a>
        </div>

        <div style="margin-bottom:12px;font-size:14px;color:#444;">
          <strong>Subject:</strong> ${escapeHtml(subject)}
        </div>

        <div style="margin-bottom:12px;font-size:14px;color:#444;">
          <strong>Received:</strong> ${escapeHtml(now)}
        </div>

        <div style="margin-top:18px;padding:16px;border-radius:8px;background:#fbfbfb;border:1px solid #efefef;font-size:14px;color:#333;line-height:1.5;">
          ${msg}
        </div>
      </div>

      <!-- Footer -->
      <div style="background:#fafafa;padding:16px 24px;text-align:center;">
        <p style="margin:0;font-size:12px;color:#888;">
          <span style="color:#CC320A;font-weight:700;">Horn Africa Institute</span> • Website Contact Form
        </p>
        <p style="margin:6px 0 0;font-size:11px;color:#bbb;">
          This email was generated automatically — do not reply directly.
        </p>
      </div>

    </div>
  </body>
  </html>
  `;
}
