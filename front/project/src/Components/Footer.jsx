import React from 'react'

const Footer = () => {
  // 1. ФУНКЦИЯ ДОЛЖНА БЫТЬ ЗДЕСЬ (Внутри компонента Footer, но перед return)
  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('footer-email');
    
    if (emailInput && emailInput.value) {
      alert(`Success! ${emailInput.value} has been added to LN PRODUCTION newsletter.`);
      emailInput.value = ''; // Очищаем поле
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer className="bg-[#0b0b0b] border-t border-gray-900 pt-16 pb-8 mt-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold tracking-tighter text-white uppercase">
              LN PRODUCTION
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-gray-400 text-sm italic">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2"> {/* Обернули в form для удобства */}
                <input 
                  id="footer-email" 
                  type="email" 
                  required
                  placeholder="Your email" 
                  className="bg-gray-900 border border-gray-800 text-white text-sm px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 w-full transition-all"
                />
                <button 
                  type="submit"
                  className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">Support</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-600">
          <p>© 2026 LN PRODUCTION. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Powered by React & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer