document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btnWhatsapp');

  btn.addEventListener('click', function () {
    const numero = '526182371318'; // 52 = Mexico, 1 = para moviles
    const url = `https://wa.me/${numero}`;
    window.open(url, '_blank');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btnfacebook');

  btn.addEventListener('click', function () {
    const url = `https://www.facebook.com/profile.php?id=100065340647726`;
    window.open(url, '_blank');
  });
});

// PARA LOS ICONOS FOOTER

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('icnWhatsapp');

  btn.addEventListener('click', function () {
    const numero = '526182371318'; // 52 = Mexico, 1 = para moviles
    const url = `https://wa.me/${numero}`;
    window.open(url, '_blank');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('icnFacebook');

  btn.addEventListener('click', function () {
    const url = `https://www.facebook.com/profile.php?id=100065340647726`;
    window.open(url, '_blank');
  });
});