import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

function App() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [guestName, setGuestName] = useState('')
  const [guestMessage, setGuestMessage] = useState('')
  const [wishes, setWishes] = useState<Array<{ name: string; message: string }>>([])

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

  const handleSubmitWish = (e: React.FormEvent) => {
    e.preventDefault()
    if (guestName && guestMessage) {
      setWishes([...wishes, { name: guestName, message: guestMessage }])
      setGuestName('')
      setGuestMessage('')
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Đã sao chép!')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Premium Mobile-First */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        {/* Background image + overlay for readable text */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/banner.svg')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/60"></div>
        </div>

        {/* Premium background with elegant patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-gray-50/20 to-white/10">
          {/* Enhanced ornate corner frames */}
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 md:w-96 opacity-[0.03] sm:opacity-[0.04] md:opacity-[0.05]">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
              <path d="M0 0 L400 0 M0 0 L0 400" stroke="black" strokeWidth="2"/>
              <path d="M30 30 L370 30 M30 30 L30 370" stroke="black" strokeWidth="1.5"/>
              <path d="M60 60 L340 60 M60 60 L60 340" stroke="black" strokeWidth="1"/>
              <circle cx="20" cy="20" r="4" fill="black"/>
              <circle cx="50" cy="20" r="3" fill="black"/>
              <circle cx="20" cy="50" r="3" fill="black"/>
              <circle cx="80" cy="20" r="2" fill="black"/>
              <circle cx="20" cy="80" r="2" fill="black"/>
              <circle cx="380" cy="20" r="4" fill="black"/>
              <circle cx="350" cy="20" r="3" fill="black"/>
              <circle cx="380" cy="50" r="3" fill="black"/>
              <circle cx="320" cy="20" r="2" fill="black"/>
              <circle cx="380" cy="80" r="2" fill="black"/>
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 md:w-96 opacity-[0.03] sm:opacity-[0.04] md:opacity-[0.05]">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
              <path d="M0 0 L400 0 M400 0 L400 400" stroke="black" strokeWidth="2"/>
              <path d="M30 30 L370 30 M370 30 L370 370" stroke="black" strokeWidth="1.5"/>
              <path d="M60 60 L340 60 M340 60 L340 340" stroke="black" strokeWidth="1"/>
              <circle cx="380" cy="20" r="4" fill="black"/>
              <circle cx="350" cy="20" r="3" fill="black"/>
              <circle cx="380" cy="50" r="3" fill="black"/>
              <circle cx="320" cy="20" r="2" fill="black"/>
              <circle cx="380" cy="80" r="2" fill="black"/>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 md:w-96 opacity-[0.03] sm:opacity-[0.04] md:opacity-[0.05]">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
              <path d="M0 0 L0 400 M0 400 L400 400" stroke="black" strokeWidth="2"/>
              <path d="M30 370 L30 30 M0 370 L400 370" stroke="black" strokeWidth="1.5"/>
              <path d="M60 340 L60 60 M0 340 L400 340" stroke="black" strokeWidth="1"/>
              <circle cx="20" cy="380" r="4" fill="black"/>
              <circle cx="50" cy="380" r="3" fill="black"/>
              <circle cx="20" cy="350" r="3" fill="black"/>
              <circle cx="80" cy="380" r="2" fill="black"/>
              <circle cx="20" cy="320" r="2" fill="black"/>
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 md:w-96 opacity-[0.03] sm:opacity-[0.04] md:opacity-[0.05]">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
              <path d="M400 0 L400 400 M0 400 L400 400" stroke="black" strokeWidth="2"/>
              <path d="M370 370 L370 30 M30 370 L400 370" stroke="black" strokeWidth="1.5"/>
              <path d="M340 340 L340 60 M60 340 L400 340" stroke="black" strokeWidth="1"/>
              <circle cx="380" cy="380" r="4" fill="black"/>
              <circle cx="350" cy="380" r="3" fill="black"/>
              <circle cx="380" cy="350" r="3" fill="black"/>
              <circle cx="320" cy="380" r="2" fill="black"/>
              <circle cx="380" cy="320" r="2" fill="black"/>
            </svg>
          </div>
          
          {/* Elegant decorative borders */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-300/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-300/40 to-transparent"></div>
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-300/40 to-transparent hidden md:block"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-300/40 to-transparent hidden md:block"></div>
        </div>
        
        {/* Enhanced elegant center pattern */}
        <div className="absolute inset-0 opacity-[0.06] sm:opacity-[0.07] md:opacity-[0.08] mix-blend-screen pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M75 0 L75 150 M0 75 L150 75' stroke='%23000' stroke-width='0.5'/%3E%3Ccircle cx='75' cy='75' r='3' fill='%23000'/%3E%3Ccircle cx='75' cy='75' r='1' fill='%23fff'/%3E%3Ccircle cx='40' cy='40' r='1.5' fill='%23000'/%3E%3Ccircle cx='110' cy='40' r='1.5' fill='%23000'/%3E%3Ccircle cx='40' cy='110' r='1.5' fill='%23000'/%3E%3Ccircle cx='110' cy='110' r='1.5' fill='%23000'/%3E%3Cpath d='M40 40 L110 110 M110 40 L40 110' stroke='%23000' stroke-width='0.3' opacity='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        
        {/* Enhanced floating elegant decorative elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -25 + i * 4, 0], 
              rotate: [0, 12 - i * 2, 0],
              opacity: [0.12, 0.22, 0.12],
              scale: [1, 1.1 + i * 0.05, 1]
            }}
            transition={{ 
              duration: 10 + i * 2.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 1.2
            }}
            className="absolute hidden sm:block"
            style={{
              top: `${15 + i * 12}%`,
              left: i % 2 === 0 ? `${10 + i * 8}%` : 'auto',
              right: i % 2 === 1 ? `${10 + (i-1) * 8}%` : 'auto',
            }}
          >
            <span className="text-gray-300 text-2xl sm:text-3xl md:text-4xl" style={{ fontSize: `${18 + i * 3}px` }}>
              ✦
            </span>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-20 text-center max-w-6xl mx-auto w-full"
        >
          <motion.p
            initial={{ opacity: 0, y: 20, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.3em' }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="text-white/80 text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-10 md:mb-16 font-light uppercase tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em]"
          >
            Với sự hiện diện của bạn
          </motion.p>
          
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-10 md:mb-16">
            <div className="h-[1px] w-16 sm:w-20 md:w-28 lg:w-32 xl:w-40 bg-gradient-to-r from-transparent via-white/50 to-white/60"></div>
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
              className="text-white/80 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              ✦
            </motion.span>
            <div className="h-[1px] w-16 sm:w-20 md:w-28 lg:w-32 xl:w-40 bg-gradient-to-r from-white/60 via-white/60 to-transparent"></div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] text-white mb-6 sm:mb-10 md:mb-16 leading-[0.95] font-medium"
            style={{ 
              letterSpacing: '-0.02em',
              textShadow: '0 4px 25px rgba(0,0,0,0.35)'
            }}
          >
            Hoài An
            <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-white/80"
            >
              &amp;
            </motion.span>
            <br />
            Kiều Trinh
          </motion.h1>
          
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-6 sm:mt-10 md:mt-16">
            <div className="h-[1px] w-16 sm:w-20 md:w-28 lg:w-32 xl:w-40 bg-gradient-to-r from-transparent via-white/50 to-white/60"></div>
            <motion.span
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.8, duration: 0.8, type: "spring" }}
              className="text-white/80 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              ✦
            </motion.span>
            <div className="h-[1px] w-16 sm:w-20 md:w-28 lg:w-32 xl:w-40 bg-gradient-to-r from-white/60 via-white/60 to-transparent"></div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1.2 }}
            className="text-white/80 text-xs sm:text-sm md:text-base mt-10 sm:mt-14 md:mt-20 font-light tracking-wider px-4"
            style={{ letterSpacing: '0.1em' }}
          >
            Trân trọng kính mời bạn đến dự lễ thành hôn của chúng tôi
          </motion.p>
        </motion.div>

 
      </section>

      {/* Save the Date Section - Premium Black Mobile-First */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-12 bg-black text-white overflow-hidden">
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
        
        {/* Ornate corner frames - smaller on mobile */}
        <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 md:w-40 lg:w-48 border-t-2 border-l-2 border-white/10 sm:border-white/12 md:border-white/15"></div>
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 md:w-40 lg:w-48 border-t-2 border-r-2 border-white/10 sm:border-white/12 md:border-white/15"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 md:w-40 lg:w-48 border-b-2 border-l-2 border-white/10 sm:border-white/12 md:border-white/15"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 md:w-40 lg:w-48 border-b-2 border-r-2 border-white/10 sm:border-white/12 md:border-white/15"></div>
        
        {/* Elegant pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03] md:opacity-[0.04]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='75' cy='75' r='3' fill='%23fff'/%3E%3Ccircle cx='40' cy='40' r='1.5' fill='%23fff'/%3E%3Ccircle cx='110' cy='40' r='1.5' fill='%23fff'/%3E%3Ccircle cx='40' cy='110' r='1.5' fill='%23fff'/%3E%3Ccircle cx='110' cy='110' r='1.5' fill='%23fff'/%3E%3Cpath d='M75 20 L75 130 M20 75 L130 75' stroke='%23fff' stroke-width='0.3'/%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px'
            }}
          ></div>
        </div>
        
        {/* Radial glow effect */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 60%)'
        }}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em] mb-6 sm:mb-10 md:mb-12 font-light"
            >
              Save the Date
            </motion.p>
            
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
              <div className="h-px w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 bg-gradient-to-r from-transparent via-white/30 to-white/40"></div>
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/50 sm:text-white/55 md:text-white/60 text-lg sm:text-xl md:text-2xl"
              >
                ✦
              </motion.span>
              <div className="h-px w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 bg-gradient-to-r from-white/40 via-white/40 to-transparent"></div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl mb-6 sm:mb-10 md:mb-14 lg:mb-16 leading-tight"
            >
              Thứ Sáu
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-gray-200 font-light">16 Tháng 01, 2026</span>
              <br />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-400 font-light mt-3 sm:mt-4 md:mt-6 block">
                (Nhằm ngày 28/11 năm Ất Tỵ)
              </span>
            </motion.h2>

            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
              <div className="h-px w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 bg-gradient-to-r from-transparent via-white/30 to-white/40"></div>
              <motion.span
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-white/50 sm:text-white/55 md:text-white/60 text-lg sm:text-xl md:text-2xl"
              >
                ✦
              </motion.span>
              <div className="h-px w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 bg-gradient-to-r from-white/40 via-white/40 to-transparent"></div>
            </div>

            {/* Premium Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-8 sm:pt-12 md:pt-14 lg:pt-16 border-t border-white/10 sm:border-white/12 md:border-white/15"
            >
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] mb-6 sm:mb-10 md:mb-12 font-light">
                Còn lại
              </p>
              <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-16 max-w-4xl mx-auto">
                {[
                  { value: countdown.days, label: 'Ngày' },
                  { value: countdown.hours, label: 'Giờ' },
                  { value: countdown.minutes, label: 'Phút' },
                  { value: countdown.seconds, label: 'Giây' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.7, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.15, type: "spring" }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light mb-1 sm:mb-2 md:mb-3">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] font-light">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Family Information Section - Elegant & Formal Layout */}
      <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 px-4 sm:px-6 md:px-12 bg-white overflow-hidden">
        {/* Enhanced decorative borders */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>
        
        {/* Enhanced decorative side lines */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-gray-200/40 to-transparent hidden md:block"></div>
        <div className="absolute right-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-gray-200/40 to-transparent hidden md:block"></div>
        
        {/* Ornate corner decorations */}
        <div className="absolute top-8 sm:top-12 md:top-16 left-8 sm:left-12 md:left-16 w-16 h-16 sm:w-20 md:w-24 opacity-[0.02] sm:opacity-[0.025] md:opacity-[0.03]">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M0 0 L100 0 M0 0 L0 100" stroke="black" strokeWidth="1.5"/>
            <path d="M15 15 L85 15 M15 15 L15 85" stroke="black" strokeWidth="1"/>
            <circle cx="10" cy="10" r="2.5" fill="black"/>
            <circle cx="30" cy="10" r="1.5" fill="black"/>
            <circle cx="10" cy="30" r="1.5" fill="black"/>
          </svg>
        </div>
        <div className="absolute top-8 sm:top-12 md:top-16 right-8 sm:right-12 md:right-16 w-16 h-16 sm:w-20 md:w-24 opacity-[0.02] sm:opacity-[0.025] md:opacity-[0.03]">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M100 0 L100 100 M0 100 L100 100" stroke="black" strokeWidth="1.5"/>
            <path d="M85 85 L85 15 M15 85 L85 85" stroke="black" strokeWidth="1"/>
            <circle cx="90" cy="90" r="2.5" fill="black"/>
            <circle cx="70" cy="90" r="1.5" fill="black"/>
            <circle cx="90" cy="70" r="1.5" fill="black"/>
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 sm:gap-20 md:gap-24 lg:gap-32">
            {/* Gia đình chú rể */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2 }}
              className="text-center relative"
            >
              {/* Decorative frame */}
              <div className="absolute inset-0 -inset-x-4 sm:-inset-x-6 md:-inset-x-8 -inset-y-4 sm:-inset-y-6 md:-inset-y-8 border border-gray-200/30 rounded-sm opacity-40"></div>
              
              <div className="mb-8 sm:mb-10 md:mb-12 relative z-10">
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.35em] mb-6 sm:mb-8 font-light">Gia Đình Chú Rể</p>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
                  <span className="text-gray-300 text-sm sm:text-base">✦</span>
                  <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-gray-300 via-gray-300 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-6 sm:space-y-8 relative z-10">
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-4 sm:mb-6 font-light uppercase tracking-[0.2em]">Ông bà:</p>
                  <p className="text-black font-light text-lg sm:text-xl md:text-2xl leading-relaxed mb-3">
                    Antôn Lê Ngọc Điền
                  </p>
                  <p className="text-black font-light text-lg sm:text-xl md:text-2xl leading-relaxed">
                    Anna Têrêsa Nguyễn Thị Thái Hà
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 sm:gap-3 my-6 sm:my-8">
                  <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-gray-200 to-gray-200"></div>
                  <span className="text-gray-200 text-xs">•</span>
                  <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-gray-200 via-gray-200 to-transparent"></div>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
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
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-center relative"
            >
              {/* Decorative frame */}
              <div className="absolute inset-0 -inset-x-4 sm:-inset-x-6 md:-inset-x-8 -inset-y-4 sm:-inset-y-6 md:-inset-y-8 border border-gray-200/30 rounded-sm opacity-40"></div>
              
              <div className="mb-8 sm:mb-10 md:mb-12 relative z-10">
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.35em] mb-6 sm:mb-8 font-light">Gia Đình Cô Dâu</p>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
                  <span className="text-gray-300 text-sm sm:text-base">✦</span>
                  <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-gray-300 via-gray-300 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-6 sm:space-y-8 relative z-10">
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-4 sm:mb-6 font-light uppercase tracking-[0.2em]">Ông bà:</p>
                  <p className="text-black font-light text-lg sm:text-xl md:text-2xl leading-relaxed mb-3">
                    Antôn Lê Ngọc Điền
                  </p>
                  <p className="text-black font-light text-lg sm:text-xl md:text-2xl leading-relaxed">
                    Anna Têrêsa Nguyễn Thị Thái Hà
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 sm:gap-3 my-6 sm:my-8">
                  <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-gray-200 to-gray-200"></div>
                  <span className="text-gray-200 text-xs">•</span>
                  <div className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-gray-200 via-gray-200 to-transparent"></div>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                  <p>Gh. Vinh Đức - Gx. Vinh Xuân</p>
                  <p>Giáo Phận Ban Mê Thuột</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Names Section - Elegant & Formal Display */}
      <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        {/* Elegant top and bottom borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-25 sm:opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-25 sm:opacity-30"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2 }}
            className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28"
          >
            <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] mb-6 sm:mb-8 md:mb-10 font-light">
              Cô Dâu & Chú Rể
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
              <div className="h-px w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
              <span className="text-gray-400 text-xl sm:text-2xl md:text-3xl">✦</span>
              <div className="h-px w-20 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-gray-300 via-gray-300 to-transparent"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-32 items-center max-w-6xl mx-auto">
            {/* Cô Dâu */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2 }}
              className="text-center"
            >
              <div className="mb-8 sm:mb-10 md:mb-12">
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.35em] mb-6 sm:mb-8 font-light">Chú rể</p>
                <div className="h-px w-24 sm:w-32 md:w-40 bg-gray-300 mx-auto"></div>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-4 sm:mb-6 leading-tight">
                Phêrô <br/> Lê Nguyên Hoài An
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base font-light tracking-wider mt-4 sm:mt-6">(Thứ nam)</p>
            </motion.div>

            {/* Premium decorative divider */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex flex-col items-center gap-6 md:gap-8">
                <div className="h-20 md:h-24 lg:h-28 w-px bg-gradient-to-b from-transparent via-gray-300 to-gray-300"></div>
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="text-gray-400 text-3xl md:text-4xl"
                >
                  ✦
                </motion.span>
                <div className="h-20 md:h-24 lg:h-28 w-px bg-gradient-to-b from-gray-300 via-gray-300 to-transparent"></div>
              </div>
            </div>

            {/* Chú Rể */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-8 sm:mb-10 md:mb-12">
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.35em] mb-6 sm:mb-8 font-light">Cô dâu</p>
                <div className="h-px w-24 sm:w-32 md:w-40 bg-gray-300 mx-auto"></div>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-4 sm:mb-6 leading-tight">
                Têrêxa Hà Kiều Trinh
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base font-light tracking-wider mt-4 sm:mt-6">(Trưởng nữ)</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thánh Lễ Hôn Phối Section - Sacred & Formal Full Width */}
      <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-black text-white overflow-hidden">
        {/* Sacred background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        
        {/* Ornate corner frames - formal and sacred */}
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 md:w-48 lg:w-56 border-t-2 border-l-2 border-white/15 sm:border-white/18 md:border-white/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 md:w-48 lg:w-56 border-t-2 border-r-2 border-white/15 sm:border-white/18 md:border-white/20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 md:w-48 lg:w-56 border-b-2 border-l-2 border-white/15 sm:border-white/18 md:border-white/20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 md:w-48 lg:w-56 border-b-2 border-r-2 border-white/15 sm:border-white/18 md:border-white/20"></div>
        
        {/* Sacred pattern overlay - subtle and reverent */}
        <div className="absolute inset-0 opacity-[0.03] sm:opacity-[0.04] md:opacity-[0.05]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0 L100 200 M0 100 L200 100' stroke='%23fff' stroke-width='0.5'/%3E%3Ccircle cx='100' cy='100' r='5' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3Ccircle cx='100' cy='100' r='2' fill='%23fff'/%3E%3C/svg%3E")`,
              backgroundSize: '120px 120px',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        
        {/* Radial glow effect - sacred light */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)'
        }}></div>
        
        <div className="max-w-5xl mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] mb-6 sm:mb-8 md:mb-10 font-light"
            >
              Thánh Lễ Hôn Phối
            </motion.p>
            
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <div className="h-px w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-r from-transparent via-white/40 to-white/50"></div>
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                className="text-white/60 sm:text-white/65 md:text-white/70 text-2xl sm:text-3xl md:text-4xl"
              >
                ✦
              </motion.span>
              <div className="h-px w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-r from-white/50 via-white/50 to-transparent"></div>
            </div>
            
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 md:mb-10 lg:mb-12" 
            >
              Cử hành tại
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-100 mb-8 sm:mb-10 md:mb-12 font-light leading-relaxed"
            >
              Nhà thờ Giáo xứ Vinh An
            </motion.p>
            
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 my-8 sm:my-10 md:my-12">
              <div className="h-px w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-transparent via-white/30 to-white/40"></div>
              <div className="h-px w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-white/40 via-white/40 to-transparent"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-4 sm:space-y-5 md:space-y-6 mt-8 sm:mt-10 md:mt-12 text-gray-200"
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">
                Thứ Sáu, ngày 16 tháng 01 năm 2026
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">
                Vào lúc 4:30 chiều
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-6 sm:mt-8 font-light italic">
                (Nhằm ngày 28 tháng 11 năm Ất Tỵ)
              </p>
            </motion.div>
            
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 lg:mt-20">
              <div className="h-px w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-r from-transparent via-white/40 to-white/50"></div>
              <motion.span
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                className="text-white/60 sm:text-white/65 md:text-white/70 text-2xl sm:text-3xl md:text-4xl"
              >
                ✦
              </motion.span>
              <div className="h-px w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-r from-white/50 via-white/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section - Premium Layout Mobile-First */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        {/* Elegant decorative borders */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-30 sm:opacity-40 hidden md:block"></div>
        <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-30 sm:opacity-40 hidden md:block"></div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-12 sm:top-16 md:top-24 left-8 sm:left-12 md:left-16 w-20 h-20 sm:w-24 md:w-28 opacity-[0.015] sm:opacity-[0.02] md:opacity-[0.025]">
          <svg viewBox="0 0 120 120" fill="none">
            <path d="M60 0 L60 120 M0 60 L120 60" stroke="black" strokeWidth="0.5"/>
            <circle cx="60" cy="60" r="25" stroke="black" strokeWidth="0.5" fill="none"/>
            <circle cx="60" cy="60" r="15" stroke="black" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-12 sm:bottom-16 md:bottom-24 right-8 sm:right-12 md:right-16 w-20 h-20 sm:w-24 md:w-28 opacity-[0.015] sm:opacity-[0.02] md:opacity-[0.025]">
          <svg viewBox="0 0 120 120" fill="none">
            <path d="M60 0 L60 120 M0 60 L120 60" stroke="black" strokeWidth="0.5"/>
            <circle cx="60" cy="60" r="25" stroke="black" strokeWidth="0.5" fill="none"/>
            <circle cx="60" cy="60" r="15" stroke="black" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2 }}
            className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
          >
            <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] mb-4 sm:mb-6 md:mb-8 font-light">
              Câu Chuyện Của Chúng Tôi
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
              <div className="h-px w-12 sm:w-16 md:w-20 lg:w-28 bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
              <span className="text-gray-400 text-lg sm:text-xl md:text-2xl">✦</span>
              <div className="h-px w-12 sm:w-16 md:w-20 lg:w-28 bg-gradient-to-r from-gray-300 via-gray-300 to-transparent"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
              Từ Ngày Đầu Tiên
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2 }}
              className="order-2 md:order-1"
            >
              <div className="aspect-[4/5] overflow-hidden border-2 border-gray-200 shadow-[0_25px_70px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition-all duration-700">
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-xs sm:text-sm font-light">Ảnh cặp đôi</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2 }}
              className="order-1 md:order-2 space-y-6 sm:space-y-8"
            >
      <div>
                <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.25em] sm:tracking-[0.3em] font-light">Bắt đầu từ</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mt-2 sm:mt-3 mb-4 sm:mb-6 md:mb-8">
                  Một buổi chiều mùa thu
                </h3>
      </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl font-light">
                Chúng tôi gặp nhau vào một buổi chiều mùa thu năm 2019, tại một quán cà phê nhỏ ở trung tâm thành phố. 
                Từ ánh mắt đầu tiên, chúng tôi đã biết rằng đây là điều đặc biệt.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl font-light">
                Sau những cuộc trò chuyện dài, những nụ cười và khoảnh khắc đáng nhớ, tình yêu đã nảy nở và lớn dần 
                theo thời gian. Hôm nay, chúng tôi muốn mời bạn cùng chứng kiến ngày trọng đại này.
              </p>
              <div className="pt-6 sm:pt-8 border-t-2 border-gray-200">
                <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-light">
                  Với tình yêu và lòng biết ơn
        </p>
      </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wedding Details Section - Premium Mobile-First */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-12 bg-gray-50 overflow-hidden">
        {/* Premium background pattern */}
        <div className="absolute inset-0 opacity-[0.015] sm:opacity-[0.02] md:opacity-[0.025]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L50 100 M0 50 L100 50' stroke='%23000' stroke-width='0.4'/%3E%3Ccircle cx='50' cy='50' r='4' fill='none' stroke='%23000' stroke-width='0.4'/%3E%3Ccircle cx='50' cy='50' r='1.5' fill='%23000'/%3E%3C/svg%3E")`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
        
        {/* Ornate corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 md:w-48 border-t-2 border-l-2 border-gray-200/30 sm:border-gray-200/35 md:border-gray-200/40"></div>
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 md:w-48 border-t-2 border-r-2 border-gray-200/30 sm:border-gray-200/35 md:border-gray-200/40"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 md:w-48 border-b-2 border-l-2 border-gray-200/30 sm:border-gray-200/35 md:border-gray-200/40"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 md:w-48 border-b-2 border-r-2 border-gray-200/30 sm:border-gray-200/35 md:border-gray-200/40"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2 }}
            className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
          >
            <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] mb-4 sm:mb-6 md:mb-8 font-light">
              Thông Tin Sự Kiện
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
              <div className="h-px w-12 sm:w-16 md:w-20 lg:w-28 bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
              <span className="text-gray-400 text-lg sm:text-xl md:text-2xl">✦</span>
              <div className="h-px w-12 sm:w-16 md:w-20 lg:w-28 bg-gradient-to-r from-gray-300 via-gray-300 to-transparent"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
              Lễ Thành Hôn
            </h2>
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
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.1, delay: index * 0.2 }}
                className="relative"
                >
                <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:gap-14 items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}>
                  <div className="relative">
                    <div className="bg-white/90 backdrop-blur-xl border border-gray-200/80 shadow-[0_18px_60px_rgba(0,0,0,0.1)] rounded-2xl p-6 sm:p-7 md:p-9 lg:p-10 transition-all duration-500 hover:shadow-[0_24px_80px_rgba(0,0,0,0.14)]">
                      <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.25em] sm:tracking-[0.3em] font-light mb-3 sm:mb-4">
                        {event.subtitle}
                      </p>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-tight mb-3 sm:mb-4">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5">
                        <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 text-gray-700 text-xs sm:text-sm border border-gray-200">
                          <span className="text-gray-400">📅</span>
                          <span className="font-medium text-black">{event.date}</span>
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-900 text-white text-xs sm:text-sm border border-gray-800 shadow">
                          <span className="text-white/80">⏰</span>
                          <span className="font-medium">{event.time}</span>
                        </span>
                      </div>
                      <div className="space-y-3 sm:space-y-4 text-gray-600 font-light text-sm sm:text-base">
                        {event.note && <p className="text-gray-500 text-xs sm:text-sm italic">{event.note}</p>}
                        <div className="flex items-start gap-3">
                          <span className="text-lg sm:text-xl text-gray-400">📍</span>
                          <div>
                            <p className="text-black font-medium">{event.location}</p>
                            <p className="text-gray-500 text-sm sm:text-base mt-1">{event.address}</p>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => window.open(event.map, '_blank')}
                        className="inline-flex items-center justify-center gap-2 mt-5 w-full sm:w-auto bg-black text-white px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 hover:bg-gray-800 transition-all duration-300 font-light uppercase tracking-[0.15em] text-[11px] sm:text-xs border-2 border-black hover:shadow-lg"
                      >
                        Xem bản đồ
                      </button>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shadow-inner">
                      <span className="text-gray-300 text-sm sm:text-base">Hình ảnh địa điểm</span>
                    </div>
                  </div>
                </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Photo Gallery Section - Premium Mobile-First */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-12 bg-white overflow-hidden">
        {/* Elegant top and bottom borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30 sm:opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30 sm:opacity-40"></div>
        
        {/* Premium dots pattern */}
        <div className="absolute inset-0 opacity-[0.015] sm:opacity-[0.02]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='1.5' fill='%23000'/%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}
          ></div>
        </div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2 }}
            className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
          >
            <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] mb-4 sm:mb-6 md:mb-8 font-light">
              Khoảnh Khắc
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
              <div className="h-px w-12 sm:w-16 md:w-20 lg:w-28 bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
              <span className="text-gray-400 text-lg sm:text-xl md:text-2xl">✦</span>
              <div className="h-px w-12 sm:w-16 md:w-20 lg:w-28 bg-gradient-to-r from-gray-300 via-gray-300 to-transparent"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
              Album Hình Ảnh
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            {Array.from({ length: 16 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.04, type: "spring" }}
                className="aspect-square overflow-hidden border-2 border-gray-200 hover:border-gray-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700 cursor-pointer group"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  <span className="text-gray-300 text-[10px] sm:text-xs font-light">Ảnh {index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guestbook Section - Premium Mobile-First */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Elegant background texture */}
        <div className="absolute inset-0 opacity-[0.015] sm:opacity-[0.02] md:opacity-[0.025]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L120 120 M120 0 L0 120' stroke='%23000' stroke-width='0.3'/%3E%3Ccircle cx='60' cy='60' r='3' fill='%23000'/%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px'
            }}
          ></div>
        </div>
        
        {/* Decorative side elements */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-300/25 to-transparent sm:via-gray-300/30 hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-300/25 to-transparent sm:via-gray-300/30 hidden md:block"></div>
        
       
      </section>



      {/* Footer - Premium Mobile-First */}
   
    </div>
  )
}

export default App
