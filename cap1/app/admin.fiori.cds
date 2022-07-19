annotate AdmService.Ent1 with @(
    UI: 
    {
        LineItem: [
            {$Type:'UI.DataField', Value: ID},
            {$Type:'UI.DataField', Value: name}
        ],

        HeaderFacets: [       
            {$Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#Ent1Detail', Label:'Ent1Detail(FieldGroup)' }
        ],
        FieldGroup#Ent1Detail: {
            Data:[
                {$Type: 'UI.DataField', Value: ID},
                {$Type: 'UI.DataField', Value: name}
            ]
        }
    }
);

annotate AdmService.Ent1 with {
  ID @( Common: { Label: 'ID'} );
  name @( Common: { Label: 'Name'} );
}
