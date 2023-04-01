//! ES6 classes //LENGVIAU APSIRASO, TIK APRASYMAS KITOKS. NEREIKIA PROTOTIPU. PO KOPOTU VISAS VEIKIMAS IS ESMES YRA TAS PATS, KITAIS ZODZIAIS TA PATI PASAKOM

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} on ${this.year}`;
  }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);

const book2 = new Book("1984", "George Orwell", 2000);

console.log(book1);
console.log(book2);
console.log(book1.getSummary());

//! Inheritance with subclasses (tos, kur paveldi, yra subclasses)

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year); //pasikvieciam su zodeliu "super"
    this.month = month;
  }
  getMonth() {
    return this.month;
  }
  static frequency() {
    return "monthly"; //vykdosi ne ant konkretaus objekto, kuri klase pagamino, o kaip ant klases 1:35. Cia this. negalim rasyti, bus undefined. This nesaugo konkretaus objekto, this yra pati klase
  }
}

const magazine1 = new Magazine("Magazine", "Wiley", 2022, "Feb");
console.log(magazine1);
console.log(magazine1.getSummary());
console.log(magazine1.getMonth());

console.log(Magazine.frequency());
