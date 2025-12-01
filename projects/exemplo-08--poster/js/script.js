let uploadedImage = null;

document.getElementById('imageUpload').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      uploadedImage = event.target.result;
      document.querySelector('.btn-secondary').textContent = 'Trocar Imagem';
    };
    reader.readAsDataURL(file);
  }
});

function generatePoster() {
  const title = document.getElementById('title').value;
  const year = document.getElementById('year').value;
  const nativeTitle = document.getElementById('nativeTitle').value;
  const genre = document.getElementById('genre').value;
  const directedBy = document.getElementById('directedBy').value;
  const writtenBy = document.getElementById('writtenBy').value;
  const starring1 = document.getElementById('starring1').value;
  const starring2 = document.getElementById('starring2').value;
  const starring3 = document.getElementById('starring3').value;

  if (!title || !uploadedImage) {
    alert('Por favor, preencha pelo menos o título e adicione uma imagem!');
    return;
  }

  // Montar elenco
  const starring = [starring1, starring2, starring3].filter(s => s.trim() !== '');

  // Atualizar preview
  document.getElementById('placeholder').classList.add('hidden');
  document.getElementById('posterPreview').classList.remove('hidden');
  document.getElementById('posterOverlay').classList.remove('hidden');
  document.getElementById('downloadBtn').classList.remove('hidden');

  document.getElementById('posterPreview').src = uploadedImage;
  document.getElementById('previewTitle').textContent = title.toUpperCase();
  document.getElementById('previewYear').textContent = year;
  document.getElementById('previewNative').textContent = nativeTitle;
  document.getElementById('previewGenre').textContent = genre.toUpperCase();
  document.getElementById('previewDirector').textContent = directedBy.toUpperCase();
  document.getElementById('previewWriter').textContent = writtenBy.toUpperCase();
  document.getElementById('previewStarring').textContent = starring.map(s => s.toUpperCase()).join(' ');

  // Esconder seções vazias
  document.getElementById('nativeSection').style.display = nativeTitle ? 'block' : 'none';
  document.getElementById('genreSection').style.display = genre ? 'block' : 'none';
  document.getElementById('directorSection').style.display = directedBy ? 'block' : 'none';
  document.getElementById('writerSection').style.display = writtenBy ? 'block' : 'none';
  document.getElementById('starringSection').style.display = starring.length > 0 ? 'block' : 'none';
}

function downloadPoster() {
  const canvas = document.getElementById('posterCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 800;
  canvas.height = 1050;

  const title = document.getElementById('title').value;
  const year = document.getElementById('year').value;
  const nativeTitle = document.getElementById('nativeTitle').value;
  const genre = document.getElementById('genre').value;
  const directedBy = document.getElementById('directedBy').value;
  const writtenBy = document.getElementById('writtenBy').value;
  const starring1 = document.getElementById('starring1').value;
  const starring2 = document.getElementById('starring2').value;
  const starring3 = document.getElementById('starring3').value;

  // Fundo bege da Polaroid
  ctx.fillStyle = '#e8e4df';
  ctx.fillRect(0, 0, 800, 1050);

  const img = new Image();
  img.onload = function () {
    // Desenhar imagem quadrada no topo (com margem)
    const margin = 50;
    const imageSize = 700;
    ctx.drawImage(img, margin, margin, imageSize, imageSize);

    // Área de texto abaixo da imagem
    const textAreaTop = margin + imageSize + 30;

    ctx.textAlign = 'left';
    const leftMargin = 50;
    let yPos = textAreaTop;

    // Título
    ctx.fillStyle = '#292421';
    ctx.font = '900 70px Impact, Arial Black';
    ctx.letterSpacing = '-2px';
    ctx.fillText(title.toUpperCase(), leftMargin, yPos);
    yPos += 50;

    // Ano
    if (year) {
      ctx.font = '300 50px Arial';
      ctx.fillText(year, leftMargin, yPos);
      yPos += 60;
    }

    // Informações detalhadas
    const labelFont = 'italic 18px Arial';
    const valueFont = '400 22px Arial';
    const spacing = 40;

    // Native title
    if (nativeTitle) {
      ctx.font = labelFont;
      ctx.fillText('native title', leftMargin, yPos);
      yPos += 22;
      ctx.font = valueFont;
      ctx.fillText(nativeTitle, leftMargin, yPos);
      yPos += spacing;
    }

    // Genre
    if (genre) {
      ctx.font = labelFont;
      ctx.fillText('genre', leftMargin, yPos);
      yPos += 22;
      ctx.font = valueFont;
      ctx.fillText(genre.toUpperCase(), leftMargin, yPos);
      yPos += spacing;
    }

    // Director
    if (directedBy) {
      ctx.font = labelFont;
      ctx.fillText('directed by', leftMargin, yPos);
      yPos += 22;
      ctx.font = valueFont;
      ctx.fillText(directedBy.toUpperCase(), leftMargin, yPos);
      yPos += spacing;
    }

    // Writer
    if (writtenBy) {
      ctx.font = labelFont;
      ctx.fillText('written by', leftMargin, yPos);
      yPos += 22;
      ctx.font = valueFont;
      ctx.fillText(writtenBy.toUpperCase(), leftMargin, yPos);
      yPos += spacing;
    }

    // Starring
    const starring = [starring1, starring2, starring3].filter(s => s.trim() !== '');
    if (starring.length > 0) {
      ctx.font = labelFont;
      ctx.fillText('starring', leftMargin, yPos);
      yPos += 22;
      ctx.font = valueFont;
      ctx.fillText(starring.map(s => s.toUpperCase()).join(' '), leftMargin, yPos);
    }

    // Download
    const link = document.createElement('a');
    link.download = 'polaroid-' + title.replace(/\s+/g, '-').toLowerCase() + '.png';
    link.href = canvas.toDataURL();
    link.click();
  };
  img.src = uploadedImage;
}
