import React from 'react';

const productData = [
  {
    name: 'Попона для телят утепленная',
    unit: 'шт',
    material: `Воздухопроницаемый материал\nДопускается машинная стирка при температуре 30° C\nПодходит для телят до 100 кг, при температуре от +50 до -25°`,
    size: '960 x 810мм,\n870 x 800мм',
  },
  {
    name: 'Изготовление штор для коровника',
    unit: 'шт',
    material: 'Ткань ПВХ водонепроницаемая, морозостойкая, брезентовая',
    size: 'По размерам заказчика',
  },
];

const CattleCareProducts = () => {
  return (
    <main className="main">
      <section className="section">
        <h1>Товары для содержания КРС</h1>
        <hr />
        <br />

        <div className="description-wrapper">
          <img src="productsImages/IMG_1391.jpg" alt="wipes-img" />
          <div className="description">
            <p>Вашему вниманию предлагается продукция, изготовленная ООО ПК «ЭБИСУ» для содержания крупного рогатого скота: попоны для телят, полотна рулонных штор для коровников. При изготовлении попон для телят учитывалось мнение зоотехников, ветеринарных врачей и специалистов ведущих животноводческих хозяйств России</p>
            <br />
          </div>
        </div>
        <br />
        <br />

        <div className="table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th>Артикул</th>
                <th>Наименование</th>
                <th>Ед. изм.</th>
                <th>Материал изготовления</th>
                <th>Размеры</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((item, index) => (
                <tr key={index}>
                  <td></td>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  <td>
                    {item.material.split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </td>
                  <td>
                    {item.size.split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>
    </main>
  )
}

export default CattleCareProducts