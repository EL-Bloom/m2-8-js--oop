// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book { 
    constructor (title, genre, author, isRead) {
    this.title = title;  
    this.genre = genre; 
    this.author = author; 
    this.isRead = isRead || false;

    }
}
 
const book1 = new Book ('BookA', 'Fiction', 'Shakespeare', true); 
const book2 = new Book ('BookB', 'Biography', 'Barack Obama', false); 
const book3 = new Book ('BookC', 'Poetry', 'Edgard Allan Pow', true); 
const book4 = new Book ('BookD', 'Fiction', 'J.K. Rowling', true); 
const book5 = new Book ('BookE', 'Bible', 'Jesus');
console.log(book1, book2, book3, book4, book5);
