var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Item = /** @class */ (function () {
    function Item(id, title, isBorrowed) {
        if (isBorrowed === void 0) { isBorrowed = false; }
        this.id = id;
        this.title = title;
        this.isBorrowed = isBorrowed;
    }
    Item.prototype.borrowItem = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("".concat(this.title, " has been borrowed."));
        }
        else {
            console.log("".concat(this.title, " is already borrowed."));
        }
    };
    Item.prototype.returnItem = function () {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            console.log("".concat(this.title, " has been returned."));
        }
        else {
            console.log("".concat(this.title, " was not borrowed."));
        }
    };
    return Item;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(id, title, author, pages) {
        var _this = _super.call(this, id, title) || this;
        _this.author = author;
        _this.pages = pages;
        return _this;
    }
    Book.prototype.borrowItem = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("Book: \"".concat(this.title, "\" by ").concat(this.author, " has been borrowed."));
        }
        else {
            console.log("Book: \"".concat(this.title, "\" by ").concat(this.author, " is already borrowed."));
        }
    };
    return Book;
}(Item));
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.borrowedItems = [];
    }
    User.prototype.borrow = function (item) {
        if (!item.isBorrowed) {
            item.borrowItem();
            this.borrowedItems.push(item);
        }
        else {
            console.log("".concat(item.title, " is already borrowed by someone else."));
        }
    };
    User.prototype.return = function (item) {
        var index = this.borrowedItems.indexOf(item);
        if (index > -1) {
            item.returnItem();
            this.borrowedItems.splice(index, 1);
        }
        else {
            console.log("".concat(this.name, " did not borrow ").concat(item.title, "."));
        }
    };
    User.prototype.listBorrowedItems = function () {
        console.log("".concat(this.name, " has borrowed:"));
        this.borrowedItems.forEach(function (item) { return console.log("- ".concat(item.title)); });
    };
    return User;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
        this.users = [];
    }
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("Added \"".concat(item.title, "\" to the library."));
    };
    Library.prototype.registerUser = function (user) {
        this.users.push(user);
        console.log("Registered user: ".concat(user.name));
    };
    Library.prototype.findItemById = function (id) {
        return this.items.find(function (item) { return item.id === id; });
    };
    Library.prototype.findUserByName = function (name) {
        return this.users.find(function (user) { return user.name === name; });
    };
    Library.prototype.listAvailableItems = function () {
        console.log('Available items in the library:');
        this.items.filter(function (item) { return !item.isBorrowed; }).forEach(function (item) { return console.log("- ".concat(item.title)); });
    };
    return Library;
}());
var myLibrary = new Library();
var book1 = new Book(1, "2024", "Arjun", 328);
var book2 = new Book(2, "Wings of fire", "D.R APJ Abdul Kalam", 214);
myLibrary.addItem(book1);
myLibrary.addItem(book2);
var user1 = new User("Aswin");
var user2 = new User("Anugrah");
myLibrary.registerUser(user1);
myLibrary.registerUser(user2);
user1.borrow(book1);
user1.borrow(book2);
user2.borrow(book1);
user1.listBorrowedItems();
user1.return(book1);
user2.borrow(book1);
myLibrary.listAvailableItems();
