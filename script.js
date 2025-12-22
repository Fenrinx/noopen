// Основной скрипт для Construck Pro - Все компоненты на одной странице

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация приложения
    initApp();
    
    // Загрузка всех компонентов на одной странице
    loadAllComponentsOnOnePage();
    
    // Настройка навигации
    setupNavigation();
    
    // Настройка поиска
    setupSearch();
});

// Конфигурация приложения
const CONFIG = {
    categories: [
        {
            id: 'buttons',
            title: 'Кнопки',
            icon: 'hand-pointer',
            count: 24,
            subcategories: [
                { id: 'flat', title: 'Плоские', count: 4 },
                { id: '3d', title: 'Объемные', count: 4 },
                { id: 'neon', title: 'Неоновые', count: 4 },
                { id: 'glass', title: 'Стеклянные', count: 4 },
                { id: 'animated', title: 'Анимированные', count: 4 },
                { id: 'special', title: 'Специальные', count: 4 }
            ]
        },
        {
            id: 'cards',
            title: 'Карточки',
            icon: 'id-card',
            count: 36,
            subcategories: [
                { id: 'product', title: 'Продукта', count: 12 },
                { id: 'profile', title: 'Профиля', count: 12 },
                { id: 'stats', title: 'Статистики', count: 12 }
            ]
        },
        {
            id: 'dividers',
            title: 'Разделители',
            icon: 'minus',
            count: 32,
            subcategories: [
                { id: 'linear', title: 'Линейные', count: 10 },
                { id: 'symbolic', title: 'Символьные', count: 10 },
                { id: 'shaped', title: 'Форменные', count: 12 }
            ]
        },
        {
            id: 'badges',
            title: 'Бейджи',
            icon: 'certificate',
            count: 24,
            subcategories: [
                { id: 'color', title: 'Цветовые', count: 6 },
                { id: 'form', title: 'Формовые', count: 5 },
                { id: 'icon', title: 'С иконками', count: 4 },
                { id: 'animated', title: 'Анимированные', count: 4 },
                { id: 'thematic', title: 'Тематические', count: 5 }
            ]
        },
        {
            id: 'forms',
            title: 'Формы',
            icon: 'edit',
            count: 28,
            subcategories: [
                { id: 'inputs', title: 'Поля ввода', count: 14 },
                { id: 'groups', title: 'Группы форм', count: 14 }
            ]
        },
        {
            id: 'loaders',
            title: 'Загрузчики',
            icon: 'spinner',
            count: 16,
            subcategories: [
                { id: 'circular', title: 'Круговые', count: 8 },
                { id: 'linear', title: 'Линейные', count: 8 }
            ]
        },
        {
            id: 'icons',
            title: 'Иконки',
            icon: 'icons',
            count: 48,
            subcategories: [
                { id: 'social', title: 'Социальные', count: 6 },
                { id: 'actions', title: 'Действия', count: 6 },
                { id: 'navigation', title: 'Навигация', count: 6 },
                { id: 'status', title: 'Статусы', count: 6 },
                { id: 'files', title: 'Файлы', count: 6 },
                { id: 'notifications', title: 'Уведомления', count: 6 },
                { id: 'settings', title: 'Настройки', count: 6 },
                { id: 'weather', title: 'Погода', count: 6 }
            ]
        },
        {
            id: 'navigation',
            title: 'Навигация',
            icon: 'compass',
            count: 18,
            subcategories: [
                { id: 'menus', title: 'Меню', count: 8 },
                { id: 'tabs', title: 'Вкладки', count: 4 },
                { id: 'breadcrumbs', title: 'Хлебные крошки', count: 6 }
            ]
        },
        {
            id: 'hero',
            title: 'Герой-секции',
            icon: 'star',
            count: 16
        },
        {
            id: 'features',
            title: 'Особенности',
            icon: 'th',
            count: 24
        },
        {
            id: 'testimonials',
            title: 'Отзывы',
            icon: 'comment',
            count: 20
        },
        {
            id: 'pricing',
            title: 'Ценовые таблицы',
            icon: 'tags',
            count: 12
        },
        {
            id: 'footers',
            title: 'Подвалы',
            icon: 'window-minimize',
            count: 18
        },
        {
            id: 'animations',
            title: 'Анимации',
            icon: 'bolt',
            count: 24
        },
        {
            id: 'typography',
            title: 'Типографика',
            icon: 'font',
            count: 16
        },
        {
            id: 'layouts',
            title: 'Сетки и макеты',
            icon: 'th-large',
            count: 12
        },
        {
            id: 'modals',
            title: 'Модальные окна',
            icon: 'window-restore',
            count: 10
        },
        {
            id: 'tabs',
            title: 'Вкладки и аккордеоны',
            icon: 'folder',
            count: 14
        },
        {
            id: 'gallery',
            title: 'Галереи изображений',
            icon: 'images',
            count: 8
        },
        {
            id: 'breadcrumbs',
            title: 'Хлебные крошки',
            icon: 'bread-slice',
            count: 6
        },
        {
            id: 'pagination',
            title: 'Пагинация',
            icon: 'ellipsis-h',
            count: 6
        }
    ]
};

