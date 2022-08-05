annotate booksCatalog.Author with @(
	UI: {
		HeaderInfo: {
			TypeName: 'Author',
			TypeNamePlural: 'Authors' 
		},

		SelectionFields: [  ID ],

		LineItem: [
			{ $Type:'UI.DataField', Value: ID },
			{ $Type:'UI.DataField', Value: name }
		],

		HeaderFacets: [       
			{$Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#Author', Label:'ID' },
		],						
		FieldGroup#Author: {
			Data:[
				{$Type: 'UI.DataField', Value: ID},
                {$Type: 'UI.DataField', Value: name}
			]
		},
		Facets: [
			{
				$Type: 'UI.CollectionFacet',
				Label: 'Author´s Data',
				Facets: [
					{
						$Type: 'UI.ReferenceFacet', 
						Target: '@UI.FieldGroup#BookDescription', 
						Label: 'Author´s Data'
					},
				]
			}
		],
		FieldGroup#BookDescription: {
			Data:[
				{$Type: 'UI.DataField', Value: ID},
                {$Type: 'UI.DataField', Value: name }		
            ]
        }
	}
);