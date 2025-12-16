import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import img1 from './assets/img/1.jpg'
import img2 from './assets/img/2.jpg'
import img3 from './assets/img/3.jpg'
import img4 from './assets/img/4.jpg'
import img5 from './assets/img/5.jpg'
import img6 from './assets/img/6.jpg'
import img7 from './assets/img/7.jpg'
import img8 from './assets/img/8.jpg'
import img9 from './assets/img/9.jpg'
import img10 from './assets/img/10.jpg'
import img11 from './assets/img/11.jpg'
import img12 from './assets/img/12.jpg'
import img13 from './assets/img/13.jpg'
import img14 from './assets/img/14.jpg'
import img15 from './assets/img/15.jpg'
import img16 from './assets/img/16.jpg'
import img17 from './assets/img/17.jpg'
import img18 from './assets/img/18.jpg'
import img19 from './assets/img/19.jpg'
import img20 from './assets/img/20.jpg'
import img21 from './assets/img/21.jpg'
import img22 from './assets/img/22.jpg'
import img23 from './assets/img/23.jpg'
import img24 from './assets/img/24.jpg'
import img25 from './assets/img/25.jpg'
import img26 from './assets/img/26.jpg'
import img27 from './assets/img/27.jpg'

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18,
  img19, img20, img21, img22, img23, img24, img25, img26, img27,
]

