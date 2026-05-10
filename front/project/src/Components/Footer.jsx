import React from 'react'
// Если у тебя есть иконки соцсетей (например, lucide-react или react-icons), можно их добавить
// Пока сделаем чистый текст и ссылки

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] border-t border-gray-800 pt-16 pb-8 mt-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Колонка 1: О проекте */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              MY CINEMA
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Твой лучший путеводитель в мире кино. Смотри новинки и классику в лучшем качестве.
            </p>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Навигация</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Главная</li>
              <li className="hover:text-white transition-colors cursor-pointer">Фильмы</li>
              <li className="hover:text-white transition-colors cursor-pointer">Сериалы</li>
              <li className="hover:text-white transition-colors cursor-pointer">Новинки</li>
            </ul>
          </div>

          {/* Колонка 3: Жанры */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Жанры</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Анимация</li>
              <li className="hover:text-white transition-colors cursor-pointer">Фантастика</li>
              <li className="hover:text-white transition-colors cursor-pointer">Триллеры</li>
              <li className="hover:text-white transition-colors cursor-pointer">Драмы</li>
            </ul>
          </div>

          {/* Колонка 4: Помощь */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Поддержка</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
              <li className="hover:text-white transition-colors cursor-pointer">Контакты</li>
              <li className="hover:text-white transition-colors cursor-pointer">Политика конфиденциальности</li>
            </ul>
          </div>
        </div>

        {/* Нижняя полоска */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
          <p>© 2026 MY CINEMA. Все права защищены.</p>
          <div className="flex gap-8">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Telegram</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">VK</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer