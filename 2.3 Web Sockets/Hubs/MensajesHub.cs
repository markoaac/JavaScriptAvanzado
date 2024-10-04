using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace _2._3_Web_Sockets.Hubs
{
    public class MensajesHub : Hub
    {
        public async Task EnviarMensaje(string msj){
            await Clients.All.SendAsync("EnviarMensajeTodos",msj);
        }
    }
}