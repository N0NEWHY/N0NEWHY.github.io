let current = navigator.language.startsWith('zh') ? 'zh' : 'en';
let i18nData = {};

document.addEventListener('DOMContentLoaded', () => {
  const loadLang = async (lang) => {
    try {
      const res = await fetch(`./resources/lang/${lang}.json`);
      console.log(lang);
      i18nData = await res.json();
      applyLang();
    } catch (err) {
      console.error("Language load failed:", err);
    }
  };

  const applyLang = () => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (i18nData[key]) {
      el.innerHTML = i18nData[key]; // ✅ 支持 emoji 和 HTML 标签
    }
    });

    document.getElementById('btnCN').classList.toggle('active', current === 'zh');
    document.getElementById('btnENG').classList.toggle('active', current === 'en');
  };

  document.getElementById('btnCN').addEventListener('click', () => {
    current = 'zh';
    loadLang(current);
  });

  document.getElementById('btnENG').addEventListener('click', () => {
    current = 'en';
    loadLang(current);
  });

  loadLang(current);
});
