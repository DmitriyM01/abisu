import React from 'react';

const bagData = [
	{
		type: 'Для творога косой',
		size: '790 × 560 × 420',
		lavsan117: '●',
		lavsan125: '',
		lavsan145: '●',
		kapron: '●',
		blyaz262: '',
		spanbell: ''
	},
	{
		type: 'Для творога косой ОДНОРАЗОВЫЙ',
		size: '790 × 560 × 420',
		lavsan117: '',
		lavsan125: '',
		lavsan145: '',
		kapron: '',
		blyaz262: '',
		spanbell: ''
	},
	{
		type: 'Для творога «Фермерский» с/ш',
		size: '650 × 330',
		lavsan117: '●',
		lavsan125: '●',
		lavsan145: '●',
		kapron: '●',
		blyaz262: '●',
		spanbell: '●'
	},
	{
		type: 'Для творога прямой без шнура',
		size: '800 × 420',
		lavsan117: '●',
		lavsan125: '●',
		lavsan145: '●',
		kapron: '●',
		blyaz262: '●',
		spanbell: '●'
	},
	{
		type: 'Для творога ОДНОРАЗОВЫЙ',
		size: '800 × 420',
		lavsan117: '',
		lavsan125: '',
		lavsan145: '',
		kapron: '',
		blyaz262: '',
		spanbell: ''
	},
	{
		type: 'Для творога прямой со шнуром',
		size: '800 × 420',
		lavsan117: '●',
		lavsan125: '●',
		lavsan145: '●',
		kapron: '●',
		blyaz262: '●',
		spanbell: '●'
	},
	{
		type: 'Для творога прямой со шнуром',
		size: '460 × 330',
		lavsan117: '●',
		lavsan125: '●',
		lavsan145: '●',
		kapron: '●',
		blyaz262: '●',
		spanbell: '●'
	},
	{
		type: 'Для сцеживания молока на флягу со шнуром',
		size: '250 × 420',
		lavsan117: '●',
		lavsan125: '●',
		lavsan145: '●',
		kapron: '●',
		blyaz262: '',
		spanbell: ''
	},
	{
		type: 'Для фильтрации молока на шланг со шнуром',
		size: '500 × 150',
		lavsan117: '●',
		lavsan125: '●',
		lavsan145: '●',
		kapron: '',
		blyaz262: '',
		spanbell: ''
	}
];

const CurdBags = () => {
	return (
		<main className="main">
			<section className="section">
				<h1>Мешки для творога</h1>
				<hr />
				<br />

				<div className="description-wrapper">
					<img src="productsImages/meshki-dlya-otzhima-tvoroga.jpg" alt="wipes-img" />
					<div className="description">
						<p><b>Мешки для отжима творога,  мешки для цежения молока, чехлы для баков</b></p>
						<br />
						<p>Неотъемлемая часть современной технологии производства молочных продуктов  - это лавсановые, бязевые и одноразовые мешки, которые используются на молочных заводах (в цехах) для производства творога и творожного продукта различной жирности. Используются особые виды лавсанов и бязи, которые производятся специально для нашей компании.</p>
						<br />
						<p>Другие названия товара: мешки для творога, мешочки для творога, дренажные мешки для творога, мешки для творога из лавсана.</p>
						<br />
						<p>Мешки со шнуром можно использовать для приготовления творога в домашних условиях.</p>
						<br />
					</div>
				</div>
				<br />
				<br />

				<div className="table-wrapper">
					<table className="filter-table">
						<thead>
							<tr>
								<th>Вид мешка</th>
								<th>Размер, мм</th>
								<th>Лавсан, пл. 117 г/м²</th>
								<th>Лавсан, пл. 125 г/м²</th>
								<th>Лавсан, пл. 145 г/м²</th>
								<th>Капрон (ПА)</th>
								<th>Бязь 262</th>
								<th>СпанБелл</th>
							</tr>
						</thead>
						<tbody>
							{bagData.map((row, index) => (
								<tr key={index}>
									<td>{row.type}</td>
									<td>{row.size}</td>
									<td>{row.lavsan117}</td>
									<td>{row.lavsan125}</td>
									<td>{row.lavsan145}</td>
									<td>{row.kapron}</td>
									<td>{row.blyaz262}</td>
									<td>{row.spanbell}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<br />

				<p><b>Продукция сертифицирована.</b></p>
			</section>
		</main>
	)
}

export default CurdBags