// Инициализация приложения
function initApp() {
    // Настройка переключения тем
    setupThemeSwitcher();
    
    // Настройка меню
    setupMenu();
    
    // Настройка категорий в сайдбаре
    setupCategories();
    
    // Настройка кнопки прокрутки наверх
    setupScrollToTop();
}

// Настройка переключения тем
function setupThemeSwitcher() {
    const themeBtns = document.querySelectorAll('.theme-btn');
    const notification = document.getElementById('notification');
    
    themeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            
            // Удаляем активный класс у всех кнопок
            themeBtns.forEach(b => b.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Меняем тему
            document.body.className = `theme-${theme}`;
            
            // Показываем уведомление
            showNotification(`Тема "${this.querySelector('span:nth-child(2)').textContent}" активирована`);
        });
    });
}

// Настройка меню
function setupMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
}

// Настройка категорий в сайдбаре
function setupCategories() {
    const categoryList = document.getElementById('categoryList');
    
    // Генерируем HTML для категорий
    let categoriesHTML = '';
    
    CONFIG.categories.forEach((category, index) => {
        categoriesHTML += `
            <button class="category-item" data-category="${category.id}">
                <i class="fas fa-${category.icon}"></i>
                <span>${category.title}</span>
                <span class="category-expand"><i class="fas fa-chevron-right"></i></span>
            </button>
        `;
    });
    
    categoryList.innerHTML = categoriesHTML;
    
    // Назначаем обработчики событий для категорий
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-category');
            
            // Прокручиваем к секции
            scrollToSection(categoryId);
            
            // Закрываем сайдбар на мобильных
            if (window.innerWidth < 1200) {
                document.getElementById('sidebar').classList.remove('active');
            }
        });
    });
}

