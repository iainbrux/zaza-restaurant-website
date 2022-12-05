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
            <p>
              Use the Resmio booking system to book in advance. You can book for
              up to six people. If you have a party larger than six, please
              contact us on 01925 657 287 or email us at contact@zazamedbbq.com
            </p>
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
