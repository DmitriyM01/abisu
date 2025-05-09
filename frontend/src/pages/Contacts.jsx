import React from "react";

const Contacts = () => {

    return (
        <main className="main">
            <section className="section about">
                <h1>Контакты</h1>
                <hr />
                <h2><b>ООО Производственная компания «ЭБИСУ»</b></h2>
                <br />
                <h3>Генеральный директор</h3>
                <div className="contact-section">
                    <p><b>Имя Фамилия Отчество</b></p>
                    <p>+7 800 555 3535</p>
                    <p></p>
                </div>
                <br />
                <h3>Коммерческий директор</h3>
                <div className="contact-section">
                    <p><b>Имя Фамилия Отчество</b></p>
                    <p>+7 800 555 3535</p>
                    <p>E-mail: mail@mail.com</p>
                    <p></p>
                </div>
                <br />
                <h3>Руководитель отдела продаж</h3>
                <div className="contact-section">
                    <p><b>Имя Фамилия Отчество</b></p>
                    <p>+7 800 555 3535</p>
                    <p>E-mail: mail@mail.com</p>
                    <p></p>
                </div>
                <br />
                <h3>Менеджер по продажам</h3>
                <div className="contact-section">
                    <p><b>Имя Фамилия Отчество</b></p>
                    <p>+7 800 555 3535</p>
                    <p>E-mail: mail@mail.com</p>
                    <p></p>
                </div>
            </section>
        </main>
    )
}

export default Contacts;