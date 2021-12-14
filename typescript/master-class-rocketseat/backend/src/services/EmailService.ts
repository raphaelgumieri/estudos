interface IMailTo {
  name: string;
  email: string;
} // interface é para tipar um objeto e o que ele vai receber, colocar I no começo para explicitar que é uma interface

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[]; // esse ? antes do : significa que ele não é obrigatório, e o [] depois do string significa que o parametro pode receber um array de strings
}

interface IMessageDTO {
  to: IMailTo,
  message: IMailMessage,
}

class EmailService {
  sendMail({to, message}: IMessageDTO) {
    console.log(`Email enviado para ${to.name} : ${message.subject}`);
  }
}

export default EmailService;