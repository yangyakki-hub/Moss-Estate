import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Feather, Flame, Wind, Clock, Eye, Moon, Droplets } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Divider = () => (
  <div className="flex items-center justify-center py-20 opacity-30">
    <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold-muted"></div>
    <div className="mx-4 text-gold-muted">♦</div>
    <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold-muted"></div>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  useEffect(() => {
    document.title = "Moss Manor | The Last Echo of the Moss Family";
  }, []);

  return (
    <div className="relative min-h-screen text-parchment font-sans selection:bg-blood selection:text-white">
      {/* Background Effects */}
      <div className="atmosphere pointer-events-none" />
      <div className="noise-overlay pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
        >
          {/* Abstract crest representation */}
          <div className="w-[60vh] h-[60vh] border rounded-full border-parchment/20 flex items-center justify-center blur-[2px]">
            <Feather size={200} className="text-parchment" strokeWidth={0.5} />
          </div>
        </motion.div>

        <div className="z-10 text-center max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mb-8"
          >
            <p className="font-serif italic text-gold-muted mb-4 tracking-[0.2em] uppercase text-sm text-shimmer">Late 19th Century</p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-6 text-glow">
              Moss Manor
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-parchment/60 mx-auto max-w-2xl leading-relaxed">
              "이끼가 낀 고목 안의 새. 꺾인 날개는 더 이상 날지 못하고, 심연을 향해 추락할 뿐이다."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center mt-20"
          >
            <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-4">Descend</p>
            <div className="w-px h-16 bg-gradient-to-b from-parchment/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* World Setting Context */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-gold-muted leading-tight text-shimmer">
              빛이 닿지 않는 <br/> 과거
            </h2>
            <div className="space-y-6 text-parchment/70 font-light leading-relaxed">
              <p>
                전기가 보급되지 않은 서늘한 종말의 시대. 밤이 되면 오직 흔들리는 양초와 짙은 기름 냄새를 풍기는 오일 램프만이 유일한 빛이 됩니다. 벽난로의 탁탁거리는 소리만이 거대한 저택의 정적을 깨우며, 외부와의 통신은 느릿한 편지와 전보가 전부입니다.
              </p>
              <p>
                과학의 발전이라는 명목 아래 미신과 심령주의가 혼재하는 혼란스러운 세기말. 귀족 가문의 허울뿐인 명예와 예법이 진흙탕 속에서 바스라져가는 낡고 음산한 분위기가 대지를 지배합니다.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center aspect-square ornate-border">
              <Flame size={24} className="mb-4 text-gold-muted opacity-80" strokeWidth={1} />
              <h3 className="font-serif italic text-lg mb-2">No Electricity</h3>
              <p className="text-xs opacity-50 uppercase tracking-widest">양초와 램프</p>
            </div>
            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center aspect-square ornate-border mt-12">
              <Droplets size={24} className="mb-4 text-gold-muted opacity-80" strokeWidth={1} />
              <h3 className="font-serif italic text-lg mb-2">Blackwater</h3>
              <p className="text-xs opacity-50 uppercase tracking-widest">블랙워터 늪지</p>
            </div>
            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center aspect-square ornate-border -mt-12">
              <Wind size={24} className="mb-4 text-gold-muted opacity-80" strokeWidth={1} />
              <h3 className="font-serif italic text-lg mb-2">The Cliff</h3>
              <p className="text-xs opacity-50 uppercase tracking-widest">통곡의 절벽</p>
            </div>
            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center aspect-square ornate-border">
              <Clock size={24} className="mb-4 text-gold-muted opacity-80" strokeWidth={1} />
              <h3 className="font-serif italic text-lg mb-2">Isolation</h3>
              <p className="text-xs opacity-50 uppercase tracking-widest">편지와 마차</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* The Estate Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif text-glow mb-4">모스 저택</h2>
              <p className="text-parchment/60 tracking-widest uppercase text-sm mb-12">The Moss Estate</p>
              <div className="max-w-4xl mx-auto glass-panel p-2 mt-8 relative">
                <img src="https://img.t-tako.com/M/me.PNG" alt="Moss Manor Map" className="w-full h-auto object-cover opacity-80" />
              </div>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 1st Floor */}
            <FadeIn delay={0.1} className="glass-panel p-8 ornate-border flex flex-col">
              <div className="text-5xl font-serif text-gold-muted/20 mb-6 font-light">1F</div>
              <h3 className="font-serif text-2xl mb-4 border-b border-parchment/10 pb-4">공용 및 서비스 공간</h3>
              <ul className="space-y-4 flex-grow text-sm text-parchment/70">
                <li className="flex items-start">
                  <span className="text-gold-muted mr-3">▪</span>
                  <div><strong className="text-parchment font-medium">중앙 홀:</strong> 높은 천장과 거대한 샹들리에. 불을 켜지 않아 늘 어둠에 잠겨있음.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-muted mr-3">▪</span>
                  <div><strong className="text-parchment font-medium">대식당:</strong> 철저히 폐쇄됨. 아침 식사실 구석만 간신히 사용.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blood mr-3">▪</span>
                  <div><strong className="text-parchment font-medium">주방 & 세탁실:</strong> 습격한 김 서림 속, 출몰하는 '말 없는 노파'.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-muted mr-3">▪</span>
                  <div><strong className="text-parchment font-medium">서재:</strong> 부친 사후 유령 소문. 레노어에 의해 출입 금지구역이 됨.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-parchment font-bold mr-3">▪</span>
                  <div><strong className="text-parchment font-medium">레노어의 방:</strong> 중앙 계단 옆의 감시초소. 저택의 오가는 모든 이를 지켜봄.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-muted mr-3">▪</span>
                  <div><strong className="text-parchment font-medium">마부의 방:</strong> 본채와 연결된 낮은 별채. 레노어의 감시의 사각지대.</div>
                </li>
              </ul>
            </FadeIn>

            {/* 2nd Floor */}
            <FadeIn delay={0.2} className="glass-panel p-8 ornate-border flex flex-col bg-lavender-dark/10">
              <div className="text-5xl font-serif text-gold-muted/20 mb-6 font-light">2F</div>
              <h3 className="font-serif text-2xl mb-4 border-b border-parchment/10 pb-4">거주 공간</h3>
              <ul className="space-y-4 flex-grow text-sm text-parchment/70">
                <li className="flex items-start">
                  <span className="text-lavender-dark mr-3">▪</span>
                  <div><strong className="text-parchment font-medium">헤르미나의 침실:</strong> 저택에서 가장 화려한 곳. 라벤더 향유와 짙은 약 냄새가 섞여 진동함.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-muted mr-3">▪</span>
                  <div><strong className="text-parchment font-medium">약혼자의 방:</strong> 서관 끝에 위치한 귀빈실.</div>
                </li>
                <li className="flex items-start mt-6 p-4 border border-blood/20 bg-blood/5">
                  <span className="text-blood mr-3 mt-1"><Eye size={14} /></span>
                  <div><strong className="text-parchment font-medium tracking-widest text-blood uppercase">동관 [Closed]:</strong> 모든 문이 잠긴 채 방치된 가구들. 밤마다 정체를 알 수 없는 선명한 발소리가 들림.</div>
                </li>
              </ul>
            </FadeIn>

            {/* 3rd Floor & Attic */}
            <FadeIn delay={0.3} className="glass-panel p-8 ornate-border flex flex-col">
              <div className="text-5xl font-serif text-gold-muted/20 mb-6 font-light">3F</div>
              <h3 className="font-serif text-2xl mb-4 border-b border-parchment/10 pb-4">다락 및 갤러리</h3>
              <ul className="space-y-4 flex-grow text-sm text-parchment/70">
                <li className="flex items-start">
                  <span className="text-gold-muted mr-3">▪</span>
                  <div><strong className="text-parchment font-medium">가문의 갤러리:</strong> 선조들의 초상화가 걸린 곳. 그러나 레노어가 모든 액자를 날카롭게 뒤집어 두어 얼굴을 볼 수 없음.</div>
                </li>
                <li className="flex items-start pt-6">
                  <span className="text-parchment font-bold mr-3">▪</span>
                  <div className="italic"><strong className="text-parchment font-medium not-italic">다락방:</strong> 굳게 닫힌 문. 오직 레노어만이 그 열쇠를 쥐고 있다.</div>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <Divider />

      {/* Characters Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-serif text-glow mb-4">거주자들</h2>
              <p className="text-parchment/60 tracking-widest uppercase text-sm">The Residents</p>
            </div>
          </FadeIn>

          <div className="space-y-32 border-l border-parchment/10 relative pl-6 md:pl-20">
            
            {/* Hermina Moss */}
            <FadeIn>
              <div className="absolute w-4 h-4 rounded-full bg-lavender-dark border border-parchment/30 -left-[9px] md:-left-[88px] top-4 shadow-[0_0_15px_rgba(43,34,48,0.8)]" />
              <div className="grid md:grid-cols-5 gap-12 text-left">
                <div className="md:col-span-2">
                  <div className="mb-8 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border border-lavender-dark/50 glass-panel shadow-[0_0_30px_rgba(43,34,48,0.4)]">
                    <img src="https://img.t-tako.com/N/hm/0.PNG" alt="Hermina Moss" className="w-full h-full object-cover object-top opacity-90" />
                  </div>
                  <h3 className="font-serif text-5xl md:text-7xl mb-2 text-glow-lavender" style={{ color: '#d8c8e3' }}>Hermina<br/>Moss</h3>
                  <div className="text-lavender-dark/80 tracking-widest uppercase text-xs mb-8 flex items-center space-x-2">
                    <span>Lady of the Manor</span> <span>|</span> <span>20</span>
                  </div>
                  <div className="space-y-6">
                    <p className="font-serif italic text-xl md:text-2xl text-parchment/80 leading-relaxed border-l-2 border-lavender-dark/30 pl-4 py-2 bg-gradient-to-r from-lavender-dark/10 to-transparent">
                      "햇빛은 너무 소란스럽고 아파. 차라리 달콤하게 부서지는 어둠 속에 머무르고 싶어."
                    </p>
                  </div>
                </div>
                
                <div className="md:col-span-3 space-y-8 mt-4">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest mb-3 opacity-50 border-b border-parchment/10 pb-2">Appearance</h4>
                      <p className="text-sm font-light text-parchment/80 leading-relaxed">
                        칠흑 같은 긴 생머리, 나른하고 몽환적인 눈매에 오묘한 보랏빛 눈동자. 푸른 핏줄이 비칠 만큼 투명하고 가녀린 체구. 항상 미열이 돌며, 시든 라벤더와 차가운 먼지 냄새를 풍긴다.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest mb-3 opacity-50 border-b border-parchment/10 pb-2">Background</h4>
                      <p className="text-sm font-light text-parchment/80 leading-relaxed">
                        가문의 마지막 직계 혈통. 안개 낀 서관에 갇혀 평생을 보냈으며, 삶의 의지보다 '아름다운 종말'에 집착하는 병약한 아가씨. 레노어에게 모든 것을 의존하고 있다.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest mb-3 opacity-50 border-b border-parchment/10 pb-2">Traits & Tastes</h4>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="h-6 px-3 flex items-center border border-lavender-dark text-parchment/80 rounded-full">처연함</span>
                      <span className="h-6 px-3 flex items-center border border-lavender-dark text-parchment/80 rounded-full">자기연민</span>
                      <span className="h-6 px-3 flex items-center border border-lavender-dark text-parchment/80 rounded-full">의존성</span>
                      <span className="h-6 px-3 flex items-center bg-parchment/10 text-parchment/60 rounded-full">선호: 라벤더 향유, 비오는 창가, 낡은 시집</span>
                      <span className="h-6 px-3 flex items-center border border-blood/30 text-parchment/60 rounded-full">불호: 거울 (초췌한 자신), 시끄러운 소음, 타오르는 태양</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Lenore */}
            <FadeIn>
              <div className="absolute w-4 h-4 rounded-full bg-blood border border-parchment/30 -left-[9px] md:-left-[88px] top-4 shadow-[0_0_15px_rgba(74,4,4,0.8)]" />
              <div className="grid md:grid-cols-5 gap-12 text-left">
                <div className="md:col-span-2 md:order-last lg:pl-10">
                  <div className="mb-8 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border border-blood/50 glass-panel shadow-[0_0_30px_rgba(74,4,4,0.4)]">
                    <img src="https://img.t-tako.com/N/ln/0.PNG" alt="Lenore" className="w-full h-full object-cover object-top opacity-90" />
                  </div>
                  <h3 className="font-serif text-5xl md:text-7xl mb-2 text-glow-blood" style={{ color: '#d38c8c' }}>Lenore</h3>
                  <div className="text-blood/80 tracking-widest uppercase text-xs mb-8 flex items-center space-x-2">
                    <span>The Sole Maid</span> <span>|</span> <span>20</span>
                  </div>
                  <div className="space-y-6">
                    <p className="font-serif italic text-xl md:text-2xl text-parchment/80 leading-relaxed border-l-2 border-blood/30 pl-4 py-2 bg-gradient-to-r from-blood/10 to-transparent">
                      "가엾은 아가씨, 제가 없으면 당신은 이 저택에서 단 하루도 숨 쉬지 못하리란 걸 아시잖아요."
                    </p>
                  </div>
                </div>
                
                <div className="md:col-span-3 space-y-8 mt-4">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest mb-3 opacity-50 border-b border-parchment/10 pb-2">Appearance</h4>
                      <p className="text-sm font-light text-parchment/80 leading-relaxed">
                        잿빛 금발을 낮게 양갈래로 묶었고, 살짝 치켜올라간 매혹적인 붉은 눈동자를 가졌다. 아담하지만 육감적이고 건강한 몸. 헤르미나와 묘하게 닮았으나 생기가 넘친다. 씁쓸한 머스크와 젖은 흙내음이 난다.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest mb-3 opacity-50 border-b border-parchment/10 pb-2">Background</h4>
                      <p className="text-sm font-light text-parchment/80 leading-relaxed">
                        헤르미나를 헌신적으로 돌보는 듯 보이지만, 천천히 그녀를 파괴하며 지배 관계를 역전시킨다. 저택의 모든 거울을 검은 베일로 덮어 통제하고 소량의 진정제로 아가씨를 길들인다.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest mb-3 opacity-50 border-b border-parchment/10 pb-2">Traits & Tastes</h4>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="h-6 px-3 flex items-center border border-blood text-parchment/80 rounded-full">지배욕</span>
                      <span className="h-6 px-3 flex items-center border border-blood text-parchment/80 rounded-full">독점욕</span>
                      <span className="h-6 px-3 flex items-center border border-blood text-parchment/80 rounded-full">영악함</span>
                      <span className="h-6 px-3 flex items-center bg-parchment/10 text-parchment/60 rounded-full">선호: 검은 레이스, 차가운 보석, 곤란한 장난, 독한 술</span>
                      <span className="h-6 px-3 flex items-center border border-blood/30 text-parchment/60 rounded-full">불호: 위선적 예법, 헤르미나를 가엾게 보는 시선</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center relative z-10 border-t border-parchment/5">
        <Feather size={40} className="mx-auto mb-6 text-parchment opacity-10" />
        <p className="font-serif italic text-parchment/40">The Moss Family, A Tale of the 19th Century</p>
        <p className="text-[10px] tracking-widest uppercase opacity-20 mt-4">For Promotional Use Only</p>
      </footer>
    </div>
  );
}
