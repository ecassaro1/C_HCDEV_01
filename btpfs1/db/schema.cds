namespace btpfs1;

@cds.persistence.exists
entity Ent1 {
    key ID: Integer;
    name: String(50);  
}

@cds.persistence.exists
entity Ent2 {
    key ID: Integer;
    name: String(50);  
}

entity Ent3 {
    key ID: Integer;
    name: String(50);

    ent1: association to Ent1;
    ent2: association to Ent2;
}