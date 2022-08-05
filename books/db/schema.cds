namespace books;

entity Book {
    key ID: Integer;
    title: String(50);
    author: Association to Author;
}

entity Author {
    key ID: Integer;
    name: String(50);
    //titles: Association to many Book
    //    on titles.author = $self;
}