import React from 'react';

const filterData = [
  { size: '50 x 50', pack160: '100 шт. полиэтилен', pack80: '', method: '', equipment: 'Прибор ОЧМ-М' },
  { size: '629 x 80', pack160: '650 шт. карт. короб', pack80: '', method: 'Ультразвуковая сварка', equipment: 'АДМ (Россия), Ларта WestfaliaSurge, Гомельагрокомплект' },
  { size: '620 x 60', pack160: '750 шт. карт. короб', pack80: '', method: 'Ультразвуковая сварка', equipment: 'De Laval, Polanes, Gascoigne Melotte' },
  { size: '610 x 95', pack160: '450 шт. карт. короб', pack80: '', method: 'Ультразвуковая сварка', equipment: 'De Laval, Polanes, Milikne' },
  { size: '450 x 75', pack160: '150 шт. карт. короб', pack80: '300 шт. карт. короб', method: 'Шитые', equipment: 'SAC' },
  { size: '456 x 86', pack160: '150 шт. карт. короб', pack80: '300 шт. карт. короб', method: 'Шитые', equipment: 'Fullwood Ltd.' },
  { size: '470 x 95', pack160: '150 шт. карт. короб', pack80: '300 шт. карт. короб', method: 'Шитые', equipment: 'WestfaliaSurge' },
  { size: '610 x 95', pack160: '150 шт. карт. короб', pack80: '300 шт. карт. короб', method: 'Шитые', equipment: 'De Laval, Polanes, Milikne' },
  { size: '620 x 60', pack160: '150 шт. карт. короб', pack80: '300 шт. карт. короб', method: 'Шитые', equipment: 'De Laval, Polanes, Gascoigne Melotte' },
  { size: '620 x 78', pack160: '150 шт. карт. короб', pack80: '300 шт. карт. короб', method: 'Шитые', equipment: 'BOU-MATIC' },
  { size: '629 x 80', pack160: '150 шт. карт. короб', pack80: '300 шт. карт. короб', method: 'Шитые', equipment: 'АДМ (Россия), Ларта WestfaliaSurge, Гомельагрокомплект' },
  { size: '635 x 85', pack160: '150 шт. карт. короб', pack80: '300 шт. карт. короб', method: 'Шитые', equipment: 'SAC' },
  { size: '640 x 90', pack160: '150 шт. карт. короб', pack80: '300 шт. карт. короб', method: 'Шитые', equipment: 'SAC, Gascoigne Melotte' },
  { size: '650 x 140', pack160: '100 шт. полиэтилен', pack80: '300 шт. полиэтилен', method: 'Шитые', equipment: 'Дейир-Мастер' },
  { size: '700 x 85', pack160: '150 шт. карт. короб', pack80: '300 шт. карт. короб', method: 'Шитые', equipment: 'WestfaliaSurge' },
  { size: '760 x 150', pack160: '150 шт. карт. короб', pack80: '300 шт. карт. короб', method: 'Шитые', equipment: 'Мексиканское оборудование' },
  { size: '800 x 75', pack160: '150 шт. полиэтилен', pack80: '300 шт. полиэтилен', method: 'Шитые', equipment: 'WestfaliaSurge, Impulsa' },
  { size: '800 x 155', pack160: '100 шт. карт. короб', pack80: '200 шт. карт. короб', method: 'Шитые', equipment: 'WestfaliaSurge' },
  { size: '820 x 150', pack160: '100 шт. полиэтилен', pack80: '200 шт. полиэтилен', method: 'Шитые', equipment: 'Мексиканское оборудование' },
  { size: '850 x 125', pack160: '100 шт. полиэтилен', pack80: '200 шт. полиэтилен', method: 'Шитые', equipment: 'WestfaliaSurge, BOU-MATIC' },
  { size: '850 x 230', pack160: '100 шт. полиэтилен', pack80: '200 шт. полиэтилен', method: 'Шитые', equipment: 'De Laval' },
  { size: '920 x 93', pack160: '125 шт. полиэтилен', pack80: '250 шт. полиэтилен', method: 'Шитые', equipment: 'Fullwood Ltd.' },
  { size: '960 x 110', pack160: '100 шт. полиэтилен', pack80: '200 шт. полиэтилен', method: 'Шитые', equipment: 'De Laval, Afikim' },
  { size: '980 x 140', pack160: '100 шт. полиэтилен', pack80: '200 шт. полиэтилен', method: 'Шитые', equipment: '' },
  { size: '1040 x 44', pack160: '125 шт. полиэтилен', pack80: '250 шт. полиэтилен', method: 'Шитые', equipment: 'Роботы De Laval' },
];


const FiltersForMilk = () => {

  return (
    <main className="main">
      <section className="section-elementy-dlya-filtraxii-moloka">
        <h1>Элементы для фильтрации молока (фильтры для молока)</h1>
        <hr />

        <div className="elementy-dlya-filtraxii-moloka-description">
          <img src="productsImages/elementy-dlya-filtraxii-moloka.jpg" alt="" />
          <div className="description">
            <p><b>Элементы для фильтрации молока (фильтроэлементы)</b> применяются на установках с доением в молокопроводах и доильных залах отечественного и импортного производства.</p>
            <p>Элементы для фильтрации молока <b>(фильтры для молока)</b> изготовлены из иглопробивного термоскрепленного полотна плотностью 160 г/м.кв. Данное полотно не имеет зарубежных аналогов и обеспечивает максимально высокую степень очистки молока. Фильтроэлементы с повышенной поверхностной плотностью позволяют снизить количество соматических клеток примерно на 60 - 70 тыс. единиц.</p>
            <p>Использование фильтроэлементов данной плотности также помогает контролировать техническое состояние молокопровода и системы в целом. Если за дойку использовали один фильтроэлемент на одном фильтре - значит молоко достаточно чистое и в нем отсутствует дестабилизированный жир. Если за дойку на одном фильтре использовали более одного фильтроэлемента - значит необходимо искать и устранять проблемы с молокопроводом.</p>
            <p>Фильтроэлементы для молока <b>(фильтры для молока)</b> имеют высокую прочность на сжатие и растяжение, что позволяет использовать их в условиях повышенных механических нагрузок.</p>
            <p><b>Продукция сертифицирована.</b></p>
          </div>
        </div>
        <br />
        <br />

        <div className="table-wrapper">
          <table className="filter-table">
            <thead>
              <tr>
                <th>Размер фильтроэлемента (в милиметрах)</th>
                <th colSpan={2}>Фасовка, упаковка</th>
                <th>Способ изготовления</th>
                <th>Для какого оборудования предназначено</th>
              </tr>
              <tr>
                <th></th>
                <th>Плотность 160 г/м2</th>
                <th>Плотность 80 г/м2</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filterData.map((row, index) => (
                <tr key={index}>
                  <td>{row.size}</td>
                  <td>{row.pack160}</td>
                  <td>{row.pack80}</td>
                  <td>{row.method}</td>
                  <td>{row.equipment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <p>*Размеры фильтроэлементов, не указанные в таблице изготавливаются по заданию заказчика.</p>
        <br />
      </section>
    </main>
  )
}

export default FiltersForMilk;