using { btpfs1 as db } from '../db/schema';

service AdmService {
  entity Ent1 as projection on db.Ent1;
  entity Ent2 as projection on db.Ent2;
  entity Ent3 as projection on db.Ent3;

  entity Mashup1 
    as select 
        ID, 
        name,
        ent1.name as ent1Name,
        ent2.name as ent2Name
    from db.Ent3;
}