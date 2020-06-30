var Invoice = /** @class */ (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        // constructor(name, city, state) {
        this.companyProfile = name + ", " + city + ", " + state;
        this.name = name;
    }
    return Invoice;
}());
var googleInvoice = new Invoice('Google', 'Mountain View', 'CA');
var yahooInvoice = new Invoice('Yahoo', 'SF', 'CA');
console.log(googleInvoice.companyProfile);
console.log(googleInvoice.name);
// googleInvoice.name = 'something else'
console.log(yahooInvoice.companyProfile);
//# sourceMappingURL=020_classes.js.map