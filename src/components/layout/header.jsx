import { TrendingUp } from "lucide-react";

const Header = () => {
  return;
  <header className="bg-white shadow-sm border-b border-gray-200">
    <div className="container">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <TrendingUp />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Udemig Tracker</h1>
            <p className="text-xs text-gray-500">Kripto para takip sistemi</p>
          </div>
        </div>

        {/* İcons */}
        <div className="flex items-center space-x-4"> 
          {/* Favoriler */}
          <div className="flex items-center space-x-2 text-gray-600">  
            <Star  className="size-5"/>
            <span>1</span>
          </div>
          {/* Tema Butonu */}
          <div></div>

        </div>
      </div>
    </div>
  </header>;
};

export default Header;
