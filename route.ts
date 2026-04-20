let feedbacks: any[] = [];

export async function GET() {
  return Response.json(feedbacks);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newFeedback = {
    id: Date.now(),
    name: body.name || "Ανώνυμος",
    rating: body.rating,
    comment: body.comment,
    date: new Date().toLocaleDateString(),
  };

  feedbacks.unshift(newFeedback);

  return Response.json(newFeedback);
}