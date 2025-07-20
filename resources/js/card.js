document.querySelectorAll('.view-detail-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.card').classList.add('active');
  });
});

document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.card').classList.remove('active');
  });
});
