//testimonials for landingpage
const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, ABC Company",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor leo a sapien consequat, non vestibulum lectus congue.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, XYZ Inc.",
    comment:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 3,
    name: "Dan Smith",
    role: "CTO, XYZ Inc.",
    comment:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  // Add more testimonials as needed
];

function Testimonials() {
  return (
    <section className="testimonials bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Testimonials</h2>
        <div className="row">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">{testimonial.comment}</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <div className="d-flex align-items-center">
                    <div className="avatar">
                      {/* Optionally, you can add an image for the testimonial giver */}
                    </div>
                    <div className="ml-3">
                      <h5 className="mb-0">{testimonial.name}</h5>
                      <p className="small text-muted mb-0">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
