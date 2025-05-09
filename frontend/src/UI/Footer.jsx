import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__copyright">
                <p>&copy; {new Date().getFullYear()} ООО ПК «ЭБИСУ». Все права защищены.</p>
            </div>
            <div className="footer__sections">
                <div className="footer__section">
                    <h3>О компании</h3>
                    <ul>
                        <li><Link to="/about#mission">Миссия и стратегия</Link></li>
                        <li><Link to="/about#manufacture">Производство</Link></li>
                        <li><Link to="/about#partners">Партнеры</Link></li>
                        <li><Link to="/contacts#contacts">Контакты</Link></li>
                        {/* <li><a href="#">Отзывы</a></li> */}
                    </ul>
                </div>
                <div className="footer__section">
                    <h3>Информация</h3>
                    <ul>
                        <li><a href="https://www.google.com/maps?q=ул.+Пушкина,+1/9,+2,+Королёв,+Московская+обл.,+Россия,+141074" target="_blank">
                            Открыть на карте
                        </a></li>
                        <li><a href="tel:+74952291037">+7 (495) 229-10-37</a></li>
                        <li><a href="mailto:info@abisu.ru">info@abisu.ru</a></li>
                        <li><a href="#">Нормативные акты</a></li>
                        <li><Link to="/vocabulary">Краткий зоотехнический словарь</Link></li>

                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;