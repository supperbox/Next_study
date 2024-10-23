export async function GET(request) {
  return new Response(JSON.stringify("hello world"), {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
