export async function POST(req: Request) {
  const data = await req.json();

  console.log("Review received:", data);

  // εδώ μπορείς να το αποθηκεύσεις σε DB

  return new Response(JSON.stringify({ message: "OK" }), {
    status: 200,
  });
}