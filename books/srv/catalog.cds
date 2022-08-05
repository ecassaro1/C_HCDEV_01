using { books as db } from '../db/schema';

service booksCatalog {
    @odata.draft.enabled
    entity Book as projection on db.Book {
        *,
        author.name as author
    };

    @odata.draft.enabled
    entity Author as projection on db.Author;
}