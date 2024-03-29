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

		// Инициализация состояния: сайдбар открыт (isOpened: true)
		this.state = {
			isOpened: true,
			activeButton: null,
		};
	}

	// Метод для переключения состояния открытия/закрытия боковой панели
	toggleSidebar = () => {
		this.setState({
			isOpened: !this.state.isOpened,
		});
	};

	// Метод для перехода по маршруту
	goToRoute = (event, path) => {
		console.log(`going to "${path}"`);

		// Удаление класса "active" у предыдущей активной кнопки
		if (this.state.activeButton) {
			this.state.activeButton.classList.remove('active');
		}

		// Добавление класса "active" к текущей кнопке и обновление состояния
		event.currentTarget.classList.add('active');
		this.setState({ activeButton: event.currentTarget });
	};

	render() {
		const { isOpened } = this.state;

		// Формирование классов с добавлением 'opened'
		const getClasses = (baseClass) =>
			classnames(baseClass, { opened: isOpened });

		return (
			<aside className={getClasses('sidebar')}>
				<div className="wrapper">
					{/* Блок логотипа */}
					<div className={getClasses('logo-container')}>
						<div className="colored-circles">
							<svg
								width="37.5"
								height="11.25"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="5.625" cy="5.625" r="3.75" fill="#FF6347" />
								<circle cx="18.75" cy="5.625" r="3.75" fill="#FFA07A" />
								<circle cx="31.875" cy="5.625" r="3.75" fill="#90EE90" />
							</svg>
						</div>
						<div className="wrapper-logo">
							<div className="wrapper-round-button">
								<button
									className={getClasses('round-button')}
									onClick={this.toggleSidebar}
								>
									<FontAwesomeIcon
										icon={isOpened ? 'angle-left' : 'angle-right'}
									/>
								</button>
							</div>
							<img src={logo} alt="TensorFlow logo" />
							<span>TensorFlow</span>
						</div>
					</div>

					<div>
						{/* Блок основных навигационных элементов */}
						{routes.map((route) => (
							<div
								className={
									this.state.activeButton &&
									this.state.activeButton.classList[0] ===
										'navigation-elements' &&
									this.state.activeButton.textContent === route.title
										? getClasses('navigation-elements active')
										: getClasses('navigation-elements')
								}
								key={route.title}
								onClick={(event) => this.goToRoute(event, route.path)}
							>
								<FontAwesomeIcon icon={route.icon} />
								<span>{route.title}</span>
							</div>
						))}
					</div>
				</div>

				<div className="wrapper">
					<div>
						{/* Блок дополнительных навигационных элементов внизу */}
						{bottomRoutes.map((route) => (
							<div
								className={
									this.state.activeButton &&
									this.state.activeButton.classList[0] ===
										'navigation-elements' &&
									this.state.activeButton.textContent === route.title
										? getClasses('navigation-elements active')
										: getClasses('navigation-elements')
								}
								key={route.title}
								onClick={(event) => this.goToRoute(event, route.path)}
							>
								<FontAwesomeIcon icon={route.icon} />
								<span>{route.title}</span>
							</div>
						))}
					</div>
					<hr />
					{/* Блок профиля (пока без детализации) */}
					<div>
						<p className="profile-block">Profile Block</p>
					</div>
				</div>
			</aside>
		);
	}
}
