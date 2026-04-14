# 📱 Tugas Pertemuan 4 - Restaurant Directory

## 🎯 Project Overview

Sebuah aplikasi **Restaurant Directory** yang menampilkan 20 data restoran dengan dua tampilan berbeda (Guest View dan Admin View), dilengkapi dengan fitur Search dan Filter yang responsif.

---

## 📁 Project Structure

```
pertemuan-4/
├── main.jsx                    # Main component dengan toggle Guest/Admin view
├── components/
│   ├── GuestView.jsx           # Guest view - Card display
│   └── AdminView.jsx           # Admin view - Table display
└── data/
    └── restaurants.json        # JSON data dengan 20 restoran
```

---

## 📊 Data Structure (JSON)

Setiap restoran memiliki **21 atribut** yang terdiri dari:

### ✅ 5+ Main Attributes:
- `id` - Unique identifier
- `name` - Nama restoran
- `category` - Kategori (Traditional, Japanese, Italian, etc.)
- `rating` - Rating 1-5
- `priceRange` - Harga ($, $$, $$$)
- `image` - URL gambar restoran
- `averageVisit` - Waktu rata-rata kunjungan
- `specialties` - Array daftar spesialisasi makanan

### 📦 3 Nested Structures:

1. **location (Object)**
   - `city` - Kota
   - `district` - Wilayah/Distrik
   - `address` - Alamat lengkap

2. **operatingHours (Object)**
   - `open` - Jam buka
   - `close` - Jam tutup
   - `dayOff` - Hari libur

3. **contact (Object)**
   - `phone` - Nomor telepon
   - `email` - Email
   - `socialMedia` - Media sosial

### 📸 Image
- Menggunakan URL dari Unsplash (gambar berkualitas tinggi)

---

## 🎨 Features

### 1. **Guest View (Card Display)**
- 📱 Responsive grid layout (1 kolom mobile, 2 kolom tablet, 3 kolom desktop)
- 🎴 Card components dengan:
  - Gambar restoran dengan hover effect
  - Badge category
  - Rating dengan star icons
  - Lokasi dengan icon
  - Operating hours
  - Specialty tags (2 + more)
  - Price range indicator
  - Call-to-action button
- ⚡ Smooth animations dan transitions
- 🌓 Modern gradient design dengan glassmorphism effect

### 2. **Admin View (Table Display)**
- 📊 Comprehensive data table dengan:
  - Sortable columns (click header untuk sort)
  - Sort indicators (asc/desc)
  - Responsive overflow dengan horizontal scroll di mobile
  - Striped rows untuk readability
  - Hover effects pada row
- 📝 Semua atribut ditampilkan lengkap
- 🔗 Email clickable links

### 3. **Search & Filter**
- **Search Bar** - Search by:
  - Restaurant name
  - Specialty dishes
- **Filter #1: Category** - Filter by restaurant type
- **Filter #2: Price Range** - Filter by price level ($, $$, $$$)
- 📊 Dynamic results counter
- Empty state message when no results

### 4. **Responsive Design**
- ✅ Mobile-first approach
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px)
- ✅ Responsive font sizes dan spacing
- ✅ Mobile-optimized navigation
- ✅ Touch-friendly buttons dan inputs
- ✅ Horizontal scroll pada table di mobile
- ✅ Grid system (1-2-3 kolom untuk cards)

### 5. **Tailwind CSS Styling**
- 🎨 Custom color scheme:
  - Primary: Slate (bg)
  - Accent: Amber (buttons, highlights)
  - Gradients untuk depth
- 🌐 Full responsive utilities
- ✨ Animations & transitions
- 🎭 Glassmorphism effects
- 💫 Hover states dan interactions

---

## ⚙️ Key Components

### Main Component (main.jsx)
```jsx
- Toggle antara Guest dan Admin view
- Sticky navigation bar
- Footer dengan project info
- Fade animation pada view change
```

### GuestView Component
```jsx
- Card grid layout
- Image gallery dengan hover zoom
- Rating system dengan stars
- Nested data display (location, hours, contact)
- Search dan Filter functionality
```