// Настройка навигации
function setupNavigation() {
    const componentsNav = document.getElementById('componentsNav');
    
    // Группируем категории для навигации
    const navGroups = [
        {
            title: 'Основные',
            categories: ['buttons', 'cards', 'forms', 'navigation']
        },
        {
            title: 'Элементы',
            categories: ['dividers', 'badges', 'icons', 'loaders']
        },
        {
            title: 'Блоки',
            categories: ['hero', 'features', 'testimonials', 'pricing', 'footers']
        },
        {
            title: 'Специальные',
            categories: ['animations', 'typography', 'layouts', 'modals', 'tabs', 'gallery']
        }
    ];
    
    let navHTML = '';
    
    navGroups.forEach(group => {
        group.categories.forEach(categoryId => {
            const category = CONFIG.categories.find(c => c.id === categoryId);
            if (category) {
                navHTML += `
                    <button class="nav-btn" data-category="${category.id}">
                        ${category.title}
                    </button>
                `;
            }
        });
    });
    
    componentsNav.innerHTML = navHTML;
    
    // Назначаем обработчики для навигационных кнопок
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-category');
            
            // Прокручиваем к секции
            scrollToSection(categoryId);
            
            // Добавляем активный класс
            navBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Загрузка всех компонентов на одной странице
function loadAllComponentsOnOnePage() {
    const container = document.getElementById('components-container');
    
    let allComponentsHTML = '';
    
    CONFIG.categories.forEach((category, index) => {
        // Создаем заголовок секции
        allComponentsHTML += `
            <section class="full-category-section" id="${category.id}">
                <div class="full-category-header">
                    <div class="full-category-title">
                        <div class="full-category-icon">
                            <i class="fas fa-${category.icon}"></i>
                        </div>
                        <div>
                            <h3>
                                <span class="category-index">${index + 1}</span>
                                ${category.title}
                                <span class="category-count">${category.count} вариантов</span>
                            </h3>
                            <p class="full-category-description">
                                ${getCategoryDescription(category.id)}
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="full-category-examples" id="${category.id}-examples">
                    <!-- Примеры компонентов будут загружены здесь -->
                </div>
                
                ${index < CONFIG.categories.length - 1 ? `
                <div class="category-divider">
                    <div class="divider-line"></div>
                    <div class="divider-text">
                        <i class="fas fa-arrow-down"></i>
                        Следующая категория
                    </div>
                    <div class="divider-line"></div>
                </div>
                ` : ''}
            </section>
        `;
    });
    
    container.innerHTML = allComponentsHTML;
    
    // Загружаем примеры для каждой категории
    CONFIG.categories.forEach(category => {
        loadCategoryExamples(category);
    });
}

// Загрузка примеров для категории
function loadCategoryExamples(category) {
    const examplesContainer = document.getElementById(`${category.id}-examples`);
    if (!examplesContainer) return;
    
    // Очищаем контейнер
    examplesContainer.innerHTML = '';
    
    // Загружаем примеры в зависимости от категории
    switch(category.id) {
        case 'buttons':
            loadButtonExamples(examplesContainer, category.count);
            break;
        case 'cards':
            loadCardExamples(examplesContainer, category.count);
            break;
        case 'dividers':
            loadDividerExamples(examplesContainer, category.count);
            break;
        case 'badges':
            loadBadgeExamples(examplesContainer, category.count);
            break;
        case 'forms':
            loadFormExamples(examplesContainer, category.count);
            break;
        case 'loaders':
            loadLoaderExamples(examplesContainer, category.count);
            break;
        case 'icons':
            loadIconExamples(examplesContainer, category.count);
            break;
        case 'navigation':
            loadNavigationExamples(examplesContainer, category.count);
            break;
        case 'hero':
            loadHeroExamples(examplesContainer, category.count);
            break;
        case 'features':
            loadFeatureExamples(examplesContainer, category.count);
            break;
        case 'testimonials':
            loadTestimonialExamples(examplesContainer, category.count);
            break;
        case 'pricing':
            loadPricingExamples(examplesContainer, category.count);
            break;
        case 'footers':
            loadFooterExamples(examplesContainer, category.count);
            break;
        case 'animations':
            loadAnimationExamples(examplesContainer, category.count);
            break;
        case 'typography':
            loadTypographyExamples(examplesContainer, category.count);
            break;
        case 'layouts':
            loadLayoutExamples(examplesContainer, category.count);
            break;
        case 'modals':
            loadModalExamples(examplesContainer, category.count);
            break;
        case 'tabs':
            loadTabExamples(examplesContainer, category.count);
            break;
        case 'gallery':
            loadGalleryExamples(examplesContainer, category.count);
            break;
        case 'breadcrumbs':
            loadBreadcrumbExamples(examplesContainer, category.count);
            break;
        case 'pagination':
            loadPaginationExamples(examplesContainer, category.count);
            break;
        default:
            loadGenericExamples(examplesContainer, category);
    }
}

// Вспомогательная функция для получения описания категории
function getCategoryDescription(categoryId) {
    const descriptions = {
        'buttons': 'Разнообразные стили кнопок для любых действий: плоские, объемные, неоновые, стеклянные и анимированные варианты.',
        'cards': 'Карточки для отображения контента: продуктовые карточки, профили пользователей, карточки статистики и информации.',
        'dividers': 'Элементы разделения контента: линейные, символьные и форменные разделители для улучшения читаемости.',
        'badges': 'Бейджи для маркировки контента: цветовые, формовые, с иконками и анимированные варианты.',
        'forms': 'Элементы форм для сбора данных: поля ввода, чекбоксы, радиокнопки и различные компоновки форм.',
        'loaders': 'Индикаторы загрузки: круговые и линейные анимации для отображения процесса загрузки.',
        'icons': 'Набор иконок для различных целей: социальные сети, действия, навигация, статусы и уведомления.',
        'navigation': 'Элементы навигации: меню, вкладки, хлебные крошки для удобной навигации по сайту.',
        'hero': 'Герой-секции для привлечения внимания пользователей на главных страницах и лендингах.',
        'features': 'Карточки особенностей и преимуществ для презентации ключевых возможностей продукта.',
        'testimonials': 'Блоки отзывов и рекомендаций для повышения доверия пользователей.',
        'pricing': 'Таблицы цен и тарифов для отображения вариантов подписки и покупок.',
        'footers': 'Подвалы сайта с навигацией, контактами и дополнительной информацией.',
        'animations': 'Анимации и эффекты для оживления интерфейса и улучшения пользовательского опыта.',
        'typography': 'Типографические стили и композиции для красивого отображения текстового контента.',
        'layouts': 'Сетки и макеты для организации контента на странице.',
        'modals': 'Модальные окна для отображения дополнительной информации и взаимодействия с пользователем.',
        'tabs': 'Вкладки и аккордеоны для организации контента на ограниченном пространстве.',
        'gallery': 'Галереи изображений для презентации фотографий и медиа-контента.',
        'breadcrumbs': 'Хлебные крошки для навигации по иерархии страниц сайта.',
        'pagination': 'Пагинация для навигации по большому количеству страниц или элементов.'
    };
    
    return descriptions[categoryId] || 'Коллекция компонентов для использования в ваших проектах.';
}

// Загрузка примеров кнопок
function loadButtonExamples(container, count) {
    const buttonTypes = [
        { name: 'Плоская 1', class: 'demo-btn-flat-1' },
        { name: 'Плоская 2', class: 'demo-btn-flat-2' },
        { name: 'Плоская 3', class: 'demo-btn-flat-3' },
        { name: 'Плоская 4', class: 'demo-btn-flat-4' },
        { name: 'Объемная 1', class: 'demo-btn-3d-1' },
        { name: 'Объемная 2', class: 'demo-btn-3d-2' },
        { name: 'Объемная 3', class: 'demo-btn-3d-3' },
        { name: 'Объемная 4', class: 'demo-btn-3d-4' },
        { name: 'Неоновая 1', class: 'demo-btn-neon-1' },
        { name: 'Неоновая 2', class: 'demo-btn-neon-2' },
        { name: 'Неоновая 3', class: 'demo-btn-neon-3' },
        { name: 'Неоновая 4', class: 'demo-btn-neon-4' },
        { name: 'Стеклянная 1', class: 'demo-btn-glass-1' },
        { name: 'Стеклянная 2', class: 'demo-btn-glass-2' },
        { name: 'Стеклянная 3', class: 'demo-btn-glass-3' },
        { name: 'Стеклянная 4', class: 'demo-btn-glass-4' },
        { name: 'Анимированная 1', class: 'demo-btn-animated-1' },
        { name: 'Анимированная 2', class: 'demo-btn-animated-2' },
        { name: 'Анимированная 3', class: 'demo-btn-animated-3' },
        { name: 'Анимированная 4', class: 'demo-btn-animated-4' },
        { name: 'Специальная 1', class: 'demo-btn-special-1' },
        { name: 'Специальная 2', class: 'demo-btn-special-2' },
        { name: 'Специальная 3', class: 'demo-btn-special-3' },
        { name: 'Специальная 4', class: 'demo-btn-special-4' }
    ];
    
    for (let i = 0; i < Math.min(count, buttonTypes.length); i++) {
        const btn = buttonTypes[i];
        const example = createExampleItem({
            number: i + 1,
            name: `Кнопка: ${btn.name}`,
            preview: `<button class="demo-btn ${btn.class}">Кнопка</button>`
        });
        container.appendChild(example);
    }
}

// Загрузка примеров карточек
function loadCardExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 36); i++) {
        let preview = '';
        
        if (i <= 12) {
            // Карточки продукта
            preview = `
                <div class="demo-card demo-card-product card-product-${i}">
                    <div class="card-product-badge">NEW</div>
                    <div class="card-product-image">
                        <i class="fas fa-cube"></i>
                    </div>
                    <h3 class="card-product-title">Продукт ${i}</h3>
                    <p class="card-product-description">Описание продукта</p>
                    <div class="card-product-price">
                        <span class="card-product-price-current">$${99 + i}</span>
                    </div>
                </div>
            `;
        } else if (i <= 24) {
            // Карточки профиля
            const profileNum = i - 12;
            preview = `
                <div class="demo-card demo-card-profile card-profile-${profileNum}">
                    <div class="card-profile-avatar">U${profileNum}</div>
                    <h3 class="card-profile-name">Пользователь ${profileNum}</h3>
                    <p class="card-profile-role">Роль пользователя</p>
                </div>
            `;
        } else {
            // Карточки статистики
            const statsNum = i - 24;
            preview = `
                <div class="demo-card demo-card-stats card-stats-${statsNum}">
                    <div class="card-stats-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="card-stats-grid">
                        <div class="card-stat-item">
                            <div class="card-stat-value">${1234 + i}</div>
                            <div class="card-stat-label">Посетители</div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        const example = createExampleItem({
            number: i,
            name: `Карточка ${i}`,
            preview: preview
        });
        container.appendChild(example);
    }
}

// Загрузка примеров разделителей
function loadDividerExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 32); i++) {
        const example = createExampleItem({
            number: i,
            name: `Разделитель тип ${i}`,
            preview: `<div class="demo-divider divider-type-${i}"></div>`
        });
        container.appendChild(example);
    }
}

// Загрузка примеров бейджей
function loadBadgeExamples(container, count) {
    const badgeTypes = [
        { name: 'Основной', class: 'badge-primary' },
        { name: 'Вторичный', class: 'badge-secondary' },
        { name: 'Успех', class: 'badge-success' },
        { name: 'Предупреждение', class: 'badge-warning' },
        { name: 'Ошибка', class: 'badge-error' },
        { name: 'Инфо', class: 'badge-info' },
        { name: 'Маленький', class: 'badge-primary badge-pill' },
        { name: 'Контурный', class: 'badge-outline' },
        { name: 'С иконкой', class: 'badge-primary badge-with-icon' },
        { name: 'Анимированный', class: 'badge-primary badge-animated' },
        { name: 'Градиентный', class: 'badge-gradient' },
        { name: '3D', class: 'badge-3d' },
        { name: 'Ленточный', class: 'badge-ribbon' },
        { name: 'Новый', class: 'badge-new' },
        { name: 'Горячий', class: 'badge-hot' },
        { name: 'Скидка', class: 'badge-sale' },
        { name: 'Популярный', class: 'badge-popular' },
        { name: 'Эксклюзивный', class: 'badge-exclusive' },
        { name: 'Трендовый', class: 'badge-trending' }
    ];
    
    for (let i = 0; i < Math.min(count, badgeTypes.length); i++) {
        const badge = badgeTypes[i];
        let badgeText = 'Бейдж';
        if (badge.name === 'Горячий') badgeText = 'HOT';
        if (badge.name === 'Скидка') badgeText = '-50%';
        if (badge.name === 'Новый') badgeText = 'NEW';
        
        const example = createExampleItem({
            number: i + 1,
            name: `Бейдж: ${badge.name}`,
            preview: `<span class="demo-badge ${badge.class}">${badgeText}</span>`
        });
        container.appendChild(example);
    }
}

// Загрузка примеров форм
function loadFormExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 28); i++) {
        let preview = '';
        
        if (i <= 7) {
            preview = `
                <div class="demo-form" style="width: 100%;">
                    <div class="form-group">
                        <label class="form-label">Поле ${i}</label>
                        <input type="text" class="form-input" placeholder="Введите текст...">
                    </div>
                </div>
            `;
        } else if (i <= 14) {
            preview = `
                <div class="demo-form demo-form-login" style="width: 100%;">
                    <div class="form-group">
                        <input type="text" class="form-input" placeholder="Имя пользователя">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-input" placeholder="Пароль">
                    </div>
                </div>
            `;
        } else if (i <= 21) {
            preview = `
                <div class="demo-form demo-form-subscribe" style="width: 100%;">
                    <div class="form-subscribe-group">
                        <input type="email" placeholder="Ваш email">
                        <button class="demo-btn demo-btn-flat-1">Подписаться</button>
                    </div>
                </div>
            `;
        } else {
            preview = `
                <div class="demo-form demo-form-contact" style="width: 100%;">
                    <div class="form-group">
                        <textarea class="form-input form-textarea" placeholder="Ваше сообщение"></textarea>
                    </div>
                </div>
            `;
        }
        
        const example = createExampleItem({
            number: i,
            name: `Форма ${i}`,
            preview: preview
        });
        container.appendChild(example);
    }
}

// Загрузка примеров загрузчиков
function loadLoaderExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 16); i++) {
        let preview = '';
        
        if (i <= 8) {
            preview = `<div class="loader loader-circle-${i}"></div>`;
        } else {
            preview = `<div class="loader loader-linear-${i-8}"></div>`;
        }
        
        const example = createExampleItem({
            number: i,
            name: i <= 8 ? `Круговой загрузчик ${i}` : `Линейный загрузчик ${i-8}`,
            preview: preview
        });
        container.appendChild(example);
    }
}

// Загрузка примеров иконок
function loadIconExamples(container, count) {
    const iconSets = [
        { prefix: 'social', name: 'Социальные', icons: ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'github'] },
        { prefix: 'action', name: 'Действия', icons: ['edit', 'delete', 'save', 'share', 'download', 'upload'] },
        { prefix: 'nav', name: 'Навигация', icons: ['home', 'arrow-left', 'arrow-right', 'bars', 'search', 'cog'] },
        { prefix: 'status', name: 'Статусы', icons: ['check-circle', 'times-circle', 'exclamation-triangle', 'info-circle', 'sync', 'clock'] },
        { prefix: 'file', name: 'Файлы', icons: ['file-pdf', 'file-word', 'file-excel', 'file-image', 'file-video', 'file-audio'] },
        { prefix: 'notification', name: 'Уведомления', icons: ['bell', 'comment', 'exclamation-circle', 'star', 'heart', 'flag'] },
        { prefix: 'settings', name: 'Настройки', icons: ['cog', 'palette', 'lock', 'unlock', 'wifi', 'battery-full'] },
        { prefix: 'weather', name: 'Погода', icons: ['sun', 'cloud', 'cloud-rain', 'snowflake', 'wind', 'bolt'] }
    ];
    
    for (let i = 0; i < Math.min(count / 6, iconSets.length); i++) {
        const set = iconSets[i];
        const example = createExampleItem({
            number: i + 1,
            name: `Иконки: ${set.name}`,
            preview: `
                <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                    ${set.icons.map(icon => `
                        <div style="text-align: center; width: 40px;">
                            <i class="fas fa-${icon}" style="font-size: 20px; color: var(--accent-primary);"></i>
                        </div>
                    `).join('')}
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Загрузка примеров навигации
function loadNavigationExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 18); i++) {
        let preview = '';
        
        if (i <= 8) {
            preview = `
                <nav class="nav-menu nav-variant-${i}">
                    <a href="#" class="nav-item ${i === 1 ? 'active' : ''}">Главная</a>
                    <a href="#" class="nav-item">О нас</a>
                    <a href="#" class="nav-item">Контакты</a>
                </nav>
            `;
        } else if (i <= 12) {
            const tabNum = i - 8;
            preview = `
                <div class="tabs tabs-variant-${tabNum}">
                    <div class="tab ${tabNum === 1 ? 'active' : ''}">Вкладка 1</div>
                    <div class="tab">Вкладка 2</div>
                    <div class="tab">Вкладка 3</div>
                </div>
            `;
        } else {
            const breadNum = i - 12;
            preview = `
                <div class="breadcrumbs breadcrumbs-variant-${breadNum}">
                    <a href="#" class="breadcrumb-item">Главная</a>
                    <span class="breadcrumb-separator">/</span>
                    <a href="#" class="breadcrumb-item">Категория</a>
                    <span class="breadcrumb-separator">/</span>
                    <span class="breadcrumb-item active">Текущая</span>
                </div>
            `;
        }
        
        const example = createExampleItem({
            number: i,
            name: `Навигация ${i}`,
            preview: preview
        });
        container.appendChild(example);
    }
}

