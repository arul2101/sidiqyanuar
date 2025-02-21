"use server";

export async function apiSendMessage(request) {
  const datas = new FormData();
  datas.append("Date", new Date().toLocaleDateString());
  datas.append("name", request.name);
  datas.append("email", request.email);
  datas.append("message", request.message);

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxRTqtRhqy9FiL5Elp_Tvk-ZjsHYj86Lsw4a9pE64UZubPCIlBLfzkE1aVBLP9kAQwB1Q/exec",
    {
      method: "POST",
      body: datas,
    }
  );

  const dataResponse = await response.json();

  return dataResponse;
}
