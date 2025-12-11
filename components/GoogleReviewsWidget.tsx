import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const GOOGLE_REVIEWS_URL = "https://www.google.com/travel/hotels/entity/CgoImJ6f7oy-tJ9gEAE?q=wayna%20wasi%20reviews&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73169519%2C73192290%2C73198319&hl=en-PE&gl=pe&ssta=1&ts=CAEaSQorEicyJTB4OTE2ZTcxMDhmYzFiNzkxOToweDYwM2VkMWYwY2RjN2NmMTgaABIaEhQKBwjpDxAMGAsSBwjpDxAMGAwYATICEAAqBAoAGgA&qs=CAE4AkIJCRjPx83w0T5gQgkJGM_HzfDRPmA&ictx=111&ved=0CAAQ5JsGahcKEwiAgfX5rraRAxUAAAAAHQAAAAAQBA&utm_campaign=sharing&utm_medium=link&utm_source=htls";

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export const GoogleReviewsWidget: React.FC = () => {
  return (
    <section className="bg-white py-12 border-t border-b border-pacha-leaf/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <a 
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12 hover:shadow-xl hover:border-pacha-gold/30 transition-all duration-300 group max-w-2xl w-full justify-between"
        >
          {/* Logo & Text */}
          <div className="flex items-center gap-4">
             <div className="bg-gray-50 p-3 rounded-full">
                <GoogleLogo />
             </div>
             <div className="text-left">
                <h3 className="font-bold text-gray-900 text-lg">Wayna Wasi</h3>
                <p className="text-gray-500 text-sm">Google Reviews</p>
             </div>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center md:items-end">
             <div className="flex items-center gap-1 mb-1">
                <span className="font-bold text-gray-900 text-xl mr-2">4.9</span>
                {[1,2,3,4,5].map(i => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
             </div>
             <div className="text-xs text-gray-400 font-medium uppercase tracking-wide flex items-center gap-1 group-hover:text-pacha-gold transition-colors">
                Read our reviews <ExternalLink size={12} />
             </div>
          </div>
        </a>
      </div>
    </section>
  );
};