"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendEmail(to) {
    return {
        recipient: "".concat(to.name, " <").concat(to.email, ">"),
        body: "You're pre-qualified for a loan!"
    };
}
var sendTextMessage = function (to) {
    return {
        recipient: "".concat(to.name, " <").concat(to.phone, ">"),
        body: "You're pre-qualified for a loan!"
    };
};
function getNameParts(contact) {
    var parts = contact.name.split(/\s/g);
    if (parts.length < 2) {
        throw new Error("Can't calculate name parts from name \"".concat(contact.name, "\""));
    }
    return {
        first: parts[0],
        middle: parts.length === 2
            ? undefined
            : parts.slice(1, parts.length - 2).join(" "),
        last: parts[parts.length - 1]
    };
}
var sum = function () {
    var vals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vals[_i] = arguments[_i];
    }
    return vals.reduce(function (sum, x) { return sum + x; }, 0);
};
function contactPeople(method) {
    var people = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        people[_i - 1] = arguments[_i];
    }
    if (method === "email") {
        people.forEach(sendEmail);
    }
    else {
        people.forEach(sendTextMessage);
    }
}
contactPeople("email", { name: "foo", email: "" });
contactPeople("phone", { name: "foo", phone: 12345678 });
contactPeople("email", { name: "foo", phone: 12345678 });
function sendMessage(preferredMethod) {
    if (preferredMethod === "email") {
        console.log("sendEmail");
        sendEmail(this);
    }
    else {
        console.log("sendTextMessage");
        sendTextMessage(this);
    }
}
var c = { name: "Mike", phone: 3215551212, email: "mike@example.com" };
function invokeSoon(cb, timeout) {
    setTimeout(function () { return cb.call(null); }, timeout);
}
var bound = sendMessage.bind(c, "email");
invokeSoon(function () { return bound(); }, 500);
var applied = sendMessage.apply(c, ["phone"]);
invokeSoon(function () { return applied; }, 500);
exports.default = {};
