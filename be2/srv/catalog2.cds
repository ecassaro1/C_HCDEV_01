using { be2 as db } from '../db/schema';
using { Catalog1 as external } from '../srv/external/Catalog1';

service Catalog2 {
    entity Cat2Ent2 as projection on db.Ent2;
    entity Cat1Ent1 as projection on external.Cat1Ent1;
//    entity Mashup1 as projection on db.Mashup1;
}