namespace btpfs2;

@cds.persistence.exists
entity Ent1 {
    key ID: Integer;
    name: String(50);
}

entity Ent2 {
    key ID: Integer;
    name: String(50);

    ent1: Association to Ent1;
}