const enemies = [
  { name: "スライム", hp: 5 },
  { name: "ゴブリン", hp: 9 },
  { name: "ドラゴン", hp: 20 }
];

// データからリストを作る
function showEnemies() {
  const list = document.getElementById("enemyList");
  list.innerHTML = "";

  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    const li = document.createElement("li");

    li.innerText = `${enemy.name}（HP：${enemy.hp}）`;

    // HPが0ならdownクラスを追加
    if (enemy.hp === 0) {
      li.classList.add("down");
    }

    list.appendChild(li);
  }
}

// 攻撃する
function attack() {
  const damage = 3;

  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];

    enemy.hp -= damage;

    if (enemy.hp < 0) {
      enemy.hp = 0;
    }
  }

  showEnemies();
}

showEnemies();