function showResult(fighter) {
  console.log('Fighter', fighter.getName());
  console.log('- Combat stats:', fighter.getCombatHistory());
  console.log('- Properties:', fighter.getStats());
}

function fighter(fighterStats) {
  let localFighterStats = fighterStats;
  let combatHistory = { wins: 0, loses: 0 };

  function getName() {
    return localFighterStats.name;
  }

  function block() {
    return Math.random() >= 0.5;
  }

  function getStats() {
    return localFighterStats;
  }

  function getCombatHistory() {
    return combatHistory;
  }

  function fight(enemy) {
    if (!block()) {
      enemy.getStats().hp -= localFighterStats.attack;
      if (enemy.getStats().hp <= 0) {
        enemy.getStats().hp = 0;
        enemy.getCombatHistory().loses++;
        combatHistory.wins++;
      }
      return true;
    } else {

      return false;
    }
  }

  return {
    getName, block, getStats, getCombatHistory, fight
  };
}

var fighter1 = fighter({ name: 'John', attack: 100, hp: 100 });
var fighter2 = fighter({ name: 'Kayn', attack: 50, hp: 300 });
var fighter3 = fighter({ name: 'Bill', attack: 40, hp: 100 });

fighter1.fight(fighter2);
fighter1.fight(fighter3);

showResult(fighter1);

showResult(fighter2);

showResult(fighter3);
