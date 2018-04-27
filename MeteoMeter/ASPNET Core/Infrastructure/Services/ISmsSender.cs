
using System.Threading.Tasks;

namespace MeteoMeter.Backend.Infrastructure.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}

