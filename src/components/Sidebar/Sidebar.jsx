// Импорт стилей и библиотек
import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';

// Массив с основными навигационными маршрутами
const routes = [
	{ title: 'Home', icon: 'fas-solid fa-house', path: '/' },
	{ title: 'Sales', icon: 'chart-line', path: '/sales' },
	{ title: 'Costs', icon: 'chart-column', path: '/costs' },
	{ title: 'Payments', icon: 'wallet', path: '/payments' },
	{ title: 'Finances', icon: 'chart-pie', path: '/finances' },
	{ title: 'Messages', icon: 'envelope', path: '/messages' },
];

// Массив с дополнительными навигационными маршрутами внизу
const bottomRoutes = [
	{ title: 'Settings', icon: 'sliders', path: '/settings' },
	{ title: 'Support', icon: 'phone-volume', path: '/support' },
];

// Компонент Sidebar
export default class Sidebar extends React.Component {
	constructor(props) {
		super(props);

		// Инициализация состояния: боковая панель открыта (isOpened: true)
		this.state = {
			isOpened: true,
		};
	}

	// Метод для переключения состояния открытия/закрытия боковой панели
	toggleSidebar = () => {
		this.setState((state) => ({ isOpened: !state.isOpened }));
	};

	// Метод для перехода по маршруту
	goToRoute = (path) => {
		console.log(`going to "${path}"`);
	};

	// Рендер компонента
	render() {
		// Деструктуризация состояния
		const { isOpened } = this.state;

		// Формирование классов для контейнера с использованием библиотеки classnames
		const containerClassnames = classnames('sidebar', { opened: isOpened });

		return (
			<div className={containerClassnames}>
				<div>
					{/* Логотип и название */}
					<img src={logo} alt="TensorFlow logo" />
					<span>TensorFlow</span>
					{/* Кнопка для открытия/закрытия боковой панели */}
					<button onClick={this.toggleSidebar}>
						<FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
					</button>
				</div>

				<div>
					{/* Основные навигационные элементы */}
					{routes.map((route) => (
						<div key={route.title} onClick={() => this.goToRoute(route.path)}>
							<FontAwesomeIcon icon={route.icon} />
							<span>{route.title}</span>
						</div>
					))}
				</div>

				<div>
					{/* Дополнительные навигационные элементы внизу */}
					{bottomRoutes.map((route) => (
						<div key={route.title} onClick={() => this.goToRoute(route.path)}>
							<FontAwesomeIcon icon={route.icon} />
							<span>{route.title}</span>
						</div>
					))}
				</div>
			</div>
		);
	}
}
