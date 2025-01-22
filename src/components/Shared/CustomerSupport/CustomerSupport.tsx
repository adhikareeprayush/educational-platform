import Heading1 from "../../Reusable/Heading1/Heading1";
import Ripple from "../../Reusable/Ripple/Ripple";
import Container from "../Container/Container";

const CustomerSupport = () => {
    return (
        <div className="bg-secondary-10 py-[96px] font-Inter">
            <Container>
                <div className="flex flex-col gap-7">
                    <div>
                        <Heading1 classNames="text-primary-10 font-bold">PM Gurukul Customer Support</Heading1>
                        <div className='rounded-3xl bg-secondary-25 border border-secondary-30 px-3 md:px-4 py-[10px] md:py-3 text-primary-10 font-medium leading-6 text-center w-fit mt-4 text-sm md:text-base'>(Available Monday to Saturday, 9:15 AM to 5:00 PM)</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="tel:+918800383344" target="_blank" rel="noreferrer">
                            <Ripple styles="rounded-[14px]">
                                <button className="px-7 py-[14px] border border-primary-10 rounded-[14px] text-primary-10 font-semibold text-xl leading-6">Toll Free</button>
                            </Ripple>
                        </a>
                        <a href="whatsapp://send?phone=+918800383344" target="_blank" rel="noreferrer">
                            <Ripple styles="rounded-xl">
                                <button className="px-7 py-[14px] border border-primary-10 rounded-[14px] bg-primary-10 text-white font-semibold text-xl leading-6">Whatsapp</button>
                            </Ripple>
                        </a>
                    </div>
                    <p className="text-primary-10/70 leading-6 max-w-[695px]">Disclaimer: PM Gurukul is not responsible for payments made outside our official website or authorized affiliate links.</p>
                </div>
            </Container>
        </div>
    );
};

export default CustomerSupport;