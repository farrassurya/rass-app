import './custom.css'

// Component dengan Props - Menerima data dari parent component
function FotoProfil({ src, alt }) {
    return (
        <div className="foto-wrapper">
            <div className="foto-profil">
                <img src={src} alt={alt} />
            </div>
        </div>
    )
}

// Component dengan Props - Menampilkan single item dengan label dan value
function BiotaItem({ label, value, isWide = false }) {
    return (
        <div className={`biodata-item ${isWide ? 'biodata-item-wide' : ''}`}>
            <h3>{label}</h3>
            <p>{value}</p>
        </div>
    )
}

// Nested Component - Nested Components digunakan dalam parent
function NamaCard(props) {
    return <BiotaItem label="Nama" value={props.nama} />
}

function NimCard(props) {
    return <BiotaItem label="NIM" value={props.nim} />
}

function KampusCard(props) {
    return <BiotaItem label="Kampus" value={props.kampus} />
}

function ProdiCard(props) {
    return <BiotaItem label="Program Studi" value={props.prodi} />
}

function AlamatCard(props) {
    return <BiotaItem label="Alamat" value={props.alamat} isWide={true} />
}

function HobiCard(props) {
    return <BiotaItem label="Hobi" value={props.hobi} />
}

function EmailCard(props) {
    return <BiotaItem label="Email" value={props.email} />
}

// Component Parent-Child - BiodataDiri adalah parent component
function BiodataDiri() {
    const dataBiodata = {
        nama: 'M. Farras Suryaputra',
        nim: '2457301078',
        alamat: 'Jl. Bukit Barisan, Pekanbaru, Riau',
        hobi: 'Nonton Film',
        prodi: 'Sistem Informasi',
        kampus: 'Politeknik Caltex Riau',
        email: 'suryaputra24si@mahasiswa.pcr.ac.id',
        foto: '/img/rass3.jpeg'
    }

    // Penerapan Style CSS - menggunakan class yang didefinisikan di custom.css
    return (
        <main className="biodata-page">
            <section className="biodata-header">
                <h1>Biodata</h1>
                <span className="header-line" aria-hidden="true"></span>
            </section>

            <section className="biodata-card">
                <div className="biodata-ribbon">
                    <p>Profil Pengembang</p>
                </div>

                <div className="biodata-content">
                    <aside className="biodata-left">
                        {/* Penggunaan Image - Props src dan alt */}
                        <FotoProfil src={dataBiodata.foto} alt="Foto profil M. Farras Suryaputra" />
                        <div className="tag-list">
                            <span className="tag-mahasiswa">👤 Mahasiswa</span>
                            <span className="tag-batch">👥 G24</span>
                        </div>
                    </aside>

                    {/* Nested Components - Multiple child components dalam parent */}
                    <div className="biodata-grid">
                        <NamaCard nama={dataBiodata.nama} />
                        <NimCard nim={dataBiodata.nim} />
                        <KampusCard kampus={dataBiodata.kampus} />
                        <ProdiCard prodi={dataBiodata.prodi} />
                        <AlamatCard alamat={dataBiodata.alamat} />
                        <HobiCard hobi={dataBiodata.hobi} />
                        <EmailCard email={dataBiodata.email} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BiodataDiri
//ada