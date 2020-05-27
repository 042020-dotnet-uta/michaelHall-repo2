using System;
using System.Collections.Generic;
using System.ServiceModel;

namespace FridgeService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in both code and config file together.
    public class Fridge : IFridge
    {
        Dictionary<string, int> myFridge = new Dictionary<string, int>();

        public void AddFood(int quantity, string food)
        {
            Console.WriteLine("AddFood Works");
        }

        public void EmptyFridge()
        {
            Console.WriteLine("EmptyFridge Works");
        }

        public Dictionary<string, int> Food()
        {
            Console.WriteLine("Food Works");
            return myFridge;
        }

        public void SubtractFood(int quantity, string food)
        {
            Console.WriteLine("SubtractFood Works");
        }
    }
}
