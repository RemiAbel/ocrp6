//class de génération des armes

class Weapon {
    constructor(weaponType="sword", mapSize = 8,damage=20, generate = true) {
        this.mapSize = mapSize;
        this.weaponType = weaponType;
        this.damage = damage;
        if (generate) {this.creatWeapon(weaponType);}

    }

    // fonction création arme
    creatWeapon(weaponType) {

        let weaponOk = false;
    
        while (!weaponOk) {
    
            let weapon = Utils.randomSquare(this.mapSize)
    
            if (!weapon.hasClass("weapon") && !weapon.hasClass("wall")) {
                weapon.addClass("weapon").addClass(weaponType).attr("weapon", weaponType);
                weaponOk = true;

            }
        }        
    }    
}