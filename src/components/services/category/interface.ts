   interface User {
  id: number;
  name: string;
  image: string;
  type: "service" | "banner";
  rating?: number;
  worksCompleted?: number;
  location?: string;
  kmAway?: number;
}