using { ch1 as db } from '../db/schema';

service Catalog1 {
    entity Ent1 as projection on db.Ent1;
    entity Ent2 as projection on db.Ent2;
}