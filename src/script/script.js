// Função para trocar a imagem principal da galeria ao clicar nas miniaturas
function changeImage(src) {
  const mainImage = document.getElementById('mainDisplayImage');
  if (mainImage) {
    mainImage.src = src;
  }

  // Atualizar classe ativa nas miniaturas
  const thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach(thumb => {
    if (thumb.src === src) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
}

// Interatividade simples para o botão de menu mobile
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      alert('Menu lateral em desenvolvimento!');
    });
  }
});