import "./Saved.scss"
import Save from "@/assets/images/saved.svg"

export const Saved: React.FC = () => {
    return (
        <div className="saved">
            <div className="saved__container" style={{ paddingInline: "0px" }}>
                <section className="saved__loyalty-programme-discounts-section">
                    <div className="saved__text">
                        Saved 
                    </div>
                </section>
            </div>

            <div className="saved__container" style={{ paddingInline: "30px 30px" }}>
                <section className="saved__icon-container">
                    <div>
                        <img src={Save} alt="Save" />
                    </div>
                </section>
            </div>

            <div className="saved__container" style={{ paddingInline: "30px 30px" }}>
                <section className="saved__text-container">
                    <div className="text-info">
                        <p className="saved__text-info">
                            You do not have any saved properties at this time. When you find an accommodation you like, you can save it to easily come back to it later. All your saved properties will be displayed in this section.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}