var Bob = function() {};

Bob.prototype.youScreamingWithMe = function(input) {
    if (this.areJustNumbers(input)) {
        return false;
    }
    return input == input.toUpperCase();
};

Bob.prototype.isAQuestion = function(input) {
    if (this.youScreamingWithMe(input)) {
        return false;
    }
    return input[input.length - 1] == '?';
};

Bob.prototype.areJustNumbers = function(input) {
    if (this.canHearThis(input)) {
        return false;
    }
    return input.search(/[a-z|A-Z]/) == -1;
};

Bob.prototype.canHearThis = function(input) {
    return input.search(/^\s*$/) != -1;
};

Bob.prototype.hey = function(input) {
    if (this.canHearThis(input)) {
        return 'Fine. Be that way!';
    }

    if (this.isAQuestion(input)) {
        return 'Sure.';
    }

    if (this.youScreamingWithMe(input)) {
        return 'Whoa, chill out!';
    }

    return 'Whatever.';
};

module.exports = Bob;
