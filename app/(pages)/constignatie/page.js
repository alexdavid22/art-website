import "../page-styles.css"

const Page = () => {
  return (
    <div className="cs-container" style={{ marginTop: "120px" }}>
      <h1>Bine ați venit la viitorul nostru magazin!</h1>
      <p>
        Acesta va fi casa magazinului nostru online, unde veți putea naviga și
        cumpăra produsele noastre.
      </p>

      <h2>Ce să așteptați</h2>
      <p>
        Muncim din greu pentru a crea o experiență de cumpărături care să fie
        ușoară, plăcută și sigură. Iată la ce puteți să vă așteptați:
      </p>

      <ul>
        <li>
          <strong>Selecție largă:</strong> Vom avea o gamă largă de produse, așa
          că sunteți sigur să găsiți ceva ce vă place.
        </li>
        <li>
          <strong>Calitate înaltă:</strong> Ne angajăm să oferim numai produse
          de cea mai înaltă calitate. Dacă nu este suficient de bun pentru noi,
          nu este suficient de bun pentru dvs.
        </li>
        <li>
          <strong>Cumpărături sigure:</strong> Securitatea dvs. este prioritatea
          noastră. Ne vom asigura că informațiile dvs. personale sunt protejate
          pe parcursul experienței dvs. de cumpărături.
        </li>
      </ul>

      <h2>Stați pe fază</h2>
      <p>
        Abia așteptăm să vă întâmpinăm în magazinul nostru. Stați pe fază pentru
        actualizări!
      </p>
    </div>
  )
}

export default Page
