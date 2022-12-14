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
    /// Order.
    /// </summary>
    // *** Start programmer edit section *** (Order CustomAttributes)

    // *** End programmer edit section *** (Order CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    public class Order : IIS.Proekt.Document
    {
        
        private IIS.Proekt.OrderStatus fStatus = IIS.Proekt.OrderStatus.New;
        
        private System.DateTime? fShipmentDate;
        
        private System.DateTime? fPaymentDate;
        
        private IIS.Proekt.Employee fEmployee;
        
        private IIS.Proekt.DetailArrayOfOrderItem fOrderItem;
        
        // *** Start programmer edit section *** (Order CustomMembers)

        // *** End programmer edit section *** (Order CustomMembers)

        
        /// <summary>
        /// PaymentDate.
        /// </summary>
        // *** Start programmer edit section *** (Order.PaymentDate CustomAttributes)

        // *** End programmer edit section *** (Order.PaymentDate CustomAttributes)
        public virtual System.DateTime? PaymentDate
        {
            get
            {
                // *** Start programmer edit section *** (Order.PaymentDate Get start)

                // *** End programmer edit section *** (Order.PaymentDate Get start)
                System.DateTime? result = this.fPaymentDate;
                // *** Start programmer edit section *** (Order.PaymentDate Get end)

                // *** End programmer edit section *** (Order.PaymentDate Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Order.PaymentDate Set start)

                // *** End programmer edit section *** (Order.PaymentDate Set start)
                this.fPaymentDate = value;
                // *** Start programmer edit section *** (Order.PaymentDate Set end)

                // *** End programmer edit section *** (Order.PaymentDate Set end)
            }
        }
        
        /// <summary>
        /// ShipmentDate.
        /// </summary>
        // *** Start programmer edit section *** (Order.ShipmentDate CustomAttributes)

        // *** End programmer edit section *** (Order.ShipmentDate CustomAttributes)
        public virtual System.DateTime? ShipmentDate
        {
            get
            {
                // *** Start programmer edit section *** (Order.ShipmentDate Get start)

                // *** End programmer edit section *** (Order.ShipmentDate Get start)
                System.DateTime? result = this.fShipmentDate;
                // *** Start programmer edit section *** (Order.ShipmentDate Get end)

                // *** End programmer edit section *** (Order.ShipmentDate Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Order.ShipmentDate Set start)

                // *** End programmer edit section *** (Order.ShipmentDate Set start)
                this.fShipmentDate = value;
                // *** Start programmer edit section *** (Order.ShipmentDate Set end)

                // *** End programmer edit section *** (Order.ShipmentDate Set end)
            }
        }
        
        /// <summary>
        /// Status.
        /// </summary>
        // *** Start programmer edit section *** (Order.Status CustomAttributes)

        // *** End programmer edit section *** (Order.Status CustomAttributes)
        public virtual IIS.Proekt.OrderStatus Status
        {
            get
            {
                // *** Start programmer edit section *** (Order.Status Get start)

                // *** End programmer edit section *** (Order.Status Get start)
                IIS.Proekt.OrderStatus result = this.fStatus;
                // *** Start programmer edit section *** (Order.Status Get end)

                // *** End programmer edit section *** (Order.Status Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Order.Status Set start)

                // *** End programmer edit section *** (Order.Status Set start)
                this.fStatus = value;
                // *** Start programmer edit section *** (Order.Status Set end)

                // *** End programmer edit section *** (Order.Status Set end)
            }
        }
        
        /// <summary>
        /// TotalSum.
        /// </summary>
        // *** Start programmer edit section *** (Order.TotalSum CustomAttributes)

        // *** End programmer edit section *** (Order.TotalSum CustomAttributes)
        [ICSSoft.STORMNET.NotStored()]
        public virtual double TotalSum
        {
            get
            {
                // *** Start programmer edit section *** (Order.TotalSum Get)

                return 0;
                // *** End programmer edit section *** (Order.TotalSum Get)
            }
            set
            {
                // *** Start programmer edit section *** (Order.TotalSum Set)

                // *** End programmer edit section *** (Order.TotalSum Set)
            }
        }
        
        /// <summary>
        /// Order.
        /// </summary>
        // *** Start programmer edit section *** (Order.Employee CustomAttributes)

        // *** End programmer edit section *** (Order.Employee CustomAttributes)
        public virtual IIS.Proekt.Employee Employee
        {
            get
            {
                // *** Start programmer edit section *** (Order.Employee Get start)

                // *** End programmer edit section *** (Order.Employee Get start)
                IIS.Proekt.Employee result = this.fEmployee;
                // *** Start programmer edit section *** (Order.Employee Get end)

                // *** End programmer edit section *** (Order.Employee Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Order.Employee Set start)

                // *** End programmer edit section *** (Order.Employee Set start)
                this.fEmployee = value;
                // *** Start programmer edit section *** (Order.Employee Set end)

                // *** End programmer edit section *** (Order.Employee Set end)
            }
        }
        
        /// <summary>
        /// Order.
        /// </summary>
        // *** Start programmer edit section *** (Order.OrderItem CustomAttributes)

        // *** End programmer edit section *** (Order.OrderItem CustomAttributes)
        public virtual IIS.Proekt.DetailArrayOfOrderItem OrderItem
        {
            get
            {
                // *** Start programmer edit section *** (Order.OrderItem Get start)

                // *** End programmer edit section *** (Order.OrderItem Get start)
                if ((this.fOrderItem == null))
                {
                    this.fOrderItem = new IIS.Proekt.DetailArrayOfOrderItem(this);
                }
                IIS.Proekt.DetailArrayOfOrderItem result = this.fOrderItem;
                // *** Start programmer edit section *** (Order.OrderItem Get end)

                // *** End programmer edit section *** (Order.OrderItem Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Order.OrderItem Set start)

                // *** End programmer edit section *** (Order.OrderItem Set start)
                this.fOrderItem = value;
                // *** Start programmer edit section *** (Order.OrderItem Set end)

                // *** End programmer edit section *** (Order.OrderItem Set end)
            }
        }
        
        // *** Start programmer edit section *** (Order.Cancel CustomAttributes)

        // *** End programmer edit section *** (Order.Cancel CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Cancel()
        {
            // *** Start programmer edit section *** (Order.Cancel method implementation)

            return;
            // *** End programmer edit section *** (Order.Cancel method implementation)
        }
    }
}
