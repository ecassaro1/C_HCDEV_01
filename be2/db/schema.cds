namespace be2;
using { Catalog1 as external } from '../srv/external/Catalog1';

entity Ent2 {
    key ID: Integer;
    name: String(50);
}

entity Mashup1 as 
    select
            Ent1.ID,
            Ent1.name,
            Ent2.ID as Ent2ID
        from Ent2
        join external.Cat1Ent1 as Ent1
            on Ent1.ID = Ent2.ID;


