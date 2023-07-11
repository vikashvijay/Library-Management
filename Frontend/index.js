// Function to handle search functionality
function performSearch() {
  const searchQuery = document.getElementById("search-input").value;
  // Perform search logic based on the search query
  // Display search results or take necessary action
}

// Event listener for search button click
document
  .getElementById("search-button")
  .addEventListener("click", performSearch);

// Event listener for enter key press in the search input
document
  .getElementById("search-input")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });
// Example book data array
const booksData = [
  {
    title: "You Can ",
    author: " George Matthew Adams ",
    imageUrl: "assets/Book-1.jpg",
  },
  {
    title: "Fourth Wing (The Empyrean, 1) ",
    author: " Rebecca Yarros",
    imageUrl: "assets/Book-2.jpg",
  },
  {
    title: "The Hobbit & The Lord of the Rings ",
    author: "  J. R. R. Tolkien",
    imageUrl: "assets/Book-3.jpg",
  },
  {
    title: "The Alchemist",
    author: " Paulo Coelho",
    imageUrl: "assets/Book-4.jpg",
  },
];

// Function to generate book cards
function generateBookCards() {
  const booksContainer = document.getElementById("books-container");

  booksData.forEach(function (book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bookImage = document.createElement("img");
    bookImage.classList.add("book-image");
    bookImage.src = book.imageUrl;
    bookImage.alt = book.title;

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = book.author;

    bookCard.appendChild(bookImage);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);

    booksContainer.appendChild(bookCard);
  });
}

// Call the function to generate book cards
generateBookCards();
