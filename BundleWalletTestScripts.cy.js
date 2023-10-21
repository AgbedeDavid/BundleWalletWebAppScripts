import("cypress-file-upload");
import FileFormat from "../pages/FileFormat.js"

const ln=new FileFormat();

describe('Bundle Wallet', ()=>{

    beforeEach(() =>{
       ln.Url()
     }),

     it('URL link should be Accessible', ()=>{
        ln.LinkAccessibility()
     });

     it('Homepage should display a Choose file Button', ()=>{
        ln.HomeDisplay()
     });

     it('User should be able to upload a file format apart from CSV',()=>{
       ln.SetUnsupportedFile()
     });

     it('User should upload a CSV file format',()=>{
        ln.SetSupportedFile()
     });

     it('Parse Invoice file button should be visible',()=>{
        ln.ButtonVisibility()
     });

     it('Validate that there is a "Click Here" button to download sample CSV file',()=>{
        ln.ClickHereButton()
     });
   
     it('The download sample document link on the website should be responsive',()=>{
         ln.DownloadLink()
     });

     it('Web App should not parse files that are not csv format',()=>{
        ln.SetUnsupportedFile()
        ln.NotParseUnsupportedFile()
     });

     it('Validate that a alert message (Please wait while we parse the uploaded file) shows when parsing files', ()=>{
      ln.SetUnsupportedFile()
      ln.AlertMsgFileProcessing()
     });

     it('Web app should accurately parse the csv file', ()=>{
        ln.SetSupportedFile()
        ln.ParseSupportedFile()
     });

     it('Web App response time for parsing and displaying should be less than 300ms',()=>{
        ln.SetSupportedFile()
        ln.ResponseTime()
     });
   
     it('Web app should  correctly handle unsupported file types when attempting to upload a JPG ,PDF,XLSX.',()=>{
        ln.SetUnsupportedFile()
        ln.ErrorDisplayCheck()
     });

     it('When CSV file is uploaded basic informations(Company name and Invoice Value) should be captured',()=>{
       ln.SetSupportedFile()
       ln.ResponseBodyCheck()
     });

     it('Validate that when you Click on any Company name, you get the billable hours per company',()=>{
        ln.SetSupportedFile()
        ln.ParseSupportedFile()
        ln.CompanyInvoiceCheck()
     });

     it('Web App response time for displaying each company invoice is less than 150ms', ()=>{
        ln.ResponseTimeCompanyInvoice()
     });

     it('Verify alert message displays when loading each company (eg. Google) invoice', ()=>{
      ln.AlertMessageForCompanyInvoice()
     });

     it('Validate that the total billable cost is correct when company name is selected',()=>{
        ln.SetSupportedFile()
        ln.ParseSupportedFile()
        ln.CompanyInvoiceCheck()
        ln.BillableTotalAmtCheck()
     });

    it('Validate that you can go back to check results after opening a company bill invoice',()=>{
        ln.BackToResult()
    });

    it('Validate that you can click on (Parse New File) after opening a company bill invoice', ()=>{
        ln.ParseNewFile()
    })

})
