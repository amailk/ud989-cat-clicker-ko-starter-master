var initialCats = [
    {   clickCount = 0,
        name = 'Tabby',
        imgSrc = 'img/22252709_010df3379e_z.jpg',
        imgAttribution = 'www.google.com',
        nicknames = ['Tabtab', 'T-Bone', 'Mr.T', 'Tabitha Tab Tabby Catty Cat']
    },
    {

    },
    {

    },
    {

    }] 
var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);
    
    

    this.title = ko.computed(function() {
        var title;
        var clicks = this.clickCount();
        if (clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 50) {
            title = 'Infant';
        } else if (clicks < 100) {
            title = 'Child';
        } else if (clicks <200) {
            title = 'Teen';
        } else if (clicks <500) {
            title = 'Adult';
        } else {
            title = 'Ninja';
        }
        return title;

    }, this);
}

// [ ] Make the cats show up in a list
// [ ] Make the currentCat change when you click on a cat in the list
// [ ] 

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCat = function() {
        self.currentCat(clickedCat);
    };
};
        
ko.applyBindings(new ViewModel());






//this.clickCount(this.clickCount() + 1);

        // or you can do
        // var ViewMOdel = function() {
        //    var self=this;
        //    this.currentCat = ko.observable(new Cat() );
        // this.incrementCounter = function() {
        //      self.currentCat().clickCount(self.currentCat().clickCount() + 1);
        // };
        //};

        //neither of these options are better or worse. just know both methods.

        // var count = 0;
        // count++;