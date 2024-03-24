import "./Bookings.scss"
import Booking from "@/assets/images/bookings.svg"

export const Bookings: React.FC = () => {
    return(
        <div className="bookings">
            <div className="bookings__container" style={{ paddingInline: "0px" }}>
                <section className="bookings__loyalty-programme-discounts-section">
                    <div className="bookings__text">
                        Bookings 
                    </div>
                </section>
            </div>

            <div className="bookings__container" style={{ paddingInline: "30px 30px" }}>
                <section className="bookings__icon-container">
                    <div>
                        <img src={Booking} alt="Booking" />
                    </div>
                </section>
            </div>

            <div className="bookings__container" style={{ paddingInline: "30px 30px" }}>
                <section className="bookings__text-container">
                    <div className="text-info">
                        <p className="bookings__text-info">
                        You currently have no active bookings. All your future bookings will be displayed in this section. If you have made a booking and it is not displayed here, please contact our support team for assistance.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}