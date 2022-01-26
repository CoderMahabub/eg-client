import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../images/1.jpg';
import banner2 from '../../images/2.jpg';
import banner3 from '../../images/3.jpg';
import './Slider.css';

const Slider = () => {
	return (
		<Carousel id="banner">
			<Carousel.Item>
				<img className="d-block w-100" src={banner1} alt="First slide" />
				<Carousel.Caption className="mb-4">
					<h3 className="text-primary fw-bold fs-2">Quality Services</h3>
					<p className="text-primary fw-bold">We offer quality services instead of focusing on quantity</p>
					<Button variant="primary">
						<Link className="text-decoration-none text-light" to="/home#services">
							Our Services
						</Link>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={banner2} alt="Second slide" />

				<Carousel.Caption className="mb-4">
					<h3 className="text-primary fw-bold fs-2">Contact Us</h3>
					<p className="text-primary fw-bold">If you need any info, please contact us now</p>
					<Button variant="primary">
						<Link className="text-decoration-none text-light" to="/contact">
							{' '}
							Contact Us
						</Link>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={banner3} alt="Third slide" />

				<Carousel.Caption className="mb-4">
					<h3 className="text-primary fw-bold fs-2">About Us</h3>
					<p className="text-primary fw-bold">To know more in detail, don't forget to contact us.</p>
					<Button variant="primary">
						<Link className="text-decoration-none text-light" to="/home#about">
							{' '}
							About Us
						</Link>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
export default Slider;
