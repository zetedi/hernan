import React, { useState } from 'react';
import { TranslationData } from '../types';
import { IMAGES } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle, BookOpen } from 'lucide-react';

interface FAQProps {
  t: TranslationData['faq'];
}

export const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="bg-pacha-sand min-h-screen text-pacha-earth">
      {/* Hero Header */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.canyon})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-pacha-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in">
            {t.subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif drop-shadow-lg">
            {t.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Knowledge Base Articles */}
        <div className="space-y-12 mb-20">
            {t.articles.map((article, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-pacha-gold">
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="text-pacha-leaf w-6 h-6" />
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-pacha-earth">
                            {article.title}
                        </h2>
                    </div>
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                        {article.content.map((paragraph, pIdx) => (
                            <p key={pIdx} className="mb-4 last:mb-0" dangerouslySetInnerHTML={{ __html: paragraph }} />
                        ))}
                    </div>
                </div>
            ))}
        </div>

        {/* Q&A Accordion */}
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-10">
                <HelpCircle className="text-pacha-gold w-8 h-8" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-pacha-earth text-center">
                    {t.questionsTitle}
                </h2>
            </div>

            <div className="space-y-4">
                {t.questions.map((item, index) => (
                    <div 
                        key={index} 
                        className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                            openQuestionIndex === index ? 'border-pacha-gold shadow-md' : 'border-pacha-leaf/20 shadow-sm'
                        }`}
                    >
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                            <span className="font-bold text-lg text-pacha-earth pr-8">
                                {item.question}
                            </span>
                            {openQuestionIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-pacha-gold flex-shrink-0" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                        </button>
                        
                        <div 
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                openQuestionIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};