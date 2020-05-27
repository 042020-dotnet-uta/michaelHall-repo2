using System;
using System.ServiceModel;
using System.ServiceModel.Description;
using FridgeService;

namespace FridgeService
{
    class Program
    {
        static void Main(string[] args)
        {
            Uri baseAddress = new Uri("http://localhost:8000/FridgeService");

            ServiceHost selfHost = new ServiceHost(typeof(Fridge), baseAddress);

            try
            {
                selfHost.AddServiceEndpoint(typeof(IFridge), new WSHttpBinding(), "FridgeService");

                ServiceMetadataBehavior smb = new ServiceMetadataBehavior();
                smb.HttpGetEnabled = true;
                selfHost.Description.Behaviors.Add(smb);

                selfHost.Open();
                Console.WriteLine("THe Fridge service is ready.");

                Console.WriteLine("Please <Enter> to terminate the service");
                Console.WriteLine();
                Console.ReadLine();
            }
            catch (CommunicationException ce)
            {
                Console.WriteLine("An exception occurred: {0}", ce);
                selfHost.Abort();
            }
        }
    }
}