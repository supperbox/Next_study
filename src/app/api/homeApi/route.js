export async function GET(request) {
  const res = await fetch("http://localhost:3000/api/homeApi");
  const data = await res.json();
  console.log(data);
  return new Response(JSON.stringify("hello world"), {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
