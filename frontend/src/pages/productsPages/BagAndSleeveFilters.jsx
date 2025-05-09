import React from 'react'

const bagFilterData = [
  { name: 'СПА -400/25Г', size: 'd174 x 480мм', filtration: '25мкм', fabric: 'ситовая', application: 'с кольцом' },
  { name: 'СПЭ -400/40Г', size: 'd174 x 480мм', filtration: '40мкм', fabric: 'ситовая', application: 'с кольцом' },
  { name: 'СПА -400/60Г', size: 'd174 x 480мм', filtration: '60мкм', fabric: 'ситовая', application: 'с кольцом' },
  { name: 'ТПЭ -400/60Г', size: 'd174 x 480мм', filtration: '60мкм', fabric: 'полисэфирная', application: 'с кольцом' },
  { name: 'СПА -400/100Г', size: 'd174 x 480мм', filtration: '100мкм', fabric: 'ситовая', application: 'с кольцом' },
  { name: 'СПЭ -800/40Г', size: 'd174 x 880мм', filtration: '40мкм', fabric: 'ситовая', application: 'с кольцом' },
  { name: 'СПЭ -800/60Г', size: 'd174 x 880мм', filtration: '60мкм', fabric: 'ситовая', application: 'с кольцом' },
  { name: 'ТПЭ -800/60Г', size: 'd174 x 880мм', filtration: '60мкм', fabric: 'полисэфирная', application: 'с кольцом' },
  { name: 'СПА -800/100Г', size: 'd174 x 880мм', filtration: '100мкм', fabric: 'ситовая', application: 'с кольцом' },
];

const sleevesFilterData = [
  { id: 1, name: 'РСПА-400/25', size: '480 x 285мм', filtration: '25мкм', fabric: 'ситовая', application: 'Без кольца' },
  { id: 2, name: 'РСПЭ-400/40', size: '480 x 285мм', filtration: '40мкм', fabric: 'ситовая', application: 'Без кольца' },
  { id: 3, name: 'РСПА-400/60', size: '480 x 285мм', filtration: '60мкм', fabric: 'ситовая', application: 'Без кольца' },
  { id: 4, name: 'РСПА-400/100', size: '480 x 285мм', filtration: '100мкм', fabric: 'ситовая', application: 'Без кольца' },
  { id: 5, name: 'РПЭ-500/10', size: '565 x 135мм', filtration: '10мкм', fabric: 'полотно', application: 'Без кольца' },
  { id: 6, name: 'РСПА-500/25', size: '565 x 135мм', filtration: '25мкм', fabric: 'ситовая', application: 'Без кольца' },
  { id: 7, name: 'РПЭ-500/30', size: '565 x 135мм', filtration: '30мкм', fabric: 'полотно', application: 'Без кольца' },
  { id: 8, name: 'РПЭ-500/75', size: '565 x 135мм', filtration: '75мкм', fabric: 'полотно', application: 'Без кольца' },
  { id: 9, name: 'РСПЭ-500/40', size: '565 x 135мм', filtration: '40мкм', fabric: 'ситовая', application: 'Без кольца' },
  { id: 10, name: 'РТПЭ-500/60', size: '565 x 135мм', filtration: '60мкм', fabric: 'полисэфирная', application: 'Без кольца' },
  { id: 11, name: 'РСПА-500/300', size: '565 x 135мм', filtration: '300мкм', fabric: 'ситовая', application: 'Без кольца' },
  { id: 12, name: 'РСПА-500/500', size: '565 x 135мм', filtration: '500мкм', fabric: 'ситовая', application: 'Без кольца' },
];

const BagAndSleeveFilters = () => {
  return (
    <main className="main">
      <section className="section">
        <h1>Мешочные и рукавные фильтры</h1>
        <hr />
        <br />

        <div className="description-wrapper">
          <img src="productsImages/elementy-dlya-filtraxii-zhidkostej.jpg" alt="wipes-img" />
          <div className="description">
            <p>Наша компания обладает большим опытом в производстве мешочных и рукавных фильтроэлементов для различных отраслей пищевой и непищевой промышленности.</p>
            <br />
            <p>Для изготовления фильтроэлементов используются фильтровальные ткани и полотна отечественных производителей. Степень фильтрации от 5 мкм и ниже. Состав тканей и полотен: PP, PA, PE. Мешочные фильтроэлементы с металлическим кольцом из нержавеющей стали могут быть различного диаметра и длины.</p>
            <br />
            <p>Фильтроэлементы, произведённые нашей компанией, используются в пищевой промышленности для фильтрации сахарных соков и сиропов, пива, соков, кваса, растительных масел и т.д. Мешочные и рукавные фильтроэлементы применяются для фильтрации лакокрасочной продукци, для фильтрации воды на машинах по промывке деталей после обработки (фильтры марки FLUXA FILTRI) и др.</p>
            <br />
          </div>
        </div>
        <br />
        <br />

        <p>Фильтроэлементы мешочные (ФЭ)</p>
        <br />

        <div className="table-wrapper">
          <table className="filter-table">
            <thead>
              <tr>
                <th>Наименование ФЭ</th>
                <th>Размер, диаметр x длина (внутренние размеры)</th>
                <th>Тонкость фильтрации</th>
                <th>Ткань</th>
                <th>Применение</th>
              </tr>
            </thead>
            <tbody>
              {bagFilterData.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.size}</td>
                  <td>{row.filtration}</td>
                  <td>{row.fabric}</td>
                  <td>{row.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />

        <p>Фильтроэлементы рукавные</p>
        <br />
        <div className="table-wrapper">
          <table className="filter-table">
            <thead>
              <tr>
                <th>№</th>
                <th>Наименование ФЭ</th>
                <th>Размер, длина x ширина (внутренние размеры)</th>
                <th>Тонкость фильтрации</th>
                <th>Ткань</th>
                <th>Применение</th>
              </tr>
            </thead>
            <tbody>
              {sleevesFilterData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.size}</td>
                  <td>{row.filtration}</td>
                  <td>{row.fabric}</td>
                  <td>{row.application}</td>
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

export default BagAndSleeveFilters