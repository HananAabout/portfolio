
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-900">
              Mon Portfolio
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
