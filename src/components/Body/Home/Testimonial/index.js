import { Component } from 'react';
import '../../../../assets/css/bootstrap/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../Testimonial/testimonial.css';

export default class TestimonialSection extends Component {
	componentDidMount() {}
	render() {
		return (
			<div className='container mt-5 d-flex justify-content-center '>
				<div className='row'>
					<h4 className='my-3'>Our Customer Reviews</h4>
					<div className='col-md-4'>
						<div className='maincard p-3'>
							<div className='thecard'>
								<div className='thefront text-center py-4'>
									{' '}
									<img
										src='https://i.imgur.com/o5uMfKo.jpg'
										className='rounded-circle mt-5'
										width='100'
									/>
									<h3 className='mt-2 mb-0'>Manish BC</h3>{' '}
									<small className='user_name'>Fashion Designer</small>
								</div>
								<div className='theback py-3 px-3'>
									<div className='quote mt-3'>
										<h4>
											<i className='fa fa-quote-left'></i>
										</h4>
										<p className='about text-justify'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur. Excepteur
											sint occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='maincard p-3'>
							<div className='thecard'>
								<div className='thefront text-center py-4'>
									{' '}
									<img
										src='https://i.imgur.com/tmdHXOY.jpg'
										className='rounded-circle mt-5'
										width='100'
									/>
									<h3 className='mt-2 mb-0'>Ujjwal Humagain</h3>{' '}
									<small className='user_name'>Super Star</small>
								</div>
								<div className='theback py-3 px-3'>
									<div className='quote mt-3'>
										<h4>
											<i className='fa fa-quote-left'></i>
										</h4>
										<p className='about text-justify'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur. Excepteur
											sint occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='maincard p-3'>
							<div className='thecard'>
								<div className='thefront text-center py-4'>
									{' '}
									<img
										src='https://i.imgur.com/8JiAQGa.jpg'
										className='rounded-circle mt-5'
										width='100'
									/>
									<h3 className='mt-2 mb-0'>Jimmy Anderson</h3>{' '}
									<small className='user_name'>Sales Manager</small>
								</div>
								<div className='theback py-3 px-3'>
									<div className='quote mt-3'>
										<h4>
											<i className='fa fa-quote-left'></i>
										</h4>
										<p className='about text-justify'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur. Excepteur
											sint occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
