// lib/getHaberler.ts

export async function getHaberler() {
  const SHEET_ID = "158QSVae0ZzIICDKvsjaKwoAXO4Hu7xuKjxZDwS_VTzE";
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

  try {
    const response = await fetch(url, { cache: 'no-store' });
    const text = await response.text();
    
    // Satırları ayır ve temizle
    const rows = text.split('\n').slice(1);
    
    return rows.map(row => {
      // CSV içindeki virgülleri ve tırnakları doğru ayırmak için regex kullanıyoruz
      const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(c => c.replace(/^"|"$/g, ''));
      
      return {
        id: cols[0],
        slug: cols[1],     // B Sütunu
        title: cols[2],    // C Sütunu
        ozet: cols[3],     // D Sütunu
        date: cols[4],     // E Sütunu
        category: cols[5], // F Sütunu
        image: cols[6],    // G Sütunu (Görsel URL)
        content: cols[7]   // H Sütunu (HTML İçerik)
      };
    });
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return [];
  }
}