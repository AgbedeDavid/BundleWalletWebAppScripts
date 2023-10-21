import("cypress-file-upload");

class FileFormat
 {
    Url()
    {
        cy.visit('https://csvdemomockappp.bundlewallet.com/')
    }

  LinkAccessibility()
    {
        cy.get('h1').should('be.visible')
        cy.get('h1').should('contain', 'CSV Invoice Parser')
    }

    HomeDisplay()
    {
        cy.get('#statement-file').should('be.visible')
    }

    ButtonVisibility()
    {
        cy.get('.btn').should('be.visible')
    }

    ClickHereButton()
    {
        cy.get('a').should('be.visible')
    }

    DownloadLink()
    {
        cy.get('a').should('not.be.disabled')
    }

    AlertMsgFileProcessing()
    {
        cy.get('.btn').click()
        cy.get('.alert').should('contain', 'Please wait while we parse the uploaded file')
    }

    NotParseUnsupportedFile()
    {
        cy.get('.btn').click() 

        //Check for error message.
        cy.wait(7000)
        cy.get('.alert').should('contain', 'Could not parse input');
    }

    ParseSupportedFile()
    {
        cy.get('.btn').click() 

        //Check for Parsed file response body
        cy.get('.alert-success').should('be.visible').and('contain','CSV File has been parsed successfully, see summary below')
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain','Google')
    }
    
    ResponseTime()
    {
        // Record start time before request is made
        const startTime = Date.now();

        // Use cy.get to interact with an element or trigger a network request
        cy.get('.btn').click() 

        // Record the end time after the request is complete
        const endTime = Date.now();

        // Calculate the response time in milliseconds(ms)
        const responseTime = endTime - startTime;

        // Log the response time
        cy.log(`Response Time: ${responseTime}ms`);

        //assert that the response time is within an acceptable range
        cy.wrap(responseTime).should('be.lessThan', 300);
    }

    ResponseTimeCompanyInvoice()
    {
        cy.get('#statement-file').attachFile('file.csv')
        cy.get('.btn').click() 
        const startTime = Date.now();
        cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').click()
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        cy.log(`Response Time: ${responseTime}ms`);
        cy.wrap(responseTime).should('be.lessThan', 150);
    }

    AlertMessageForCompanyInvoice(Google)
    {
        cy.get('#statement-file').attachFile('file.csv')
        cy.get('.btn').click() 
        cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').click()
        cy.get('.alert').should('contain', 'Invoice for Google is being loaded')
    }

    ErrorDisplayCheck()
    {
        cy.get('.btn').click() 
        cy.wait(7000)
        cy.get('.alert').should('be.visible').and('contain', 'Could not parse input')
    }

    SetUnsupportedFile(xlsxfile) 
    {
        cy.get('#statement-file').attachFile('StatusReport.xlsx')
    }

    SetSupportedFile(csvfile)
    {
        cy.get('#statement-file').attachFile('file.csv')
    }

    ResponseBodyCheck()
    {
        cy.get('.btn').click() 
        cy.get('[ng-view=""]').should('contain', 'Facebook')
    }

    CompanyInvoiceCheck()
    {
        cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').click()
        cy.get('[ng-if="vm.invoice"]').should('contain', 'Employee ID')
    }

    BillableTotalAmtCheck()
    {
        cy.get('tfoot > tr > .ng-binding').should('be.visible')
        cy.get('tfoot > tr > .ng-binding').should('contain', "2,400.00")
    }

    BackToResult(AfterComapanyInvoice)
    {
        cy.get('#statement-file').attachFile('file.csv')
        cy.get('.btn').click()
        cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').click()
        cy.wait(2000)
        cy.contains('Back to Result').click()
        cy.get('.alert-success').should('be.visible').and('contain','CSV File has been parsed successfully, see summary below')
    }

    ParseNewFile(AfterComapanyInvoice)
    {
        cy.get('#statement-file').attachFile('file.csv')
        cy.get('.btn').click()
        cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').click()
        cy.get('[ng-href="#!/"]').click()
    }

}

export default FileFormat;
