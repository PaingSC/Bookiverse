export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Silent Sea",
    author: "James Rollins",
    cover: "./src/assets/books/book_dummy.webp",
    description: "A gripping mystery across the oceans.",
  },
  {
    id: "2",
    title: "Digital Fortress",
    author: "Dan Brown",
    cover: `./src/assets/books/book_dummy.webp`,
    description: "A thriller about code and secrets.",
  },
  {
    id: "3",
    title: "Becoming",
    author: "Michelle Obama",
    cover: "./src/assets/books/book_dummy.webp",
    description: "A deeply personal memoir by the former First Lady.",
  },
];
