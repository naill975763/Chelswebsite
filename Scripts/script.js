var height = window.innerHeight;
var title = [
  "Чел с дискорда",
  "НоуНейм",
  "_Son#7558///",
  "Сон...",
  "Son#7558",
  "_Son#7558///",
  "Нн с дикорда",
  "Просто чел",
  "_Son#7558///",
  "Кто-то...",
  "Сайт нн",
  "_Son#7558///",
];

function rand_text() {
  let a = title.length;
  let b = Math.floor(Math.random()*10000);
  let c = b%a;
  return title[c];
}

function line_text() {
  let text = "";
  let x = Math.floor(height/20)/2-2;
  for (let i = 0; i < x; i++) {
    text += "# ";
  } return text;
}

document.title = rand_text();

Vue.createApp({
  data(){
    return {
      symbols: line_text(height)
    }
  }, 

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  }, 

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  }, 

  methods: {  
    onResize() {
      height = window.innerHeight
    }
  }
}).mount("#line");
