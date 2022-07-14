function rand_text() {
	let text = "Пусто!";
	let x = Math.floor(Math.random()*5)+1;
	
	if (x == 1) {
		text = "Чел с дискорда";
	} else if (x == 2) {
		text = "НоуНейм";
	} else if (x == 3) {
		text = "Сон...";
	} else if (x == 4) {
		text = "Son#7558";
	} else if (x == 5) {
		text = "Чебуреки";
	} return text;
}

const ti = {
  data() {
    return {
      text: rand_text()
    }
  }
}

Vue.createApp(ti).mount("#ti");