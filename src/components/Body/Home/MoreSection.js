import { Component } from 'react';
import '../../../assets/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default class MoreSection extends Component {
	render() {
		return (
			<div className='container'>
				<section>
					<h2 class='my-5 h3 text-center'>Not enough?</h2>

					<div class='row features-small mb-5 mt-3 wow fadeIn'>
						<div class='col-md-4'>
							<div class='row'>
								<div class='col-2'>
									<i class='fas fa-check-circle fa-2x indigo-text'></i>
								</div>
								<div class='col-10'>
									<h6 class='feature-title'>Easy and Fast Delivery</h6>
									<p class='grey-text'>
										We share one of the most reliable easy and fastest deliverry
										all arounnd nepal
									</p>
									<div style={{ height: '15px' }}></div>
								</div>
							</div>

							<div class='row'>
								<div class='col-2'>
									<i class='fas fa-check-circle fa-2x indigo-text'></i>
								</div>
								<div class='col-10'>
									<h6 class='feature-title'>400+ UI elements</h6>
									<p class='grey-text'>
										An impressive collection of flexible components allows you
										to develop any project.
									</p>
									<div style={{ height: '15px' }}></div>
								</div>
							</div>

							<div class='row'>
								<div class='col-2'>
									<i class='fas fa-check-circle fa-2x indigo-text'></i>
								</div>
								<div class='col-10'>
									<h6 class='feature-title'>600+ icons</h6>
									<p class='grey-text'>
										Hundreds of useful, scalable, vector icons at your disposal.
									</p>
									<div style={{ height: '15px' }}></div>
								</div>
							</div>

							<div class='row'>
								<div class='col-2'>
									<i class='fas fa-check-circle fa-2x indigo-text'></i>
								</div>
								<div class='col-10'>
									<h6 class='feature-title'>Fully responsive</h6>
									<p class='grey-text'>
										It doesn't matter whether your project will be displayed on
										desktop, laptop, tablet or mobile phone. MDB looks great on
										each screen.
									</p>
									<div style={{ height: '15px' }}></div>
								</div>
							</div>
						</div>

						<div class='col-md-4 flex-center'>
							<img
								src='https://mdbootstrap.com/img/Others/screens.png'
								alt='MDB Magazine Template displayed on iPhone'
								class='z-depth-0 img-fluid'
							/>
						</div>

						<div class='col-md-4 mt-2'>
							<div class='row'>
								<div class='col-2'>
									<i class='fas fa-check-circle fa-2x indigo-text'></i>
								</div>
								<div class='col-10'>
									<h6 class='feature-title'>70+ CSS animations</h6>
									<p class='grey-text'>
										Neat and easy to use animations, which will increase the
										interactivity of your project and delight your visitors.
									</p>
									<div style={{ height: '15px' }}></div>
								</div>
							</div>

							<div class='row'>
								<div class='col-2'>
									<i class='fas fa-check-circle fa-2x indigo-text'></i>
								</div>
								<div class='col-10'>
									<h6 class='feature-title'>Plenty of useful templates</h6>
									<p class='grey-text'>
										Need inspiration? Use one of our predefined templates for
										free.
									</p>
									<div style={{ height: '15px' }}></div>
								</div>
							</div>

							<div class='row'>
								<div class='col-2'>
									<i class='fas fa-check-circle fa-2x indigo-text'></i>
								</div>
								<div class='col-10'>
									<h6 class='feature-title'>Easy installation</h6>
									<p class='grey-text'>
										5 minutes, a few clicks and... done. You will be surprised
										at how easy it is.
									</p>
									<div style={{ height: '15px' }}></div>
								</div>
							</div>

							<div class='row'>
								<div class='col-2'>
									<i class='fas fa-check-circle fa-2x indigo-text'></i>
								</div>
								<div class='col-10'>
									<h6 class='feature-title'>Easy to use and customize</h6>
									<p class='grey-text'>
										Using MDB is straightforward and pleasant. Components
										flexibility allows you deep customization. You will easily
										adjust each component to suit your needs.
									</p>
									<div style={{ height: '15px' }}></div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const Wrapper = styled.section`
	min-height: 60vh;
	display: grid;
	place-items: center;
	.img-container {
		display: none;
	}

	p {
		line-height: 2;
		max-width: 45em;
		margin-bottom: 2rem;
		color: var(--clr-grey-5);
		font-size: 1rem;
	}
	@media (min-width: 992px) {
		height: calc(100vh - 5rem);
		grid-template-columns: 1fr 1fr;
		gap: 8rem;
		h1 {
			margin-bottom: 2rem;
		}
		p {
			font-size: 1.25rem;
		}
		.hero-btn {
			padding: 0.75rem 1.5rem;
			font-size: 1rem;
		}
		.img-container {
			display: block;
			position: relative;
		}
		.main-img {
			width: 100%;
			height: 550px;
			position: relative;
			border-radius: var(--radius);
			display: block;
			object-fit: cover;
		}
		.accent-img {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 250px;
			transform: translateX(-50%);
			border-radius: var(--radius);
		}
		.img-container::before {
			content: '';
			position: absolute;
			width: 10%;
			height: 80%;
			background: var(--clr-primary-9);
			bottom: 0%;
			left: -8%;
			border-radius: var(--radius);
		}
	}
`;
