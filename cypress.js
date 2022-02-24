 cy.intercept({
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },
 
     {
         statusCode : 200,
         body : [
            {
               "book_name":"RestAssured with Java",
               "isbn":"RSU",
               "aisle":"2301"
            }
         ]
          
     }).as('bookretrievals')
