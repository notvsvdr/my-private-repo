function assign (target, def, opt) {
    var res = Object(target);

    for (var i = 1; i < arguments.length; i++) {
        var next = arguments[i];

        if (next != null) {
            for (var key in next) {
                if (Object.prototype.hasOwnProperty.call(next, key)) {
                    res[key] = next[key];
                }
            }
        }
    }
    return res;
}

function Fighter (value) {
    this._name = value.name;
    this._attack = value.attack;
    this._totalHitpoints = value.hitpoints;
    this._hitpoints = this._totalHitpoints;
}

Champion.prototype = Object.create(Fighter.prototype);
Champion.prototype.constructor = Champion;

Monster.prototype = Object.create(Fighter.prototype);
Monster.prototype.constructor = Monster;

Fighter.prototype.getHitpoints = function() {
    return this._hitpoints;
}

Fighter.prototype.setHitpoints = function(value) {
    this._hitpoints = value;
}

Fighter.prototype.getTotalHitpoints = function() {
    return this._totalHitpoints;
}

Fighter.prototype.setTotalHitpoints = function(value) {
    this._totalHitpoints = value;
}

Fighter.prototype.getAttack = function() {
    return this._attack;
}

Fighter.prototype.setAttack = function(value) {
    this._attack = value;
}

Fighter.prototype.victory = function() {
    console.log(`${this._name} wins.`);
}


Fighter.prototype.fight = function(defender) {
    if(!(defender instanceof Fighter)) {
        console.log('Can\'t fight not Fighter');
        return;
    }

    if(defender === this) {
        console.log(`${this._name} cannot fight himself`);
        return;
    }

    if(!defender.isAlive()) {
        console.log(`${defender._name} already dead.`)
        return;
    }

    let attack = this.getAttack();
    let hitpoints = defender.getHitpoints();
    
    if(this._nextTwoEnragedAttacks) {
        attack = this.getEnragedAttack();
    }

    if(this._blockAttack && this.hasOwnProperty('changeIfBlock')) {
        defender.changeIfBlock();
        return;
    }
    
    defender.setHitpoints(hitpoints - attack < 0 ? 0 : hitpoints - attack);
    
    if(!defender.isAlive()) {
        this.victory(defender);
    }
}

Fighter.prototype.isAlive = function() {
    return this._hitpoints > 0;
}

//CHAMPION
function Champion(value) {
    Fighter.apply(this, arguments);
    this._blockAttack = false;
}

Champion.prototype.heal = function() {
    if(this.getHitpoints() + 5 <= this.getTotalHitpoints()) {
        this.setHitpoints(this.getHitpoints() + 5);
        console.log(`${this._name} Healed`)
    } else {
        console.log(`${this._name} Tried to heal`);
    }
}

Champion.prototype.defence = function() {
    this._blockAttack = true;
    this.setTotalHitpoints(this.getTotalHitpoints() + 1);
    console.log(`${this._name} is defending`)
}

Champion.prototype.changeIfBlock = function() {
    this._blockAttack = false;
}

Champion.prototype.victory = function() {
    this.setAttack(this.getAttack() + 1);
    Fighter.prototype.victory.call(this);
}

//MONSTER
function Monster(value) {
    Fighter.apply(this, arguments);
    this._nextTwoEnragedAttacks = 0;
}

Monster.prototype.enrage = function() {
    this._nextTwoEnragedAttacks = 2;
    console.log(`${this._name} Enraged`)
}

Monster.prototype.getEnragedAttack = function() {
    this._nextTwoEnragedAttacks--;
    return this.getAttack() * 2;
}

Monster.prototype.fury = function() {
    if(this.getHitpoints() - 5 > 0) {
        this.setHitpoints(this.getHitpoints() - 5);
        this.setTotalHitpoints(this.getTotalHitpoints() - 5);
        this.setAttack(this.getAttack() + 2);
        console.log('Furied');
    }
}


Monster.prototype.victory = function(defender) {
    var hitpoints = Math.floor(this.getHitpoints() + defender.getTotalHitpoints() / 4);
    var totalHitpoints = Math.floor(this.getTotalHitpoints() + defender.getTotalHitpoints() / 10);

    if (hitpoints > totalHitpoints) {
        hitpoints = totalHitpoints;
    }

    this.setHitpoints(hitpoints);
    this.setTotalHitpoints(totalHitpoints);
    Fighter.prototype.victory.call(this);
}