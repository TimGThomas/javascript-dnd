var Adventurer = function() {
  this.items = [];
};

Adventurer.prototype.equip = function(item, armorBonus) {
  this.items.push({ item: item, armorBonus: armorBonus });
};

Adventurer.prototype.getArmorClass = function() {
  var baseValue = 10, bonuses = 0;
  
  if (this.items.length > 0) {
    bonuses = this.items.reduce(function(previousValue, currentValue) {
      return previousValue.armorBonus + currentValue.armorBonus;
    });
  }

  return baseValue + bonuses;
};

describe('test', function() {
  
  var adventurer;
  
  beforeEach(function() {
    adventurer = new Adventurer();
  });
  
  describe('an adventurer with no armor', function() {
    
    it('should have the base armor class', function() {
      expect(adventurer.getArmorClass()).toBe(10);
    });
    
  });
  
  describe('an armored adventurer', function() {
    
    beforeEach(function() {
      adventurer.equip('leather armor', 10);
      adventurer.equip('shield', 5);
    });
    
    it('should add items', function() {
      expect(adventurer.items.length).toBe(2);
    });
    
    it('should have a better armor class', function() {
      expect(adventurer.getArmorClass()).toBe(25);
    });
    
  });
});