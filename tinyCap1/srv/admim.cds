using { tinyCap1 as db } from '../db/schema';

service AdmService {
  entity Ent1 as projection on db.Ent1;
}