import { io } from "../http";

io.on("connect", socket => {
  //envio das mensagens - emit -envia informacoes pra algum cliente
  //io.emit envia msg global para todos os usuarios
  //socket.emit envia pra determinados usuarios
  socket.emit("chat_iniciado", { //evento customizavel - nome
    message: "Seu chat foi iniciado",
  });
});