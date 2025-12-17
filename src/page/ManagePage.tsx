import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

interface Guest {
  id: string;
  fullName: string;
  slug?: string;
}

const generateSlug = (name: string) =>
  name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const API_URL = 'https://6942b03469b12460f312696e.mockapi.io/guest';
const ITEMS_PER_PAGE = 10;

const GuestManager: React.FC = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<Guest[]>(API_URL);
      setGuests(data);
    } catch (err) {
      showToast("Lỗi kết nối!");
    } finally {
      setTimeout(() => setLoading(false), 500); // Delay nhẹ để hiệu ứng mượt hơn
    }
  };

  const showToast = (msg: string) => setToast(msg);

  const handleAddOrUpdate = async () => {
    if (!inputValue.trim()) return;
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, { 
          fullName: inputValue,
          slug: generateSlug(inputValue)
        });
        showToast("Đã cập nhật!");
      } else {
        await axios.post(API_URL, { 
          fullName: inputValue,
          slug: generateSlug(inputValue)
        });
        showToast("Đã thêm thành công!");
      }
      setInputValue('');
      setEditingId(null);
      fetchGuests();
    } catch (err) { showToast("Thất bại!"); }
  };

  const deleteGuest = async (id: string) => {
    if (!window.confirm("Xác nhận xóa?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      showToast("Đã xóa.");
      fetchGuests();
    } catch (err) { showToast("Lỗi khi xóa!"); }
  };

  const filteredGuests = useMemo(() => {
    return guests.filter(g => g.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [guests, searchTerm]);

  const totalPages = Math.ceil(filteredGuests.length / ITEMS_PER_PAGE);
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredGuests.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredGuests]);

  useEffect(() => { setCurrentPage(1); }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Toast Notification - Mobile Optimized position */}
      {toast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-indigo-600 px-6 py-3 rounded-2xl shadow-2xl font-bold text-sm animate-bounce">
          {toast}
        </div>
      )}

      {/* Sticky Top Section for Mobile */}
      <div className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 px-5 py-4">
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <h1 className="font-black italic tracking-tighter text-xl">G-ELITE</h1>
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{guests.length} Guests</span>
          </div>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-5 pt-8">
        {/* Input Card - Glassmorphism */}
        <div className="mb-10 bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-[2rem]">
          <div className="bg-[#0f0f0f] rounded-[2rem] p-6 space-y-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Nhập tên khách mời..."
              className="w-full bg-black/50 border border-white/5 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all placeholder:text-slate-700"
            />
            <button
              onClick={handleAddOrUpdate}
              className="w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest active:scale-[0.96] transition-transform shadow-lg"
            >
              {editingId ? 'Lưu thay đổi' : 'Thêm vào danh sách'}
            </button>
          </div>
        </div>

        {/* Search - Minimalist */}
        <div className="mb-8 px-2 flex items-center border-b border-white/10 focus-within:border-indigo-500 transition-colors">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent py-3 outline-none text-sm italic"
          />
          <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>

        {/* List with Loading State */}
        <div className="space-y-4">
          {loading ? (
            [...Array(5)].map((_, i) => (
              <div key={i} className="h-20 bg-white/5 rounded-3xl animate-pulse"></div>
            ))
          ) : currentData.length > 0 ? (
            currentData.map((guest, idx) => (
              <div 
                key={guest.id}
                className="flex items-center justify-between p-4 bg-[#111] border border-white/5 rounded-[1.5rem] animate-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-mono text-xs border border-indigo-500/20">
                    {guest.id}
                  </div>
                  <span className="font-bold text-sm tracking-tight uppercase truncate max-w-[120px] sm:max-w-none">
                    {guest.fullName}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => window.open(`/${guest.slug || generateSlug(guest.fullName)}`, '_blank')}
                    className="flex items-center justify-center gap-1 px-3 h-10 rounded-xl bg-indigo-500/20 text-indigo-100 text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase border border-indigo-500/40 active:bg-indigo-500 active:text-white transition-all"
                  >
                    <span className="text-xs">✉️</span>
                    <span>Thiệp</span>
                  </button>
                  <button onClick={() => {setEditingId(guest.id); setInputValue(guest.fullName); window.scrollTo({top:0, behavior:'smooth'})}} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 active:bg-indigo-500 active:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeWidth="2"/></svg>
                  </button>
                  <button onClick={() => deleteGuest(guest.id)} className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500/60 active:bg-red-500 active:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2"/></svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-slate-700 text-[10px] tracking-widest uppercase">Empty List</div>
          )}
        </div>

        {/* Improved Pagination */}
        {filteredGuests.length >= ITEMS_PER_PAGE && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button 
              disabled={currentPage === 1}
              onClick={() => {setCurrentPage(p => p - 1); window.scrollTo({top:0, behavior:'smooth'})}}
              className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center disabled:opacity-10 text-indigo-500"
            >
              ←
            </button>
            <div className="px-6 py-3 bg-white/5 rounded-2xl font-mono text-xs">
              {currentPage} / {totalPages}
            </div>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => {setCurrentPage(p => p + 1); window.scrollTo({top:0, behavior:'smooth'})}}
              className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center disabled:opacity-10 text-indigo-500"
            >
              →
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default GuestManager;