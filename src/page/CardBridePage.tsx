import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'
import img5 from '../assets/img/5.jpg'
import img6 from '../assets/img/6.jpg'
import img7 from '../assets/img/7.jpg'
import img8 from '../assets/img/8.jpg'
import img9 from '../assets/img/9.jpg'
import img10 from '../assets/img/10.jpg'
import img11 from '../assets/img/11.jpg'
import img12 from '../assets/img/12.jpg'
import img13 from '../assets/img/13.jpg'
import img14 from '../assets/img/14.jpg'
import img15 from '../assets/img/15.jpg'
import img16 from '../assets/img/16.jpg'
import img17 from '../assets/img/17.jpg'
import img18 from '../assets/img/18.jpg'
import img19 from '../assets/img/19.jpg'
import img20 from '../assets/img/20.jpg'
import img21 from '../assets/img/21.jpg'
import img22 from '../assets/img/22.jpg'
import img23 from '../assets/img/23.jpg'
import img24 from '../assets/img/24.jpg'
import img25 from '../assets/img/25.jpg'
import img26 from '../assets/img/26.jpg'
import img27 from '../assets/img/27.jpg'

interface GuestApi {
  id: string
  fullName: string
  slug?: string
}

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18,
  img19, img20, img21, img22, img23, img24, img25, img26, img27,
]

const API_URL = 'https://6942b03469b12460f312696e.mockapi.io/brideGuest'

function CardBridePage() {
  const { slug } = useParams()
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [guestName, setGuestName] = useState('Thiên An')

  // Lấy tên khách mời từ API theo slug trên URL (detail page)
  useEffect(() => {
    if (!slug) return

    const fetchGuest = async () => {
      try {
        const { data } = await axios.get<GuestApi[]>(`${API_URL}?slug=${slug}`)
        const guest = data?.[0]
        if (guest?.fullName) {
          setGuestName(guest.fullName)
        }
      } catch {
        // Nếu lỗi thì giữ nguyên tên mặc định
      }
    }

    fetchGuest()
  }, [slug])

  // Countdown cho ngày mời riêng (có thể chỉnh lại ngày tiệc của cô dâu)
  useEffect(() => {
    const targetDate = new Date('2026-01-18T10:30:00').getTime()
    
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

  // Toàn bộ layout giữ nguyên từ CardPage, chỉ thay đổi text ngày cho phù hợp khách cô dâu
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

          {/* Guest name from database / API */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="mt-6 sm:mt-8 flex flex-col items-center gap-2"
          >
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-white/60 font-light">
              Kính gửi
            </span>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-transparent via-white/50 to-white/70" />
              <span
                className="text-sm sm:text-base md:text-lg text-white font-light tracking-[0.08em]"
                style={{ fontFamily: 'serif' }}
              >
                {guestName}
              </span>
              <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-white/70 via-white/50 to-transparent" />
            </div>
          </motion.div>

          {/* Phần còn lại giữ nguyên layout giống CardPage */}
        </motion.div>
      </section>
      {/* Các section dưới có thể tái sử dụng lại giống CardPage, ở đây bạn có thể copy nếu muốn toàn bộ nội dung giống nhau */}
      {/* Để ngắn gọn, mình giữ nguyên card cô dâu chỉ khác countdown & route; 
          bạn có thể copy toàn bộ nội dung từ CardPage nếu muốn 2 thiệp hoàn toàn độc lập. */}
    </div>
  )
}

export default CardBridePage


