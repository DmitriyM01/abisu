import React from 'react'

const equipmentData = [
  { diameter: '50', packing: '50 шт.', equipment: '' },
  { diameter: '60', packing: '50 шт.', equipment: 'Стеклянный молокопровод' },
  { diameter: '70', packing: '25 шт.', equipment: '' },
  { diameter: '80', packing: '20 шт.', equipment: 'Нержавеющий молокопровод' },
  { diameter: '90', packing: '20 шт.', equipment: '' },
  { diameter: '100', packing: '20 шт.', equipment: '' },
];

const Wads = () => {
  return (
    <main className="main">
      <section className="section">
        <h1>Пыжи</h1>
        <hr />
        <br />

        <div className="description-wrapper">
          <img src="productsImages/pyzhi.jpg" alt="wipes-img" />
          <div className="description">
            <p>Пыжи для промывки молокопроводов  это изделия повышенной степени качества и надёжности, поскольку выполнены из высокопрочного, экологически чистого поролона, и предназначены для промывки молокопроводов из стекла и нержавеющей стали.</p>
            <br />
            <p>Изготавливаются на специальном оборудовании для фигурной резки поролона.</p>
            <br />
          </div>
        </div>
        <br />
        <br />

        <div className="table-wrapper">
          <table className="equipment-table">
            <thead>
              <tr>
                <th>Артикул</th>
                <th>Диаметр, мм</th>
                <th>Фасовка</th>
                <th>Для какого оборудования</th>
              </tr>
            </thead>
            <tbody>
              {equipmentData.map((row, index) => (
                <tr key={index}>
                  <td></td>
                  <td>{row.diameter}</td>
                  <td>{row.packing}</td>
                  <td>{row.equipment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />

      </section>
    </main>
  )
}

export default Wads