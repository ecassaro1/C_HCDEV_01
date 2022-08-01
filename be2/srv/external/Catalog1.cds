/* checksum : a47743373eaf5bd4f58e4fa2538e9353 */
@cds.persistence.skip : true
entity Catalog1.Cat1Ent1 {
  key ID : Integer;
  name : String(50);
};

@cds.external : true
service Catalog1 {};

