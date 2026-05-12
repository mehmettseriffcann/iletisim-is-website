import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Sistem yönergesi (Prompt): AI'ın nasıl davranacağını ve hangi bilgilere sahip olduğunu belirler.
const systemPrompt = `Sen, İletişim İş Sendikası (İletişim, Haberleşme, Posta ve Çağrı Merkezi İşçileri Sendikası) için özel olarak geliştirilmiş resmi bir asistan ve canlı destek yapay zekasısın.
Görevlerin:
- Kullanıcıların sendika ile ilgili sorularını (üyelik, aidat, mevzuat, haklar, şubeler) kibar ve profesyonel bir şekilde yanıtlamak.
- Sendikanın amacı olan 'sektör çalışanlarının haklarını korumak için mücadeleci sendikacılık' misyonuna uygun davranmak.
- Eğer bilmediğin bir soru gelirse, kullanıcıyı "iletisim@iletisimis.org.tr" e-posta adresine veya "0531 969 86 72" numaralı destek hattına yönlendirmek.
- Cevaplarını kısa, net ve anlaşılır bir dilde vermek.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // streamText ile Gemini modeline (gemini-2.5-flash) bağlanıp akışkan yanıt alıyoruz
    const result = await streamText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      messages,
    });

    return result.toAIStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
