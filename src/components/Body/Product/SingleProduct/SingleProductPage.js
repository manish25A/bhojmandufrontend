import { Component } from 'react';
import { Form, FormGroup, Button, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const option = [
	{
		label: 'choose__type',
	},
	{
		label: 'Gadget',
		value: 'Gadget',
	},
	{
		label: 'Automobile',
		value: 'Automobile',
	},
];
class SingleProductPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			price: '',
			desc: '',
			producttype: '',
			biddingtime: '',
			productdescription: '',
			productimage: '',
			id: this.props.match.params.id,
		};
		this.updateProduct = this.updateProduct.bind(this);
		this.deleteProduct = this.deleteProduct.bind(this);
	}
	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	componentDidMount() {
		this.retriveProductDetail();
	}
	retriveProductDetail = () => {
		axios
			.get('http://localhost:4000/product/' + this.state.id)
			.then((response) => {
				this.setState({
					name: response.data.data.name,
					desc: response.data.data.desc,
					price: response.data.data.price,
				});
			});
	};
	deleteProduct = () => {
		axios
			.delete('http://localhost:8000/product/delete/' + this.state.id)
			.then((response) => {
				this.props.history.push('/product');
			})
			.catch((err) => {
				alert('Could Not Delete.');
			});
	};
	updateProduct = () => {
		axios
			.put('http://localhost:8000/product/update/' + this.state.id, this.state)
			.then((response) => {
				alert('Updated Successfully');
			})
			.catch((err) => {
				alert('could not update product detail');
				console.log(err);
			});
	};
	render() {
		return (
			<div className='productedit'>
				<h2 className='productedit__title'>Product Detail</h2>
				<div className='productedit__page'>
					<div className='productedit__form '>
						<div className='product__image'>
							{/* <img
								src={'http://localhost:8000/' + this.state.productimage}
								alt='product image'
							/> */}
						</div>
						<div className='productedit__info'>
							<div className='productedit__info__option'>
								<h2>Name</h2>
								<p>{this.state.name}</p>
							</div>
							<div className='productedit__info__option'>
								<h2>Price</h2>
								<p>Rs. {this.state.desc}</p>
							</div>
							<div className='productedit__info__option'>
								<h2>Quantity</h2>
								<p>{this.state.price}</p>
							</div>
							<div className='productedit__info__option'>
								<h2>Type</h2>
								<p>{this.state.vendorId}</p>
							</div>
							<div className='productedit__info__option'>
								<h2>Bidding-Time</h2>
								<p>{this.state.biddingtime}</p>
							</div>
							<div className='productedit__info__description'>
								<h2>Description</h2>
								<p>{this.state.productdescription}</p>
							</div>
							<Button onClick={this.deleteProduct}>Delete Product</Button>
						</div>
					</div>
					<div className='productedit__form'>
						<Form>
							<h2>Edit Product</h2>
							<FormGroup>
								<FormLabel className='productedit__label'>
									Product Name
								</FormLabel>
								<input
									className='form-control'
									type='text'
									placeholder='Product Name'
									name='productname'
									onChange={this.changeHandler}
									value={this.state.productname}
								/>
								<FormLabel className='productedit__label'>
									Product Price
								</FormLabel>
								<input
									className='form-control'
									type='Product Price'
									placeholder='Product Price'
									name='productprice'
									onChange={this.changeHandler}
									value={this.state.productprice}
								/>
								<div className='productedit__name'>
									<div className='productedit__option'>
										<FormLabel className='productedit__label'>
											Product Quantity
										</FormLabel>
										<input
											className='form-control'
											type='text'
											placeholder='Product Quantity'
											name='productquantity'
											onChange={this.changeHandler}
											value={this.state.productquantity}
										/>
									</div>
									<div className='productedit__option'>
										<FormLabel className='productedit__label'>
											Product Type
										</FormLabel>
										<select
											className='form-control'
											name='producttype'
											onChange={this.changeHandler}
											value={this.state.producttype}
										>
											{option.map((option) => (
												<option value={option.value}>{option.label}</option>
											))}
										</select>
									</div>
								</div>
								<FormLabel className='productedit__label'>
									Bidding Time
								</FormLabel>
								<input
									className='form-control'
									type='text'
									placeholder='Bidding Time'
									name='biddingtime'
									onChange={this.changeHandler}
									value={this.state.biddingtime}
								/>
								<FormLabel className='productedit__label'>
									Product Description
								</FormLabel>
								<input
									className='form-control'
									type='text'
									placeholder=' Product Description'
									name='productdescription'
									onChange={this.changeHandler}
									value={this.state.productdescription}
								/>
							</FormGroup>
							<Button
								className='productedit__button btn-lg btn-block'
								onClick={this.updateProduct}
							>
								Add Product
							</Button>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(SingleProductPage);
