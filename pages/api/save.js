import { GoogleSpreadsheet } from "google-spreadsheet";
import { fromBase64 } from "../../utils/base64";

import moment from "moment";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const genCupoun = () => {
  const code = parseInt(moment().format("YYMMDDHHmmssSSS"))
    .toString(16)
    .toUpperCase();
  return code.substr(0, 4) + "-" + code.substr(4, 4) + "-" + code.substr(8, 4);
};

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
    });
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[1];

    const data = JSON.parse(req.body);

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells("A3:B3");

    const showPromotionCell = sheetConfig.getCell(2, 0);
    const textCell = sheetConfig.getCell(2, 1);

    let coupon = "";
    let promo = "";

    if (showPromotionCell.value === "VERDADEIRO") {
      // TODO: gerar cupom
      coupon = genCupoun();
      promo = textCell.value;
    }

    await sheet.addRow({
      Nome: data.name,
      Email: data.email,
      Whatsapp: data.whatsapp,
      Pedido: data.mensagem,
      Nota: parseInt(data.grade),
      "Data do pedido": moment().format("DD/MM/YYYY - HH:mm:ss"),
      Cupom: coupon,
      Promo: promo,
    });
    res.end(
      JSON.stringify({
        showCoupon: coupon !== "",
        Cupom: coupon,
        Promo: promo,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