// Загрузка примеров герой-секций
function loadHeroExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 16); i++) {
        const example = createExampleItem({
            number: i,
            name: `Герой-секция ${i}`,
            preview: `
                <div class="hero-section hero-variant-${i}" style="padding: 20px; border-radius: var(--radius-md); width: 100%;">
                    <div class="hero-content">
                        <h2 class="hero-title" style="font-size: 18px;">Заголовок секции</h2>
                        <p class="hero-subtitle" style="font-size: 12px;">Описание герой-секции</p>
                    </div>
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Загрузка примеров особенностей
function loadFeatureExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 24); i++) {
        const example = createExampleItem({
            number: i,
            name: `Особенность ${i}`,
            preview: `
                <div class="feature-card feature-variant-${i}">
                    <div class="feature-icon">
                        <i class="fas fa-check"></i>
                    </div>
                    <h3 class="feature-title">Особенность ${i}</h3>
                    <p class="feature-description">Описание особенности</p>
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Загрузка примеров отзывов
function loadTestimonialExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 20); i++) {
        const example = createExampleItem({
            number: i,
            name: `Отзыв ${i}`,
            preview: `
                <div class="testimonial testimonial-variant-${i}">
                    <div class="testimonial-content">
                        "Отличный сервис! Очень доволен результатом."
                    </div>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">JD</div>
                        <div class="testimonial-info">
                            <h4>John Doe</h4>
                            <p>CEO, Company Inc.</p>
                        </div>
                    </div>
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Загрузка примеров ценовых таблиц
function loadPricingExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 12); i++) {
        const example = createExampleItem({
            number: i,
            name: `Ценовая таблица ${i}`,
            preview: `
                <div class="pricing-table pricing-variant-${i}">
                    <div class="pricing-header">
                        <h3 class="pricing-title">Тариф ${i}</h3>
                        <div class="pricing-price">$${i}9</div>
                        <div class="pricing-period">в месяц</div>
                    </div>
                    <button class="demo-btn demo-btn-flat-1" style="width: 100%;">Выбрать</button>
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Загрузка примеров подвалов
function loadFooterExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 18); i++) {
        const example = createExampleItem({
            number: i,
            name: `Подвал ${i}`,
            preview: `
                <div class="footer footer-variant-${i}" style="padding: 15px; border-radius: var(--radius-md); width: 100%;">
                    <div class="footer-content">
                        <p>© 2024 Компания. Все права защищены.</p>
                    </div>
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Загрузка примеров анимаций
function loadAnimationExamples(container, count) {
    const animationTypes = [
        'bounce', 'float', 'slide', 'rotate', 'pulse', 'shake',
        'spin', 'flip', 'scale', 'color-change', 'gradient-move',
        'shine', 'border-pulse', 'border-dash', 'shadow-pulse',
        'shadow-float', 'wave', 'drip', 'firefly', 'stars',
        'peristalsis', 'blink', 'vibrate', 'morph'
    ];
    
    for (let i = 0; i < Math.min(count, animationTypes.length); i++) {
        const animation = animationTypes[i];
        const example = createExampleItem({
            number: i + 1,
            name: `Анимация: ${animation}`,
            preview: `<div class="animation-demo animation-${animation}"></div>`
        });
        container.appendChild(example);
    }
}

// Загрузка примеров типографики
function loadTypographyExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 16); i++) {
        const example = createExampleItem({
            number: i,
            name: `Типографика ${i}`,
            preview: `
                <div class="typography-composition-${i}">
                    <h2 class="heading-${Math.min(i, 6)}" style="margin: 0; font-size: ${24 - i}px;">Заголовок ${i}</h2>
                    <p class="body-base" style="margin: 10px 0 0; font-size: 14px;">Пример текста типографики</p>
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Загрузка примеров макетов
function loadLayoutExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 12); i++) {
        const example = createExampleItem({
            number: i,
            name: `Макет ${i}`,
            preview: `
                <div class="layout-grid layout-${getLayoutName(i)}" style="width: 100%;">
                    <div class="layout-item">1</div>
                    <div class="layout-item">2</div>
                    <div class="layout-item">3</div>
                    <div class="layout-item">4</div>
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Вспомогательная функция для получения названия макета
function getLayoutName(index) {
    const layouts = [
        '1-col', '1-col-2-rows', '1-col-3-rows', '2-col',
        '2-col-aside', '2-col-main', '3-col', '3-col-center',
        '4-col', '4-col-grid', 'varied', 'masonry'
    ];
    
    return layouts[index - 1] || `variant-${index}`;
}

// Загрузка примеров модальных окон
function loadModalExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 10); i++) {
        const example = createExampleItem({
            number: i,
            name: `Модальное окно ${i}`,
            preview: `
                <div class="modal-demo modal-variant-${i}" style="width: 100%;">
                    <div class="modal-header">
                        <h3 class="modal-title">Модальное окно ${i}</h3>
                    </div>
                    <div class="modal-content">
                        <p>Содержимое модального окна</p>
                    </div>
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Загрузка примеров вкладок и аккордеонов
function loadTabExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 14); i++) {
        let preview = '';
        
        if (i <= 6) {
            preview = `
                <div class="tabs-container">
                    <div class="tabs-header">
                        <div class="tab-header active">Вкладка 1</div>
                        <div class="tab-header">Вкладка 2</div>
                    </div>
                    <div class="tabs-content">
                        <div class="tab-content active">
                            Содержимое вкладки 1
                        </div>
                    </div>
                </div>
            `;
        } else {
            const accordionNum = i - 6;
            preview = `
                <div class="accordion accordion-variant-${accordionNum}">
                    <div class="accordion-item">
                        <div class="accordion-header active">
                            <div class="accordion-title">Раздел 1</div>
                        </div>
                        <div class="accordion-content">
                            Содержимое раздела 1
                        </div>
                    </div>
                </div>
            `;
        }
        
        const example = createExampleItem({
            number: i,
            name: i <= 6 ? `Вкладки ${i}` : `Аккордеон ${i-6}`,
            preview: preview
        });
        container.appendChild(example);
    }
}

// Загрузка примеров галерей
function loadGalleryExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 8); i++) {
        const example = createExampleItem({
            number: i,
            name: `Галерея ${i}`,
            preview: `
                <div class="gallery gallery-${getGalleryName(i)}" style="width: 100%;">
                    <div class="gallery-item"></div>
                    <div class="gallery-item"></div>
                    <div class="gallery-item"></div>
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Вспомогательная функция для получения названия галереи
function getGalleryName(index) {
    const galleries = [
        '1-col', '2-col', '3-col', '4-col',
        'masonry', 'carousel', 'grid-with-featured', 'hover-zoom'
    ];
    
    return galleries[index - 1] || `variant-${index}`;
}

// Загрузка примеров хлебных крошек
function loadBreadcrumbExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 6); i++) {
        const example = createExampleItem({
            number: i,
            name: `Хлебные крошки ${i}`,
            preview: `
                <div class="breadcrumbs-demo breadcrumbs-variant-${i}">
                    <a href="#" class="breadcrumb-item-demo">Главная</a>
                    <span class="breadcrumb-separator-demo">/</span>
                    <a href="#" class="breadcrumb-item-demo">Категория</a>
                    <span class="breadcrumb-separator-demo">/</span>
                    <span class="breadcrumb-item-demo active">Текущая</span>
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Загрузка примеров пагинации
function loadPaginationExamples(container, count) {
    for (let i = 1; i <= Math.min(count, 6); i++) {
        const example = createExampleItem({
            number: i,
            name: `Пагинация ${i}`,
            preview: `
                <div class="pagination-demo pagination-variant-${i}">
                    <a href="#" class="page-item-demo">1</a>
                    <a href="#" class="page-item-demo active">2</a>
                    <a href="#" class="page-item-demo">3</a>
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Общая функция для загрузки общих примеров
function loadGenericExamples(container, category) {
    for (let i = 1; i <= Math.min(category.count, 10); i++) {
        const example = createExampleItem({
            number: i,
            name: `${category.title} ${i}`,
            preview: `
                <div class="preview-content">
                    <div class="preview-icon">
                        <i class="fas fa-${category.icon}"></i>
                    </div>
                    <div class="preview-text">
                        <strong>${category.title}</strong>
                        <span>Вариант ${i}</span>
                    </div>
                </div>
            `
        });
        container.appendChild(example);
    }
}

// Создание элемента примера
function createExampleItem(data) {
    const item = document.createElement('div');
    item.className = 'full-example-item';
    
    item.innerHTML = `
        <div class="full-example-header">
            <div class="example-number">${data.number}</div>
            <div class="example-name">${data.name}</div>
        </div>
        <div class="full-example-preview-container">
            ${data.preview}
        </div>
    `;
    
    return item;
}

// Настройка поиска
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm.length > 1) {
            searchComponents(searchTerm);
        } else {
            resetSearch();
        }
    });
}

// Поиск компонентов
function searchComponents(term) {
    const allExamples = document.querySelectorAll('.full-example-item');
    let foundCount = 0;
    
    allExamples.forEach(example => {
        const exampleName = example.querySelector('.example-name').textContent.toLowerCase();
        const exampleNumber = example.querySelector('.example-number').textContent;
        
        if (exampleName.includes(term) || exampleNumber.includes(term)) {
            example.style.display = 'flex';
            foundCount++;
            
            // Подсветка найденного текста
            const nameElement = example.querySelector('.example-name');
            const originalText = nameElement.textContent;
            const regex = new RegExp(`(${term})`, 'gi');
            nameElement.innerHTML = originalText.replace(regex, '<mark>$1</mark>');
        } else {
            example.style.display = 'none';
        }
    });
    
    // Показываем уведомление о количестве найденных результатов
    if (term.length > 1) {
        showNotification(`Найдено ${foundCount} компонентов по запросу "${term}"`);
    }
}

// Сброс поиска
function resetSearch() {
    const allExamples = document.querySelectorAll('.full-example-item');
    
    allExamples.forEach(example => {
        example.style.display = 'flex';
        
        // Убираем подсветку
        const nameElement = example.querySelector('.example-name');
        if (nameElement.innerHTML.includes('<mark>')) {
            nameElement.innerHTML = nameElement.textContent;
        }
    });
}

// Прокрутка к секции
function scrollToSection(categoryId) {
    const section = document.getElementById(categoryId);
    if (section) {
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        const offsetTop = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Подсвечиваем секцию
        section.style.boxShadow = '0 0 0 3px var(--accent-primary)';
        section.style.transition = 'box-shadow 0.3s ease';
        
        setTimeout(() => {
            section.style.boxShadow = 'none';
        }, 1500);
    }
}

// Настройка кнопки прокрутки наверх
function setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Показать уведомление
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Экспорт функций для глобального использования
window.ConstruckPro = {
    scrollToSection,
    showNotification
};