var ForagerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = 'find pollen';
	this.color = this.color;
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function (treasure) {
	this.treasureChest.push(treasure);
}