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

interface GuestApi { id: string; fullName: string; slug?: string }

const gallery = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27]

const API_URL = 'https://6942b03469b12460f312696e.mockapi.io/guest'

// Decorative divider component
const Divider = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="w-12 sm:w-16 lg:w-20 h-px bg-[#d4c5a9]" />
    <div className="w-1.5 h-1.5 rotate-45 bg-[#d4c5a9]" />
    <div className="w-12 sm:w-16 lg:w-20 h-px bg-[#d4c5a9]" />
  </div>
)

export default function CardPage() {
  const { slug } = useParams()
  const [countdown, setCountdown] = useState({ d: 0, h: 0, m: 0, s: 0 })
  const [guest, setGuest] = useState('Quý Khách')
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    if (slug) {
      axios.get<GuestApi[]>(`${API_URL}?slug=${slug}`)
        .then(r => r.data[0]?.fullName && setGuest(r.data[0].fullName))
        .catch(() => {})
    }
  }, [slug])

  useEffect(() => {
    const target = new Date('2026-01-16T16:30:00').getTime()
    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      setCountdown({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000)
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-[#fdfcf9] text-[#4a4a4a]">
      
      {/* ══════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/banner.svg')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3d3d3d]/50 via-[#3d3d3d]/30 to-[#3d3d3d]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-white/70 mb-8 lg:mb-12">
              Wedding Invitation
            </p>

            {/* Names - Beau Rivage */}
            <h1 className="text-[11vw] sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-wide" style={{ fontFamily: "'Beau Rivage', cursive" }}>
              Hoài An
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-[#d4c5a9] my-3 lg:my-4">&</p>
            <h1 className="text-[11vw] sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-wide" style={{ fontFamily: "'Beau Rivage', cursive" }}>
              Kiều Trinh
            </h1>

            {/* Date */}
            <p className="mt-8 lg:mt-12 text-xl sm:text-xl lg:text-lg tracking-[0.15em] text-white/80">
              18 . 01 . 2026
            </p>

            {/* Guest */}
            <div className="mt-10 lg:mt-14 pt-8 border-t border-white/20">
              <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/50 mb-2">
                Trân trọng kính mời
              </p>
              <p className="text-2xl sm:text-2xl lg:text-3xl font-bold text-[#d4c5a9]">
                {guest}
              </p>
            </div>
          </motion.div>

      
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          COUNTDOWN SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#a09274] mb-4">
              Save The Date
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#3d3d3d] mb-2">
              Chủ nhật, 18 Tháng 01
            </h2>
            <p className="text-sm sm:text-base text-[#8a8a8a] mb-8 lg:mb-12">
              (Nhằm ngày 30 tháng 11 năm Ất Tỵ)
            </p>

            {/* Countdown */}
            <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6">
              {[
                { v: countdown.d, l: 'Ngày' },
                { v: countdown.h, l: 'Giờ' },
                { v: countdown.m, l: 'Phút' },
                { v: countdown.s, l: 'Giây' }
              ].map((item, i) => (
                <div key={i} className="w-16 sm:w-20 lg:w-24">
                  <div className="aspect-square rounded-2xl bg-[#f8f6f1] flex items-center justify-center border border-[#ebe7dc]">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#5a5a5a] tabular-nums">
                      {String(item.v).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-2 text-[9px] sm:text-[10px] lg:text-xs tracking-[0.15em] uppercase text-[#a09274]">
                    {item.l}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          COUPLE SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-6 bg-[#fdfcf9]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#a09274] mb-4">
              The Couple
            </p>
            <Divider />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Groom */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#66bb6a] to-[#4caf50] flex items-center justify-center">
                <span className="text-white text-4xl lg:text-5xl">♂</span>
              </div>
              <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#66bb6a] mb-3">
                Chú Rể
              </p>
              <h3 className="text-3xl sm:text-3xl lg:text-4xl font-light text-[#3d3d3d] mb-1" >
                Phêrô
              </h3>
              <p className="text-4xl sm:text-3xl lg:text-2xl text-[#6a6a6a] font-normal" style={{ fontFamily: "'Beau Rivage', cursive" }}>
                Lê Nguyên Hoài An
              </p>
              <p className="text-xs sm:text-sm text-[#a09274] mt-3">(Thứ nam)</p>
            </motion.div>

            {/* Bride */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#d4c5a9] to-[#c4b08a] flex items-center justify-center">
                <span className="text-white text-4xl lg:text-5xl">♀</span>
              </div>
              <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#c4b08a] mb-3">
                Cô Dâu
              </p>
              <h3 className="text-3xl sm:text-4xl lg:text-4xl font-light text-[#3d3d3d] mb-1" >
                Têrêsa
              </h3>
              <p className="text-4xl sm:text-3xl lg:text-2xl text-[#6a6a6a] font-normal" style={{ fontFamily: "'Beau Rivage', cursive" }}>
                Hà Thị Kiều Trinh
              </p>
              <p className="text-xs sm:text-sm text-[#a09274] mt-3">(Trưởng nữ)</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FAMILIES SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-6 bg-[#f8f6f1]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#a09274] mb-4">
              Gia Đình
            </p>
            <Divider />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Groom's Family */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 lg:p-8 text-center"
            >
              <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#66bb6a] mb-4">
                Nhà Trai
              </p>
              <div className="space-y-1 mb-4">
                <p className="text-[10px] text-[#a09274] uppercase tracking-wider">Ông bà:</p>
                <p className="text-base lg:text-lg text-[#4a4a4a]">Antôn Lê Ngọc Điền</p>
                <p className="text-base lg:text-lg text-[#4a4a4a]">Anna Têrêsa Nguyễn Thị Thái Hà</p>
              </div>
              <div className="pt-4 border-t border-[#ebe7dc]">
                <p className="text-xs lg:text-sm text-[#8a8a8a]">Gh. Vinh Đức - Gx. Vinh Xuân</p>
                <p className="text-xs lg:text-sm text-[#8a8a8a]">Giáo Phận Ban Mê Thuột</p>
              </div>
            </motion.div>

            {/* Bride's Family */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 lg:p-8 text-center"
            >
              <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#c4b08a] mb-4">
                Nhà Gái
              </p>
              <div className="space-y-1 mb-4">
                <p className="text-[10px] text-[#a09274] uppercase tracking-wider">Ông bà:</p>
                <p className="text-base lg:text-lg text-[#4a4a4a]">Phêrô Hà Văn Thanh</p>
                <p className="text-base lg:text-lg text-[#4a4a4a]">Anna Nguyễn Thị Hường</p>
              </div>
              <div className="pt-4 border-t border-[#ebe7dc]">
                <p className="text-xs lg:text-sm text-[#8a8a8a]">Gh. Thanh Lâm - Gx. Vinh An</p>
                <p className="text-xs lg:text-sm text-[#8a8a8a]">Giáo Phận Ban Mê Thuột</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          EVENTS SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#a09274] mb-4">
              Sự Kiện
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#3d3d3d]">
              Lễ Thành Hôn
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Ceremony */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#fdfcf9] rounded-2xl p-6 lg:p-8 border border-[#ebe7dc] text-center"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-5 rounded-full bg-[#66bb6a] flex items-center justify-center">
                <span className="text-white text-2xl">⛪</span>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#66bb6a] mb-2">
                Thánh Lễ Hôn Phối
              </p>
              <p className="text-lg lg:text-xl text-[#4a4a4a] font-normal mb-1">
                Thứ Sáu, 16/01/2026
              </p>
              <p className="text-sm lg:text-base text-[#6a6a6a] mb-4">
                Lúc 4:30 sáng
              </p>
              <p className="text-sm lg:text-base text-[#4a4a4a] mb-1">
                Nhà thờ Giáo xứ Vinh An
              </p>
              <p className="text-xs text-[#8a8a8a] italic mb-6">
                (Nhằm ngày 28/11 Ất Tỵ)
              </p>
              <button
                onClick={() => window.open('https://www.google.com/maps/place/Vinh+An+Parish+Church/@12.4285939,107.6351848,17z', '_blank')}
                className="w-full py-3.5 lg:py-4 rounded-xl bg-[#66bb6a] text-white text-sm lg:text-base font-medium hover:bg-[#4caf50] active:scale-[0.98] transition-all"
              >
                Xem bản đồ
              </button>
            </motion.div>

            {/* Reception */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#fdfcf9] rounded-2xl p-6 lg:p-8 border border-[#ebe7dc] text-center"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-5 rounded-full bg-[#d4c5a9] flex items-center justify-center">
                <span className="text-white text-2xl">🎊</span>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#c4b08a] mb-2">
                Tiệc Cưới
              </p>
              <p className="text-lg lg:text-xl text-[#4a4a4a] font-normal mb-1">
                Chủ Nhật, 18/01/2026
              </p>
              <p className="text-sm lg:text-base text-[#6a6a6a] mb-4">
                Lúc 10:30
              </p>
              <p className="text-sm lg:text-base text-[#4a4a4a] mb-0.5">
                Nhà hàng Tuấn Thảo 2
              </p>
              <p className="text-xs text-[#8a8a8a] mb-1">
                Thôn Xuân Phong, Đức Lập, Lâm Đồng
              </p>
              <p className="text-xs text-[#8a8a8a] italic mb-6">
                (Nhằm ngày 30/11 Ất Tỵ)
              </p>
              <button
                onClick={() => window.open('https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Nh%C6%B0+%C3%9D/@12.4329574,107.6542266', '_blank')}
                className="w-full py-3.5 lg:py-4 rounded-xl bg-[#d4c5a9] text-white text-sm lg:text-base font-medium hover:bg-[#c4b599] active:scale-[0.98] transition-all"
              >
                Xem bản đồ
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          GALLERY SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#3d3d3d]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10 lg:mb-14 px-6"
          >
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#a09274] mb-4">
              Moments
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
              Khoảnh Khắc
            </h2>
          </motion.div>

          {/* Gallery Grid - Responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 px-1 sm:px-2">
            {gallery.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
                onClick={() => setLightbox(i)}
                className="aspect-[3/4] cursor-pointer overflow-hidden group"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CLOSING SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-6 bg-[#fdfcf9] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#a09274] mb-6">
            Lời Cảm Ơn
          </p>
          
          <p className="text-base sm:text-lg lg:text-xl text-[#6a6a6a] font-normal leading-relaxed mb-8">
            Sự hiện diện của bạn là niềm vui và là lời chúc phúc ý nghĩa nhất dành cho chúng tôi.
          </p>

          <Divider className="mb-8" />

          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#4a4a4a]" style={{ fontFamily: "'Beau Rivage', cursive" }}>
            Hoài An & Kiều Trinh
          </p>
          <p className="text-xs sm:text-sm text-[#a09274] mt-3 tracking-[0.2em]">
            18 • 01 • 2026
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          LIGHTBOX
      ══════════════════════════════════════════════════════════════════ */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={gallery[lightbox]}
            alt=""
            className="max-w-full max-h-[85vh] object-contain"
          />
          
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 text-white text-2xl flex items-center justify-center hover:bg-white/20"
          >
            ×
          </button>
          
          {/* Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(p => (p! - 1 + gallery.length) % gallery.length) }}
              className="w-12 h-12 rounded-full bg-white/10 text-white text-xl flex items-center justify-center hover:bg-white/20"
            >
              ←
            </button>
            <span className="text-white/60 text-sm tabular-nums min-w-[60px] text-center">
              {lightbox + 1} / {gallery.length}
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(p => (p! + 1) % gallery.length) }}
              className="w-12 h-12 rounded-full bg-white/10 text-white text-xl flex items-center justify-center hover:bg-white/20"
            >
              →
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
