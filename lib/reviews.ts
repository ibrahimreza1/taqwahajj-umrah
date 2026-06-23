export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export async function fetchGoogleReviews(): Promise<Review[]> {
  const key = process.env.SERPAPI_KEY;
  const dataId = process.env.TAQWA_PLACE_DATA_ID;

  if (!key || !dataId) return fallbackReviews;

  try {
    const res = await fetch(
      `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${dataId}&api_key=${key}&hl=en`,
      { next: { revalidate: 86400 } } // 24hr cache
    );

    if (!res.ok) return fallbackReviews;

    const data = await res.json();
    const raw: Array<{
      user?: { name?: string; thumbnail?: string };
      rating?: number;
      snippet?: string;
      date?: string;
    }> = data.reviews ?? [];

    if (!raw.length) return fallbackReviews;

    return raw.slice(0, 10).map((r) => ({
      author: r.user?.name ?? "Anonymous",
      rating: r.rating ?? 5,
      text: r.snippet ?? "",
      date: r.date ?? "",
      avatar: r.user?.thumbnail,
    }));
  } catch {
    return fallbackReviews;
  }
}

const fallbackReviews: Review[] = [
  {
    author: "ZAYBIN JAM",
    rating: 5,
    date: "6 months ago",
    text: "From our initial web meeting to the conclusion of our journey, we were equipped with comprehensive information and details. Everything went remarkably smoothly. Brother Ashik and his team provided us with bright yellow bags that contained their contact information. I am truly thankful for all their dedicated efforts. I highly recommend this group to anyone who is preparing for Hajj or Umrah.",
  },
  {
    author: "Coach Zishan",
    rating: 5,
    date: "5 months ago",
    text: "Alhamdulillah, my Umrah experience with the Taqwa Hajj & Umrah group was truly exceptional from start to finish. A special thank you to Brother Ashik, who was absolutely amazing throughout the entire process. My texts were never ignored, I was never left out, and I always felt supported. I genuinely feel blessed to have taken this journey with the Taqwa group.",
  },
  {
    author: "Maliki Monsurah",
    rating: 5,
    date: "4 months ago",
    text: "Alhamdulillah, my Umrah experience with Taqwah Umrah and Hajj Group was truly peaceful and unforgettable. The team was supportive, knowledgeable, and always available, which allowed me to focus without stress. May Allah reward them abundantly.",
  },
  {
    author: "Idris",
    rating: 5,
    date: "9 months ago",
    text: "My experience with Taqwa Umrah was truly exceptional and far exceeded my expectations. Brother Ashik was very clear and transparent in explaining how the trip would be planned, and Alhamdulillah, everything went exactly as promised. Overall, it was a smooth, spiritually fulfilling experience.",
  },
  {
    author: "Saad T",
    rating: 5,
    date: "6 months ago",
    text: "We thoroughly enjoyed our experience with Taqwa Hajj and Umrah. They provided us with workshops and seminars, took us to historic places, and had English-speaking representatives to guide us. The hotel choices were top notch. This is my 3rd package with Taqwa Hajj.",
  },
  {
    author: "Sohaib Aslam",
    rating: 5,
    date: "6 months ago",
    text: "The brothers Safat, Ashik, and Mahbubur went above and beyond any expectations to ensure that everyone within their group is comfortable, secure, and reassured. You feel the love as soon as you come in contact with them. If I could give more than 5 stars I would.",
  },
  {
    author: "Moussa Loum",
    rating: 5,
    date: "8 months ago",
    text: "They are extremely professional and knowledgeable about this amazing trip to Madinah and Mecca. They make our Umrah joyful, fun, and family oriented. The airline, the luxury hotels, the transportation they promised are all beyond our expectations. I highly recommend them.",
  },
  {
    author: "Muhammad Rahman",
    rating: 5,
    date: "5 months ago",
    text: "Taqwa Hajj & Umrah made my first Umrah trip an unforgettable one! Brother Ashik & his team were constantly working around the clock to ensure we had a smooth experience. The hotels chosen by the group are truly 5-Star and in prime locations. I can recommend Taqwa Hajj & Umrah with no hesitation!",
  },
];
