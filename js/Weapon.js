//class de génération des armes

class Weapon {
    constructor(weaponType="sword", mapSize = 8,damage=20) {
        this.mapSize = mapSize;
        this.weaponType = weaponType;
        this.damage = damage;
        this.creatWeapon(weaponType);

    }

    // fonction création arme
    creatWeapon(weaponType) {

        let weaponOk = false;
    
        while (!weaponOk) {
    
            let weapon = Utils.randomSquare(this.mapSize)
    
            if (!weapon.hasClass("weapon") && !weapon.hasClass("wall")) {
                weapon.addClass("weapon").addClass(weaponType);
                weaponOk = true;
            }
        }        
    }    
}