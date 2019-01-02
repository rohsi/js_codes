var length_of_a_href = '<a href='.length
var page= "<html> bla bla <a href='http://www.google.com'> blah blah blah"

var start_of_a_href_tag=page.indexOf('<a href=')

var end_of_a_href_tag = page.indexOf('>', start_of_a_href_tag)





console.log(page.slice(start_of_a_href_tag + length_of_a_href, end_of_a_href_tag))

console.log(length_of_a_href)

console.log(length_of_a_href)
console.log('<a href='.length )
console.log(page.slice(start_of_a_href_tag, end_of_a_href_tag))


console.log(page.slice(start_of_a_href_tag + length_of_a_href +1 , end_of_a_href_tag -1))