### AdminView Component
```jsx
- Sortable data table
- Rich cell content dengan nested data
- Organized columns
- Email links
- Specialty tags display
```

---

## 🛠️ Technologies Used

- **React 18** - Frontend library
- **Tailwind CSS 3** - Utility-first CSS framework
- **JavaScript ES6+** - Programming language
- **JSON** - Data format
- **Unsplash API** - Image source

---

## 🚀 How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   - Navigate ke `http://localhost:5173`
   - Aplikasi akan terbuka dengan Pertemuan 4 component

---

## 📲 Responsive Breakpoints

### Mobile (< 640px)
- Single column card layout
- Stacked filter inputs
- Larger touch targets
- Full-width inputs

### Tablet (640px - 1024px)
- 2-column grid untuk cards
- Side-by-side filters
- Optimized spacing

### Desktop (> 1024px)
- 3-column grid untuk cards
- Full-featured layout
- All features visible
- Hover effects fully enabled

---

## 🎓 Learning Outcomes

✅ **JSON Data Structure**
- Create well-organized JSON dengan nested objects
- Multiple relationships dalam satu data model
- Array manipulation dan filtering

✅ **React State Management**
- useState untuk search dan filter
- useMemo untuk optimization
- Props passing dan component composition

✅ **Responsive Web Design**
- Mobile-first approach
- CSS Grid dan Tailwind responsive classes
- Media queries implicit dalam Tailwind

✅ **UI/UX Design**
- Card-based design pattern
- Table design para data-heavy content
- User feedback (empty states, counters)
- Visual hierarchy dan typography

✅ **Advanced CSS**
- Gradients dan animations
- Glassmorphism effects
- Hover states dan transitions
- Transform dan scale effects

---

## 📋 Checklist Requirement Penugasan

- ✅ File JSON dengan 20 data
- ✅ Minimal 5 atribut utama (punya 8)
- ✅ 3 atribut nested structured (location, operatingHours, contact)
- ✅ Ada gambar (dari Unsplash)
- ✅ Nama komponen sesuai (GuestView, AdminView)
- ✅ Tampilan Guest dengan Card (menarik + responsif)
- ✅ Tampilan Admin dengan Tabel
- ✅ 1 kolom Search (by name & specialty)
- ✅ 2 Filter (Category & Price Range)
- ✅ Tailwind CSS terapkan
- ✅ Responsive Design (mobile, tablet, desktop)
- ✅ Grid Design (CSS Grid + Tailwind)
- ✅ Demo responsive design (breakpoints di kode)

---

## 💡 Features Beyond Requirements

Untuk memberikan nilai lebih:

1. **Advanced Search** - Search di multiple fields (name + specialties)
2. **Sortable Table** - Click column headers untuk sort
3. **Nested Data Display** - Proper handling dari object nesting
4. **Empty States** - User feedback ketika no results
5. **Results Counter** - Real-time filtering indicator
6. **Animations** - Smooth transitions antara views
7. **Star Rating** - Visual rating system
8. **Category Badges** - Visual category indicators
9. **Price Indicators** - Visual price level
10. **Modern Design** - Glassmorphism + gradient effects

---

## 📝 Notes

- Semua data 100% original (tidak copy-paste dari refrensi)
- Menggunakan Unsplash free images untuk placeholder
- Fully responsive tanpa media query tambahan (pure Tailwind)
- Component-based architecture untuk maintainability
- Clean code dengan proper naming conventions

---

## 🎨 Color Scheme

- **Background**: Slate-900, Slate-800
- **Accent**: Amber-400, Amber-500
- **Text**: White, Slate-300, Slate-400
- **Borders**: Amber-400/20
- **Hover**: Amber-300, Amber-400/60

---

## 📌 File Paths

- Main Component: `src/pertemuan-4/main.jsx`
- Guest View: `src/pertemuan-4/components/GuestView.jsx`
- Admin View: `src/pertemuan-4/components/AdminView.jsx`
- Data: `src/pertemuan-4/data/restaurants.json`
- App Entry: `src/App.jsx` (updated to use Pertemuan 4)

---

Dibuat untuk **Tugas Pertemuan 4** - Restaurant Directory Assignment
