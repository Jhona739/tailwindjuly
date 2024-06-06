let animation = document.getElementById("player");

const cargarImagen = (entradas, observador) => {
	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
      		animation.play();
		}else {
      		animation.stop();
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	threshold: 0.5,
});

observador.observe(animation);


bottonsubida = document.getElementById("botton-subida");
window.onscroll = function(){
	if (document.documentElement.scrollTop < 200) {
		bottonsubida.classList.remove("active");
		
	}else{
		bottonsubida.classList.add("active");
	}

}