export async function GET(request) {
  console.log(request.header, "1432");
  return new Response(JSON.stringify("登录成功"), {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
