import React, { useState } from 'react';
import { Sparkles, Loader2, RefreshCw, Wine } from 'lucide-react';
import { generateCocktailIdea } from '../services/geminiService';
import { CocktailRecipe, LoadingState } from '../types';

export const AiBartender: React.FC = () => {
  const [mood, setMood] = useState('');
  const [recipe, setRecipe] = useState<CocktailRecipe | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleGenerate = async () => {
    if (!mood.trim()) return;
    
    setStatus(LoadingState.LOADING);
    setRecipe(null);
    
    try {
      const result = await generateCocktailIdea(mood);
      if (result) {
        setRecipe(result);
        setStatus(LoadingState.SUCCESS);
      } else {
        setStatus(LoadingState.ERROR);
      }
    } catch (e) {
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Container styling mimics a high-end physical menu */}
      <div className="bg-brand-dark border border-brand-gold/30 rounded-sm p-1 shadow-2xl">
        <div className="border border-white/5 rounded-sm p-8 md:p-12 relative overflow-hidden">
          
          {/* Decorative Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-brand-gold/20"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-brand-gold/20"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-brand-gold/20"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-brand-gold/20"></div>

          <div className="text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="bg-brand-charcoal p-4 rounded-full border border-brand-gold/20">
                <Sparkles className="text-brand-gold w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-3xl font-serif text-white mb-3">Diseña tu Experiencia</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto font-light text-sm">
              Describe el ambiente de tu evento (ej. "Boda elegante al atardecer" o "Fiesta corporativa moderna") y nuestra IA generará una receta exclusiva para tu menú.
            </p>

            <div className="flex flex-col sm:flex-row gap-0 mb-10 max-w-xl mx-auto">
              <input 
                type="text" 
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Ej. Boda campestre con toques cítricos..."
                className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors placeholder-gray-600 text-sm font-light"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <button 
                onClick={handleGenerate}
                disabled={status === LoadingState.LOADING || !mood.trim()}
                className="bg-brand-gold hover:bg-white hover:text-black text-black font-bold py-4 px-8 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
              >
                {status === LoadingState.LOADING ? (
                  <Loader2 className="animate-spin w-4 h-4" />
                ) : (
                  <span>Generar</span>
                )}
              </button>
            </div>

            {recipe && (
              <div className="text-left bg-white/5 p-8 border border-white/10 animate-fade-in-up relative mx-auto max-w-xl">
                 {/* Paper texture overlay could go here */}
                 
                <div className="flex justify-between items-start mb-6 border-b border-brand-gold/30 pb-4">
                  <div>
                    <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] block mb-1">Cocktail de Autor</span>
                    <h4 className="text-2xl font-serif text-white">{recipe.name}</h4>
                  </div>
                  <Wine className="text-brand-orange w-6 h-6 opacity-80" />
                </div>

                <p className="text-gray-300 italic mb-8 font-serif text-lg leading-relaxed text-center">"{recipe.description}"</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <strong className="text-brand-gold block mb-3 uppercase tracking-widest text-xs border-b border-white/10 pb-1 w-max">Ingredientes</strong>
                    <ul className="space-y-2 text-gray-400 font-light">
                      {recipe.ingredients.map((ing, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-gold/50">•</span> {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-gold block mb-3 uppercase tracking-widest text-xs border-b border-white/10 pb-1 w-max">Preparación</strong>
                    <p className="text-gray-400 leading-relaxed font-light">{recipe.instructions}</p>
                  </div>
                </div>
                
                {recipe.funFact && (
                   <div className="mt-8 pt-4 border-t border-dashed border-white/10 text-xs text-gray-500 text-center">
                     <span className="text-brand-gold mr-1">★</span> {recipe.funFact}
                   </div>
                )}
                
                <div className="mt-8 text-center">
                  <button 
                    onClick={() => setRecipe(null)}
                    className="text-gray-500 hover:text-brand-gold text-xs uppercase tracking-widest flex items-center justify-center gap-2 w-full transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" /> Probar otro estilo
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};