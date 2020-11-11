eve = [11,13,16,21]
res = 0

res = eve.filter(e => e%2)


Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

console.log(eve.filter(r => res.indexOf(r) === -1))