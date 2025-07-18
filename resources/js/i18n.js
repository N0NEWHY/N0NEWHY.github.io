const headerDict={
  zh:{
    header_about:"自我描述",
    header_resume:"个人简历",
    header_projects:"一些项目",
    header_contact:"联系方式"},
  en:{
    header_about:"About Me",
    header_resume:"Resume",
    header_projects:"Projects",
    header_contact:"Contact"}
};




































let current=navigator.language.startsWith('zh')?'zh':'en';
document.addEventListener('DOMContentLoaded',()=>{
  const apply=()=>{
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      el.textContent=headerDict[current][el.dataset.i18n]||el.textContent;
    });
    document.getElementById('btnCN').classList.toggle('active',current==='zh');
    document.getElementById('btnENG').classList.toggle('active',current==='en');
  };
  apply();
  document.getElementById('btnCN').addEventListener('click',()=>{current='zh';apply();});
  document.getElementById('btnENG').addEventListener('click',()=>{current='en';apply();});
});