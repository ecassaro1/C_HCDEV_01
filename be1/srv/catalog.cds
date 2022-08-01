using { be1 as db } from '../db/schema';

service Catalog1 {
    entity Cat1Ent1 as projection on db.Ent1;
}