function App() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2026-01-16T16:30:00').getTime()
    
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Hero Section - Elegant Opening */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/banner.svg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Corner accents - minimal and elegant */}
          <div className="absolute top-8 left-8 w-16 h-16 sm:w-24 md:w-32 border-t border-l border-white/20" />
          <div className="absolute top-8 right-8 w-16 h-16 sm:w-24 md:w-32 border-t border-r border-white/20" />
          <div className="absolute bottom-8 left-8 w-16 h-16 sm:w-24 md:w-32 border-b border-l border-white/20" />
          <div className="absolute bottom-8 right-8 w-16 h-16 sm:w-24 md:w-32 border-b border-r border-white/20" />
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8"
        >
          {/* Invitation Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white/90 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 md:mb-12 font-light uppercase tracking-[0.3em] sm:tracking-[0.4em]"
          >
            Với sự hiện diện của bạn
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-14"
          >
            <div className="h-px w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-transparent via-white/40 to-white/50" />
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
              className="text-white/60 text-xl sm:text-2xl md:text-3xl"
            >
              ✦
            </motion.span>
            <div className="h-px w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-white/50 via-white/40 to-transparent" />
          </motion.div>

          {/* Names */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 md:mb-8 leading-[1.1] font-light text-white"
            style={{ 
              fontFamily: 'serif',
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.4)'
            }}
          >
            <motion.span
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ delay: 1.2, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-block"
            >
              Hoài An
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.8, type: "spring" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white/85 inline-block"
              style={{ letterSpacing: '0.15em' }}
            >
              &amp;
            </motion.span>
            <br />
            <motion.span
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ delay: 2, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-block"
            >
              Kiều Trinh
            </motion.span>
          </motion.h1>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.2, duration: 1.2, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12"
          >
            <div className="h-px w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-transparent via-white/40 to-white/50" />
            <motion.span
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 2.4, duration: 0.8, type: "spring" }}
              className="text-white/60 text-xl sm:text-2xl md:text-3xl"
            >
              ✦
            </motion.span>
            <div className="h-px w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-white/50 via-white/40 to-transparent" />
          </motion.div>

          {/* Invitation Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 1 }}
            className="text-white/85 text-sm sm:text-base md:text-lg mt-10 sm:mt-12 md:mt-16 font-light tracking-wide px-4"
            style={{ letterSpacing: '0.1em' }}
          >
            Trân trọng kính mời bạn đến dự lễ thành hôn của chúng tôi
          </motion.p>
        </motion.div>
      </section>

      {/* Save the Date Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        {/* Corner frames */}
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-28 md:w-36 border-t-2 border-l-2 border-white/10" />
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-28 md:w-36 border-t-2 border-r-2 border-white/10" />
        <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-28 md:w-36 border-b-2 border-l-2 border-white/10" />
        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-28 md:w-36 border-b-2 border-r-2 border-white/10" />
        
        <div className="max-w-4xl mx-auto relative z-10 px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6 sm:mb-8 md:mb-10 font-light"
            >
              Save the Date
            </motion.p>

            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-white/30 to-white/40" />
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-white/50 text-lg sm:text-xl"
              >
                ✦
              </motion.span>
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-white/40 via-white/30 to-transparent" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 text-white font-light leading-tight"
            >
              <motion.span
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="inline-block"
              >
                Thứ Sáu
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-200 font-light inline-block"
              >
                16 Tháng 01, 2026
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="text-sm sm:text-base md:text-lg text-gray-400 font-light mt-3 sm:mt-4 block"
              >
                (Nhằm ngày 28/11 năm Ất Tỵ)
              </motion.span>
            </motion.h2>

            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10">
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-white/30 to-white/40" />
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, type: "spring" }}
                className="text-white/50 text-lg sm:text-xl"
              >
                ✦
              </motion.span>
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-white/40 via-white/30 to-transparent" />
            </div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="mt-10 sm:mt-12 md:mt-16 pt-8 sm:pt-10 md:pt-12 border-t border-white/10"
            >
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6 md:mb-8 font-light">
                Còn lại
              </p>
              <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto">
                {[
                  { value: countdown.days, label: 'Ngày' },
                  { value: countdown.hours, label: 'Giờ' },
                  { value: countdown.minutes, label: 'Phút' },
                  { value: countdown.seconds, label: 'Giây' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
                    className="text-center"
                  >
                    <motion.div
                      key={item.value}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-1 sm:mb-2 text-white"
                    >
                      {String(item.value).padStart(2, '0')}
                    </motion.div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.15em] font-light">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Family Information Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
            {/* Gia đình chú rể */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="mb-8 sm:mb-10 md:mb-12">
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6 sm:mb-8 font-light">
                  Gia Đình Chú Rể
                </p>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
                  <span className="text-gray-400 text-sm sm:text-base">✦</span>
                  <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-gray-300 to-transparent" />
                </div>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs mb-3 sm:mb-4 font-light uppercase tracking-[0.2em]">
                    Ông bà:
                  </p>
                  <p className="text-black font-light text-lg sm:text-xl md:text-2xl leading-relaxed mb-2">
                    Antôn Lê Ngọc Điền
                  </p>
                  <p className="text-black font-light text-lg sm:text-xl md:text-2xl leading-relaxed">
                    Anna Têrêsa Nguyễn Thị Thái Hà
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 my-4 sm:my-6">
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
                  <span className="text-gray-200 text-xs">•</span>
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-gray-200 to-transparent" />
                </div>
                <div className="space-y-2 text-sm sm:text-base text-gray-600 font-light">
                  <p>Gh. Vinh Đức - Gx. Vinh Xuân</p>
                  <p>Giáo Phận Ban Mê Thuột</p>
                </div>
              </div>
            </motion.div>

            {/* Gia đình cô dâu */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-8 sm:mb-10 md:mb-12">
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6 sm:mb-8 font-light">
                  Gia Đình Cô Dâu
                </p>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
                  <span className="text-gray-400 text-sm sm:text-base">✦</span>
                  <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-gray-300 to-transparent" />
                </div>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <p className="text-gray-500 text-[10px] sm:text-xs mb-3 sm:mb-4 font-light uppercase tracking-[0.2em]">
                    Ông bà:
                  </p>
                  <p className="text-black font-light text-lg sm:text-xl md:text-2xl leading-relaxed mb-2">
                    Antôn Lê Ngọc Điền
                  </p>
                  <p className="text-black font-light text-lg sm:text-xl md:text-2xl leading-relaxed">
                    Anna Têrêsa Nguyễn Thị Thái Hà
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 my-4 sm:my-6">
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
                  <span className="text-gray-200 text-xs">•</span>
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-gray-200 to-transparent" />
                </div>
                <div className="space-y-2 text-sm sm:text-base text-gray-600 font-light">
                  <p>Gh. Vinh Đức - Gx. Vinh Xuân</p>
                  <p>Giáo Phận Ban Mê Thuột</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Names Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6 sm:mb-8 font-light">
              Cô Dâu & Chú Rể
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
              <div className="h-px w-16 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
              <span className="text-gray-400 text-lg sm:text-xl md:text-2xl">✦</span>
              <div className="h-px w-16 sm:w-20 md:w-24 bg-gradient-to-r from-gray-300 to-transparent" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 md:gap-20 items-center">
            {/* Chú rể */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="mb-8 sm:mb-10">
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6 sm:mb-8 font-light">
                  Chú rể
                </p>
                <div className="h-px w-20 sm:w-24 md:w-28 bg-gray-300 mx-auto" />
              </div>
              <motion.h3
                whileHover={{ scale: 1.02 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-black font-light leading-tight"
              >
                Phêrô <br/> Lê Nguyên Hoài An
              </motion.h3>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base font-light tracking-wide mt-4 sm:mt-6">
                (Thứ nam)
              </p>
            </motion.div>

            {/* Decorative Divider */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex flex-col items-center gap-6 md:gap-8">
                <div className="h-20 md:h-24 w-px bg-gradient-to-b from-transparent via-gray-300 to-gray-300" />
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring" }}
                  className="text-gray-400 text-2xl md:text-3xl"
                >
                  ✦
                </motion.span>
                <div className="h-20 md:h-24 w-px bg-gradient-to-b from-gray-300 to-transparent" />
              </div>
            </div>

            {/* Cô dâu */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-8 sm:mb-10">
                <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6 sm:mb-8 font-light">
                  Cô dâu
                </p>
                <div className="h-px w-20 sm:w-24 md:w-28 bg-gray-300 mx-auto" />
              </div>
              <motion.h3
                whileHover={{ scale: 1.02 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-black font-light leading-tight"
              >
                Têrêxa <br/> Hà Kiều Trinh
              </motion.h3>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base font-light tracking-wide mt-4 sm:mt-6">
                (Trưởng nữ)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ceremony Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        {/* Corner frames */}
        <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 md:w-40 border-t-2 border-l-2 border-white/10" />
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 md:w-40 border-t-2 border-r-2 border-white/10" />
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 md:w-40 border-b-2 border-l-2 border-white/10" />
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 md:w-40 border-b-2 border-r-2 border-white/10" />
        
        <div className="max-w-4xl mx-auto relative z-10 px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6 sm:mb-8 font-light"
            >
              Thánh Lễ Hôn Phối
            </motion.p>

            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-white/40 to-white/50" />
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-white/60 text-lg sm:text-xl md:text-2xl"
              >
                ✦
              </motion.span>
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-white/50 via-white/40 to-transparent" />
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 font-light"
            >
              Cử hành tại
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 mb-6 sm:mb-8 font-light leading-relaxed"
            >
              Nhà thờ Giáo xứ Vinh An
            </motion.p>

            <div className="flex items-center justify-center gap-3 sm:gap-4 my-6 sm:my-8">
              <div className="h-px w-10 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-white/30 to-white/40" />
              <div className="h-px w-10 sm:w-12 md:w-16 bg-gradient-to-r from-white/40 via-white/30 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-3 sm:space-y-4 mt-6 sm:mt-8 text-gray-200"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">
                Thứ Sáu, ngày 16 tháng 01 năm 2026
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">
                Vào lúc 4:30 chiều
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-4 sm:mt-6 font-light italic">
                (Nhằm ngày 28 tháng 11 năm Ất Tỵ)
              </p>
            </motion.div>

            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12">
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-white/40 to-white/50" />
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
                className="text-white/60 text-lg sm:text-xl md:text-2xl"
              >
                ✦
              </motion.span>
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-white/50 via-white/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wedding Details Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6 sm:mb-8 font-light">
              Thông Tin Sự Kiện
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
              <span className="text-gray-400 text-lg sm:text-xl">✦</span>
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-gray-300 to-transparent" />
            </div>
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black"
            >
              Lễ Thành Hôn
            </motion.h2>
          </motion.div>

          <div className="space-y-10 sm:space-y-12 md:space-y-14">
            {[
              {
                title: 'Thánh Lễ Hôn Phối',
                subtitle: 'Lễ thành hôn',
                date: '16 Tháng 01, 2026',
                time: '4:30 Chiều',
                location: 'Nhà thờ Giáo xứ Vinh An',
                address: 'Địa chỉ nhà thờ Giáo xứ Vinh An',
                map: 'https://maps.google.com',
                note: '(Nhằm ngày 28/11 năm Ất Tỵ)'
              },
              {
                title: 'Tiệc Cưới',
                subtitle: 'Tiệc mừng',
                date: '16 Tháng 01, 2026',
                time: '6:00 Chiều',
                location: 'Nhà hàng tiệc cưới',
                address: 'Địa chỉ nhà hàng tiệc cưới',
                map: 'https://maps.google.com'
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.15 }}
                className="relative"
              >
                <div className="w-full max-w-4xl mx-auto">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white border border-gray-200 rounded-2xl px-5 sm:px-7 md:px-9 py-5 sm:py-7 md:py-8 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Header: subtitle + title + badge */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                      <div className="text-left">
                        <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-2 font-light">
                          {event.subtitle}
                        </p>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl text-black font-light leading-tight">
                          {event.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs sm:text-sm border border-gray-200">
                          <span className="text-gray-400">📅</span>
                          <span className="font-medium text-black">{event.date}</span>
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black text-white text-xs sm:text-sm">
                          <span className="text-white/80">⏰</span>
                          <span className="font-medium">{event.time}</span>
                        </span>
                      </div>
                    </div>

                    {/* Body: note + location block */}
                    <div className="space-y-3 sm:space-y-4 text-gray-600 font-light text-sm sm:text-base">
                      {event.note && (
                        <p className="text-gray-500 text-xs sm:text-sm italic">
                          {event.note}
                        </p>
                      )}
                      <div className="flex items-start gap-3 sm:gap-4 pt-3 border-t border-gray-100">
                        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white text-sm">
                          📍
                        </div>
                        <div className="flex-1 text-left space-y-1">
                          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gray-500">
                            Địa điểm & địa chỉ
                          </p>
                          <p className="text-black font-medium">
                            {event.location}
                          </p>
                          <p className="text-gray-500 text-sm sm:text-base">
                            {event.address}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer: button */}
                    <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="hidden sm:block text-[11px] text-gray-400 uppercase tracking-[0.18em]">
                        Nhấn để mở bản đồ trên Google Maps
                      </div>
                      <motion.button
                        onClick={() => window.open(event.map, '_blank')}
                        className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 sm:py-3.5 min-h-[44px] hover:bg-gray-800 transition-all duration-300 font-light uppercase tracking-[0.15em] text-[11px] sm:text-xs touch-manipulation rounded-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Xem bản đồ
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-4 sm:mb-6 font-light">
              Khoảnh Khắc
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
              <span className="text-gray-400 text-lg sm:text-xl md:text-2xl">✦</span>
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-gray-300 to-transparent" />
            </div>
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black"
            >
              Album Hình Ảnh
            </motion.h2>
          </motion.div>

          {/* Gallery Grid - Mobile First với ảnh thật, căn đều các ô ảnh */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
                className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative w-full h-full aspect-[3/4] overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Ảnh cưới ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 left-3 text-[10px] sm:text-xs text-white/80 tracking-[0.2em] uppercase font-light">
                    Ảnh {index + 1}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guestbook Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Placeholder for guestbook content */}
        </div>
      </section>
    </div>
  )
}

export default App
