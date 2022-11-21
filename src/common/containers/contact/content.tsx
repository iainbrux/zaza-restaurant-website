import { useForm } from "react-hook-form";
const onSubmit = (values: any) => {
  console.log(values, "submitted");
};

export const Content = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <main
      className="container mx-auto flex flex-col pt-3 md:flex-row"
      data-testid="contact-main-region"
    >
      <section
        className="px-3 my-3 w-full lg:w-1/2 lg:my-0"
        data-testid="contact-section-1"
      >
        Section 1
      </section>
      <section
        className="px-3 my-3 w-full lg:w-1/2 lg:my-0 flex flex-col align-center"
        data-testid="contact-section-1"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-3">
            <label htmlFor="contact-form-name">Name</label>
            <input
              className="mt-2 p-1.5 border rounded bg-gray-50 focus:outline-none"
              id="contact-form-name"
              placeholder="John Smith"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="contact-form-email">Email</label>
            <input
              className="mt-2 p-1.5 border rounded bg-gray-50 focus:outline-none"
              id="contact-form-email"
              placeholder="JohnSmith@mymail.com"
              type="text"
              {...register("email", {
                pattern: /^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,4}$/i,
                required: true,
              })}
            />
            {errors.email && <span className="">Invalid email</span>}
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="contact-form-subject">Subject</label>
            <input
              className="mt-2 p-1.5 border rounded bg-gray-50 focus:outline-none"
              id="contact-form-subject"
              placeholder="Subject"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="contact-form-message">Message</label>
            <textarea
              className="mt-2 p-1.5 max-h-[300px] min-h-[150px] border rounded bg-gray-50 focus:outline-none"
              id="contact-form-message"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="mt-[30px] flex flex-row justify-center">
            <button className="border px-2 py-1 rounded hover:bg-orange-200">
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};
