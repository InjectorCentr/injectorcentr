// Стаж с 1993 года: число и слово «год/года/лет» пересчитываются по текущей дате
(function () {
  var n = new Date().getFullYear() - 1993, m = n % 10, h = n % 100;
  var w = (m == 1 && h != 11) ? 'год' : (m >= 2 && m <= 4 && (h < 12 || h > 14)) ? 'года' : 'лет';
  document.querySelectorAll('[data-years]').forEach(function (e) { e.textContent = n; });
  document.querySelectorAll('[data-years-w]').forEach(function (e) { e.textContent = w; });
  document.querySelectorAll('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });
})();
