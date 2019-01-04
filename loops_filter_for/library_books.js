
var people=[
	{
		name: "Amar",
		age:29,
		libraryId: 1
	},
	{
		name: "Akbar",
		age:33,
		libraryId: 2
	},
	{
		name: "Anthony",
		age:29,
		libraryId: null
	}
]

var library = [
	{
		id: 1,
		name: "Public Library"
	},
	{
		id:2,
		name: "Private Library"
	}
]

var books=[
	{
		name: "Panchatantra",
		libraryId: 1
	},
	{
		name: "Jakata Tales",
		libraryId: 1
	},
	{
		name: "Harry Potter",
		libraryId: 2
	},
]

var q1 = [
	{
		name: "Amar",
		library: "Public Library",
		books: [
			{
				name: "Panchatantra",
				libraryId: 1
			},
			{
				name: "Jakata Tales",
				libraryId: 1
			}
		]
	},
	{
		name: "Akbar",
		library: "Private Library",
		books: [
			{
				name: "Harry Potter",
				libraryId: 2
			}
		]
	},
	{
		library: null,
		name: "Anthony",
		books: []
	}
]
