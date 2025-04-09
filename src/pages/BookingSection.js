import BookingForm from "../components/BookingForm";
import "./BookingSection.css";
import ChauffeurImg from "../assets/chauffeur.jpg";

const BookingSection = () => {
  return (
    <section className="pt-0 pt-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 ms-auto position-relative">
            <img
              src={ChauffeurImg}
              alt="chauffeur"
              className="rounded-3"
            />
            <div className="col-11 col-sm-10 col-lg-8 col-xl-6 position-lg-middle ms-lg-8 ms-xl-7">
              <div className="card shadow pb-0 mt-n7 mt-sm-n8 mt-lg-0">
                <div className="card-header border-bottom p-3 p-sm-4">
                  <h5 className="card-title mb-0">Book Your Towncar Online </h5>
                </div>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
