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
			{$Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#BookID', Label:'ID' },
		],						
		FieldGroup#BookID: {
			Data:[
				{$Type: 'UI.DataField', Value: ID}
			]
		},
		Facets: [
			{
				$Type: 'UI.CollectionFacet',
				Label: 'Descrição do livro',
				Facets: [
					{
						$Type: 'UI.ReferenceFacet', 
						Target: '@UI.FieldGroup#BookDescription', 
						Label: 'Descrição do Livro'
					},
				]
			}
		],	
	}
);