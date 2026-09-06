'use client'

import { useState } from 'react'

const faqs = [
  ['Что такое Eva Casino официальный сайт?', 'Это информационная страница о возможностях Eva Casino: играх, бонусах, зеркале и правилах безопасного доступа. Перед регистрацией всегда проверяйте актуальность адреса и условия конкретного предложения.'],
  ['Как найти Eva Casino зеркало?', 'Рабочее зеркало Eva Casino — альтернативный адрес, который помогает открыть сайт при временных ограничениях основного домена. Используйте только проверенные ссылки и обращайте внимание на защищённое соединение.'],
  ['Можно ли играть в Eva Casino онлайн с телефона?', 'Да, адаптивная версия рассчитана на смартфоны и планшеты. Браузерный формат не требует установки отдельного приложения: достаточно стабильного подключения и современного браузера.'],
  ['Как начать играть ответственно?', 'Определите бюджет заранее, не используйте заёмные средства, делайте перерывы и воспринимайте игру только как развлечение. Если контроль становится сложным, обратитесь за профессиональной помощью.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="eva-shell">
      <header className="eva-header">
        <a className="eva-logo" href="#top" aria-label="Eva Casino — главная">
          <span className="eva-logo-mark">E</span><span>EVA</span><small>CASINO</small>
        </a>
        <button className="eva-menu-button" type="button" aria-expanded={menuOpen} aria-controls="eva-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Открыть меню</span><i /><i /><i />
        </button>
        <nav id="eva-nav" className={`eva-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Основная навигация">
          <a href="#games" onClick={() => setMenuOpen(false)}>Игры</a>
          <a href="#bonuses" onClick={() => setMenuOpen(false)}>Бонусы</a>
          <a href="#mirror" onClick={() => setMenuOpen(false)}>Зеркало</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </nav>
        <a className="eva-header-cta" href="#play">Играть онлайн <span>↗</span></a>
      </header>

      <section id="top" className="eva-hero">
        <div className="eva-hero-copy">
          <p className="eva-kicker"><span /> Официальный игровой портал</p>
          <h1>Eva Casino<br /><em>играть</em> онлайн</h1>
          <p className="eva-lead">Откройте пространство, где классические слоты встречаются с яркой атмосферой живого казино. Быстрый вход, понятная навигация и азарт в вашем ритме.</p>
          <div className="eva-actions"><a className="eva-button eva-button-primary" href="#play">Перейти в казино <span>→</span></a><a className="eva-text-link" href="#games">Смотреть игры <span>↓</span></a></div>
          <div className="eva-trust"><span>●</span> Защищённое соединение <b>·</b><span>●</span> 18+ только для совершеннолетних</div>
        </div>
        <div className="eva-hero-art" aria-label="Иллюстрация казино" role="img">
          <div className="eva-orbit eva-orbit-one" /><div className="eva-orbit eva-orbit-two" /><div className="eva-chip chip-one">7</div><div className="eva-chip chip-two">★</div>
          <div className="eva-die"><b>7</b><span>LUCK</span></div><div className="eva-card eva-card-back">♠</div><div className="eva-card eva-card-front">♦<small>A</small></div>
          <p className="eva-art-label">LUCK<br /><strong>IS A<br />CHOICE</strong></p>
        </div>
      </section>

      <div className="eva-ticker" aria-label="Преимущества"><span>БЫСТРЫЙ ДОСТУП</span><b>✦</b><span>ЯРКИЕ СЛОТЫ</span><b>✦</b><span>LIVE-КАЗИНО</span><b>✦</b><span>БОНУСЫ ДЛЯ НОВЫХ ИГРОКОВ</span><b>✦</b></div>

      <section id="games" className="eva-section eva-games-section">
        <div className="eva-section-heading"><div><p className="eva-kicker"><span /> Игровая коллекция</p><h2>Выберите свой<br /><em>ритм игры</em></h2></div><p>Eva Casino официальный сайт объединяет разнообразные форматы: от быстрых раундов в слотах до размеренных партий за столами live-казино. Найдите жанр, который подходит именно вам.</p></div>
        <div className="eva-game-grid"><article className="eva-game-card eva-game-card-tall"><div className="eva-game-symbol">♛</div><p>01 / КЛАССИКА</p><h3>Слоты<br />с характером</h3><a href="#play">Открыть каталог →</a></article><article className="eva-game-card eva-game-card-red"><div className="eva-game-symbol">♦</div><p>02 / LIVE</p><h3>Живые<br />столы</h3><a href="#play">Смотреть столы →</a></article><article className="eva-game-card eva-game-card-dark"><div className="eva-game-symbol">✦</div><p>03 / JACKPOT</p><h3>Большая<br />игра</h3><a href="#play">Узнать больше →</a></article></div>
        <div className="eva-copy-grid"><div><h3>Eva Casino зеркало — доступ без лишних шагов</h3><p>Если основной адрес временно недоступен, пользователи ищут Eva Casino зеркало рабочее. Альтернативный домен повторяет привычную структуру сайта и позволяет продолжить просмотр каталога. Перед переходом сверяйте адресную строку, наличие HTTPS и официальные каналы информации.</p></div><div><h3>Eva казино онлайн в любом месте</h3><p>Мобильная версия Eva Casino создана для небольшого экрана: кнопки остаются удобными, разделы открываются быстро, а важные условия находятся рядом. Можно играть в браузере со смартфона, планшета или компьютера без сложной установки.</p></div></div>
      </section>

      <section id="bonuses" className="eva-section eva-bonus-section"><div className="eva-bonus-panel"><div><p className="eva-kicker"><span /> Стартовый пакет</p><h2>Ваш следующий<br /><em>ход — особенный</em></h2><p>Изучите актуальные бонусы Eva Casino и выберите предложение, которое соответствует вашему стилю. Всегда читайте полные правила: размер вейджера, сроки действия, ограничения по играм и требования к ставкам.</p><a className="eva-button eva-button-light" href="#play">Посмотреть бонусы <span>→</span></a></div><div className="eva-bonus-seal"><span>NEW<br /><b>PLAYER</b></span><strong>100</strong><small>%</small><p>WELCOME BONUS</p></div></div></section>

      <section id="mirror" className="eva-section eva-info-section"><div className="eva-section-heading"><div><p className="eva-kicker"><span /> Всё важное — здесь</p><h2>Eva казино<br /><em>официальный сайт</em></h2></div><p>Ниже собраны ответы на частые вопросы и полезная информация для тех, кто знакомится с платформой впервые. Прозрачность условий — часть хорошего игрового опыта.</p></div><div className="eva-info-columns"><article><span className="eva-number">01</span><h3>Как войти и играть</h3><p>Откройте официальный сайт Eva Casino или проверенное рабочее зеркало, ознакомьтесь с правилами, создайте аккаунт только на защищённой странице и подтвердите, что достигли совершеннолетия. Не передавайте пароль третьим лицам и используйте уникальные данные для входа.</p><p>Eva Casino играть предлагает в удобном формате: выберите игру, установите лимит и начинайте с небольших ставок. Результат каждого раунда случаен, поэтому никакая стратегия не может гарантировать выигрыш.</p></article><article><span className="eva-number">02</span><h3>Проверка зеркала</h3><p>Запросы «eva casino зеркало», «eva казино зеркало» и «eva casino официальный сайт» часто появляются, когда игроку нужен актуальный путь к платформе. Сверяйте домен по официальным источникам, не вводите платёжные данные на случайных страницах и не скачивайте подозрительные файлы.</p><p>Если адрес выглядит необычно, соединение не защищено или сайт просит лишние разрешения, закройте вкладку. Безопасность начинается с внимательности пользователя.</p></article><article><span className="eva-number">03</span><h3>Ответственная игра</h3><p>Играйте только на те деньги, потерю которых можете спокойно принять. Не пытайтесь отыграться, не увеличивайте ставку из-за эмоций и делайте регулярные перерывы. Если игра перестаёт быть развлечением, воспользуйтесь инструментами самоограничения или обратитесь в профильную службу поддержки.</p></article></div></section>

      <section id="faq" className="eva-section eva-faq-section"><div className="eva-section-heading"><div><p className="eva-kicker"><span /> Частые вопросы</p><h2>Коротко<br /><em>о главном</em></h2></div></div><div className="eva-faq-list">{faqs.map(([question, answer], index) => <div className={`eva-faq-item ${openFaq === index ? 'is-open' : ''}`} key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><b>+</b></button><div className="eva-faq-answer"><p>{answer}</p></div></div>)}</div></section>

      <section id="play" className="eva-final-cta"><p className="eva-kicker"><span /> Готовы к следующему раунду?</p><h2>Ваше казино.<br /><em>Ваш выбор.</em></h2><a className="eva-button eva-button-primary" href="#top">Перейти на Eva Casino <span>↗</span></a><p className="eva-age-note">Только для пользователей 18+. Играйте ответственно.</p></section>
      <footer className="eva-footer"><div className="eva-logo"><span className="eva-logo-mark">E</span><span>EVA</span><small>CASINO</small></div><p>Информационный портал об Eva Casino, играх онлайн и безопасном доступе.</p><div className="eva-footer-links"><a href="#top">Главная</a><a href="#games">Игры</a><a href="#bonuses">Бонусы</a><a href="#faq">Помощь</a></div><div className="eva-keywords">eva casino · eva casino официальный сайт · eva casino зеркало · eva казино · eva казино зеркало рабочее · eva казино играть · eva казино онлайн · eva казино официальный</div><small className="eva-copyright">© 2026 Eva Casino. Информация носит ознакомительный характер.</small></footer>
    </main>
  )
}
