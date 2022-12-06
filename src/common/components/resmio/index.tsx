import { useEffect } from "react";
import { SmallDivider } from "../dividers/small-divider";

export const ResmioForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//static.resmio.com/static/en-gb/widget.js#height=700&width=500&fontSize=16px&backgroundColor=%23ffffff&color=%23555555&linkBackgroundColor=%23f5a623&facebookLogin=false&newsletterSignup=false&commentsDisabled=false&id=zaza-mediterannean-bbq-2";
    script.async = true;
    document.body.append(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <main className=" w-screen h-screen">
      <div className="container mx-auto flex flex-col pt-3 md:flex-row justify-center mb-20 mt-10">
        <header>
          <h1 className="text-center text-5xl mb-4 uppercase">Reservations</h1>
          <SmallDivider
            color="black"
            dataTestId="contact-section-small-divider"
          ></SmallDivider>
        </header>
      </div>
      <div
        className="container mx-auto flex flex-col pt-3 md:flex-row"
        data-testid="contact-main-region"
      >
        <section
          className="px-3 my-3 w-full lg:w-1/2 lg:my-0 flex flex-col"
          data-testid="contact-section-1"
        >
          <div className="flex justify-center">
            <div className="flex flex-col text-xl w-[500px]">
              <p>
                Use the Resmio booking system to reserve a table upto 90 days in
                advance.
              </p>
              <p className="mt-4 mb-4">
                You can book a table for a maximum of 6 people. If you are
                looking to book for a party larger than 6, please contact us
                using the form on the contact page, or calling us on 01925 657
                287
              </p>
              <p>
                Pad this out with images? What other things could go here to
                stop it looking so dull and boring
              </p>
            </div>
          </div>
        </section>
        <section
          className="px-3 my-3 w-full lg:w-1/2 lg:my-0 flex flex-col"
          data-testid="contact-section-1"
        >
          <div
            className="flex justify-center"
            id="resmio-zaza-mediterannean-bbq-2"
          ></div>
        </section>
      </div>
    </main>
  );
};
