//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proekt
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Storehouse.
    /// </summary>
    // *** Start programmer edit section *** (Storehouse CustomAttributes)

    // *** End programmer edit section *** (Storehouse CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    public class Storehouse : ICSSoft.STORMNET.DataObject
    {
        
        private int fNumber = 1;
        
        private string fAddress;
        
        private IIS.Proekt.Employee fEmployee;
        
        private IIS.Proekt.DetailArrayOfStoreProduct fStoreProduct;
        
        // *** Start programmer edit section *** (Storehouse CustomMembers)

        // *** End programmer edit section *** (Storehouse CustomMembers)

        
        /// <summary>
        /// Address.
        /// </summary>
        // *** Start programmer edit section *** (Storehouse.Address CustomAttributes)

        // *** End programmer edit section *** (Storehouse.Address CustomAttributes)
        [StrLen(255)]
        public virtual string Address
        {
            get
            {
                // *** Start programmer edit section *** (Storehouse.Address Get start)

                // *** End programmer edit section *** (Storehouse.Address Get start)
                string result = this.fAddress;
                // *** Start programmer edit section *** (Storehouse.Address Get end)

                // *** End programmer edit section *** (Storehouse.Address Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Storehouse.Address Set start)

                // *** End programmer edit section *** (Storehouse.Address Set start)
                this.fAddress = value;
                // *** Start programmer edit section *** (Storehouse.Address Set end)

                // *** End programmer edit section *** (Storehouse.Address Set end)
            }
        }
        
        /// <summary>
        /// Number.
        /// </summary>
        // *** Start programmer edit section *** (Storehouse.Number CustomAttributes)

        // *** End programmer edit section *** (Storehouse.Number CustomAttributes)
        [NotNull()]
        public virtual int Number
        {
            get
            {
                // *** Start programmer edit section *** (Storehouse.Number Get start)

                // *** End programmer edit section *** (Storehouse.Number Get start)
                int result = this.fNumber;
                // *** Start programmer edit section *** (Storehouse.Number Get end)

                // *** End programmer edit section *** (Storehouse.Number Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Storehouse.Number Set start)

                // *** End programmer edit section *** (Storehouse.Number Set start)
                this.fNumber = value;
                // *** Start programmer edit section *** (Storehouse.Number Set end)

                // *** End programmer edit section *** (Storehouse.Number Set end)
            }
        }
        
        /// <summary>
        /// Storehouse.
        /// </summary>
        // *** Start programmer edit section *** (Storehouse.Employee CustomAttributes)

        // *** End programmer edit section *** (Storehouse.Employee CustomAttributes)
        public virtual IIS.Proekt.Employee Employee
        {
            get
            {
                // *** Start programmer edit section *** (Storehouse.Employee Get start)

                // *** End programmer edit section *** (Storehouse.Employee Get start)
                IIS.Proekt.Employee result = this.fEmployee;
                // *** Start programmer edit section *** (Storehouse.Employee Get end)

                // *** End programmer edit section *** (Storehouse.Employee Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Storehouse.Employee Set start)

                // *** End programmer edit section *** (Storehouse.Employee Set start)
                this.fEmployee = value;
                // *** Start programmer edit section *** (Storehouse.Employee Set end)

                // *** End programmer edit section *** (Storehouse.Employee Set end)
            }
        }
        
        /// <summary>
        /// Storehouse.
        /// </summary>
        // *** Start programmer edit section *** (Storehouse.StoreProduct CustomAttributes)

        // *** End programmer edit section *** (Storehouse.StoreProduct CustomAttributes)
        public virtual IIS.Proekt.DetailArrayOfStoreProduct StoreProduct
        {
            get
            {
                // *** Start programmer edit section *** (Storehouse.StoreProduct Get start)

                // *** End programmer edit section *** (Storehouse.StoreProduct Get start)
                if ((this.fStoreProduct == null))
                {
                    this.fStoreProduct = new IIS.Proekt.DetailArrayOfStoreProduct(this);
                }
                IIS.Proekt.DetailArrayOfStoreProduct result = this.fStoreProduct;
                // *** Start programmer edit section *** (Storehouse.StoreProduct Get end)

                // *** End programmer edit section *** (Storehouse.StoreProduct Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Storehouse.StoreProduct Set start)

                // *** End programmer edit section *** (Storehouse.StoreProduct Set start)
                this.fStoreProduct = value;
                // *** Start programmer edit section *** (Storehouse.StoreProduct Set end)

                // *** End programmer edit section *** (Storehouse.StoreProduct Set end)
            }
        }
    }
}
