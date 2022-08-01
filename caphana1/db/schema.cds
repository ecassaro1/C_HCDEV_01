namespace ch1;

entity Ent1 {
    key ID: Integer;
    name: String(50);
}

@cds.persistence.exists
entity Ent2 {
    key ID: Integer;
    name: String(50);
}