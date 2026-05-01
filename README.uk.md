# AAA Academy — Вебсайт

[English](README.md) · **Українська**

Лендинг для AAA Academy (Монреаль / Кот-Сен-Люк).
Статичний сайт, розміщується на GitHub Pages, власний домен **aaaacademy.ca**.

## Структура проєкту

```
draft02/
├── index.html              # головна сторінка
├── thanks.html             # сторінка після відправлення форми
├── 404.html                # сторінка "не знайдено"
├── CNAME                   # GitHub Pages → aaaacademy.ca
├── .nojekyll               # вимикає обробку Jekyll
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/styles.css
    ├── js/
    │   ├── i18n.js         # переклади FR / EN
    │   └── main.js         # перемикач мови, скрол, анімації
    ├── img/                # усі зображення (оптимізовані)
    └── icons/logo.svg
```

## Локальний перегляд

Просто відкрий `index.html` у браузері. Або запусти локальний сервер:

```bash
cd draft02
python3 -m http.server 8000
# відкрий http://localhost:8000
```

## Деплой

Push у гілку `main` → GitHub Pages автоматично публікує на **aaaacademy.ca**.

## Форма зворотного зв'язку

Форма надсилається через [FormSubmit](https://formsubmit.co/) на `aaacademy2025@hotmail.com`.
Після відправлення → редірект на `https://aaaacademy.ca/thanks.html`.

**Перший раз:** FormSubmit надішле лист із посиланням-підтвердженням — треба
один раз натиснути на нього, інакше форма не активується.

## Що редагувати

- **Тексти** — `assets/js/i18n.js` (об'єкт `window.translations` з ключами `fr` та `en`).
- **Зображення** — `assets/img/`. Назви файлів не змінюй, або змінюй разом із посиланнями в HTML/CSS.
- **Стилі** — `assets/css/styles.css`.
- **Соцмережі, адреса, email** — `index.html` (секція контактів + JSON-LD у `<head>`).

## Технології

- Чистий HTML / CSS / JS — без етапу збірки.
- Bootstrap 5.3 + Bootstrap Icons через CDN.
- FormSubmit для контактної форми (без бекенду).
