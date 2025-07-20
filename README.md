# N0NEWHY.github.io

## This is Read.me

## Todo List
- [ ] Update Content
		<section id="experience" class="experience">
			<h2>Projects Experiences</h2>
			<div class="card-container">
				<!-- 01 -->
				<div class="card">
					<div class="brief">
						<h3 class="title">Imperial Data Science Online Summer School</h3>
						<p class="date">
							<strong>Date:</strong><br>
							Jul.2022 – Aug.2022
						</p>
						<p class="organization">
							<strong>Organization:</strong><br>
							Imperial College London
						</p>
						<p class="tips">Click to See Detail</p>
					</div>

					<div class="detail">
						<p><strong>Brief:</strong></p>
						<ul>
							<li>Completed a 6-week online summer school program on data science and machine learning at
								Imperial College London
							</li>
							<li>
								Utilized U-Net model to enhance brain tumor recognition and classification.
							</li>
							<li>
								Preprocessed data using Albumentations library
							</li>
							<li>
								Built and trained model using PyTorch
							</li>
							<li>
								Evaluated model performance using dice and IoU metrics
							</li>
						</ul>
					</div>
				</div>

				<!-- 02 -->
				<div class="card">
					<div class="brief">
						<h3 class="title">Algorithmic biases in EDM(Education Data Mining)</h3>
						<p class="date">
							<strong>Date:</strong><br>
							Jul.2022 – Aug.2022
						</p>
						<p class="organization">
							<strong>Organization:</strong><br>
							North Carolina State University
						</p>
						<p class="tips">Click to See Detail</p>
					</div>

					<div class="detail">
						<p><strong>Brief:</strong><br></p>
						<ul>
							<li>
								Conducted experiments on multiple datasets with different distributions to explore the
								impact of data distribution on prediction results
							</li>

							<li>
								Analyzed the influence of different data preprocessing methods and models’ selection on
								the accuracy and fairness for predicting the students’ learning outcomes
							</li>

							<li>
								Compared different experiment results and evaluated methods to improve models or
								algorithms performance
							</li>

							<li>
								Presented research findings on algorithmic biases in Educational Data Mining (EDM) at
								the judged poster presentation exhibit
							</li>


						</ul>
					</div>
				</div>

				<!-- 03 -->
				<div class="card">
					<div class="brief">
						<h3 class="title">2D Tower Defense Game "Cloud War"</h3>
						<p class="date">
							<strong>Date:</strong><br>
							Dec.2022 – Apr.2023
						</p>
						<p class="organization">
							<strong>Organization:</strong><br>
							Timi X Sanjiao Cup Game Jam
						</p>
						<p class="tips">Click to See Detail</p>
					</div>

					<div class="detail">
						<p><strong>Brief:</strong></p>
						<ul>
							<li>Implemented game interface using UGUI, a grid-based map using the GridLayout component,
								and object placement and fusion using mouse clicks and EventSystem.</li>
							<li>Utilized collision detection, ray detection, and different LayerTag and Layer detection
								layers for bullet hit and enemy skill release.</li>
							<li><strong>Demo link:</strong> <a
									href="https://www.bilibili.com/video/BV1CT411s7Bd/?spm_id_from=333.337.search-card.all.click">Link</a>
							</li>
						</ul>
					</div>
				</div>
			</div>


			<script>
				const cards = document.querySelectorAll('.card');

				cards.forEach(card => {
					card.addEventListener('click', () => {
						card.classList.toggle('active');
					});
				});
			</script>
		</section>