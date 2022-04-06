context('Data Table Functionality', () => {

  it.skip('Redirect to /countries route if / is the path', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.url().should('include','/countries');
  });

  it.skip('Must have data-country Cards after the rendering', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('[data-country]').should('have.length.gt',200);
  });

  it.skip('Must have the country name in the URL after Country Card is clicked', () => {
    cy.visit('http://localhost:3000/countries');
    cy.get('[data-country]').first().find('h2[data-cy]').then((sample) => {
      cy.log('Country Name' , sample.text());
      cy.get('[data-country]').first().click();
      cy.wait(2000);
      cy.url().should('include', "countries/"+sample.text())
    });

  });

  it('Test if Region Filters the country data', () => {
    cy.visit('http://localhost:3000/countries');
    const originalData : any = [];
    const filteredData : any = [];
    cy.get('[data-country]').each(sample => {
      const countryText = Cypress.$(sample).attr('data-cy]');
      originalData.push(countryText);
    });
    cy.get('a[data-cy-region]').first().click();
    cy.get('[data-country]').each(sample => {
      const countryText = Cypress.$(sample).attr('data-cy]');
      filteredData.push(countryText);
    }).then(() => {
        expect(filteredData).to.not.eql(originalData);
    });
    cy.log(originalData);
  });
});