const projectDetails = [
  `
  <h3>Imperial Data Science Summer School</h3>
  <ul>
    <li>6-week ML program at Imperial College London</li>
    <li>Used U-Net for brain tumor segmentation</li>
    <li>Preprocessed data with Albumentations</li>
    <li>Trained models in PyTorch</li>
    <li>Evaluated using Dice/IoU</li>
  </ul>
  `,
  `
  <h3>Algorithmic Bias in Education Data Mining</h3>
  <ul>
    <li>Analyzed data distribution vs. prediction fairness</li>
    <li>Compared models & preprocessing strategies</li>
    <li>Presented findings in poster session</li>
  </ul>
  `,
  `
  <h3>2D Game "Cloud War"</h3>
  <ul>
    <li>Unity-based tower defense game</li>
    <li>Used UGUI, GridLayout, EventSystem</li>
    <li>Raycast and collision detection for gameplay</li>
    <li><a href="https://www.bilibili.com/video/BV1CT411s7Bd/" target="_blank">Demo Video</a></li>
  </ul>
  `
];

function openDetail(index) {
  document.getElementById("modalBody").innerHTML = projectDetails[index];
  document.getElementById("detailModal").style.display = "flex";
}

function closeDetail() {
  document.getElementById("detailModal").style.display = "none";
}