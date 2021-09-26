import './Carousel.scss';

export const  Carousel1 = () => {
	return (
		<>
			<div className="carousel1">
			<ul className="slides">
				<input type="radio" name="radio-buttons" id="img-1" checked />
				<li className="slide-container">
					<div className="slide-image">
						<img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg" />
					</div>
					<div className="carousel1-controls">
						<label  className="prev-slide">
							<span>&lsaquo;</span>
						</label>
						<label  className="next-slide">
							<span>&rsaquo;</span>
						</label>
					</div>
				</li>
				<input type="radio" name="radio-buttons" id="img-2" />
				<li className="slide-container">
					<div className="slide-image">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kuchi_nomads_in_Panjshir_River_Valley.jpg/1024px-Kuchi_nomads_in_Panjshir_River_Valley.jpg" />
					</div>
					<div className="carousel1-controls">
						<label  className="prev-slide">
							<span>&lsaquo;</span>
						</label>
						<label  className="next-slide">
							<span>&rsaquo;</span>
						</label>
					</div>
				</li>
				<input type="radio" name="radio-buttons" id="img-3" />
				<li className="slide-container">
					<div className="slide-image">
						<img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg" />
					</div>
					<div className="carousel1-controls">
						<label  className="prev-slide">
							<span>&lsaquo;</span>
						</label>
						<label  className="next-slide">
							<span>&rsaquo;</span>
						</label>
					</div>
				</li>
				<div className="carousel1-dots">
				<label  className="carousel1-dot" id="img-dot-1"></label>
				<label  className="carousel1-dot" id="img-dot-2"></label>
				<label  className="carousel1-dot" id="img-dot-3"></label>
				</div>
			</ul>
			</div>
		</>
	);
};

export const  Carousel2 = () => {
	return (
		<>
			<div className="carousel-container">
			<section className="carousel" aria-label="Gallery">
				<ol className="carousel__viewport">
				<li id="carousel__slide1" tabIndex={0}
					className="carousel__slide">
					<div className="carousel__snapper">
					<a href="#carousel__slide4"
						className="carousel__prev">Go to last slide</a>
					<a href="#carousel__slide2"
						className="carousel__next">Go to next slide</a>
					</div>
				</li>
				<li id="carousel__slide2" tabIndex={0} className="carousel__slide">
					<div className="carousel__snapper"></div>
					<a href="#carousel__slide1"
					className="carousel__prev">Go to previous slide</a>
					<a href="#carousel__slide3"
					className="carousel__next">Go to next slide</a>
				</li>
				<li id="carousel__slide3" tabIndex={0} className="carousel__slide">
					<div className="carousel__snapper"></div>
					<a href="#carousel__slide2"
					className="carousel__prev">Go to previous slide</a>
					<a href="#carousel__slide4"
					className="carousel__next">Go to next slide</a>
				</li>
				<li id="carousel__slide4" tabIndex={0} className="carousel__slide">
					<div className="carousel__snapper"></div>
					<a href="#carousel__slide3"
					className="carousel__prev">Go to previous slide</a>
					<a href="#carousel__slide1"
					className="carousel__next">Go to first slide</a>
				</li>
				</ol>
				<aside className="carousel__navigation">
				<ol className="carousel__navigation-list">
					<li className="carousel__navigation-item">
					<a href="#carousel__slide1"
						className="carousel__navigation-button">Go to slide 1</a>
					</li>
					<li className="carousel__navigation-item">
					<a href="#carousel__slide2"
						className="carousel__navigation-button">Go to slide 2</a>
					</li>
					<li className="carousel__navigation-item">
					<a href="#carousel__slide3"
						className="carousel__navigation-button">Go to slide 3</a>
					</li>
					<li className="carousel__navigation-item">
					<a href="#carousel__slide4"
						className="carousel__navigation-button">Go to slide 4</a>
					</li>
				</ol>
				</aside>
			</section>
			</div>
		</>
	);
};

export const  Carousel = () => {
	const images = [
		'https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kuchi_nomads_in_Panjshir_River_Valley.jpg/1024px-Kuchi_nomads_in_Panjshir_River_Valley.jpg',
		'https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg'
	];
	return (
	<>
		<section className="carousel flex">
			<div className="item-container">
			
			{ images.map((image, key) => {
				return <article className="flex">
					<div className="carrow left">&lsaquo;</div>
					<div className="img-container" key={key}>
						<img src={image}/>
					</div>
					<div className="carrow right">&rsaquo;</div>
					</article>
				})
				
			}
			</div>
			<aside>
			{ images.map((value, key) => {
				return <a key={key}>
					<span className="circle"></span>
				</a>
				})
			}
			</aside>
			
		</section>
	</>
	);
};