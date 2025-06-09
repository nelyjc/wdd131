document.addEventListener('DOMContentLoaded', () => {
  let count = localStorage.getItem('reviewCount');
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem('reviewCount', count);
  document.getElementById('reviewCount').textContent = count;

  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
});
