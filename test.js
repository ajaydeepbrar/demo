class Books {
    name;
    author;
    copies;

    constructor  (name, author, copies) {
        this.name = name
        this.author = author
        this.copies = copies
    }

    displayInfo () {
        return `${this.name} by ${this.author} ${this.copies} available`
    }
}

const books = [
    new Books("Laws of Human nature","Robert Greene", 25),
    new Books("The subtle art of not giving a f","Mark Manson", 25), 
    new Books("Atomic Habits","James Clear", 20),
    new Books("Stuck","Oliver Jeffers",10),
    new Books("Bad Mexicans","Kyle Lyttle",20)  
];

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookId = `book${i + 1}-info`
    const element = document.getElementById(bookId);
    if (element) {
        element.innerHTML = book.displayInfo();
    }
}

