annotate booksCatalog.Book with @(
	UI: {
		HeaderInfo: {
			TypeName: 'Book',
			TypeNamePlural: 'Books' 
		},

		SelectionFields: [  ID ],

		LineItem: [
			{ $Type:'UI.DataField', Value: ID },
			{ $Type:'UI.DataField', Value: title }
		],

		HeaderFacets: [       
			{$Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#Book', Label:'ID' },
		],						
		FieldGroup#Book: {
			Data:[
				{$Type: 'UI.DataField', Value: ID}
			]
		},
		Facets: [
			{
				$Type: 'UI.CollectionFacet',
				Label: 'Book´s Data',
				Facets: [
					{
						$Type: 'UI.ReferenceFacet', 
						Target: '@UI.FieldGroup#BookDescription', 
						Label: 'Book´s Data'
					},
				]
			}
		],
		FieldGroup#BookDescription: {
			Data:[
				{$Type: 'UI.DataField', Value: ID},
                {$Type: 'UI.DataField', Value: title},
                {$Type: 'UI.DataField', Value: author }		
            ]
        }
	}
);